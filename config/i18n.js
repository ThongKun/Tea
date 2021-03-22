export default {
  detectBrowserLanguage: false,
  langDir: "locales/",
  locales: [
    {
      code: "vi",
      iso: "vi-VN",
      file: "vi.js"
    },
    {
      code: "en",
      iso: "en-US",
      file: "en.js"
    }
  ],
  defaultLocale: "vi",
  parsePages: false, // Disable babel parsing
  pages: {
    // home: {
    //   vi: "/",
    //   en: "/"
    // },
    introduce: {
      vi: "/",
      en: "/"
    },
    "news/index": {
      vi: "/thong-cao-bao-chi",
      en: "/news"
    },
    "blogs/index": {
      vi: "/tam-dao-&-tra-dao",
      en: "/xing-dao-&-cha-dao"
    },
    contact: {
      vi: "/lien-he",
      en: "/contact"
    }
  },
  lazy: true
};
