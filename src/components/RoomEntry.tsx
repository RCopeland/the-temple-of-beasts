import React from "react";
import { RoomData } from "../../content/rooms";

export const RoomEntry = ({ roomData }: { roomData: RoomData }) => {
  return (
    <div className="room-entry">
      <h3 className="text-xl text-blood-red font-bold mb-1 flex items-center gap-2">
        <span className="font-bold text-black">
          {roomData.area}
          {roomData.roomNumber}
        </span>
        <span>{roomData.roomName}</span>
      </h3>
      {roomData.preReadAloudText && (
        <div className="bg-steel text-white rounded p-4 font-light mb-2 text-sm indent-2">
          {roomData.preReadAloudText}
        </div>
      )}
      <div className="font-light mb-1 max-w-2xl indent-2">
        {roomData.mainText}
      </div>
      {roomData.postReadAloudText && (
        <div className="bg-steel text-white rounded p-4 font-light mb-2 text-sm indent-2">
          {roomData.postReadAloudText}
        </div>
      )}
    </div>
  );
};
