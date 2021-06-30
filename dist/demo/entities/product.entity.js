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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const cart_entity_1 = require("./cart.entity");
const orderdetails_entity_1 = require("./orderdetails.entity");
const rating_entity_1 = require("./rating.entity");
const subcategory_entity_1 = require("./subcategory.entity");
const wishlist_entity_1 = require("./wishlist.entity");
let Product = class Product extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "product_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "product_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Product.prototype, "product_price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Product.prototype, "product_stock", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "product_rating", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "product_status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "product_description", void 0);
__decorate([
    typeorm_1.Column('simple-array'),
    __metadata("design:type", Array)
], Product.prototype, "product_features", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "product_image", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "wish_status", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => subcategory_entity_1.Subcategory, (subcat) => subcat.product_id),
    __metadata("design:type", subcategory_entity_1.Subcategory)
], Product.prototype, "subcategory_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => cart_entity_1.Cart, (cart) => cart.product_id),
    __metadata("design:type", cart_entity_1.Cart)
], Product.prototype, "cart_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => wishlist_entity_1.Wishlist, (wishlist) => wishlist.product_id),
    __metadata("design:type", Array)
], Product.prototype, "wishlist_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => orderdetails_entity_1.orderDetails, (order) => order.product_id),
    __metadata("design:type", Array)
], Product.prototype, "orderdet_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => rating_entity_1.Rating, (rating) => rating.product_id),
    __metadata("design:type", Array)
], Product.prototype, "rating_id", void 0);
Product = __decorate([
    typeorm_1.Entity('tbl_product')
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map