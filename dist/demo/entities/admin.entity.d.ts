import { BaseEntity } from 'typeorm';
export declare class Admin extends BaseEntity {
    admin_id: number;
    admin_name: string;
    admin_password: string;
}
