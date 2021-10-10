import Order from "./";
import Item from "../Item";
import Coupon from "../Coupon";

it("should return error when cpf is invalid", () => {
  expect(() => new Order("55566677799")).toThrow(new Error("Invalid cpf"));
});

it("should create Order' instance when cpf is valid", () => {
  const order: Order = new Order("02820139035");
  expect(order).toBeDefined();
});

it("should return total of 500 when add 3 itens to order", () => {
  const order: Order = new Order("02820139035");
  order.addItem(new Item(1, "book", "1984", 50), 2);
  order.addItem(new Item(2, "book", "admirado mundo novo", 10), 10);
  order.addItem(new Item(3, "book", "laranja mecanica", 100), 3);
  const total: number = order.total();

  expect(total).toBe(500);
});

it("should return total of 450 when add one Coupon of 10", () => {
  const order: Order = new Order("02820139035");
  order.addItem(new Item(1, "book", "1984", 50), 2);
  order.addItem(new Item(2, "book", "admirado mundo novo", 10), 10);
  order.addItem(new Item(3, "book", "laranja mecanica", 100), 3);
  order.addCoupon(new Coupon("GEEKDAY", 10));
  const total: number = order.total();

  expect(total).toBe(450);
});
