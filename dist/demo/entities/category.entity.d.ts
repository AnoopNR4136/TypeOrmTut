import { BaseEntity } from 'typeorm';
import { Subcategory } from './subcategory.entity';
export declare class Category extends BaseEntity {
    category_id: number;
    category_name: string;
    category_file: string;
    subcategory_id: Subcategory[];
}
