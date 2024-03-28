import { Result } from "../models/result";
import { scrapeByBeer } from "../utils/scrapeProducts";

export const getBeerData = async (brand: string): Promise<Result[]> => {
  try {
    const beerList: Result[] = await scrapeByBeer(brand);
    return beerList;
  } catch (error) {
    console.log(error)
    throw new Error("Error al raspar datos de cerveza");
  }
};
