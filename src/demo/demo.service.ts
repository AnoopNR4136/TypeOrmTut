import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import { Category } from './entities/category.entity';
import { Dates } from './entities/dates.entity';
import { Order } from './entities/order.entity';
import { orderDetails } from './entities/orderdetails.entity';
import { Product } from './entities/product.entity';
import { Rating } from './entities/rating.entity';
import { User } from './entities/user.entity';

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(orderDetails)
    private readonly orderDetailsRepository: Repository<orderDetails>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,

    @InjectRepository(Order)
    private readonly ordeRepository: Repository<Order>,

    @InjectRepository(Product)
    private readonly ProductRepository: Repository<Product>,

    @InjectRepository(Rating)
    private readonly Ratingepository: Repository<Rating>,

    @InjectRepository(Dates)
    private readonly datesRepository: Repository<Dates>,
  ) {
    // const countArray = [];
  } ///////////////////////////////
  async withoutEgarGetOder() {
    ///enable eager:true in fk will retrun join function
    return await this.ordeRepository.find({ where: { order_status: 0 } });
  }

  //////////////////////////////////////////cascade Delete

  async cascadeDelete() {
    try {
      return this.categoryRepository.delete(9);
    } catch (error) {}
  }
  create(createDemoDto: CreateDemoDto) {
    return 'This action adds a new demo';
  }

  findAll() {
    return `This action returns all demo`;
  }
  ///////////////////
  async getDistict() {
    try {
      const result = await this.orderDetailsRepository
        .createQueryBuilder('oderdetails')
        .select('DISTINCT oderdetails.orderIdOrderId')
        .getRawMany();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  async getSelect() {
    try {
      return await this.orderDetailsRepository
        .createQueryBuilder('oderdetails')
        .select([
          'oder.order_id',
          'oder.order_total',
          'oder.order_date',
          'oderdetails.product_id',
        ])
        .leftJoin('oderdetails.order_id', 'oder')
        .getRawMany();
    } catch (error) {}
  }

  async getSum() {
    return await this.orderDetailsRepository
      .createQueryBuilder('oderdetails')
      .select([
        'SUM(oderdetails.oderDetail_qty * oderdetails.oderDetail_total) AS total',
        'oderdetails.order_id AS order_id',
      ])
      .groupBy('oderdetails.order_id')
      .getRawMany();
  }
  async getCount() {
    const countArray = [];
    return await this.ordeRepository
      .createQueryBuilder('oder')
      .select(['COUNT(oder.order_id) AS count ', 'oder.order_status AS status'])
      .groupBy('oder.order_status')
      .getRawMany();
  }

  async getProduct() {
    // return await this.ProductRepository.createQueryBuilder('pdct')
    //   .leftJoinAndSelect('pdct.rating_id', 'rating')
    //   .select([
    //     'IF(SUM(rating.rating_value) IS NULL ,0,SUM(rating.rating_value))  AS total_rating IS NULL',
    //   ])
    //   .addSelect([
    //     'pdct.product_id AS product_id',
    //     'pdct.product_name AS product_name ',
    //     'pdct.product_price AS product_price',
    //     'pdct.product_description AS product_description',
    //     'pdct.product_features AS product_features',
    //     'pdct.product_image AS product_image',
    //   ])
    //   .groupBy('pdct.product_id')
    //   .getRawMany();
  }
  //NUll checking
  //01
  async getProductnA() {
    return await this.ProductRepository.createQueryBuilder('pdct')
      .leftJoinAndSelect('pdct.rating_id', 'rating')
      .select(['COALESCE(AVG(rating.rating_value),0) AS total_rating ']) //if sum is null retrun 0
      .addSelect([
        'pdct.product_id AS product_id',
        'pdct.product_name AS product_name ',
        'pdct.product_price AS product_price',
        'pdct.product_description AS product_description',
        'pdct.product_features AS product_features',
        'pdct.product_image AS product_image',
      ])
      .groupBy('pdct.product_id')

      .getRawMany();
  }

  ////////////////////////////////////Dates
  async saveDate() {
    try {
      console.log(new Intl.DateTimeFormat('hi-IN').format(new Date()));
      // const locale = navigator.language;
      // console.log(locale);

      return await this.datesRepository.save({
        date1: new Date(), //2021-06-16 04:31:39.698
        date2: new Date().toISOString(),

        date3: new Intl.DateTimeFormat('en-US').format(new Date()),
        date4: new Intl.DateTimeFormat('en-US').format(new Date()),
      });
    } catch (error) {}
  }
  async dateOperations() {}
}
