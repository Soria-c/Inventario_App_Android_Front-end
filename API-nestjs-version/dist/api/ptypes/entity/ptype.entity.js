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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
const item_entity_1 = require("../../items/entity/item.entity");
const typeorm_1 = require("typeorm");
const global_entity_1 = require("../../products/entity/global.entity");
let Type = class Type {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Type.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Type.prototype, "total_buy_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Type.prototype, "total_sell_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Type.prototype, "total_earning", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Type.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => item_entity_1.Item, items => items.type_name),
    __metadata("design:type", Array)
], Type.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => global_entity_1.Global, global => global.id),
    (0, typeorm_1.JoinColumn)({ name: "global_id" }),
    __metadata("design:type", Number)
], Type.prototype, "global_id", void 0);
Type = __decorate([
    (0, typeorm_1.Entity)('tproducts')
], Type);
exports.Type = Type;
//# sourceMappingURL=ptype.entity.js.map