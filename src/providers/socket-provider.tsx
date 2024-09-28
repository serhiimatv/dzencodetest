"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { io as ClientIO } from "socket.io-client";

type SocketContextType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket: any | null;
  isConnected: boolean;
  userCount: number;
};

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
  userCount: 0,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socketInstance = (ClientIO as any)(process.env.NEXT_PUBLIC_URL!, {
      path: "/api/socket/io",
      addTrailingSlash: false,
    });

    socketInstance.on("connect", () => {
      setIsConnected(true);
    });

    socketInstance.on("disconnect", () => {
      setIsConnected(false);
    });

    socketInstance.on("user-count", (data: number) => {
      setUserCount(data);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const memoizedValue = useMemo(
    () => ({ socket, isConnected, userCount }),
    [socket, isConnected, userCount]
  );

  return (
    <SocketContext.Provider value={memoizedValue}>
      {children}
    </SocketContext.Provider>
  );
};
