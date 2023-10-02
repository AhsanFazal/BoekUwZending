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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const Base_1 = require("../../Base");
class Routes extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.collections = {
            get: (query) => this.httpClient.GET("/transport/route_collections", {
                params: { query }
            }),
            getById: (id) => this.httpClient.GET(`/transport/route_collections/{id}`, {
                params: { path: { id } }
            }),
            create: (body) => this.httpClient.POST("/transport/route_collections", { body }),
            updateById: (id, body) => this.httpClient.PUT(`/transport/route_collections/{id}`, {
                params: { path: { id } },
                body
            })
        };
    }
    get(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET("/transport/routes", { params: { query } });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET(`/transport/routes/{id}`, {
                params: { path: { id } }
            });
        });
    }
    updateById(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.PUT(`/transport/routes/{id}`, {
                params: { path: { id } },
                body
            });
        });
    }
    getStepsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET(`/transport/routes/{id}/steps`, {
                params: { path: { id } }
            });
        });
    }
}
exports.Routes = Routes;
