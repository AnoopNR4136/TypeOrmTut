
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './cart.entity';
import { orderDetails } from './orderdetails.entity';
import { Rating } from './rating.entity';
import { Subcategory } from './subcategory.entity';
import { Wishlist } from './wishlist.entity';
@Entity('tbl_product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  product_name: string;
  @Column()
  product_price: number;
  @Column()
  product_stock: number;
  @Column({ default: 0 })
  product_rating: number;
  @Column({ default: true })
  product_status: boolean;
  @Column()
  product_description: string;

  @Column('simple-array')
  product_features: string[];

  @Column()
  product_image: string;
  @Column({ default: false })
  wish_status: boolean;

  @ManyToOne((type) => Subcategory, (subcat) => subcat.product_id)
  subcategory_id: Subcategory;

  @OneToMany((type) => Cart, (cart) => cart.product_id)
  cart_id: Cart;

  @OneToMany((type) => Wishlist, (wishlist) => wishlist.product_id)
  wishlist_id: Wishlist[];

  @OneToMany((type) => orderDetails, (order) => order.product_id)
  orderdet_id: orderDetails[];

  @OneToMany((type) => Rating, (rating) => rating.product_id)
  rating_id: Rating[];

//No of rated users 
  numberof_rate: number;
}
