import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const getAuthToken = () => {
  return new Promise((resolve) => {
    resolve(cookies().get("token")?.value)
  })
}

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
    const authToken = await getAuthToken()
    const response = await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
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
