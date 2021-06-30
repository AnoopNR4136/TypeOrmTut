import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Product } from './product.entity';
@Entity('tbl_subcategory')
export class Subcategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  subcategory_id: number;

  @Column()
  subcategory_name: string;

  @Column()
  subcategory_file: string;

  @ManyToOne((type) => Category, (category) => category.subcategory_id, {
    onDelete: 'CASCADE',
  })
  category_id: Category;

  @OneToMany((type) => Product, (pdct) => pdct.subcategory_id)
  product_id: Product[];
}
