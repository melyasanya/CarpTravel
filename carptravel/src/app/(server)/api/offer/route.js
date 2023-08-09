import { NextResponse } from "next/server";
import { getAllOffers, offerData } from "../data/offerData";

export async function GET() {
  const offers = await getAllOffers();
  return NextResponse.json(offers);
}
