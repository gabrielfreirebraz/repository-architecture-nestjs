"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("../../../../domain/entities/item");
class ItemRepository {
    client;
    constructor(client) {
        this.client = client;
    }
    async create(data) {
        const item = await this.client.item.create({
            data: {
                name: data.name,
                price: data.price,
            },
        });
        return new item_1.default(item.name, item.price);
    }
}
exports.default = ItemRepository;
