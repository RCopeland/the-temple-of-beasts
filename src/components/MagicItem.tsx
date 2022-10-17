import React, { ReactNode } from "react";

export const MagicItem = ({
  name,
  description,
  className,
}: {
  name: string;
  description: ReactNode;
  className?: string;
}) => {
  return (
    <aside className={`my-4 p-4 bg-white ${className}`}>
      <header className="flex items-center mb-4 justify-between">
        <h2 className="text-xl text-blood-red font-bold mr-2">Magic Item</h2>
        <span className="text-2xl text-steel-500">{name}</span>
      </header>
      <div className="sm:flex gap-4 justify-between">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-blood-red font-bold text-lg">Description</h3>
          {description}
        </div>
      </div>
    </aside>
  );
};
