---
title: Customize Default Syntax Highlighting
---

# Customize Default Syntax Highlighting

The default Syntax highlighting was too close to vomit on the docs. 🤮

- You can change the `default syntax highlighting theme`
- You can Change for both `light` and `dark` mode.

## Quick Recap

```mjs:line-numbers [/.vitepress/config.mjs]
import { defineConfig } from "vitepress";

export default defineConfig({
    // ==> Inside Here <==
});
```

We will be making changes here.

## Change Theme

Set `a single theme`:

```mjs:line-numbers [/.vitepress/config.mjs] {}
import { defineConfig } from "vitepress";

export default defineConfig({
  markdown: {
    theme: "catppuccin-latte",  // [!code ++]
  },
});
```

Set Theme for `light` and `dark` mode:

```mjs:line-numbers [/.vitepress/config.mjs] {}
import { defineConfig } from "vitepress";

export default defineConfig({
  markdown: {
    theme: {    // [!code ++]
      light: "catppuccin-latte",    // [!code ++]
      dark: "andromeeda",   // [!code ++]
    },  // [!code ++]
  },
});
```

## Reference

- [Official Docs (Vitepress)](https://vitepress.dev/guide/extending-default-theme) 🚀
- [Official Docs (Shiki)](https://shiki.style/) 🚀
