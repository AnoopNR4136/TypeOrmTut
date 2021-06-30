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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
const dates_entity_1 = require("./entities/dates.entity");
const order_entity_1 = require("./entities/order.entity");
const orderdetails_entity_1 = require("./entities/orderdetails.entity");
const product_entity_1 = require("./entities/product.entity");
const rating_entity_1 = require("./entities/rating.entity");
const user_entity_1 = require("./entities/user.entity");
let DemoService = class DemoService {
    constructor(orderDetailsRepository, userRepository, categoryRepository, ordeRepository, ProductRepository, Ratingepository, datesRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
        this.ordeRepository = ordeRepository;
        this.ProductRepository = ProductRepository;
        this.Ratingepository = Ratingepository;
        this.datesRepository = datesRepository;
    }
    async withoutEgarGetOder() {
        return await this.ordeRepository.find({ where: { order_status: 0 } });
    }
    async cascadeDelete() {
        try {
            return this.categoryRepository.delete(9);
        }
        catch (error) { }
    }
    create(createDemoDto) {
        return 'This action adds a new demo';
    }
    findAll() {
        return `This action returns all demo`;
    }
    async getDistict() {
        try {
            const result = await this.orderDetailsRepository
                .createQueryBuilder('oderdetails')
                .select('DISTINCT oderdetails.orderIdOrderId')
                .getRawMany();
            return result;
        }
        catch (error) {
            console.error(error);
        }
    }
    async getSelect() {
        try {
            return await this.orderDetailsRepository
                .createQueryBuilder('oderdetails')
                .select([
                'oder.order_id',
                'oder.order_total',
                'oder.order_date',
                'oderdetails.product_id',
            ])
                .leftJoin('oderdetails.order_id', 'oder')
                .getRawMany();
        }
        catch (error) { }
    }
    async getSum() {
        return await this.orderDetailsRepository
            .createQueryBuilder('oderdetails')
            .select([
            'SUM(oderdetails.oderDetail_qty * oderdetails.oderDetail_total) AS total',
            'oderdetails.order_id AS order_id',
        ])
            .groupBy('oderdetails.order_id')
            .getRawMany();
    }
    async getCount() {
        const countArray = [];
        return await this.ordeRepository
            .createQueryBuilder('oder')
            .select(['COUNT(oder.order_id) AS count ', 'oder.order_status AS status'])
            .groupBy('oder.order_status')
            .getRawMany();
    }
    async getProduct() {
    }
    async getProductnA() {
        return await this.ProductRepository.createQueryBuilder('pdct')
            .leftJoinAndSelect('pdct.rating_id', 'rating')
            .select(['COALESCE(AVG(rating.rating_value),0) AS total_rating '])
            .addSelect([
            'pdct.product_id AS product_id',
            'pdct.product_name AS product_name ',
            'pdct.product_price AS product_price',
            'pdct.product_description AS product_description',
            'pdct.product_features AS product_features',
            'pdct.product_image AS product_image',
        ])
            .groupBy('pdct.product_id')
            .getRawMany();
    }
    async saveDate() {
        try {
            console.log(new Intl.DateTimeFormat('hi-IN').format(new Date()));
            return await this.datesRepository.save({
                date1: new Date(),
                date2: new Date().toISOString(),
                date3: new Intl.DateTimeFormat('en-US').format(new Date()),
                date4: new Intl.DateTimeFormat('en-US').format(new Date()),
            });
        }
        catch (error) { }
    }
    async dateOperations() { }
};
DemoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(orderdetails_entity_1.orderDetails)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.User)),
    __param(2, typeorm_1.InjectRepository(category_entity_1.Category)),
    __param(3, typeorm_1.InjectRepository(order_entity_1.Order)),
    __param(4, typeorm_1.InjectRepository(product_entity_1.Product)),
    __param(5, typeorm_1.InjectRepository(rating_entity_1.Rating)),
    __param(6, typeorm_1.InjectRepository(dates_entity_1.Dates)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DemoService);
exports.DemoService = DemoService;
//# sourceMappingURL=demo.service.js.map