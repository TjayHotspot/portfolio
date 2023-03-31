import { Project } from "../../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == 'project']{
    ...,
    technologies[]->
  }
`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let projects;
  try {
    projects = await sanityClient.fetch(query);
  } catch (error) {
    res.status(500).json({ projects });
  }

  res.status(200).json({ projects });
}
