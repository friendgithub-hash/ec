import { Order } from "@repo/order-db";
import { Ordertype } from "@repo/types";
import { producer } from "./kafka";

export const createOrder = async (order: Ordertype) => {
  const newOrder = new Order(order);

  try {
    const order = await newOrder.save();
    producer.send("order.created", {
      value: {
        email: order.email,
        amount: order.amount,
        status: order.status,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
