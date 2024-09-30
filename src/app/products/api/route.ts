import dataProducts from "../../../../mocparoducts.json";

export async function GET() {
  const products = dataProducts;

  return Response.json(products);
}
