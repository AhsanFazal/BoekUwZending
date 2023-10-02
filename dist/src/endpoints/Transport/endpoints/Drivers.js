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
exports.Drivers = void 0;
const Base_1 = require("../../Base");
class Drivers extends Base_1.BaseEndpoint {
    get(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET("/transport/drivers", { params: { query } });
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.POST("/transport/drivers", { body });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET(`/transport/drivers/{id}`, {
                params: { path: { id } }
            });
        });
    }
    updateById(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.PATCH(`/transport/drivers/{id}`, {
                params: { path: { id } },
                body
            });
        });
    }
    replaceById(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.PUT(`/transport/drivers/{id}`, {
                params: { path: { id } },
                body
            });
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.DELETE(`/transport/drivers/{id}`, {
                params: { path: { id } }
            });
        });
    }
}
exports.Drivers = Drivers;
