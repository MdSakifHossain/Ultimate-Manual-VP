import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader,
} from "vitepress-plugin-group-icons";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  lastUpdated: true,

  title: "Ultimate Manual",
  description: "Some Description",
  head: [["link", { rel: "icon", href: "/icon.svg" }]],

  themeConfig: {
    logo: "/icon.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/getting-started" },
    ],

    sidebar: generateSidebar({
      documentRootPath: "/src",
      collapsed: true,
      capitalizeFirst: true,
      sortFolderTo: "bottom",
      hyphenToSpace: true,
    }),

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MdSakifHossain/Ultimate-Manual",
      },
    ],

    footer: {
      message: "You are your Biggest Ally and Enemy",
      copyright: `Dont be fed up. you can overcome this.`,
    },

    search: {
      provider: "local",
    },

    editLink: {
      pattern:
        "https://github.com/MdSakifHossain/Ultimate-Manual/edit/main/src/:path",
    },
  },

  markdown: {
    // theme: "material-theme-darker",
    theme: {
      light: "catppuccin-latte",
      // dark: "material-theme-darker",
      dark: "andromeeda",
    },

    config(md) {
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          terminal: "logos:bash-icon",
          css: "vscode-icons:file-type-css2",
        },
      }),
    ],
  },
});
