import { BaseEntity } from 'typeorm';
import { Cart } from './cart.entity';
import { Order } from './order.entity';
import { Rating } from './rating.entity';
import { UserAdress } from './user-adress.entity';
import { Wishlist } from './wishlist.entity';
export declare class User extends BaseEntity {
    user_id: number;
    user_email: string;
    user_password: string;
    user_salt: string;
    user_phone: string;
    wishlist_id: Wishlist[];
    cart_id: Cart;
    order_id: Order[];
    rating_id: Rating[];
    adress_id: UserAdress[];
}
