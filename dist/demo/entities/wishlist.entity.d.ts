import { BaseEntity } from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';
export declare class Wishlist extends BaseEntity {
    wishlist_id: number;
    user_id: User;
    product_id: Product;
}
