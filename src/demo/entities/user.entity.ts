import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Cart } from './cart.entity';
import { Order } from './order.entity';
import { Rating } from './rating.entity';
import { UserAdress } from './user-adress.entity';
import { Wishlist } from './wishlist.entity';
@Entity('tbl_user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: number;
  @Column({ unique: true })
  user_email: string;
  @Column({ unique: true })
  user_password: string;
  @Column({ default: '00' })
  user_salt: string;
  @Column({ default: '00' })
  user_phone: string;

  @OneToMany((type) => Wishlist, (wishlist) => wishlist.user_id)
  wishlist_id: Wishlist[];

  @OneToMany((type) => Cart, (cart) => cart.user_id)
  cart_id: Cart;

  @OneToMany((type) => Order, (order) => order.user_id)
  order_id: Order[];

  @OneToMany((type) => Rating, (rating) => rating.user_id)
  rating_id: Rating[];

  @OneToMany((type) => UserAdress, (userAdress) => userAdress.user_id)
  adress_id: UserAdress[];
}
