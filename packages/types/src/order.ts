import { OrderSchemaType } from "@repo/order-db";

export type Ordertype = OrderSchemaType & {
  _id: string;
};
