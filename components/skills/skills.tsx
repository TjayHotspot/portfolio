import React from "react";
import { motion } from "framer-motion";
import MySkill from "./mySkill";
import { Skill } from "@/typings";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
    justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="section-header-style">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <MySkill key={skill._id} skill={skill} directionLeft={true} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <MySkill key={skill._id} skill={skill} directionLeft={false} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
