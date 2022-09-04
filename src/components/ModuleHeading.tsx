import React, { ReactNode } from "react";

export const ModuleHeading = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <header className="mb-1">
      <h1 className="text-3xl">{title}</h1>
      <div>{children}</div>
    </header>
  );
};
