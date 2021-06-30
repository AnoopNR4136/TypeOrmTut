import { DemoService } from './demo.service';
import { CreateDemoDto } from './dto/create-demo.dto';
export declare class DemoController {
    private readonly demoService;
    constructor(demoService: DemoService);
    create(createDemoDto: CreateDemoDto): string;
    findAll(): string;
    withoutEgarGetOder(): Promise<import("./entities/order.entity").Order[]>;
    cascadeDelete(): Promise<import("typeorm").DeleteResult>;
    getDistict(): Promise<any[]>;
    getSelect(): Promise<any[]>;
    getSum(): Promise<any[]>;
    getCount(): Promise<any[]>;
    getProduct(): Promise<any[]>;
    getProducts(): Promise<void>;
    saveDate(): Promise<{
        date1: Date;
        date2: string;
        date3: string;
        date4: string;
    } & import("./entities/dates.entity").Dates>;
}
