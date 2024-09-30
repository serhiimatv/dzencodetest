import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOserver } from "socket.io";
import { IProduct } from "./models/product";
import { IOrder } from "./models/order";

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOserver;
    };
  };
};

export interface IProductsState {
  products: IProduct[];
  filter: "monitors" | "laptops" | "smartphones" | "tablets" | null;
  loading: boolean;
  errors: boolean;
}

export interface IOrderState {
  orders: IOrder[];
  loading: boolean;
  errors: boolean;
}
