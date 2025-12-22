# Add "Edit this Page"

## Quickie

We will be adding code inside this:

```mjs:line-numbers [/.vitepress/config.mjs]
import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    // ==> Inside Here <==
  },
});
```

Just add a `editLink` prop inside the `defaultConfig`.

## Add Search Feature

```mjs:line-numbers [/.vitepress/config.mjs] {}
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  themeConfig: {
    editLink: { // [!code ++]
      pattern:  // [!code ++]
        "<github-repo-base-link>/edit/main/<your-source-folder>/:path",  // [!code ++]
    },  // [!code ++]
  },
});
```

So, my Github

::: warning
`DONT Do Anything Else` This is it.
:::

## Reference

[Official Docs](https://vitepress.dev/reference/default-theme-edit-link) 🚀
