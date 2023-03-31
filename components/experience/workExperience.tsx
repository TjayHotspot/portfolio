import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./experienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen overflow-hidden text-left 
     md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="section-header-style">Experience</h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory h-3/4 mt-14
      scrollbar scrollbar-thumb-[#2a90fd]/80 scrollbar-track-gray-400"
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
