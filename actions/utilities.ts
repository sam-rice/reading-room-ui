import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const getAuthToken = () => cookies().get("token")?.value

type HTTPRequestMethod = "GET" | "POST" | "PUT" | "DELETE"

export const fetchWrapper = async <T>(
  method: HTTPRequestMethod,
  endpoint: string,
  successCode: number,
  errorMessage: string,
  revalidationPath?: string,
  body?: Object,
): Promise<T> => {
  try {
    const response = await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: body && JSON.stringify(body),
    })
    if (response.status !== successCode) {
      throw new Error()
    }
    revalidationPath && revalidatePath(revalidationPath)
    return response.json()
  } catch (error) {
    throw new Error(errorMessage)
  }
}
