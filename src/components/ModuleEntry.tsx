import React, { ReactNode } from "react";
export const ModuleEntry = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="mb-2 max-w-2xl">
      <h2 className="text-2xl text-red-900 font-bold mb-1">{title}</h2>
      <div className="text-sm">{children}</div>
    </div>
  );
};
