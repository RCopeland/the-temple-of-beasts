import React, { ReactNode } from "react";
export const RoomEntry = ({
  roomNumber,
  title,
  children,
}: {
  roomNumber: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="m-3">
      <h3 className="text-xl text-red-900 mb-0.5 flex items-center gap-1">
        <span className="font-bold">{roomNumber}.</span>
        <span className="text-lg">{title}</span>
      </h3>
      <div className="text-sm font-light mb-1 max-w-2xl">{children}</div>
    </div>
  );
};
