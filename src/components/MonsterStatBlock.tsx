import React, { useState } from "react";
import { MonsterData } from "../../content/monsters";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export const MonsterStatBlock = ({
  monsterData,
}: {
  monsterData: MonsterData;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-cloud text-sm">
      <header
        className="p-4 flex justify-between hover:bg-steel-500 hover:text-white"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex gap-4 items-center">
          <h3 className="text-xl text-blood-red font-bold">
            {monsterData.name}
          </h3>
          <span className="font-light">{monsterData.meta}</span>
        </div>
        <span className="pr-2">
          {isOpen ? (
            <ChevronDownIcon className="mt-1 h-6 w-6 text-black" />
          ) : (
            <ChevronUpIcon className="mt-0.5 h-6 w-6 text-black" />
          )}
        </span>
      </header>
      {isOpen && (
        <>
          <div className="flex justify-between p-4 gap-8">
            <div>
              <ul>
                <li className="flex gap-4 justify-between mb-1">
                  <span className="font-bold">AC</span>
                  <span>{monsterData.ac}</span>
                </li>
                <li className="flex gap-4 justify-between mb-1">
                  <span className="font-bold whitespace-nowrap">
                    Hit Points
                  </span>
                  <span className="text-right">
                    {monsterData.hp.total} ({monsterData.hp.die})
                  </span>
                </li>
                <li className="flex gap-4 justify-between mb-1">
                  <span className="font-bold">Speed</span>
                  <span className="text-right">{monsterData.speed}</span>
                </li>
                <li className="flex gap-4 justify-between mb-1">
                  <span className="font-bold">CR Rating</span>
                  <span className="text-right">
                    {monsterData.cr.rating} ({monsterData.cr.xp} XP)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <ul className="flex gap-8 mb-4">
                  <li className="text-center">
                    <span className="font-bold">STR</span>
                    <div>
                      {monsterData.abilityScores.str.score} (
                      {monsterData.abilityScores.str.modifier})
                    </div>
                  </li>
                  <li className="text-center">
                    <span className="font-bold">DEX</span>
                    <div>
                      {monsterData.abilityScores.dex.score} (
                      {monsterData.abilityScores.dex.modifier})
                    </div>
                  </li>
                  <li className="text-center">
                    <span className="font-bold">CON</span>
                    <div>
                      {monsterData.abilityScores.con.score} (
                      {monsterData.abilityScores.con.modifier})
                    </div>
                  </li>
                  <li className="text-center">
                    <span className="font-bold">INT</span>
                    <div>
                      {monsterData.abilityScores.int.score} (
                      {monsterData.abilityScores.int.modifier})
                    </div>
                  </li>
                  <li className="text-center">
                    <span className="font-bold">WIS</span>
                    <div>
                      {monsterData.abilityScores.wis.score} (
                      {monsterData.abilityScores.wis.modifier})
                    </div>
                  </li>
                  <li className="text-center">
                    <span className="font-bold">CHA</span>
                    <div>
                      {monsterData.abilityScores.cha.score} (
                      {monsterData.abilityScores.cha.modifier})
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <ul>
                  {monsterData.damageResistances && (
                    <li className="flex gap-4 justify-between mb-1">
                      <span className="font-bold">Damage Resistances</span>
                      <span className="text-right">
                        {monsterData.damageResistances.join(", ")}
                      </span>
                    </li>
                  )}
                  {monsterData.conditionImmunities && (
                    <li className="flex gap-4 justify-between mb-1">
                      <span className="font-bold whitespace-nowrap">
                        Condition Immunities
                      </span>
                      <span className="text-right">
                        {monsterData.conditionImmunities.join(", ")}
                      </span>
                    </li>
                  )}
                  {monsterData.skills && (
                    <li className="flex gap-4 justify-between mb-1">
                      <span className="font-bold whitespace-nowrap">
                        Skills
                      </span>
                      <span className="text-right">
                        {monsterData.skills.join(", ")}
                      </span>
                    </li>
                  )}
                  {monsterData.damageImmunities && (
                    <li className="flex gap-4 justify-between mb-1">
                      <span className="font-bold whitespace-nowrap">
                        Damage Immunities
                      </span>
                      <span className="text-right">
                        {monsterData.damageImmunities.join(", ")}
                      </span>
                    </li>
                  )}
                  <li className="flex gap-4 justify-between mb-1">
                    <span className="font-bold whitespace-nowrap">Senses</span>
                    <span className="text-right">
                      {monsterData.senses.join(", ")}
                    </span>
                  </li>
                  <li className="flex gap-4 justify-between mb-1">
                    <span className="font-bold whitespace-nowrap">
                      Languages
                    </span>
                    <span className="text-right">
                      {monsterData.languages.length === 0
                        ? "-"
                        : monsterData.languages.join(", ")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          {monsterData.features && (
            <div className="mt-4 p-4">
              <ul>
                {monsterData.features?.map((feature) => (
                  <li key={feature.name} className="flex gap-4 mb-2">
                    <span className="font-bold whitespace-nowrap">
                      {feature.name}
                    </span>{" "}
                    - <span className="">{feature.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <div className="p-4">
              <h4 className="text-xl font-bold text-steel mb-4">Actions</h4>
              <ul>
                {monsterData.actions.map((action) => (
                  <li key={action.name} className="flex gap-4 mb-2">
                    <span className="font-bold whitespace-nowrap">
                      {action.name}
                    </span>{" "}
                    - <span>{action.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
