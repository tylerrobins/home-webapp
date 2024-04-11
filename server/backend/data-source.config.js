"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'tylerrobins',
    password: 'tylerrobins',
    database: 'homeapp',
    synchronize: true, // This will auto create schema, should be false in production
    logging: false,
    migrations: [path_1.default.join(__dirname, "./migrations/*")],
    entities: [path_1.default.join(__dirname, '/entity/**/*.entity.{ts,js}')],
});
//# sourceMappingURL=data-source.config.js.map