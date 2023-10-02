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
const openapi_fetch_1 = __importDefault(require("openapi-fetch"));
const endpoints = __importStar(require("./endpoints"));
var URLs;
(function (URLs) {
    URLs["production"] = "https://api.boekuwzending.com";
    URLs["staging"] = "https://staging.api.boekuwzending.com";
})(URLs || (URLs = {}));
class BoekUwZendingClient {
    constructor(config) {
        // Private properties
        this.baseClient = (0, openapi_fetch_1.default)();
        this.baseURL = config.mode === "staging" ? URLs.staging : URLs.production;
        this.initializeEndpoints();
    }
    initializeEndpoints() {
        this.me = new endpoints.Me(this.httpClient);
        this.externalOrders = new endpoints.ExternalOrder(this.httpClient);
        this.transport = new endpoints.Transport(this.httpClient);
        this.user = new endpoints.User(this.httpClient);
        this.addressBook = new endpoints.AddressBook(this.httpClient);
        this.adminUser = new endpoints.AdminUser(this.httpClient);
        this.bulkShipment = new endpoints.BulkShipment(this.httpClient);
        this.buzzie = new endpoints.Buzzie(this.httpClient);
        this.conversation = new endpoints.Conversation(this.httpClient);
        this.country = new endpoints.Country(this.httpClient);
        this.distributor = new endpoints.Distributor(this.httpClient);
        this.integration = new endpoints.Integration(this.httpClient);
        this.label = new endpoints.Label(this.httpClient);
        this.matrix = new endpoints.Matrix(this.httpClient);
        this.message = new endpoints.Message(this.httpClient);
        this.pickupRequest = new endpoints.PickupRequest(this.httpClient);
        this.rateRequest = new endpoints.RateRequest(this.httpClient);
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
