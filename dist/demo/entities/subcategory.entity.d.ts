import { BaseEntity } from 'typeorm';
import { Category } from './category.entity';
import { Product } from './product.entity';
export declare class Subcategory extends BaseEntity {
    subcategory_id: number;
    subcategory_name: string;
    subcategory_file: string;
    category_id: Category;
    product_id: Product[];
}
