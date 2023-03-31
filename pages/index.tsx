import About from "@/components/about/about";
import Contact from "@/components/contact-me/contact";
import Header from "@/components/header/Header";
import WorkExperience from "@/components/experience/workExperience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import { PageInfo, Experience, Project, Skill, Social } from "../typings";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { fetchPageInfo } from "@/util/fetchPageInfo";
import { fetchSocials } from "@/util/fetchSocials";
import { fetchProjects } from "@/util/fetchProjects";
import { fetchSkills } from "@/util/fetchSkills";
import { fetchExperiences } from "@/util/fetchExperiences";
import { urlFor } from "@/sanity";

/*
****** DO RESEARCH ON.. ******
  - getSocials.ts
  - typings.d.ts
  - sanity.ts
  - .env.example / .env.local
  - what are the different types in the sanity schema of this project?
  - Fetch skills, where is the process.env.NEXT_PUBLIC_BASE_URL coming from?
  - how do .env files work?
  - how is the api, Data, and typings all connected?
*/

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ socials, pageInfo, experiences, skills, projects }: Props) => {
  return (
    <div
      className="snap-y snap-mandatory z-0 h-screen overflow-y-scroll overflow-x-hidden bg-[rgb(36,36,36)]
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2a90fd]/80"
    >
      <Head>
        <title>Thomas's Portfolio</title>
        <meta
          name="description"
          content="This is a portfolio that showcases all of Thomas's accomplishments and skills that he aquired during his software/web development journey"
        />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-center">
        <Contact pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={urlFor(pageInfo.profilePic).url()}
              alt="to-top"
              width={40}
              height={40}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    revalidate: 60,
  };
};
