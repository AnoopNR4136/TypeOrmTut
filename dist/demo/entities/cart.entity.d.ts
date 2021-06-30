import { BaseEntity } from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';
export declare class Cart extends BaseEntity {
    cart_id: number;
    user_id: User;
    product_id: Product;
    cart_qty: number;
}
