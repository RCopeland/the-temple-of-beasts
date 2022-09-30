import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const TitleCard = () => {
  return (
    <section className="grid grid-cols-12 gap-4 bg-blood-red text-white">
      <div className="col-start-5 col-span-4 mx-14 mt-32">
        <StaticImage
          className="my-5 place-self-center"
          alt="The Temple of Beasts"
          src="../images/art/title.png"
        />
        <p className="text-center">written by Rob Copeland</p>
      </div>

      <div className="col-start-4 col-span-6 row-start-2">
        <StaticImage
          className="rounded mx-28"
          alt="weird art"
          src="../images/art/art.jpeg"
        />
      </div>
      <div className="col-start-4 col-span-6 row-start-3">
        <p className="font-light">
          Beneath the ground, the Relic stirs. A thousand years have passed, the
          seal is broken. This adventure will take players into the middle of an
          ongoing battle. On one side are the knights, who have only recently
          discovered that the temple is home to raging beasts.
        </p>
        <p className="text-center py-4">
          For characters of{" "}
          <strong className="px-2 font-bold">level 1 - 3</strong>
        </p>
      </div>
    </section>
  );
};
