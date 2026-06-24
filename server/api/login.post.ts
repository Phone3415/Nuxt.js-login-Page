export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const response = await $fetch(
    "https://user-api-dev.pgvim.24x7x.com/auth/login",
    {
      method: "POST",
      body: body,
      ignoreResponseError: true,
    },
  );

  return response;
});
