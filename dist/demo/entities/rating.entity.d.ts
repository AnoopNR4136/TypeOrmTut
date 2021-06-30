import { BaseEntity } from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';
export declare class Rating extends BaseEntity {
    rating_id: number;
    product_id: Product;
    user_id: User;
    rating_value: number;
    comment_value: string;
}
