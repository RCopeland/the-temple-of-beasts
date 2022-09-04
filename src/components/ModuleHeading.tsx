import React, { ReactNode } from "react";

export const ModuleHeading = ({
  title,
  subtitle,
  points,
}: {
  title: string;
  subtitle: string;
  points: string[];
}) => {
  return (
    <header className="m-5 mb-1">
      <div className="mb-1">
        <h1 className="text-3xl text-red-900">{title}</h1>
        <h2 className="text-xs">{subtitle}</h2>
      </div>
      <ul className="list-disc list-inside text-sm p-2">
        {points?.map((point) => {
          return <li key={point}>{point}</li>;
        })}
      </ul>
    </header>
  );
};
