import dataOrders from "../../../../mocorders.json";

export async function GET() {
  const orders = dataOrders;

  return Response.json(orders);
}
