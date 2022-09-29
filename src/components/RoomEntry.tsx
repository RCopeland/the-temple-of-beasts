import React, { ReactNode } from "react";
export const RoomEntry = ({
  roomNumber,
  title,
  preReadAloudText,
  postReadAloudText,
  children,
}: {
  roomNumber: string;
  title: string;
  preReadAloudText?: ReactNode;
  postReadAloudText?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="">
      <h3 className="text-xl text-blood-red font-bold mb-1 flex items-center gap-2">
        <span className="font-bold text-black">{roomNumber}</span>
        <span>{title}</span>
      </h3>
      {preReadAloudText && (
        <div className="bg-steel text-white rounded p-4 font-light mb-2 text-sm indent-2">
          {preReadAloudText}
        </div>
      )}
      <div className="font-light mb-1 max-w-2xl indent-2">{children}</div>
      {postReadAloudText && (
        <div className="bg-steel text-white rounded p-4 font-light mb-2 text-sm indent-2">
          {postReadAloudText}
        </div>
      )}
    </div>
  );
};
