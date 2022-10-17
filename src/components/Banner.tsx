import React, { ReactNode } from "react";

export const Banner = ({
  headline,
  sub,
}: {
  headline: ReactNode;
  sub: string;
}) => (
  <aside className="bg-stone text-white font-sans text-center py-2 md:py-4 md:absolute md:px-32 md:-left-36 md:-top-24 origin-bottom-right md:-rotate-45 z-10">
    <div className="text-2xl">{headline}</div>
    <span className="text-sm font-medium">{sub}</span>
  </aside>
);
