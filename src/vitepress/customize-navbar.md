---
title: Customize Navbar of VitePress
---

# Customize Navbar of VitePress

## Recap

```shell [Terminal] {10}
tree -a --dirsfirst --gitignore
.
├── docs
│   ├── public
│   │   └── icon.svg
│   ├── api-examples.md
│   ├── index.md
│   └── markdown-examples.md
├── .vitepress
│   └── config.js
├── .gitignore
├── package.json
└── package-lock.json

4 directories, 8 files
```

Its simple. You can go to the `official docs`.

Just remember, Navbar will be customized inside of the `/.vitepress/config.mjs`

```mjs:line-numbers [.vitepress/config.mjs] {6-9}
import { defineConfig } from "vitepress";

export default defineConfig({
  // ...
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    // ...
  },
  // ...
});
```

## Change Navbar Title

```mjs:line-numbers [.vitepress/config.mjs] {6}
import { defineConfig } from "vitepress";

export default defineConfig({
  // ...
  themeConfig: {
    siteTitle: 'My Custom Title'
    // ...
  },
  // ...
});
```

## Add Navbar Icon

```mjs:line-numbers [.vitepress/config.mjs] {6}
import { defineConfig } from "vitepress";

export default defineConfig({
  // ...
  themeConfig: {
    logo: '/my-logo.svg'    // [!code ++]
    // ...
  },
  // ...
});
```

::: info
Its just importing the svg from the `/docs/public/icon.svg`. So, just use the `/icon.svg`
:::

## Adding Links

```mjs:line-numbers [.vitepress/config.mjs]
import { defineConfig } from "vitepress";

export default defineConfig({
  // ...
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "Docs", link: "/api-examples" },  // [!code ++]
    ],
    // ...
  },
  // ...
});
```

Adding a link is just `adding an object`.

## Adding a Dropdown

```mjs:line-numbers [.vitepress/config.mjs]
import { defineConfig } from "vitepress";

export default defineConfig({
  // ...
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "Docs", link: "/api-examples" },
      { // [!code ++]
        text: "Dropdown Menu",  // [!code ++]
        items: [    // [!code ++]
          { // [!code ++]
            text: "Section Title",  // [!code ++]
            items: [    // [!code ++]
              { text: "Section A Item A", link: "..." },    // [!code ++]
              { text: "Section B Item B", link: "..." },    // [!code ++]
            ],  // [!code ++]
          },    // [!code ++]
        ],  // [!code ++]
      },    // [!code ++]
    ],
    // ...
  },
  // ...
});
```

Adding a dropdown is just adding `an object which has an array`.

## Social Links

```mjs:line-numbers [.vitepress/config.mjs] {6}
import { defineConfig } from "vitepress";

export default defineConfig({
  // ...
  themeConfig: {
    // ...
     socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MdSakifHossain/Ultimate-Manual",
      },
    ],
    // ...
  },
  // ...
});
```

::: tip
If you wanna add more social links then go to the `official docs`. becaues its just a `Manual for Future Me`
:::

## Reference

[Offical Docs](https://vitepress.dev/reference/default-theme-nav) 🚀
