import { BaseEntity } from 'typeorm';
import { Order } from './order.entity';
import { User } from './user.entity';
export declare class UserAdress extends BaseEntity {
    adress_id: number;
    user_id: User;
    adress_name: string;
    adress_house_name: string;
    adress_place: string;
    adress_city: string;
    adress_district: string;
    adress_state: string;
    adress_zip: string;
    adress_alternate_phone?: string;
    order_id: Order[];
}
