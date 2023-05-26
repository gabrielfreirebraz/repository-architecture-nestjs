"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const create_item_1 = require("./app/usecase/item/create-item");
const item_repository_1 = require("./infra/database/prisma/repositories/item-repository");
const client = new client_1.PrismaClient();
const itemRepository = new item_repository_1.default(client);
const createItemUseCase = new create_item_1.default(itemRepository);
async function bootstrap() {
    const newItem = await createItemUseCase.execute({
        name: "notebook",
        price: 2000.0,
    });
    console.log(newItem);
}
void bootstrap();
