"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = require("express");
const data_source_config_1 = require("../../data-source.config");
const user_entity_1 = __importDefault(require("../../entity/user.entity"));
const argon2 = __importStar(require("argon2"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return res.status(200).json({
        message: '🍕 USER 🍕',
    });
});
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const username = (_a = req.body.username) === null || _a === void 0 ? void 0 : _a.toString();
    const email = (_b = req.body.email) === null || _b === void 0 ? void 0 : _b.toString();
    const password = yield argon2.hash((_c = req.body.password) === null || _c === void 0 ? void 0 : _c.toString());
    const userRepository = data_source_config_1.AppDataSource.getRepository(user_entity_1.default);
    const user = userRepository.create({
        username: username,
        email: email,
        password: password,
    });
    yield userRepository.save(user);
    console.log('change');
    return res.json({ 'user created': user });
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e;
    console.log('Login Request');
    const email = (_d = req.body.email) === null || _d === void 0 ? void 0 : _d.toString();
    const password = (_e = req.body.password) === null || _e === void 0 ? void 0 : _e.toString();
    if (!email || !password) {
        return res.status(400).json({ Error: 'Email and password are required' });
    }
    const userRepository = data_source_config_1.AppDataSource.getRepository(user_entity_1.default);
    try {
        const user = yield userRepository.findOneByOrFail({ email: email });
        if (yield argon2.verify(user.password, password)) {
            req.session.userId = user.id;
            return res.json({ Login: 'Successful' });
        }
        else {
            return res.json({ Failed: 'Password did not match' });
        }
    }
    catch (err) {
        console.log(err);
    }
    return res.json({ Failed: true });
}));
exports.default = router;
//# sourceMappingURL=user.route.js.map