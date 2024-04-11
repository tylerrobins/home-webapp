"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const redis_1 = require("redis");
const api_1 = __importDefault(require("./api"));
const errors_middleware_1 = require("./middleware/errors.middleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Initialize client.
const redisClient = (0, redis_1.createClient)();
redisClient.connect().catch(console.error);
// // Initialize store.
let redisStore = new connect_redis_1.default({
    client: redisClient,
    prefix: "homewebapp:",
});
// // Initialize session storage.
app.use((0, express_session_1.default)({
    name: 'haid',
    store: redisStore,
    resave: false, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    secret: "keyboard cat",
}));
const frontendPath = path_1.default.resolve(__dirname, '..', 'frontend');
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', api_1.default);
console.log('Environment', process.env.NODE_ENV);
if (process.env.NODE_ENV == 'production') {
    app.use(express_1.default.static(frontendPath));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(frontendPath, 'index.html'));
    });
}
app.get('/', (req, res) => {
    res.status(200).json({
        message: '📦 Svelte Express Boilerplate 📦',
    });
});
app.use(errors_middleware_1.notFound);
app.use(errors_middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map