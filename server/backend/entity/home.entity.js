"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = __importDefault(require("./user.entity"));
const meal_entity_1 = __importDefault(require("./meal.entity"));
const ingredient_entity_1 = __importDefault(require("./ingredient.entity"));
let Home = class Home {
    updateCreatedAt() {
        this.createdAt = new Date();
    }
    ;
    updateUpdatedAt() {
        this.updatedAt = new Date();
    }
    ;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Home.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Home.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Home.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Home.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.default, (user) => user.home),
    __metadata("design:type", Array)
], Home.prototype, "members", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => meal_entity_1.default, (meal) => meal.home),
    __metadata("design:type", Array)
], Home.prototype, "meals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ingredient_entity_1.default, (ingredient) => ingredient.home),
    __metadata("design:type", Array)
], Home.prototype, "ingredients", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Home.prototype, "updateCreatedAt", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Home.prototype, "updateUpdatedAt", null);
Home = __decorate([
    (0, typeorm_1.Entity)()
], Home);
exports.default = Home;
;
//# sourceMappingURL=home.entity.js.map