"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
}
exports.default = Order;
