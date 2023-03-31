import { Experience } from "../../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == 'experience']{
    ...,
    technologies[]->
  }
`;

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let experiences;
  try {
    experiences = await sanityClient.fetch(query);
  } catch (error) {
    res.status(500).json({ experiences });
  }
  res.status(200).json({ experiences });
}
