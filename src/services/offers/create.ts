import airDB from "../airtableClinet";
import { Category, Offer } from "@/types/Offers";
// Joi schema description language and data validator for JavaScript.
import Joi from "joi";

const schema: Joi.ObjectSchema<Offer> = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().valid(Category.RENT, Category.SALE).required(),
  mobile: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string().required(),
  price: Joi.number().greater(0).required()
});

const createOffer = async (payload: Offer) => {
  const validatedOffer = await schema.validateAsync(payload);
  const offer = await airDB("offers").create([
    {
      fields: {
        ...validatedOffer,
        price: Number(payload.price),
        status: "inactive"
      }
    }
  ]);
  return offer;
};

export default createOffer;
