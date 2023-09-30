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
const CLIENT_ID = process.env.CLIENT_ID || "";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield src_1.default.create({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET
        });
        try {
            // const { data, error: _ } = await client.externalOrders.get({
            //   _items_per_page: 10,
            //   _page: 1
            // })
            // console.log(`The ID of the first order is: ${data![0].id}`)
            // const { data: order, error: __ } = await client.externalOrders.getById(
            //   data![0]!.id!
            // )
            // console.log("The first order is:", order)
            const { data, error: ___ } = yield client.addressBook.get({});
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
