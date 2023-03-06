import airDB from "../airtableClinet";

const getRecent = async (maxRecords: any) => {
  const offers = await airDB("offers")
    .select({
      sort: [{ field: "id", direction: "desc" }],
      filterByFormula: "status='active'",
      maxRecords
    })
    .firstPage();

  return offers.map((offer) => offer.fields);
};

export default getRecent;