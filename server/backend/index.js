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
const data_source_config_1 = require("./data-source.config");
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 8000;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield data_source_config_1.AppDataSource.initialize()
        .then(() => {
        console.log('CONNECTED TO DB');
    })
        .catch((err) => {
        console.log('DB ERROR', err);
    });
    app_1.default.listen(port, () => {
        console.log(`Server is up at port http://localhost:${port}`);
    });
});
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map