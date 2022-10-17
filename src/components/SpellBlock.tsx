import React from "react";
import { uniqueId } from "lodash";

export interface SpellDetails {
  name: string;
  level: string;
  school: string;
  castingTime: string;
  range: string;
  target: string;
  components: string;
  duration: string;
  classes: string[];
  description: string[];
}

const getLevelSuffix = (level: string) => {
  switch (level) {
    case "1":
      return "st";
    case "2":
      return "nd";
    case "3":
      return "rd";
    default:
      return "th";
  }
};

export const SpellBlock = ({
  spellDetails,
  className,
}: {
  spellDetails: SpellDetails;
  className?: string;
}) => {
  return (
    <aside className={`bg-cloud p-4 ${className}`}>
      <h2 className="text-xl font-bold">{spellDetails.name}</h2>
      <span className="flex gap-1 text-sm">
        <span>
          {spellDetails.level}
          {getLevelSuffix(spellDetails.level)}
        </span>
        <span>level {spellDetails.school}</span>
      </span>
      <ul className="my-2">
        <li className="flex gap-2 justify-between">
          <span className="text-sm">Casting Time</span>
          <p>{spellDetails.castingTime}</p>
        </li>
        <li className="flex gap-2 justify-between">
          <span className="text-sm">Range</span>
          <p>{spellDetails.range}</p>
        </li>
        <li className="flex gap-2 justify-between">
          <span className="text-sm">Target</span>
          <p>{spellDetails.target}</p>
        </li>
        <li className="flex gap-2 justify-between">
          <span className="text-sm">Components</span>
          <p>{spellDetails.components}</p>
        </li>
        <li className="flex gap-2 justify-between">
          <span className="text-sm">Duration</span>
          <p>{spellDetails.duration}</p>
        </li>
        <li className="flex gap-2 justify-between">
          <span className="text-sm">Classes</span>
          <p>{spellDetails.classes.join(",")}</p>
        </li>
        <hr className="my-2" />
        <div className="text-sm my-1 indent-2">
          {spellDetails.description.map((item) => (
            <p key={uniqueId()}>{item}</p>
          ))}
        </div>
      </ul>
    </aside>
  );
};
