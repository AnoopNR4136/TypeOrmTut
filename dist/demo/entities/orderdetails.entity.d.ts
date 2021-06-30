import { BaseEntity } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';
export declare class orderDetails extends BaseEntity {
    orderdet_id: number;
    order_id: Order;
    product_id: Product;
    oderDetail_qty: number;
    oderDetail_total: number;
}
