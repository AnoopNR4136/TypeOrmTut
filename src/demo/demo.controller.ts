import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DemoService } from './demo.service';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Post()
  create(@Body() createDemoDto: CreateDemoDto) {
    return this.demoService.create(createDemoDto);
  }

  @Get()
  findAll() {
    return this.demoService.findAll();
  }
  ///////EGAR CHEcKING
  @Get('withoutEgarGetOder')
  withoutEgarGetOder() {
    return this.demoService.withoutEgarGetOder();
  }
  ////CASCAFE DELETE
  @Post('cascadeDelete')
  cascadeDelete() {
    return this.demoService.cascadeDelete();
  }

  /////BASIC ARITHEMATIC FUNCTIONS
  @Get('getDistict')
  getDistict() {
    return this.demoService.getDistict();
  }

  @Get('select')
  getSelect() {
    return this.demoService.getSelect();
  }
  @Get('getSum')
  getSum() {
    return this.demoService.getSum();
  }
  @Get('getCount')
  getCount() {
    return this.demoService.getCount();
  }

  @Get('getProductCoalesce')
  getProduct() {
    return this.demoService.getProductnA();
  }
  @Get('getProduct')
  getProducts() {
    return this.demoService.getProduct();
  }
  /////////////////////////////////DaTES

  @Post('dateInsert')
  saveDate() {
    return this.demoService.saveDate();
  }
  /////DATE OPERATIONS
}
