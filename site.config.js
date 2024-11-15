const CONFIG = {
  // profile setting (required)
  profile: {
    name: "thanhnv",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Police",
    bio: "I'm the Normal One.",
    email: "thanhliver213@gmail.com",
    linkedin: "thanhnv213",
    github: "helios",
    instagram: "thanh_213_",
  },
  projects: [
    {
      name: `thekop`,
      href: "https://www.youtube.com/watch?v=1ODyzw0WS2A&ab_channel=EmilyLinge",
    },
  ],
  // blog setting (required)
  blog: {
    title: "thanhnv's blog",
    description: "Welcome to Thanhnv's blog!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://thanhnv.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID || "6b7ae1e73d19440c804185911f18d52c",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
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
  isProd: true, // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: "0x4AAAAAAAzS4fY8yBhNiveP"
}

module.exports = { CONFIG }
