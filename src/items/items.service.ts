import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item/item.interface';

import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
