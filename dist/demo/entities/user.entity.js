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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const cart_entity_1 = require("./cart.entity");
const order_entity_1 = require("./order.entity");
const rating_entity_1 = require("./rating.entity");
const user_adress_entity_1 = require("./user-adress.entity");
const wishlist_entity_1 = require("./wishlist.entity");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "user_email", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "user_password", void 0);
__decorate([
    typeorm_1.Column({ default: '00' }),
    __metadata("design:type", String)
], User.prototype, "user_salt", void 0);
__decorate([
    typeorm_1.Column({ default: '00' }),
    __metadata("design:type", String)
], User.prototype, "user_phone", void 0);
__decorate([
    typeorm_1.OneToMany((type) => wishlist_entity_1.Wishlist, (wishlist) => wishlist.user_id),
    __metadata("design:type", Array)
], User.prototype, "wishlist_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => cart_entity_1.Cart, (cart) => cart.user_id),
    __metadata("design:type", cart_entity_1.Cart)
], User.prototype, "cart_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => order_entity_1.Order, (order) => order.user_id),
    __metadata("design:type", Array)
], User.prototype, "order_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => rating_entity_1.Rating, (rating) => rating.user_id),
    __metadata("design:type", Array)
], User.prototype, "rating_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => user_adress_entity_1.UserAdress, (userAdress) => userAdress.user_id),
    __metadata("design:type", Array)
], User.prototype, "adress_id", void 0);
User = __decorate([
    typeorm_1.Entity('tbl_user')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map