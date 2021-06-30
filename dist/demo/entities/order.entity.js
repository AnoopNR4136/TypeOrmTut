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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const orderdetails_entity_1 = require("./orderdetails.entity");
const track_order_entity_1 = require("./track.order.entity");
const user_adress_entity_1 = require("./user-adress.entity");
const user_entity_1 = require("./user.entity");
let Order = class Order extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Order.prototype, "order_id", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "order_status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Order.prototype, "order_total", void 0);
__decorate([
    typeorm_1.Column({ default: new Date() }),
    __metadata("design:type", Date)
], Order.prototype, "order_date", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => user_entity_1.User, (user) => user.order_id, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "user_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => orderdetails_entity_1.orderDetails, (orderdet) => orderdet.order_id),
    __metadata("design:type", orderdetails_entity_1.orderDetails)
], Order.prototype, "orderdet_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => track_order_entity_1.TrackOrder, (tracKorder) => tracKorder.order_id),
    __metadata("design:type", Array)
], Order.prototype, "track_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => user_adress_entity_1.UserAdress, (userAdress) => userAdress.order_id),
    __metadata("design:type", user_adress_entity_1.UserAdress)
], Order.prototype, "adress_id", void 0);
Order = __decorate([
    typeorm_1.Entity('tbl_order')
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map