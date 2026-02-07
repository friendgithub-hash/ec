import { OrderSchemaType } from "@repo/order-db";

export type Ordertype = OrderSchemaType & {
  _id: string;
};

export type OrderChartType = {
  month: string;
  total: number;
  successful: number;
};
