import { PrismaClient } from "@prisma/client";
import CreateItem from "./app/usecase/item/create-item";
import ItemRepository from "./infra/database/prisma/repositories/item-repository";

const client = new PrismaClient();
const itemRepository = new ItemRepository(client);
const createItemUseCase = new CreateItem(itemRepository);

async function bootstrap(): Promise<void> {
  const newItem = await createItemUseCase.execute({
    name: "notebook",
    price: 2000.0,
  });
  console.log(newItem);
}

void bootstrap();
