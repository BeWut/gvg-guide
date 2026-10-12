import { defineConfig } from "blume";

export default defineConfig({
  title: "GvG Guide",
  description: "Documentation powered by Blume.",
  deployment: {
    site: "https://bewut.github.io",
    base: "/gvg-guide",
  },
  i18n: {
    defaultLocale: "en",
    locales: [{ code: "en", label: "English" }],
    ui: {
      en: {
        actions: {
          openInChatPrompt:
          "I am reading {url}. First read the complete GvG guide at " +
          "https://bewut.github.io/gvg-guide/llms-full.txt " +
          "so I can ask questions across all chapters. " +
          "If you cannot retrieve it, explicitly tell me. " +
          "Do not claim to have read the complete guide from its overview.",
        },
      },
    },
  },
});
