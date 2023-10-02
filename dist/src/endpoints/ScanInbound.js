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
exports.ScanInbound = void 0;
const Base_1 = require("./Base");
class ScanInbound extends Base_1.BaseEndpoint {
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.POST("/scan_inbounds", { body });
        });
    }
    getByUUID(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET(`/scan_inbounds/{uuid}`, {
                params: { path: { uuid } }
            });
        });
    }
}
exports.ScanInbound = ScanInbound;
