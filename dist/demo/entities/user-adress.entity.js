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
exports.UserAdress = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./order.entity");
const user_entity_1 = require("./user.entity");
let UserAdress = class UserAdress extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserAdress.prototype, "adress_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => user_entity_1.User, (user) => user.adress_id),
    __metadata("design:type", user_entity_1.User)
], UserAdress.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAdress.prototype, "adress_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAdress.prototype, "adress_house_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAdress.prototype, "adress_place", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAdress.prototype, "adress_city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAdress.prototype, "adress_district", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAdress.prototype, "adress_state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAdress.prototype, "adress_zip", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAdress.prototype, "adress_alternate_phone", void 0);
__decorate([
    typeorm_1.OneToMany((type) => order_entity_1.Order, (oder) => oder.adress_id),
    __metadata("design:type", Array)
], UserAdress.prototype, "order_id", void 0);
UserAdress = __decorate([
    typeorm_1.Entity('tbl_adress')
], UserAdress);
exports.UserAdress = UserAdress;
//# sourceMappingURL=user-adress.entity.js.map