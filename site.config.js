const CONFIG = {
  // profile setting (required)
  profile: {
    name: "URM",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "옛날 영상과 이것저것",
    bio: "",
    email: "joeykim383@gmail.com",
    youtube: "@URM_MEME",
    discord: "YNuMxNzzRh",
    instagram: "urm4_meme",
  },
  projects: [
    {
      name: `Web crawler and Automation Program`,
      href: "https://doyoonsong.vercel.app/pythoncrawler",
    },
    {
      name: `Data Collecting Platform for ARC Problems`,
      href: "https://doyoonsong.vercel.app/ARC_project",
    },
  ],
  // blog setting (required)
  blog: {
    title: "URM의 방주",
    description: "welcome",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog","MEME"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "SongDerrick/doyoonlog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
