import { SEARCH_RESULTS_PAGE_SIZE } from "@/utilities/constants"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
  const authToken = cookies().get("token")?.value
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const category = searchParams.get("cat")
    const pageNum = searchParams.get("page")
    const response = await fetch(
      `${process.env.API_BASE_URL}/search/${category}?q=${query}&size=${SEARCH_RESULTS_PAGE_SIZE}&page=${pageNum}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      },
    )
    if (response.status !== 200) {
      throw new Error()
    }
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    throw new Error("Failed to get results for search.")
  }
}
