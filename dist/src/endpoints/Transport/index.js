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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const Base_1 = require("../Base");
const endpoints = __importStar(require("./endpoints"));
class Transport extends Base_1.BaseEndpoint {
    constructor(httpClient) {
        super(httpClient);
        this.depots = new endpoints.Depots(httpClient);
        this.drivers = new endpoints.Drivers(httpClient);
        this.pickups = new endpoints.Pickups(httpClient);
        this.positions = new endpoints.Positions(httpClient);
        this.postcodes = new endpoints.Postcodes(httpClient);
        this.regions = new endpoints.Regions(httpClient);
        this.routes = new endpoints.Routes(httpClient);
        this.statuses = new endpoints.Statuses(httpClient);
        this.steps = new endpoints.Steps(httpClient);
        this.tasks = new endpoints.Tasks(httpClient);
        this.unassigned = new endpoints.Unassigned(httpClient);
        this.vehicles = new endpoints.Vehicles(httpClient);
        this.warehouse = new endpoints.Warehouse(httpClient);
    }
}
exports.Transport = Transport;
