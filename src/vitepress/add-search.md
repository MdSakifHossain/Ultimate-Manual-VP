# Add Search Feature on Vitepress Site

## Quickie

```mjs:line-numbers [/.vitepress/config.mjs]
import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    // ==> Inside Here <==
  },
});
```

Just add a `search` prop inside the `defaultConfig`.

## Add Search Feature

```mjs:line-numbers [/.vitepress/config.mjs] {}
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  themeConfig: {
    search: {   // [!code ++]
      provider: "local",    // [!code ++]
    },  // [!code ++]
  },
});
```

::: warning
`DONT Do Anything Else` This is more than enough.
:::

## Reference

[Official Docs](https://vitepress.dev/reference/default-theme-search) 🚀
