import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  skill: Skill;
  directionLeft: boolean;
};

function MySkill({ directionLeft, skill }: Props) {
  let drectionLeft = true;

  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          className="rounded-full border border-gray-500 object-cover w-20 h-20 lg:h-24 lg:w-24  filter group-hover:grayscale transition duration-300 ease-in-out"
          src={urlFor(skill.image).url()}
          alt={skill.title}
          height={65}
          width={65}
        />
      </motion.div>
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
      ease-in-out group-hover:bg-white h-20 w-20 lg:h-24 lg:w-24 rounded-full z-0 "
      >
        <div className="flex items-center justify-center h-full mx-auto">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default MySkill;
