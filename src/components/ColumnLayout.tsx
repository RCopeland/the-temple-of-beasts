import React, { ReactNode } from "react";
export const ColumnLayout = ({ children }: { children: ReactNode }) => {
  return <section className="md:columns-2 m-5 max-w-4xl">{children}</section>;
};
