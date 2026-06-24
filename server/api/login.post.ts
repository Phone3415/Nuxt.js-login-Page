interface HTTPStatus {
  code: string;
  message: string;
}

interface HTTPResponse {
  status: HTTPStatus;
  data: {};
}

interface LoginResult extends HTTPResponse {
  data: {
    access_token: string;
  };
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result: LoginResult = await $fetch(
    "https://user-api-dev.pgvim.24x7x.com/auth/login",
    {
      method: "POST",
      body: body,
      ignoreResponseError: true,
    },
  );

  if (result.status.code === "200") {
    setCookie(event, "access_token", result.data.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });
  }

  return { code: result.status.code };
});
