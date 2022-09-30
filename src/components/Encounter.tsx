import React, { ReactNode } from "react";
import { MonsterData } from "../../content/monsters";
import { MonsterStatBlock } from "./MonsterStatBlock";

export interface EncounterData {
  name: string;
  enemies: { monster: MonsterData; count: number }[];
  tactics: ReactNode;
}

export const Encounter = ({
  encounterData,
  className,
}: {
  encounterData: EncounterData;
  className?: string;
}) => {
  return (
    <aside className={`p-4 bg-white ${className}`}>
      <header className="flex items-center mb-4 justify-between">
        <h2 className="text-2xl text-blood-red font-bold mr-2">Encounter</h2>
        <span className="text-3xl text-steel-500">{encounterData.name}</span>
      </header>
      <div className="flex gap-4 justify-between">
        <div>
          <h3 className="text-blood-red font-bold text-xl">Enemies</h3>
          <ul>
            {encounterData.enemies.map((enemy) => {
              return (
                <li
                  key={enemy.monster.name}
                  className="flex items-center gap-1"
                >
                  <span>{enemy.monster.name}</span>
                  <span>x</span>
                  <span>{enemy.count}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-blood-red font-bold text-xl">Tactics</h3>
          <div className="indent-2 text-sm max-w-lg p-2">
            {encounterData.tactics}
          </div>
        </div>
      </div>
      <div className="mt-4">
        {encounterData.enemies.map((enemy) => {
          return (
            <p key={enemy.monster.name} className="py-2">
              <MonsterStatBlock monsterData={enemy.monster} />
            </p>
          );
        })}
      </div>
    </aside>
  );
};
