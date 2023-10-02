"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_fetch_mock_1 = __importDefault(require("vitest-fetch-mock"));
const vitest_1 = require("vitest");
const fetchMocker = (0, vitest_fetch_mock_1.default)(vitest_1.vi);
fetchMocker.enableMocks();
