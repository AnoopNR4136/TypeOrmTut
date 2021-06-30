import { BaseEntity } from 'typeorm';
import { Cart } from './cart.entity';
import { orderDetails } from './orderdetails.entity';
import { Rating } from './rating.entity';
import { Subcategory } from './subcategory.entity';
import { Wishlist } from './wishlist.entity';
export declare class Product extends BaseEntity {
    product_id: number;
    product_name: string;
    product_price: number;
    product_stock: number;
    product_rating: number;
    product_status: boolean;
    product_description: string;
    product_features: string[];
    product_image: string;
    wish_status: boolean;
    subcategory_id: Subcategory;
    cart_id: Cart;
    wishlist_id: Wishlist[];
    orderdet_id: orderDetails[];
    rating_id: Rating[];
    numberof_rate: number;
}
