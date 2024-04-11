"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = __importDefault(require("./user.route"));
const home_route_1 = __importDefault(require("./home.route"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).json({
        message: '🍕 Api route VERSION 1 🍕',
    });
});
router.use('/user', user_route_1.default);
router.use('/home', home_route_1.default);
exports.default = router;
//# sourceMappingURL=v1.route.js.map