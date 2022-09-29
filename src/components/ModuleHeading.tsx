import React, { ReactNode } from "react";

export const ModuleHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <header className="p-5 mb-1">
      <div className="mb-1">
        <h1 className="text-6xl font-display">{title}</h1>
        <h2 className="">{subtitle}</h2>
      </div>
    </header>
  );
};
