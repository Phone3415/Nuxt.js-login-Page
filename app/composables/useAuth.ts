interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginAPIResponse {
  code: string;
}

export function useAuthComposable() {
  const isLoading = ref(false);

  async function login(credentials: LoginCredentials) {
    try {
      isLoading.value = true;

      const response: LoginAPIResponse = await $fetch("/api/login", {
        method: "POST",
        body: credentials,
        ignoreResponseError: true,
      });

      return response.code;
    } finally {
      isLoading.value = false;
    }
  }

  return { isLoading, login };
}
