import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  if (!placeId || !apiKey) {
    return res.status(500).json({ error: "Missing API key or place ID" });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Google API error: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
