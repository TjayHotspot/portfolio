import { Skill } from "../../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == 'skill']`;

type Data = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let skills;
  try {
    skills = await sanityClient.fetch(query);
  } catch (error) {
    res.status(500).json({ skills });
  }
  res.status(200).json({ skills });
}
