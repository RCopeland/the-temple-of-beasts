import React, { ReactNode } from "react";
export const ModuleEntry = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="mb-2 m-5 max-w-4xl">
      <h2 className="text-2xl text-red-900 font-bold mb-1">{title}</h2>
      <div className="">{children}</div>
    </div>
  );
};
