import { Repository } from 'typeorm';
import { CreateDemoDto } from './dto/create-demo.dto';
import { Category } from './entities/category.entity';
import { Dates } from './entities/dates.entity';
import { Order } from './entities/order.entity';
import { orderDetails } from './entities/orderdetails.entity';
import { Product } from './entities/product.entity';
import { Rating } from './entities/rating.entity';
import { User } from './entities/user.entity';
export declare class DemoService {
    private readonly orderDetailsRepository;
    private readonly userRepository;
    private readonly categoryRepository;
    private readonly ordeRepository;
    private readonly ProductRepository;
    private readonly Ratingepository;
    private readonly datesRepository;
    constructor(orderDetailsRepository: Repository<orderDetails>, userRepository: Repository<User>, categoryRepository: Repository<Category>, ordeRepository: Repository<Order>, ProductRepository: Repository<Product>, Ratingepository: Repository<Rating>, datesRepository: Repository<Dates>);
    withoutEgarGetOder(): Promise<Order[]>;
    cascadeDelete(): Promise<import("typeorm").DeleteResult>;
    create(createDemoDto: CreateDemoDto): string;
    findAll(): string;
    getDistict(): Promise<any[]>;
    getSelect(): Promise<any[]>;
    getSum(): Promise<any[]>;
    getCount(): Promise<any[]>;
    getProduct(): Promise<void>;
    getProductnA(): Promise<any[]>;
    saveDate(): Promise<{
        date1: Date;
        date2: string;
        date3: string;
        date4: string;
    } & Dates>;
    dateOperations(): Promise<void>;
}
