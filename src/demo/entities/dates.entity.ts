import { Timestamp } from 'rxjs';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PrimaryGeneratedColumnType } from 'typeorm/driver/types/ColumnTypes';
@Entity('tbl_dates')
export class Dates extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: new Date() }) //2021-06-16 04:31:39.698
  default: Date;
  @Column()
  date1: Date;

  @Column() //2021-06-16 04:31:39.698
  date2: Date;

  @Column()
  date3: Date;

  @CreateDateColumn({type:Date})
  date5: string;

  ////MOST RECOMENDED METHOD
  @Column({ type: Date })
  date4: string;
}
