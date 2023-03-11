import airDB from "../airtableClinet";
import { Offer } from "@/types/Offers";

const createOffer = async (payload: Offer) => {
  const offer = await airDB("offers").create([
    {
      fields: {
        ...payload,
        price: Number(payload.price),
        status: "inactive"
      }
    }
  ]);
  return offer;
};

export default createOffer;
