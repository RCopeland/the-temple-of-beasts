import React, { ReactNode } from "react";
export interface RoomData {
  area: string;
  roomNumber: string;
  roomName: string;
  preReadAloudText?: ReactNode;
  mainText: ReactNode;
  postReadAloudText?: ReactNode;
}

export const rooms: RoomData[] = [
  {
    area: "A",
    roomNumber: "1",
    roomName: "The Entrance",
    preReadAloudText: (
      <p>
        A large room with stone walls and floor, open arches in the walls allow
        the wind to blow in, carrying with it detritus from the forest floor.
        Lying at the center of the room is a{" "}
        <span className="font-bold">stone altar</span>.
      </p>
    ),
    mainText: (
      <>
        <p>
          Upon the altar are several branches with berries, assorted fruits and
          vegetables, a few gold coins.
        </p>
        <p>
          Locals come here to offer small trinkets or gold. A successful{" "}
          <span className="font-bold">DC10 Religion or Nature check</span>{" "}
          reveals this to be an altar to the god Silvanus, god of nature. A
          successful <span className="font-bold">DC10 perception check</span>{" "}
          reveals scratches on the floor that indicate a secret door on the east
          wall.
        </p>
        <p>
          Searching the altar reveals the mechanism that opens the door. Pushing
          it causes a stone slab that previously blended into the wall to swing
          out, revealing a dark passage to the east. After a few seconds, a
          rumble can be heard within the wall, and the door slowly closes,
          settling back into its place, blending into the wall.
        </p>
      </>
    ),
    postReadAloudText: null,
  },
  {
    area: "A",
    roomNumber: "2",
    roomName: "Treasure Alcove",
    preReadAloudText: (
      <p>
        This small room has a dirt floor with a stone tile in the center. In the
        center of the tile, is an open chest.
      </p>
    ),
    mainText: (
      <>
        <p>
          The <span className="font-bold">chest</span> is covered in elaborate
          carvings and magic runes, but they are no longer magical,having long
          since spent their power.
        </p>
        <p>
          Careful examination of the chest, or a{" "}
          <span className="font-bold">DC15 Investigation check</span> reveals a
          false bottom, covering a hole with a wooden ladder leading down.
        </p>
      </>
    ),
    postReadAloudText: null,
  },
  {
    area: "A",
    roomNumber: "3",
    roomName: "The Barracks",
    preReadAloudText: (
      <p>
        Decending into the darkness, you smell earth and mold. Eventually, you
        come to the ground below, which connects to a tiny hallway, paved with
        stone blocks. Spilling into the hallway is the flickering light of a
        campfire, shining out from the only doorway.
      </p>
    ),
    mainText: (
      <>
        <p>
          This room is where the{" "}
          <span className="font-bold">Knights of Tamin’s Temper</span> make
          camp.
        </p>
        <p>
          Two figures, humanoid, <span className="font-bold">(2 x knight)</span>{" "}
          in full plate armor bar entry into the room. They cross their swords
          as you approach, blocking your path. If the players can make
          themselves believed to be lawful or to support a just cause, they are
          permitted entry.
        </p>
      </>
    ),
    postReadAloudText: (
      <p>
        Entering the room, you see a series of cots, most of which have an
        owner, either sleeping, or awake and preparing gear or weapons.
        Generally, the knights pay you little mind, they go about their
        business.
      </p>
    ),
  },
  {
    area: "A",
    roomNumber: "4",
    roomName: "The Infirmary",
    preReadAloudText: (
      <p>
        You hear the wailing of men in pain. This room is filled with cots,
        bedrolls and makeshift beds. The majority of these are blood soaked and
        occupied by a knight with some kind of serious injury.
      </p>
    ),
    mainText: (
      <>
        <p>
          Some of the knights have been beaten severely, or bitten. Others have
          been poisoned or burned. You also notice in the corner of the room,
          there are a few <span className="font-bold">statues of knights</span>,
          forever locked in a state of fear.
        </p>
        <p>
          There is a younger <span className="font-bold">knight</span>, serving
          as the primary battle medic. He knows about most of the types of
          creatures that the knights have encountered so far.
        </p>
      </>
    ),
    postReadAloudText: null,
  },
  {
    area: "A",
    roomNumber: "5",
    roomName: "Dining Hall",
    preReadAloudText: (
      <p>
        Huge stone room, remnants of tables and chairs, was at some long time
        ago a grand dining room. Now it is covered in battle scars and blood.
        Varied winged beasts circle above as a pair of knights tries in vain to
        swing their swords and jab with their spears.
      </p>
    ),
    mainText: (
      <p>
        Flying about this room are three eagles, three blood hawks, two giant
        bats and two Griffons. See the{" "}
        <span className="font-bold">winged beasts encounter</span> for details.
        There are also two <span className="font-bold">knights</span>, armed
        with spears.
      </p>
    ),
    postReadAloudText: null,
  },
  {
    area: "A",
    roomNumber: "6",
    roomName: "Armoury",
    preReadAloudText: (
      <p>
        This room could have been an armoury in times past, evidenced by the
        iron shelves and the cage. However, the room is now flooded with foul
        water. You see <span className="font-bold">two knights</span>{" "}
        frantically pulling a third from the water, his legs caught by some kind
        of tentacled beast.
      </p>
    ),
    mainText: (
      <p>
        The <span className="font-bold">knight</span> being pulled from the
        water is being pulled by an <span className="font-bold">octopus</span>{" "}
        (grappled). In the water, there are two more octopi, two Giant Crabs,
        three Reef Sharks, and a Killer Whale. See the{" "}
        <span className="font-bold">aquatic beasts encounter</span> for details.
        Two of the knights are armed with spears, the one being saved dropped
        his longsword into the water.{" "}
      </p>
    ),
    postReadAloudText: null,
  },
  {
    area: "A",
    roomNumber: "7",
    roomName: "Storehouse",
    preReadAloudText: (
      <p>
        You are assaulted with the roars of the creatures in this room. You see
        large shelves, broken crates, and long empty barrels. This must have
        been a storeroom or warehouse. You see, stomping around the room, are
        <span className="font-bold">lizard-like beasts</span>, some with teeth,
        some with feathers. The nearest ones take note of you and begin to head
        your way.
      </p>
    ),
    mainText: (
      <p>
        This room contains the corpses of three{" "}
        <span className="font-bold">knights</span>, armed with two spears and a
        longsword. They were clearly killed in batttle. The creatures in the
        room include an <span className="font-bold">Ankylosaurus</span>, a{" "}
        <span className="font-bold">Allosaurus</span>, and a{" "}
        <span className="font-bold">Pteranodon</span>. There are also swarms of
        insects surrounding the corpses. They will join the battle if disturbed.
        See the <span className="font-bold">dinosaurs encounter</span> for
        details.
      </p>
    ),
    postReadAloudText: null,
  },
  {
    area: "A",
    roomNumber: "8",
    roomName: "The Brewery",
    preReadAloudText: (
      <p>
        The room is covered in blood. There are knight corpses everywhere. This
        large room has, lining the walls, tables and shelves bearing
        instruments. There are also large barrels full of sour liquid.
      </p>
    ),
    mainText: (
      <p>
        This room was once a brewery. The liquid in the barrels are spirits that
        have gone rotten. A character drinking this liquid must make a{" "}
        <span className="font-bold">DC 12 Consitution saving throw</span> or be{" "}
        <span className="font-bold">poisoned</span>. The corpses in this room
        are covered in <span className="font-bold">swarms of insects</span> that
        will attack if disturbed.
      </p>
    ),
    postReadAloudText: null,
  },
  {
    area: "A",
    roomNumber: "9",
    roomName: "The AntiChamber",
    preReadAloudText: (
      <p>
        The small room is covered in carvings and runes. Around the room, there
        are tables made of metal, covered with vials and tubes. You see liquid
        boiling and papers covered in strange markings.
      </p>
    ),
    mainText: (
      <>
        <p>
          A <span className="font-bold">DC 10 History or Arcana check</span>{" "}
          will reveal that the runes and carvings suggest worship of a powerful
          item, likely contained in the adjoining room.
        </p>
        <p>
          Once a sacred space for devotion, this room is now being used as a
          makeshift laboratory. If a character investigates the laboratory, they
          will discover vials of blood and pieces of flesh in some of the
          beakers.
        </p>
      </>
    ),
    postReadAloudText: null,
  },
  {
    area: "A",
    roomNumber: "10",
    roomName: "The Dungeon",
    preReadAloudText: (
      <p>
        A large room with stone walls and a cobblestone floor. The walls are
        lined with cages made of iron bars and in the center of the room sits a
        wooden table. The table has scratches and blood stains covering it.
      </p>
    ),
    mainText: (
      <>
        <p>
          The table is secured to the floor and has a set of manticles attached
          to it. Most of the cages are empty, except for a humanoid, male,
          <span className="font-bold">villager</span> sitting in the corner,
          away from the door. In another cage is a{" "}
          <span className="font-bold">pig</span>, a{" "}
          <span className="font-bold">cow</span>, and a{" "}
          <span className="font-bold">chicken</span>.
        </p>
        <p>
          If questioned, the villager will reveal that some man-shaped thing is
          changing people into beasts. The beasts are offered a chance to change
          back, but only if they return to the man with a corpse. The corpse can
          be another beast or a knight, any corpse will do.
        </p>
      </>
    ),
    postReadAloudText: null,
  },
  {
    area: "A",
    roomNumber: "11",
    roomName: "The Ship",
    preReadAloudText: (
      <p>
        This room is emitting strange blue light. It comes from panels set in
        the walls, which are made of metal. The floor shines from the reflected
        light, except where blocked by a set of four mounted chairs. At the far
        end of the room is a larger chair, surrounded on three sides by large
        panels.
      </p>
    ),
    mainText: (
      <>
        <p>
          This is the traveller’s ship. A few months ago, sensing the power from
          the relic, the traveller headed to this place. However, as he got
          closer, his ship malfunctioned and crash landed in the middle of the
          temple.
        </p>
        <p>
          For the past months, the traveller has been repairing his ship while
          conducting his experiments on some of the local villagers. A{" "}
          <span className="font-bold">DC15 Investigation check</span> reveals
          the panels to contain navigation information that seems to point
          off-world.
        </p>
      </>
    ),
    postReadAloudText: null,
  },
  {
    area: "A",
    roomNumber: "12",
    roomName: "The Relic",
    preReadAloudText: (
      <p>
        The walls are covered in etchings and runes. At back of the chamber
        stands an altar with a single glowing item resting upon it. In the
        center of the room, is a hulking creature, ridden by another hooded
        figure.
      </p>
    ),
    mainText: (
      <>
        <p>
          The item on the altar is the{" "}
          <span className="font-bold">Ring of the Cloven Hoof</span>. A{" "}
          <span className="font-bold">DC15 History or Arcana check</span> will
          reveal that the item was worshipped by an ancient cult seeking to
          return to their bestial nature.
        </p>
        <p>
          The hulking creature is a <span className="font-bold">Chimera</span>,
          ridden by the <span className="font-bold">Traveller</span>. See the
          <span className="font-bold">Traveller encounter</span> for details.
        </p>
      </>
    ),
    postReadAloudText: null,
  },
];
