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
exports.Pickups = void 0;
const Base_1 = require("../../Base");
class Pickups extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.excluded = {
            get: (query) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.GET("/transport/excluded_pickups", {
                    params: { query }
                });
            }),
            getById: (id) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.GET(`/transport/excluded_pickups/{id}`, {
                    params: { path: { id } }
                });
            }),
            create: (body) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.POST("/transport/excluded_pickups", { body });
            }),
            updateById: (id, body) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.PATCH(`/transport/excluded_pickups/{id}`, {
                    params: { path: { id } },
                    body
                });
            }),
            replaceById: (id, body) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.PUT(`/transport/excluded_pickups/{id}`, {
                    params: { path: { id } },
                    body
                });
            })
        };
        this.requests = {
            get: (query) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.GET("/transport/pickup_requests", {
                    params: { query }
                });
            }),
            getById: (id) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.GET(`/transport/pickup_requests/{id}`, {
                    params: { path: { id } }
                });
            }),
            create: (body) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.POST("/transport/pickup_requests", { body });
            }),
            updateById: (id, body) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.PATCH(`/transport/pickup_requests/{id}`, {
                    params: { path: { id } },
                    body
                });
            }),
            deleteById: (id) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.DELETE(`/transport/pickup_requests/{id}`, {
                    params: { path: { id } }
                });
            }),
            replaceById: (id, body) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.PUT(`/transport/pickup_requests/{id}`, {
                    params: { path: { id } },
                    body
                });
            })
        };
        this.schedules = {
            get: (query) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.GET("/transport/pickup_schedules", {
                    params: { query }
                });
            }),
            getById: (id) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.GET(`/transport/pickup_schedules/{id}`, {
                    params: { path: { id } }
                });
            }),
            create: (body) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.POST("/transport/pickup_schedules", { body });
            }),
            updateById: (id, body) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.PATCH(`/transport/pickup_schedules/{id}`, {
                    params: { path: { id } },
                    body
                });
            }),
            replaceById: (id, body) => __awaiter(this, void 0, void 0, function* () {
                return this.httpClient.PUT(`/transport/pickup_schedules/{id}`, {
                    params: { path: { id } },
                    body
                });
            })
        };
    }
    get(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET("/transport/pickups", { params: { query } });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET(`/transport/pickups/{id}`, {
                params: { path: { id } }
            });
        });
    }
}
exports.Pickups = Pickups;
