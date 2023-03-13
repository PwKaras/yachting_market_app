import type { NextApiRequest, NextApiResponse } from "next";
import getRecentOffers from "@/services/offers/getRecent";
import { FieldSet, Records } from "airtable";
import createOffer from "@/services/offers/create";

const offersApi = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  switch (req.method) {
    case "GET":
      const offers = await getRecentOffers(2);
      res.status(200).json(offers);

      break;
    case "POST":
      try {
        const payload = req.body;
        const offer = await createOffer(payload);
        res.status(200).json({ ...offer });
      } catch (error) {
        res.status(422).json({ status: "not_created", error });
      }

      break;

    default:
      res.status(400);
      break;
  }
};

export default offersApi;
