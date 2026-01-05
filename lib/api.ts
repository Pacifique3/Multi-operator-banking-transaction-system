const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

interface RequestOptions extends RequestInit {
  data?: unknown
}

export async function apiFetch(endpoint: string, options: RequestOptions = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

  const headers = new Headers({
    "Content-Type": "application/json",
    ...options.headers,
  })

  if (token) {
    headers.set("Authorization", `Bearer ${token}`)
  }

  const config: RequestInit = {
    ...options,
    headers,
  }

  if (options.data) {
    config.body = JSON.stringify(options.data)
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config)

    if (response.status === 401) {
      // Gestion de la déconnexion automatique si non autorisé
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token")
        window.location.href = "/auth/login"
      }
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `Erreur ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error("[v0] API Call Error:", error)
    throw error
  }
}

// Helpers pour les méthodes courantes
export const api = {
  get: (url: string) => apiFetch(url, { method: "GET" }),
  post: (url: string, data: unknown) => apiFetch(url, { method: "POST", data }),
  put: (url: string, data: unknown) => apiFetch(url, { method: "PUT", data }),
  delete: (url: string) => apiFetch(url, { method: "DELETE" }),
}
