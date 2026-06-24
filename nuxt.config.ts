// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts"],
  app: {
    head: {
      title: "เข้าสู่ระบบ",
      meta: [
        {
          name: "description",
          content: "เข้าสู่ระบบ",
        },
      ],
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],

});
