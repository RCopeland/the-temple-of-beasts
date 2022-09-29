import React, { ReactNode } from "react";

export const Banner = ({
  headline,
  sub,
}: {
  headline: ReactNode;
  sub: string;
}) => (
  <aside className="bg-stone text-white font-sans text-center py-4 absolute px-32 -left-36 -top-24 origin-bottom-right -rotate-45">
    <div className="text-2xl">{headline}</div>
    <span className="text-sm font-medium">{sub}</span>
  </aside>
);
