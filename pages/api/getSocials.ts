import { Social } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == "social"]
`;

type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let socials;
  try {
    socials = await sanityClient.fetch(query);
  } catch (error) {
    res.status(500).json({ socials });
  }

  res.status(200).json({ socials });
}
