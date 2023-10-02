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
exports.Matrix = void 0;
const Base_1 = require("./Base");
class Matrix extends Base_1.BaseEndpoint {
    getMatrices(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET("/matrices", { params: { query } });
        });
    }
    getMatricesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET(`/matrices/{id}`, {
                params: { path: { id } }
            });
        });
    }
    getMatrixGroups(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET("/matrix_groups", { params: { query } });
        });
    }
    getMatrixGroupsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET(`/matrix_groups/{id}`, {
                params: { path: { id } }
            });
        });
    }
    getMatrixPostcodes(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET("/matrix_postcodes", { params: { query } });
        });
    }
    getMatrixPostcodesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET(`/matrix_postcodes/{id}`, {
                params: { path: { id } }
            });
        });
    }
    getMatrixRates(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET("/matrix_rates", { params: { query } });
        });
    }
    getMatrixRatesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET(`/matrix_rates/{id}`, {
                params: { path: { id } }
            });
        });
    }
}
exports.Matrix = Matrix;
