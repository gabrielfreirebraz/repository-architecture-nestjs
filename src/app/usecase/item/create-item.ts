// import { PrismaClient } from "@prisma/client";
import Item from "../../../domain/entities/item";
import type CreateItemDTO from "../../shared/dtos/item/create-item-dto";
import type ItemRepository from "../../../infra/database/prisma/repositories/item-repository";

// const client = new PrismaClient();

class CreateItem {
  private readonly itemRepository: ItemRepository;

  constructor(itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  public async execute(dto: CreateItemDTO): Promise<Item> {
    const item = new Item(dto.name, dto.price);

    return await this.itemRepository.create(item);
  }
}

export default CreateItem;
