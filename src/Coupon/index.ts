class Coupon {
  constructor(
    readonly name: string,
    readonly percentage: number,
    readonly timestamp: number
  ) {
    if (!this.isValid(timestamp)) {
      throw new Error("Coupon expired");
    }
  }

  private isValid(timestamp: number): boolean {
    const currentDate: number = Math.floor(new Date().getTime() / 1000);
    return timestamp >= currentDate;
  }
}

export default Coupon;
