import isValidCpf from "../is-valid-cpf";
import Item from "../Item";
import OrderItem from "../OrderItem";
import Coupon from "../Coupon";

class Order {
  private orderItems: Array<OrderItem> = [];
  private coupon: Coupon | undefined;

  constructor(cpf: string) {
    if (!isValidCpf(cpf)) {
      throw new Error("Invalid cpf");
    }
  }

  public addItem(item: Item, quantity: number): void {
    this.orderItems.push(new OrderItem(item.id, item.price, quantity));
  }

  private totalWithCoupon(total: number, percentage: number): number {
    return total - (total * percentage) / 100;
  }

  public addCoupon(coupon: Coupon): void {
    this.coupon = coupon;
  }

  public total(): number {
    const total: number = this.orderItems.reduce((acc, item) => {
      return acc + item.total();
    }, 0);
    return this.coupon?.percentage
      ? this.totalWithCoupon(total, this.coupon.percentage)
      : total;
  }
}

export default Order;
