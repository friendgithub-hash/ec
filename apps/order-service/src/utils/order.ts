import { Order } from "@repo/order-db";
import { Ordertype } from "@repo/types";

export const createOrder = async (order: Ordertype) => {
  const newOrder = new Order(order);

  try {
    await newOrder.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
