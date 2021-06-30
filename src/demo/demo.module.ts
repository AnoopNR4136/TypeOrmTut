import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { Cart } from './entities/cart.entity';
import { Admin } from './entities/admin.entity';
import { Category } from './entities/category.entity';
import { Order } from './entities/order.entity';
import { orderDetails } from './entities/orderdetails.entity';
import { Product } from './entities/product.entity';
import { Rating } from './entities/rating.entity';
import { Subcategory } from './entities/subcategory.entity';
import { TrackOrder } from './entities/track.order.entity';
import { User } from './entities/user.entity';
import { UserAdress } from './entities/user-adress.entity';
import { Wishlist } from './entities/wishlist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dates } from './entities/dates.entity';

@Module({
  
  imports: [

TypeOrmModule.forFeature([Dates,Cart,Admin,Category,Order,orderDetails,Product,Rating,Subcategory,TrackOrder,User,UserAdress,Wishlist])],
  controllers: [DemoController],
  providers: [DemoService]
})
export class DemoModule {}
