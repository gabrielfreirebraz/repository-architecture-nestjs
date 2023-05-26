import { type PrismaClient } from "@prisma/client";
import type Repository from "../../../../app/base/repository";
import Item from "../../../../domain/entities/item";

class ItemRepository implements Repository<Item> {
  constructor(private readonly client: PrismaClient) {}

  async create(data: Item): Promise<Item> {
    const item = await this.client.item.create({
      data: {
        name: data.name,
        price: data.price,
      },
    });
    return new Item(item.name, item.price);
  }
}
export default ItemRepository;
