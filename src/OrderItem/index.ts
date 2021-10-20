class OrderItem {
  constructor(
    readonly id: number,
    readonly price: number,
    readonly quantity: number,
    readonly volume: number,
    readonly density: number
  ) {}

  public total(): number {
    return this.price * this.quantity;
  }

  public totalVolume(): number {
    return this.volume * this.quantity;
  }

  public totalDensity(): number {
    return this.density * this.quantity;
  }
}

export default OrderItem;
