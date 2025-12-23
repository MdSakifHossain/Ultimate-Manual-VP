import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader,
} from "vitepress-plugin-group-icons";

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

    sidebar: [
      {
        text: "Getting Started",
        link: "/getting-started",
      },
      {
        text: "Technologies",
        link: "/technologies",
      },
      {
        text: "Tailwind",
        collapsed: true,
        items: [
          {
            text: "@import Font Import Issue",
            link: "/tailwind/font-import-issue",
          },
        ],
      },
      {
        text: "VSCode",
        collapsed: true,
        items: [
          {
            text: "Hide a Certain Folder",
            link: "/vscode/hide-a-certain-folder",
          },
        ],
      },
      {
        text: "VitePress",
        collapsed: true,
        items: [
          {
            text: "Get Started",
            link: "/vitepress/get-started-with-vitepress",
          },
          {
            text: "Customize Homepage",
            link: "/vitepress/customize-homepage",
          },
          {
            text: "Customize Navbar",
            link: "/vitepress/customize-navbar",
          },
          {
            text: "Customize Footer",
            link: "/vitepress/customize-Footer",
          },
          {
            text: "Add Favicon",
            link: "/vitepress/add-favicon",
          },
          {
            text: "Customize Sidebar",
            link: "/vitepress/customize-sidebar",
          },
          {
            text: "Add Search Fearture",
            link: "/vitepress/add-search",
          },
          {
            text: `Add "Edit this Page"`,
            link: "/vitepress/add-edit-this-page",
          },
          {
            text: `Add "Last Updated Timestamp"`,
            link: "/vitepress/add-last-updated-timestamp",
          },
          {
            text: `Change Syntax Highlighting`,
            link: "/vitepress/customize-default-syntax-highlighting",
          },
          {
            text: "Add File Icons",
            link: "/vitepress/add-file-icons",
          },
          {
            text: "Customize Styles with CSS",
            link: "/vitepress/customize-styles-with-css",
          },
        ],
      },
      {
        text: "openRGB",
        collapsed: true,
        items: [
          {
            text: "Turn Off RAM LEDs",
            link: "/openRGB/automatically-turn-off-ram-leds",
          },
        ],
      },
    ],

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

// import { links } from "./some_link";
// let html = ``;
// const iconSize = 64;
// const alignment = "left";
// links.map((link) => {
//   html += `
// ## ${link.alt}

// <p align="${alignment}">
//   <img src="${link.link}" alt="${link.alt}" width="${iconSize}" height="${iconSize}" />
// </p>
// `;
// });
// console.log(html);
