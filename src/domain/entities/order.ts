import Item from "./item";

class Order {
  public items: Item[] = []

  public addItem(item: Item): void {

    this.items.push(item);
  }
}

export default Order;