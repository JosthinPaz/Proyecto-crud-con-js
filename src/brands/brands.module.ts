import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
@Module({
  imports: [ PrismaModule ],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
