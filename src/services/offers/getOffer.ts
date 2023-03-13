import airDB from "../airtableClinet.js";

const getOffer = async (id: string) => {
  const offers = await airDB("offers")
    .select({ filterByFormula: `id="${id}"` })
    .firstPage();

  if (offers && offers[0]) {
    return offers[0].fields;
  }
};

export default getOffer;
