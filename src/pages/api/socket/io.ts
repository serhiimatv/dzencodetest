import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";

import { NextApiResponseServerIo } from "@/types";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ioHandler = async (req: NextApiRequest, res: NextApiResponseServerIo) => {
  if (!res.socket.server.io) {
    const path = "/api/socket/io";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: path,
      addTrailingSlash: false,
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      io.sockets.emit("user-count", io.engine.clientsCount);

      socket.on("disconnect", () => {
        io.sockets.emit("user-count", io.engine.clientsCount);
      });
    });
  }

  res.end();
};

export default ioHandler;
