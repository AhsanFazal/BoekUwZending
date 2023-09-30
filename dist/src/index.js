"use strict";
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
const openapi_fetch_1 = __importDefault(require("openapi-fetch"));
const endpoints_1 = require("./endpoints");
var URLs;
(function (URLs) {
    URLs["production"] = "https://api.boekuwzending.com";
    URLs["staging"] = "https://staging.api.boekuwzending.com";
})(URLs || (URLs = {}));
class BoekUwZendingClient {
    constructor(config) {
        this.baseURL = config.mode === "staging" ? URLs.staging : URLs.production;
        this.baseClient = (0, openapi_fetch_1.default)();
    }
    static create(config) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new BoekUwZendingClient(config);
            yield client.authorize(config);
            client.registerEndpoints();
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
    registerEndpoints() {
        this.me = new endpoints_1.MeEndpoint(this.httpClient);
        this.externalOrders = new endpoints_1.ExternalOrderEndpoint(this.httpClient);
        this.transport = new endpoints_1.TransportEndpoint(this.httpClient);
        this.user = new endpoints_1.UserEndpoint(this.httpClient);
    }
    authorize(config) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const method = "POST";
            const url = "/token";
            const data = {
                client_id: config.clientId,
                client_secret: config.clientSecret,
                grant_type: "client_credentials",
                scopes: ((_a = config.authorizationScopes) === null || _a === void 0 ? void 0 : _a.join(" ")) || ""
            };
            const headers = { "Content-Type": "application/x-www-form-urlencoded" };
            try {
                const response = yield fetch(`${this.baseURL}${url}`, {
                    method,
                    headers,
                    body: new URLSearchParams(data)
                });
                if (!response.ok)
                    throw new Error("Authorization failed");
                const json = yield response.json();
                if (!json.access_token || !json.expires_in)
                    throw new Error("Authorization failed");
                this.accessToken = json.access_token;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.default = BoekUwZendingClient;
