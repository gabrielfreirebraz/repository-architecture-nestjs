"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { PrismaClient } from "@prisma/client";
const item_1 = require("../../../domain/entities/item");
// const client = new PrismaClient();
class CreateItem {
    itemRepository;
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    async execute(dto) {
        const item = new item_1.default(dto.name, dto.price);
        return await this.itemRepository.create(item);
    }
}
exports.default = CreateItem;
