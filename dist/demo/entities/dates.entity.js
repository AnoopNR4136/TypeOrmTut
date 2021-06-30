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
exports.Dates = void 0;
const typeorm_1 = require("typeorm");
let Dates = class Dates extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Dates.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ default: new Date() }),
    __metadata("design:type", Date)
], Dates.prototype, "default", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Dates.prototype, "date1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Dates.prototype, "date2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Dates.prototype, "date3", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: Date }),
    __metadata("design:type", String)
], Dates.prototype, "date5", void 0);
__decorate([
    typeorm_1.Column({ type: Date }),
    __metadata("design:type", String)
], Dates.prototype, "date4", void 0);
Dates = __decorate([
    typeorm_1.Entity('tbl_dates')
], Dates);
exports.Dates = Dates;
//# sourceMappingURL=dates.entity.js.map