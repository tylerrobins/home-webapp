"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_source_config_1 = require("../../data-source.config");
const home_entity_1 = __importDefault(require("../../entity/home.entity"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return res.status(200).json({
        message: '🍕 HOME 🍕',
    });
});
router.post('/create', (req, res) => {
    const homeRepository = data_source_config_1.AppDataSource.getRepository(home_entity_1.default);
    const home = homeRepository.create({});
});
exports.default = router;
//# sourceMappingURL=home.route.js.map