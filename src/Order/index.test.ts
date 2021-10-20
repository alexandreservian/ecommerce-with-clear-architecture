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
  order.addItem(
    new Item({
      id: 1,
      category: "book",
      description: "1984",
      price: 50,
      height: 10,
      width: 8,
      depth: 5,
      weight: 4,
    }),
    3
  );
  order.addItem(
    new Item({
      id: 2,
      category: "book",
      description: "admirado mundo novo",
      price: 125,
      height: 70,
      width: 5,
      depth: 2,
      weight: 5,
    }),
    2
  );
  order.addItem(
    new Item({
      id: 3,
      category: "book",
      description: "laranja mecanica",
      price: 100,
      height: 11,
      width: 10,
      depth: 5,
      weight: 7,
    }),
    1
  );
  const total: number = order.total();

  expect(total).toBe(500);
});

it("should return total of 450 when add one Coupon of 10", () => {
  const order: Order = new Order("02820139035");
  order.addItem(
    new Item({
      id: 1,
      category: "book",
      description: "1984",
      price: 50,
      height: 10,
      width: 8,
      depth: 5,
      weight: 4,
    }),
    3
  );
  order.addItem(
    new Item({
      id: 2,
      category: "book",
      description: "admirado mundo novo",
      price: 125,
      height: 70,
      width: 5,
      depth: 2,
      weight: 5,
    }),
    2
  );
  order.addItem(
    new Item({
      id: 3,
      category: "book",
      description: "laranja mecanica",
      price: 100,
      height: 11,
      width: 10,
      depth: 5,
      weight: 7,
    }),
    1
  );
  order.addCoupon(new Coupon("GEEKDAY", 10, 4126966696));
  const total: number = order.total();

  expect(total).toBe(450);
});

it("should return error when  Coupon is expired", () => {
  const order: Order = new Order("02820139035");

  expect(() => order.addCoupon(new Coupon("GEEKDAY", 10, 1631301399))).toThrow(
    new Error("Coupon expired")
  );
});

it("should return 1000 when calculate freight", () => {
  const order: Order = new Order("02820139035");
  order.addItem(
    new Item({
      id: 1,
      category: "book",
      description: "1984",
      price: 50,
      height: 10,
      width: 8,
      depth: 5,
      weight: 4,
    }),
    3
  );
  order.addItem(
    new Item({
      id: 2,
      category: "book",
      description: "admirado mundo novo",
      price: 125,
      height: 70,
      width: 5,
      depth: 2,
      weight: 5,
    }),
    2
  );
  order.addItem(
    new Item({
      id: 3,
      category: "book",
      description: "laranja mecanica",
      price: 100,
      height: 11,
      width: 10,
      depth: 5,
      weight: 7,
    }),
    1
  );
  const totalFreight: number = order.calculateFreight(1000);

  expect(totalFreight).toBe(17677.5);
});
