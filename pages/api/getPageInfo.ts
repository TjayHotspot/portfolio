import { PageInfo } from "../../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == 'pageInfo'][0]
`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let pageInfo;
  try {
    pageInfo = await sanityClient.fetch(query);
  } catch (error) {
    res.status(500).json({ pageInfo });
  }
  res.status(200).json({ pageInfo });
}
