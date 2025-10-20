import { NextResponse } from "next/server";
import { handleError } from "@/exceptions";
import { getCategorizedNews } from "@/lib/news/newsScraper";
import { validateCategory } from "@/lib/news/utils";
import { ServerException } from "@/exceptions/server";
import { makeSuccessResponse } from "@/lib/utils";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category: string | null = searchParams.get("name");

  try {
    const validatedCategory = validateCategory(category);
    const articles = await getCategorizedNews(validatedCategory);
    if (articles.length === 0) {
      const error = new ServerException("No articles found for this category, please try again.");
      return handleError(error);
    }
    const successResponse = makeSuccessResponse(articles);
    return NextResponse.json(successResponse, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
}

export const revalidate = 0;
