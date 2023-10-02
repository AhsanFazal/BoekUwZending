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
exports.Tasks = void 0;
const Base_1 = require("../../Base");
class Tasks extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.activities = {
            get: (query) => this.httpClient.GET("/transport/task_activities", {
                params: { query }
            }),
            getById: (id) => this.httpClient.GET(`/transport/task_activities/{id}`, {
                params: { path: { id } }
            })
        };
        this.labels = {
            get: (query) => this.httpClient.GET("/transport/task_labels", {
                params: { query }
            }),
            getById: (id) => this.httpClient.GET(`/transport/task_labels/{id}`, {
                params: { path: { id } }
            }),
            updateById: (id, body) => this.httpClient.PUT(`/transport/task_labels/{id}`, {
                params: { path: { id } },
                body
            })
        };
        this.pickups = {
            get: (query) => this.httpClient.GET("/transport/task_pickups", {
                params: { query }
            }),
            getById: (id) => this.httpClient.GET(`/transport/task_pickups/{id}`, {
                params: { path: { id } }
            }),
            updateById: (id, body) => this.httpClient.PUT(`/transport/task_pickups/{id}`, {
                params: { path: { id } },
                body
            })
        };
    }
    get(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET("/transport/tasks", { params: { query } });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.GET(`/transport/tasks/{id}`, {
                params: { path: { id } }
            });
        });
    }
    updateById(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.PUT(`/transport/tasks/{id}`, {
                params: { path: { id } },
                body
            });
        });
    }
}
exports.Tasks = Tasks;
