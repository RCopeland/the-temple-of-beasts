import React, { ReactNode } from "react";
export const ModuleEntry = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className} mb-4`}>
      <h2 className="text-2xl text-blood-red font-bold mb-1">{title}</h2>
      <div className="">{children}</div>
    </div>
  );
};
