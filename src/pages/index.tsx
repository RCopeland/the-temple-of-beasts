import * as React from "react";
import type { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { TitleCard } from "../components/TitleCard";
import { RoomEntry } from "../components/RoomEntry";
import { ModuleEntry } from "../components/ModuleEntry";
import { Banner } from "../components/Banner";

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
            <RoomEntry
              roomNumber="A1"
              title="Entrance"
              preReadAloudText={
                <p>
                  A large room with stone walls and floor, open arches in the
                  walls allow the wind to blow in, carrying with it detritus
                  from the forest floor. Lying at the center of the room is a
                  <span className="font-bold"> stone altar</span>.
                </p>
              }
            >
              <>
                <p>
                  Upon the altar are several branches with berries, assorted
                  fruits and vegetables, a few gold coins.
                </p>
                <p>
                  Locals come here to offer small trinkets or gold. A successful
                  <span className="font-bold">
                    &nbsp;DC10 Religion or Nature check&nbsp;
                  </span>
                  reveals this to be an altar to the god Silvanus, god of
                  nature. A successful
                  <span className="font-bold"> DC10 perception check </span>
                  reveals scratches on the floor that indicate a
                  <span className="font-bold"> secret door </span> on the east
                  wall.
                </p>
                <p>
                  Searching the altar reveals the mechanism that opens the door.
                  Pushing it causes a stone slab that previously blended into
                  the wall to swing out, revealing a dark passage to the east.
                  After a few seconds, a rumble can be heard within the wall,
                  and the door slowly closes, settling back into its place,
                  blending into the wall.
                </p>
              </>
            </RoomEntry>
            <RoomEntry roomNumber="A2" title="Hidden Treasure">
              <p>
                Tracks surround an open chest in the middle of the room. The
                chest is covered in elaborate carvings and magic runes, long
                since spent their power. The chest sits on a sliding panel that
                opens to reveal a staircase down. In order to open the sliding
                panel, enough weight and magical power must be placed within the
                chest and the lid closed. When the party manages to solve the
                puzzle, a metal whirring can be heard below as the sliding panel
                opens. Sand and dirt fall into the widening hole. Cobwebs span
                the new opening and a dank smell of mold hits you as you stare
                into the darkness.
              </p>
            </RoomEntry>
            <RoomEntry roomNumber="A3" title="The Barracks">
              <p>
                Coming up to the door, the party sees the light of a campfire,
                which also illuminates two figures, humanoid, in full plate
                armor. They cross their swords as you approach, blocking your
                path. You can also smell food cooking coming from within. This
                room is where the knights of the silver gauntlet make camp. If
                the players can make themselves believed to be lawful or to
                support a just cause, they are permitted entry. Entering the
                room, you see a series of cots, most of which have an owner,
                either sleeping up and preparing gear or weapons. Generally, the
                knights pay you little mind, they go about their business.
              </p>
            </RoomEntry>
          </div>

          <div className="col-span-7 row-span-1">
            <StaticImage
              className="rounded"
              alt="temple map"
              src="../images/maps/map.png"
            />
          </div>
          <div className="col-span-3">
            <RoomEntry roomNumber="A4" title="The Infirmary">
              <p>
                This room is filled with cots, the same as in area A3. However,
                the majority of these are blood soaked and occupied by a knight
                with some kind of serious injury. Some have been beaten
                severely, or bitten. Some have been poisoned and burned. You
                also notice in the corner of the room, there are a few statues
                of knights, forever locked in a state of battle. There is a
                younger knight, serving as the primary battle medic. He knows
                about most of the types of creatures that the knights have
                encountered so far.{" "}
              </p>
            </RoomEntry>
            <RoomEntry roomNumber="A5" title="Dining Hall">
              <p>
                Huge stone room, remnants of tables and chairs, was at some long
                time ago a grand dining room. Now it is covered in battle scars
                and blood. Varied winged beasts circle above as a squad of
                knights tries in vain to swing their swords and jab with their
                spears.{" "}
              </p>
            </RoomEntry>
            <RoomEntry roomNumber="A6" title="Armoury">
              <p>
                This room could have been an armoury in times past, evidenced by
                the iron shelves and the cage. However, the room is now half
                flooded and all manner of aquatic creatures are swirling in the
                deep water. You see three knights frantically stabbing into the
                water with their spears.
              </p>
            </RoomEntry>
            <RoomEntry roomNumber="A7" title="Storehouse">
              <p>
                A gigantic room filled with shelves and smashed crates. You see
                gigantic beasts fighting 2 or 3 knights each. The roars are
                deafening.
              </p>
            </RoomEntry>
          </div>
          <div className="col-span-4">
            <RoomEntry roomNumber="A8" title="Brewery">
              <p>
                The room is covered in blood. There are knight corpses
                everywhere. This was a battlefield, but is one no longer. Its
                now a menagerie of beasts all fighting with each other to claim
                the corpses of the knights. There is a decorated entry to the
                next room, but the beasts guard it frantically.
              </p>
            </RoomEntry>
            <RoomEntry roomNumber="A9" title="The Antichamber">
              <p>
                Once a sacred space for devotion, this small room is now covered
                in glass bottles and books. Signs of experiments in progress.{" "}
              </p>
            </RoomEntry>
            <RoomEntry roomNumber="A10" title="The Dungeon">
              <p>
                Once a sacred space for devotion, this small room is now covered
                in glass bottles and books. Signs of experiments in progress.
              </p>
            </RoomEntry>
            <RoomEntry roomNumber="A11" title="The Prison">
              <p>
                This room is lined with cages, in each are commoners and a few
                knights. In some others, are beasts. The knights know that they
                are being transmuted into beasts, and then are offered a chance
                to change back if they deliver a (any) corpse to the traveller.
              </p>
            </RoomEntry>
            <RoomEntry roomNumber="A12" title="The Ship">
              <p>
                This room is enclosed in metal, it seems to be part of a craft
                that has crashed on top of a hallway in this structure. On the
                walls there are display panels with blinking lights and moving
                dials. This room contains a giant screen that displays a field
                of stars. You can see lines drawn to one of the dots and
                labelled in a language you've never seen. There also appears to
                be a some numbers flashing and the counter is blinking red. In
                the captain's chair, sits an old man, who welcomes you.
              </p>
            </RoomEntry>
            <RoomEntry roomNumber="A13" title="The Relic">
              <p>
                The door to this room is elaborately decorated in ancient
                patterns. Next to the door way is a plate filled with offerings,
                long ruined by time. At the center of the room is a pedastal, on
                top of which is floating a single golden ring, mounted to which
                is a small black gem in the shape of a goat's head. - ring of
                the cloven hoof - magic item that changes the villager into a
                random thing - relic inspired worship in a primitive cult who
                built the temple. The power attracted the traveller. Once the
                relic is removed, the party must escape the temple in 10 rounds
                before it collapses, killing them.
              </p>
            </RoomEntry>
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
