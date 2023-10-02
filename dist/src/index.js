"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stagingURL = exports.productionURL = exports.URLs = void 0;
const openapi_fetch_1 = __importDefault(require("openapi-fetch"));
const endpoints = __importStar(require("./endpoints"));
var URLs;
(function (URLs) {
    URLs["production"] = "https://api.boekuwzending.com";
    URLs["staging"] = "https://staging.api.boekuwzending.com";
})(URLs || (exports.URLs = URLs = {}));
exports.productionURL = URLs.production;
exports.stagingURL = URLs.staging;
class BoekUwZendingClient {
    constructor(config) {
        // Private properties
        this.baseClient = (0, openapi_fetch_1.default)();
        this.endpoints = {};
        this.baseURL = config.mode === "production" ? exports.productionURL : exports.stagingURL;
        this.initializeEndpoints();
    }
    initializeEndpoints() {
        for (const key in endpoints) {
            if (Object.prototype.hasOwnProperty.call(endpoints, key)) {
                const endpointKey = key;
                const lowerCaseKey = (endpointKey.charAt(0).toLowerCase() +
                    endpointKey.slice(1));
                this.endpoints[lowerCaseKey] = new endpoints[endpointKey](this.httpClient);
            }
        }
        // Restore type safety by asserting back to EndpointInstances
        this.endpoints = this.endpoints;
    }
    static create(config) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new BoekUwZendingClient(config);
            yield client.authorize(config);
            return client;
        });
    }
    get httpClient() {
        return new Proxy(this.baseClient, {
            get: (_, key) => {
                const newClient = (0, openapi_fetch_1.default)({
                    headers: this.accessToken
                        ? { Authorization: `Bearer ${this.accessToken}` }
                        : {},
                    baseUrl: this.baseURL
                });
                return newClient[key];
            }
        });
    }
    authorize(config) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                client_id: config.clientId,
                client_secret: config.clientSecret,
                grant_type: "client_credentials",
                scopes: ((_a = config.authorizationScopes) === null || _a === void 0 ? void 0 : _a.join(" ")) || ""
            };
            try {
                const response = yield fetch(`${this.baseURL}/token`, {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(data)
                });
                const json = yield response.json();
                if (!response.ok) {
                    if (json.error)
                        throw new Error(`OAuth Error: ${json.error}, ${json.error_description}`);
                    throw new Error(`OAuth Error: ${response.status}, ${response.statusText}`);
                }
                if (!json.access_token ||
                    !json.expires_in ||
                    json.token_type !== "Bearer") {
                    throw new Error(`Invalid response: ${JSON.stringify(json)}`);
                }
                this.accessToken = json.access_token;
            }
            catch (error) {
                console.error("Authorization failed:", error.message);
                throw new Error(error); // Propagate error up the stack
            }
        });
    }
}
exports.default = BoekUwZendingClient;
