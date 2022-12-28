import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
