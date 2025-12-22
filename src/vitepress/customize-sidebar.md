# Customize Sidebar on VitePress Sites

## Quick Reference

We have to add `Objects` here.

```mjs:line-numbers [/.vitepress/config.mjs] {6}
import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    sidebar: [
      // ==> Inside Here <==
    ],
  },
});
```

## Adding a Single Link

Just add a signle Object if you want to add a normal link here.

```mjs:line-numbers [/.vitepress/config.mjs] {}
import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    sidebar: [
      { // [!code ++]
        text: "Getting Started",    // The text shown for the Sidebar UI    // [!code ++]
        link: "/getting-started",   // Markdown Files link  // [!code ++]
      },    // [!code ++]
    ],
  },
});
```

The `text` prop is simple. It will show the Text on the UI. But, About the `link` prop. `link` prop for the actual markdown files adress. Assuming your file structure will be like this:

```shell [Terminal]
$ tree -a --dirsfirst --gitignore
.
├── docs    # This is the "source directory" which will be `/`
│   ├── public
│   │   └── icon.svg
│   ├── api-examples.md
│   ├── getting-started.md  # And, This will become `/getting-started`
│   ├── index.md
│   └── markdown-examples.md
├── .vitepress
│   └── config.js
├── .gitignore
├── package.json
└── package-lock.json

4 directories, 9 files
```

And Thats how you link an internal file without the `.md` extention.

## Adding a Section

```mjs:line-numbers [/.vitepress/config.mjs] {6}
import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    sidebar: [
      // ==> Inside here <==
    ],
  },
});
```

Think of a Section as a single bundle. Inside that bundle, drop at least two things:

- a little label called `text` (just a string),
- and a pile of links called `items` (an array of objects).

For Example:

```mjs:line-numbers [/.vitepress/config.mjs] {}
import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    sidebar: [
      { text: "Markdown Examples", link: "/markdown-examples" }, // Single Link
      { text: "Runtime API Examples", link: "/api-examples" },   // Single Link
      { // [!code ++]
        text: "Docker", // [!code ++]
        items: [    // [!code ++]
          { text: "Get Started", link: "/examples/get-started" },   // [!code ++]
          { text: "Docker Fundamentls", link: "/examples/docker-fundamentals" },    // [!code ++]
        ],  // [!code ++]
      },    // [!code ++]
    ],
  },
});
```

This will add in a `Section with Its dedicated links`.

::: tip
You can add as much `single links` or `section with links` as you want.
:::

## Reference

[Official Link](https://vitepress.dev/reference/default-theme-sidebar) 🚀
