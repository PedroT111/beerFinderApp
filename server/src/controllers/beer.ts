import { Request, Response } from "express";
import { Result } from "../models/result";
import { BeerResponse } from "../models/response";
import { getBeerData } from "../services/beerService";

export const getBeers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { beer } = req.params;

    const beers: Result[] = await getBeerData(beer);
    const response: BeerResponse = {
        ok: beers.length !== 0,
        data: beers.length !== 0 ? beers : undefined,
        message: beers.length !== 0 ? undefined : 'No se encontraron cervezas para esta marca'
    };

    res.status(beers.length !== 0 ? 200 : 404).json(response);

  } catch (error) {
    const response: BeerResponse = {
        ok: false,
        message: 'Error al buscar cervezas'
    };
    console.log(error)
    res.status(500).json(response);
  }
};
