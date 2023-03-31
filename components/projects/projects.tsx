import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="section-header-style">Projects</h3>

      <div
        className="relative flex w-full overflow-x-scroll mt-12 overflow-y-hidden h-[95%] snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400
      scrollbar-thhumb-[#2a90fd]/80"
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center p-14 md:p-28 h-screen"
          >
            <motion.div
              initial={{
                y: -300,
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
                src={urlFor(project.image).url()}
                alt="Projects"
                width={640}
                height={640}
              />
            </motion.div>
            <div className=" space-y-7 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#2a90fd]/50">
                  Case Studies {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    className="h-6 w-6"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                    width={6}
                    height={6}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left overflow-y-scroll h-2/4 md:h-1/4 lg:h-3/4 scrollbar-thin scrollbar-thumb-[#2a90fd]/80 scrollbar-track-gray-400 ">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[32%] bg-[#2a90fd]/10 left-0 h-[380px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
