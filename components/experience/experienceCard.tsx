import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};
function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 cursor-pointer transition-opacity duration-200 overflow-hidden
    flex-shrink-0 w-[500px] xl:w-[750px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 "
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <Image
          className="h-32 w-32 rounded-full xl:w-[180px] xl:h-[180px] object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt={experience.company}
          width={160}
          height={160}
        />
      </motion.div>
      <div className="p-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-2">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              className=" h-9 w-9 rounded-full object-cover object-center"
              src={urlFor(technology.image).url()}
              alt={technology.title}
              width={32}
              height={32}
            />
          ))}
        </div>
        <p className="uppercase py-2 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
      </div>
      <ul className="list-disc space-y-3 px-10 pl-24 text-lg text-left w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-[#2a90fd]/80 scrollbar-track-gray-400 ">
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
