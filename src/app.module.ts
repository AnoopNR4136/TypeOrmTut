import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeOrmConfig';
import { DemoModule } from './demo/demo.module';

@Module({
  imports:  [ TypeOrmModule.forRoot(typeOrmConfig),  DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
