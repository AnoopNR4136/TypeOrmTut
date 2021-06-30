
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';
@Entity('tbl_rating')
export class Rating extends BaseEntity {
  @PrimaryGeneratedColumn()
  rating_id: number;

  @ManyToOne((type) => Product, (product) => product.rating_id)
  product_id: Product;

  @ManyToOne((type) => User, (User) => User.rating_id)
  user_id: User;

  @Column({ default: 0 })
  rating_value: number;

  @Column({ default: null })
  comment_value: string;
}
