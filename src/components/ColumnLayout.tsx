import React, { ReactNode } from "react";
export const ColumnLayout = ({ children }: { children: ReactNode }) => {
  return <section className="columns-2 m-5 max-w-5xl">{children}</section>;
};
