interface LoginCredentials {
  email: string;
  password: string;
}

interface HTTPStatus {
  code: string;
  message: string;
}

interface HTTPResponse {
  status: HTTPStatus;
  data: {};
}

interface LoginResponse extends HTTPResponse {
  data: {
    access_token: string;
  };
}

export function useAuthComposable() {
  const isLoading = ref(false);

  async function login(credentials: LoginCredentials) {
    try {
      isLoading.value = true;

      const response: LoginResponse = await $fetch("/api/login", {
        method: "POST",
        body: credentials,
        ignoreResponseError: true,
      });

      return response.status.code;
    } finally {
      isLoading.value = false;
    }
  }

  return { isLoading, login };
}
