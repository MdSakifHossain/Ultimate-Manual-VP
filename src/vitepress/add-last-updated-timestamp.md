---
title: Add "Last Updated Timestamp"
---

# Add "Last Updated Timestamp"

## Edit `config.mjs`

We will be adding code inside this:

```mjs:line-numbers [/.vitepress/config.mjs]
import { defineConfig } from "vitepress";

export default defineConfig({
    // ==> Inside Here <==
});
```

Just add a `lastUpdated` prop inside the `defaultConfig`.

```mjs:line-numbers [/.vitepress/config.mjs] {}
import { defineConfig } from "vitepress";

export default defineConfig({
    lastUpdated: true // [!code ++]
});
```

## Edit `package.json`

```json:line-numbers [package.json]
{
  "name": "naughty_docs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "vitepress dev --host",
    "build": "vitepress build", // [!code --]
    "build": "git fetch --unshallow && vitepress build",    // [!code ++]
    "preview": "vitepress preview --host"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "devDependencies": {
    "vitepress": "^2.0.0-alpha.15"
  }
}
```

Thats all. Set Up and forget about it.

## Reference

[Official Docs](https://vitepress.dev/reference/default-theme-last-updated) 🚀
