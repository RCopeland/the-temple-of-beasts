import * as React from "react";
import type { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { RoomEntry } from "../components/RoomEntry";
import { ColumnLayout } from "../components/ColumnLayout";
import { ModuleHeading } from "../components/ModuleHeading";
import { ModuleEntry } from "../components/ModuleEntry";

const IndexPage = () => {
  return (
    <main>
      <ModuleHeading title="The Temple of Beasts">
        <p>intended for a group of four, level 3 characters</p>
      </ModuleHeading>
      <ModuleEntry title="Overview">
        <p>
          This adventure is about a temple, built to house a relic of chaos. The
          temple was built long ago and forgotten, sealed and concealed deep in
          the forest. The relic has a mate, the relic of law. Recently
          discovered by a group of knights, the relic of law guides them to seek
          out and destroy the relic of chaos. Simultaneously, in a nearby
          village, several villagers have gone missing. They disappear from
          their beds or while traveling. Are the disappearances related to the
          relics and the temple?
        </p>
      </ModuleEntry>
      <ModuleEntry title="Background">
        <p>
          The relic of chaos is actually one of a pair of magical items. They
          were created to be mates and call to each other. In ages past, the
          relics were separated and sealed within hidden temples, a good
          distance apart. The knights discover the relic of law while excavating
          a temple in the pursuit of holy relics. The law relic guides them to
          break from their regiment and to seek out the chaos relic. Currently,
          the knights have discovered the chaos temple and have set up a camp
          within it. They are currently in a stalemate with the other occupants
          of the temple, the beasts. The chaos relic has also been recently
          uncovered. Stirred by the discovery of the law relic, the chaos relic
          draws to it a traveller. The traveller is an interplanetary creature,
          seeking to study the unique lifeforms of the planets it encounters. A
          shapechanger by nature, the traveller finds the chaos relic and begins
          to use it to transform locals into all manner of beasts. He then
          engages the beasts in battle with each other in order to collect
          information for his logs. If the relics are reunited, the creator is
          summoned, collects them both, and disappears.
        </p>
      </ModuleEntry>
      <ModuleEntry title="Adventure Hooks">
        - knights seeking their missing comrades - villagers missing - merchant
        seeking a relic
      </ModuleEntry>

      <StaticImage
        width={1000}
        height={780.52}
        alt="temple map"
        src="../images/maps/numbered-temple-map-min.jpg"
      />
      <ColumnLayout>
        <RoomEntry roomNumber="A1" title="Entrance">
          <p>
            A large room with stone walls and floor, open arches allow the wind
            to blow in, carrying with it detritus from the forest floor. Lying
            at the center of this dusty room is a stone altar. Upon the altar
            are several branches with berries, assorted fruits and vegetables, a
            few gold coins. A successful DC10 Religion check reveals this to be
            an altar to the god Silvanus, god of nature. A successful DC10
            perception check reveals scratches on the floor that seem to
            indicate a door on the east wall. Searching the altar reveals the
            mechanism that opens the door. Pushing it causes a stone slab that
            previously blended into the wall to swing out, revealing a dark
            passage to the east. After a few seconds, a rumble can be heard
            within the wall, and the door slowly closes, settling back into its
            place, blending into the wall.
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A2" title="Hidden Treasure">
          <p>
            Tracks surround an open chest in the middle of the room. The chest
            is covered in elaborate carvings and magic runes, long since spent
            their power. The chest sits on a sliding panel that opens to reveal
            a staircase down. In order to open the sliding panel, enough weight
            and magical power must be placed within the chest and the lid
            closed. When the party manages to solve the puzzle, a metal whirring
            can be heard below as the sliding panel opens. Sand and dirt fall
            into the widening hole. Cobwebs span the new opening and a dank
            smell of mold hits you as you stare into the darkness.
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A3" title="The Barracks">
          <p>
            Coming up to the door, the party sees the light of a campfire, which
            also illuminates two figures, humanoid, in full plate armor. They
            cross their swords as you approach, blocking your path. You can also
            smell food cooking coming from within. This room is where the
            knights of the silver gauntlet make camp. If the players can make
            themselves believed to be lawful or to support a just cause, they
            are permitted entry. Entering the room, you see a series of cots,
            most of which have an owner, either sleeping up and preparing gear
            or weapons. Generally, the knights pay you little mind, they go
            about their business.
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A4" title="The Infirmary">
          <p>
            This room is filled with cots, the same as in area A3. However, the
            majority of these are blood soaked and occupied by a knight with
            some kind of serious injury. Some have been beaten severely, or
            bitten. Some have been poisoned and burned. You also notice in the
            corner of the room, there are a few statues of knights, forever
            locked in a state of battle. There is a younger knight, serving as
            the primary battle medic. He knows about most of the types of
            creatures that the knights have encountered so far.{" "}
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A5" title="Dining Hall">
          <p>
            Huge stone room, remnants of tables and chairs, was at some long
            time ago a grand dining room. Now it is covered in battle scars and
            blood. Varied winged beasts circle above as a squad of knights tries
            in vain to swing their swords and jab with their spears.{" "}
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A6" title="Armoury">
          <p>
            This room could have been an armoury in times past, evidenced by the
            iron shelves and the cage. However, the room is now half flooded and
            all manner of aquatic creatures are swirling in the deep water. You
            see three knights frantically stabbing into the water with their
            spears. A gigantic room filled with shelves and smashed crates. You
            see gigantic beasts fighting 2 or 3 knights each. The roars are
            deafening.
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A7" title="Storehouse">
          <p>
            A gigantic room filled with shelves and smashed crates. You see
            gigantic beasts fighting 2 or 3 knights each. The roars are
            deafening.{" "}
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A8" title="Brewery">
          <p>
            The room is covered in blood. There are knight corpses everywhere.
            This was a battlefield, but is one no longer. Its now a menagerie of
            beasts all fighting with each other to claim the corpses of the
            knights. There is a decorated entry to the next room, but the beasts
            guard it frantically.
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A9" title="The Antichamber">
          <p>
            Once a sacred space for devotion, this small room is now covered in
            glass bottles and books. Signs of experiments in progress.{" "}
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A10" title="The Antichamber">
          <p>
            Once a sacred space for devotion, this small room is now covered in
            glass bottles and books. Signs of experiments in progress.
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A11" title="The Prison">
          <p>
            This room is lined with cages, in each are commoners and a few
            knights. In some others, are beasts. The knights know that they are
            being transmuted into beasts, and then are offered a chance to
            change back if they deliver a (any) corpse to the traveller.
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A12" title="The Ship">
          <p>
            This room is enclosed in metal, it seems to be part of a craft that
            has crashed on top of a hallway in this structure. On the walls
            there are display panels with blinking lights and moving dials. This
            room contains a giant screen that displays a field of stars. You can
            see lines drawn to one of the dots and labelled in a language you've
            never seen. There also appears to be a some numbers flashing and the
            counter is blinking red. In the captain's chair, sits an old man,
            who welcomes you.
          </p>
        </RoomEntry>
        <RoomEntry roomNumber="A13" title="The Relic">
          <p>
            The door to this room is elaborately decorated in ancient patterns.
            Next to the door way is a plate filled with offerings, long ruined
            by time. At the center of the room is a pedastal, on top of which is
            floating a single golden ring, mounted to which is a small black gem
            in the shape of a goat's head. - ring of the cloven hoof - magic
            item that changes the villager into a random thing - relic inspired
            worship in a primitive cult who built the temple. The power
            attracted the traveller. Once the relic is removed, the party must
            escape the temple in 10 rounds before it collapses, killing them.
          </p>
        </RoomEntry>
      </ColumnLayout>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>The Temple of Beasts</title>;
