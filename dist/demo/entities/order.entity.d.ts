import { BaseEntity } from 'typeorm';
import { orderDetails } from './orderdetails.entity';
import { TrackOrder } from './track.order.entity';
import { UserAdress } from './user-adress.entity';
import { User } from './user.entity';
export declare class Order extends BaseEntity {
    order_id: string;
    order_status: number;
    order_total: number;
    order_date: Date;
    user_id: User;
    orderdet_id: orderDetails;
    track_id: TrackOrder[];
    adress_id: UserAdress;
}
