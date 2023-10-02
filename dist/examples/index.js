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
const src_1 = __importDefault(require("../src"));
const config = {
    clientId: process.env.CLIENT_ID || "",
    clientSecret: process.env.CLIENT_SECRET || "",
    mode: "staging"
};
/**
 * This example shows how to get authenticated user information.
 */
function getMe() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield src_1.default.create(config);
        try {
            const { data, error: _ } = yield client.endpoints.me.get();
            return data;
            /**
             * {
             *  name: "John Doe",                       // Customer name
             *  number: "123456",                       // Customer number
             *  id: "[UUID]",                           // Customer UUID
             *  conversation: "/conversations/[UUID]"   // Conversation URL
             * }
             *
             * The conversation URL can be used to retrieve the conversation history.
             * See the example below.
             */
        }
        catch (error) {
            throw error;
        }
    });
}
/**
 * This example shows how to get the conversation history of the authenticated user.
 */
function getConversation() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield src_1.default.create(config);
        const { data: me, error: _ } = yield client.endpoints.me.get();
        if (!(me === null || me === void 0 ? void 0 : me.conversation)) {
            throw new Error("Conversation path not found");
        }
        try {
            const { data, error: _ } = yield client.endpoints.conversation.getById(me.conversation.split("/").pop());
            return data;
            /**
             * {
             *   shipment: null,
             *   shipmentQuotation: null,
             *   id: "[UUID]",
             *   createdAt: "[ISO 8601 date string]",
             *   updatedAt: "[ISO 8601 date string]",
             *   subject: 'Relatie John Doe',
             *   subjectType: 'relation',
             *   unreadMessages: 0,
             *   lastMessageUpdatedAt: '[ISO 8601 date string]',
             *   excerpt: "Hi John, ...",
             * }
             */
        }
        catch (error) {
            throw error;
        }
    });
}
