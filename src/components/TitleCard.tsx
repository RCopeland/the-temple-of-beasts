import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const TitleCard = () => {
  return (
    <section className="grid grid-cols-12 gap-4 bg-blood-red text-white sm:text-lg md:text-2xl md:py-12 md:min-h-screen">
      <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 mx-8">
        <StaticImage
          className="max-w-sm mt-4 md:mt-24 m-auto"
          alt="The Temple of Beasts"
          src="../images/art/title.png"
          layout="fullWidth"
        />
        <p className="text-center mb-4">written by Rob Copeland</p>

        <StaticImage
          className="rounded"
          alt="weird art"
          src="../images/art/art.jpeg"
          layout="fullWidth"
        />
      </div>
      <div className="col-start-2 col-span-10">
        <p className="font-light">
          Beneath the ground, the Relic stirs. A thousand years have passed, the
          seal is broken. This adventure will take players into the middle of an
          ongoing battle. On one side are the knights, who have only recently
          discovered that the temple is home to raging beasts.
        </p>
        <p className="text-center py-4 mt-8 md:mt-12">
          For characters of{" "}
          <strong className="px-2 font-bold">level 1 - 3</strong>
        </p>
      </div>
    </section>
  );
};
