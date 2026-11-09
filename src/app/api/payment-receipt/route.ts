import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_RECEIPT_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbyrbUzP0gd6nsHrAXk9q_x_GHMtc1aUSYU1yjPgR8sofCNQeTKfMLiojycT0sGULx_U/exec";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id =
      searchParams.get("id") ||
      searchParams.get("checkout_id") ||
      searchParams.get("order_id") ||
      "";

    const targetUrl = id
      ? `${GOOGLE_SCRIPT_URL}?id=${encodeURIComponent(id)}`
      : GOOGLE_SCRIPT_URL;

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json({ status: "empty" }, { status: 200 });
    }

    const data = await response.json();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Error fetching payment receipt:", error);
    return NextResponse.json({ status: "empty" }, { status: 200 });
  }
}

