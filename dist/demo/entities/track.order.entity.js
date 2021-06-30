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
exports.TrackOrder = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./order.entity");
let TrackOrder = class TrackOrder extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TrackOrder.prototype, "track_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => order_entity_1.Order, (order) => order.track_id),
    __metadata("design:type", order_entity_1.Order)
], TrackOrder.prototype, "order_id", void 0);
__decorate([
    typeorm_1.Column({ default: 'Order is Placed' }),
    __metadata("design:type", String)
], TrackOrder.prototype, "track_station", void 0);
TrackOrder = __decorate([
    typeorm_1.Entity('tbl_trackorder')
], TrackOrder);
exports.TrackOrder = TrackOrder;
//# sourceMappingURL=track.order.entity.js.map