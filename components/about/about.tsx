import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};
function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="section-header-style">About</h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover
          md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] xl:mt-20"
          src={urlFor(pageInfo?.heroImage).url()}
          alt="Thomas selfie by river"
          width={600}
          height={700}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10 md:w-[600px]">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#2a90fd]/75">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
