import * as React from "react";
import type { HeadFC } from "gatsby";
import { TitleCard } from "../components/TitleCard";
import { RoomEntry } from "../components/RoomEntry";
import { ModuleEntry } from "../components/ModuleEntry";
import { Banner } from "../components/Banner";
import { rooms } from "../../content/rooms";
import { StaticImage } from "gatsby-plugin-image";
import { uniqueId } from "lodash";
import { monsters } from "../../content/monsters";
import { Encounter } from "../components/Encounter";

const IndexPage = () => {
  return (
    <main>
      <div className="bg-blood-red w-full">
        <div className="max-w-screen-desktop m-auto min-h-screen">
          <Banner
            headline={
              <span>
                <span className="font-bold">5e</span> Compatible
              </span>
            }
            sub="Campaign Setting Agnostic"
          />
          <TitleCard />
        </div>
      </div>
      <div className="max-w-screen-desktop m-auto">
        <div className="grid grid-cols-12 gap-4 mt-32">
          <div className="col-start-2 col-span-3 row-span-3">
            <ModuleEntry title="Background">
              <p>
                Beneath the ground, the Relic stirs. A thousand years have
                passed, the seal is broken.
              </p>
              <p>
                In a place above the stars, the traveller is startled awake by
                the notification ding. A source of power with the specified
                properties has been located. Whirring gears and blinking lights
                notify the traveller that the ship has changed direction.
              </p>
              <p>
                Many days later, the Knights of Tamin&apos;s Temper have heard
                the rumors and vow to discover the cause of the missing
                villagers. They seek the forest where the most recent ones were
                reported to have last been.
              </p>
              <hr className="my-2" />
              <p>
                This adventure will take players into the middle of an ongoing
                battle. On one side are the knights, who have only recently
                discovered that the temple is home to raging beasts. The beasts
                have prevented further progress into the temple, defending it to
                the death.
              </p>
              <p>
                The traveller, a being from another planet, is here, using the
                relic to turn kidnapped villagers into beasts. He promises them
                a chance to return to their former shapes if they return to him
                with the corpse of another creature. He is using these corpses
                to analyze battle information about this planet&apos;s
                creatures.
              </p>
            </ModuleEntry>
            <ModuleEntry title="Adventure Hooks">
              - knights seeking their missing comrades - villagers missing -
              merchant seeking a relic
            </ModuleEntry>

            {rooms?.slice(0, 3).map((room) => {
              return <RoomEntry key={uniqueId()} roomData={room} />;
            })}
          </div>

          <div className="col-span-7 row-span-1">
            <StaticImage
              className="rounded"
              alt="temple map"
              src="../images/maps/map.png"
            />
          </div>
          <div className="col-span-3">
            {rooms?.slice(3, 7).map((room) => {
              return <RoomEntry key={uniqueId()} roomData={room} />;
            })}
          </div>
          <div className="col-span-4">
            <div className="col-span-3">
              {rooms?.slice(7, rooms.length).map((room) => {
                return <RoomEntry key={uniqueId()} roomData={room} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cloud w-full">
        <div className="max-w-screen-desktop m-auto">
          <div className="grid grid-cols-12 gap-4 mt-32 pt-16">
            <div className="col-span-6">
              <Encounter
                encounterData={{
                  name: "Aquatic Creatures",
                  enemies: [
                    { monster: monsters.octopus, count: 3 },
                    { monster: monsters.giantCrab, count: 2 },
                    { monster: monsters.reefShark, count: 3 },
                    { monster: monsters.killerWhale, count: 1 },
                  ],
                  tactics: (
                    <>
                      <p>
                        All creatures will fight to the death, unless
                        they&apos;re able to steal a corpse (friend or foe) and
                        escape with it.
                      </p>
                      <p>
                        The Killer Whale and Reef Sharks will focus on the
                        nearest enemy with their bites. The sharks will prefer
                        pack tactics advantaged attacks over non, but will
                        always attack the closest despite this.
                      </p>
                      <p>
                        The Giant Crabs will try to grapple and drag PCs toward
                        the bigger creatures, hoping to get them killed and make
                        off with the body. If the PC is too strong to grapple,
                        the crab will attack instead.
                      </p>
                      <p>
                        The octopi float around helping to distract PCs, they
                        will also use Ink cloud when they&apos;re able and will
                        do so to disable PCs or to flee.
                      </p>
                    </>
                  ),
                }}
              />
            </div>
            <div className="col-span-6">
              <Encounter
                encounterData={{
                  name: "Dinosaurs",
                  enemies: [
                    { monster: monsters.ankylosaurus, count: 1 },
                    { monster: monsters.allosaurus, count: 1 },
                    { monster: monsters.pteranodon, count: 1 },
                    { monster: monsters.swarmofinsects, count: 3 },
                  ],
                  tactics: (
                    <>
                      <p>
                        All creatures will fight to the death, unless
                        they&apos;re able to steal a corpse (friend or foe) and
                        escape with it.
                      </p>
                      <p>
                        The Ankylosaurus will tail attack the nearest enemy. The
                        Allosaurus will attempt to pounce the weakest looking
                        enemy. The pteranodon will swoop in to make attacks,
                        looking for distracted enemies. The swarms move randomly
                        from enemy to enemy.
                      </p>
                    </>
                  ),
                }}
              />
            </div>
            <div className="col-span-6">
              <Encounter
                encounterData={{
                  name: "Winged Beasts",
                  enemies: [
                    { monster: monsters.eagle, count: 3 },
                    { monster: monsters.bloodhawk, count: 3 },
                    { monster: monsters.giantbat, count: 2 },
                    { monster: monsters.griffon, count: 2 },
                  ],
                  tactics: (
                    <>
                      <p>
                        All creatures will fight to the death, unless
                        they&apos;re able to steal a corpse (friend or foe) and
                        escape with it.
                      </p>
                      <p>
                        The eagles will fly down and attack, then fly back up.
                        If an eagle triggers an AoO from a PC, the griffons or
                        bat will also fly down and attack that foe.
                      </p>
                      <p>
                        Otherwise, the creatures will always attack the weakest
                        looking target.
                      </p>
                    </>
                  ),
                }}
              />
            </div>
            <div className="col-span-6">
              <Encounter
                encounterData={{
                  name: "The Traveller",
                  enemies: [
                    { monster: monsters.doppleganger, count: 1 },
                    { monster: monsters.chimera, count: 1 },
                  ],
                  tactics: (
                    <>
                      <p>
                        The chimera will defend the traveller at all costs,
                        including fighting to the death or dying to allow him to
                        escape.
                      </p>
                      <p>
                        The traveller will not participate in the fight unless
                        attacked directly. He will instead continue preparing
                        his ship to depart.
                      </p>
                    </>
                  ),
                }}
              />
            </div>
            <div className="col-span-6">
              <Encounter
                encounterData={{
                  name: "Random Encounters",
                  enemies: [
                    { monster: monsters.goat, count: 1 },
                    { monster: monsters.basilisk, count: 1 },
                    { monster: monsters.polarbear, count: 1 },
                    { monster: monsters.griffon, count: 1 },
                    { monster: monsters.owlbear, count: 1 },
                    { monster: monsters.yeti, count: 1 },
                    { monster: monsters.wereboar, count: 1 },
                  ],
                  tactics: (
                    <>
                      <p>
                        The temple is infested with packs of roaming beasts.
                        While travelling in the temple, entering any hallway
                        should trigger a roll on the random encounter table. If
                        the PCs attempt to long rest anywhere inside the temple,
                        their sleep is interrupted by beasts from the table.
                        Short resting triggers a roll.{" "}
                      </p>
                      <table className="table-auto w-full mt-4 border border-collapse border-steel-500">
                        <thead className="text-white bg-steel">
                          <td>
                            <p className="p-4">d10</p>
                          </td>
                          <td>Encounter</td>
                        </thead>
                        <tbody>
                          <tr className="border">
                            <td>
                              <p className="p-4">1</p>
                            </td>
                            <td>Goat x 3, Basilisk</td>
                          </tr>
                          <tr className="border">
                            <td>
                              <p className="p-4">2-3</p>
                            </td>
                            <td>Polar bear x 2</td>
                          </tr>
                          <tr className="border">
                            <td>
                              <p className="p-4">4-5</p>
                            </td>
                            <td>Griffon</td>
                          </tr>
                          <tr className="border">
                            <td>
                              <p className="p-4">6-7</p>
                            </td>
                            <td>Yeti</td>
                          </tr>
                          <tr className="border">
                            <td>
                              <p className="p-4">7-8</p>
                            </td>
                            <td>Owlbear</td>
                          </tr>
                          <tr className="border">
                            <td>
                              <p className="p-4">9-10</p>
                            </td>
                            <td>Wereboar</td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>The Temple of Beasts</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"
    />
  </>
);
