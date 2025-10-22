import { NextRequest, NextResponse } from "next/server";
import { getCountryNews } from "@/lib/news/newsScraper";

export async function GET(
  request: NextRequest,
  { params }: { params: { country: string } }
) {
  try {
    const country = params.country.toUpperCase();
    const articles = await getCountryNews(country);

    return NextResponse.json({
      success: true,
      data: articles,
      count: articles.length,
    });
  } catch (error: any) {
    console.error(`Error fetching news for country ${params.country}:`, error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch country news",
      },
      { status: 500 }
    );
  }
}
