"use client";

import { useSocket } from "@/providers/socket-provider";

const UserCount = () => {
  const { userCount } = useSocket();

  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
      <span className="badge text-bg-info">{userCount}</span>
      <span>Вкладок отрыто</span>
    </div>
  );
};

export default UserCount;
