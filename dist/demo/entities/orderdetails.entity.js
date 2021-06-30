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
exports.orderDetails = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./order.entity");
const product_entity_1 = require("./product.entity");
let orderDetails = class orderDetails extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], orderDetails.prototype, "orderdet_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => order_entity_1.Order, (order) => order.orderdet_id),
    __metadata("design:type", order_entity_1.Order)
], orderDetails.prototype, "order_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => product_entity_1.Product, (product) => product.orderdet_id),
    __metadata("design:type", product_entity_1.Product)
], orderDetails.prototype, "product_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], orderDetails.prototype, "oderDetail_qty", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], orderDetails.prototype, "oderDetail_total", void 0);
orderDetails = __decorate([
    typeorm_1.Entity('tbl_orderdetails')
], orderDetails);
exports.orderDetails = orderDetails;
//# sourceMappingURL=orderdetails.entity.js.map