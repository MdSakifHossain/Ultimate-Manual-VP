---
title: Add Favicon on VitePress Site
---

# Add Favicon on VitePress Site

## Mental Model

Think of it like its a process of `injection`. We are `injecting HTML` inside the `Head of a Page`

```mjs:line-numbers [/.vitepress/config.mjs]
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({   // <== Inside this
  srcDir: "docs",

  title: "Naughty Docs",
  description: "Some more bla bla bla",

  head: [   // [!code ++]
    [   // [!code ++]
      "link",   // [!code ++]
      { rel: "icon", href: "/icon.svg" }    // [!code ++]
    ]   // [!code ++]
  ],    // [!code ++]

  themeConfig: {},
  // ...
});
```

## Explanation

So, before when we had to change the Sites `title (<title>{value}</title>)` or `description (<meta name="{value}" />)` then we didnt had to inject like this. We just changed the value of the title and description property and it just `Happened` without any headaches.

::: details How it Works
Think of it as a `head prop` in the `/.vitepress/config.mjs ==> default export object`.

That head prop is an`Array of Arrays (An array which contains Little arrays inside of it)`.
:::

## Extra

You can also `add/inject` other html tags

```mjs:line-numbers [/.vitepress/config.mjs]
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "Naughty Docs",
  description: "Some more bla bla bla",

  head: [
    [
      "link",
      { rel: "icon", href: "/icon.svg" }
    ],
    [   // [!code ++]
        "meta", // [!code ++]
        { name: 'theme-color', content: '#5f67ee' } // [!code ++]
    ]   // [!code ++]
  ],

  themeConfig: {},
  // ...
});
```

This above code correspond to `<meta name="theme-color" content="#5f67ee" />`

## Note

Since you know the rules. Now, `Sky is the Limit` 🌌🚀🚧🧠✨
