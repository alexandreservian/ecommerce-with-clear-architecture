class OrderItem {
  constructor(
    readonly id: number,
    readonly price: number,
    readonly quantity: number
  ) {}

  public total(): number {
    return this.price * this.quantity;
  }
}

export default OrderItem;
