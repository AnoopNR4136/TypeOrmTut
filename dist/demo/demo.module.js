"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModule = void 0;
const common_1 = require("@nestjs/common");
const demo_service_1 = require("./demo.service");
const demo_controller_1 = require("./demo.controller");
const cart_entity_1 = require("./entities/cart.entity");
const admin_entity_1 = require("./entities/admin.entity");
const category_entity_1 = require("./entities/category.entity");
const order_entity_1 = require("./entities/order.entity");
const orderdetails_entity_1 = require("./entities/orderdetails.entity");
const product_entity_1 = require("./entities/product.entity");
const rating_entity_1 = require("./entities/rating.entity");
const subcategory_entity_1 = require("./entities/subcategory.entity");
const track_order_entity_1 = require("./entities/track.order.entity");
const user_entity_1 = require("./entities/user.entity");
const user_adress_entity_1 = require("./entities/user-adress.entity");
const wishlist_entity_1 = require("./entities/wishlist.entity");
const typeorm_1 = require("@nestjs/typeorm");
const dates_entity_1 = require("./entities/dates.entity");
let DemoModule = class DemoModule {
};
DemoModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([dates_entity_1.Dates, cart_entity_1.Cart, admin_entity_1.Admin, category_entity_1.Category, order_entity_1.Order, orderdetails_entity_1.orderDetails, product_entity_1.Product, rating_entity_1.Rating, subcategory_entity_1.Subcategory, track_order_entity_1.TrackOrder, user_entity_1.User, user_adress_entity_1.UserAdress, wishlist_entity_1.Wishlist])
        ],
        controllers: [demo_controller_1.DemoController],
        providers: [demo_service_1.DemoService]
    })
], DemoModule);
exports.DemoModule = DemoModule;
//# sourceMappingURL=demo.module.js.map