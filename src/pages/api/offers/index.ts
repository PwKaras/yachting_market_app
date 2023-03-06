import type { NextApiRequest, NextApiResponse } from "next";
import getRecentOffers from "@/services/offers/getRecent";
import { FieldSet } from "airtable";

const offersApi = async (req: NextApiRequest, res: NextApiResponse<FieldSet[]>) => {
  const offers = await getRecentOffers(2);
  res.status(200).json(offers);
};

export default offersApi;
