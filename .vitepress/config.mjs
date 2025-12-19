import { defineConfig } from "vitepress";

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
            link: "/vscode/hide-a-certain-folder.md",
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
