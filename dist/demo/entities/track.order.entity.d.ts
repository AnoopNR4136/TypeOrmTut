import { BaseEntity } from 'typeorm';
import { Order } from './order.entity';
export declare class TrackOrder extends BaseEntity {
    track_id: number;
    order_id: Order;
    track_station: string;
}
