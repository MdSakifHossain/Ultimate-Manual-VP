# Get Started with VitePress

Look, you dense little shit, it’s just a docs maker... not rocket science. You slapped it together when you didnt gave full focus on this.

Extra glitter? That’s tomorrow-you’s call; let that bastard decide if the VitePress side-project deserves another glow up..

## Getting Started

Create a `Directory`. Name it whatever you like. What should I call it? For the sake of self educating myself again, Lets call it `naughty_docs`..

You then go in that `Directory` and then `Initialize a node project` by typing:

```shell [Terminal]
npm init -y
```

Then, install `VitePress` as `dev dependency`.

```shell [Terminal]
npm add -D vitepress@next
```

Open `package.json` and change the type from `commonjs` to `module`. And, remove that `test script`.

```json [package.json]
{
  "name": "demo-for-notes",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"   // [!code --]
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"    // [!code --]
  "type": "module"    // [!code ++]
}

```

After that, `initialize VitePress` by typing:

```shell [Terminal]
npx vitepress init
```

It will ask some questions in order to `create the VitePress Boilerplate`

```shell [Terminal]
$ npx vitepress init

┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./ # This is for where would it put the `.vitepress` folder. Here it will put it on the root of the project.
│
◇  Where should VitePress look for your markdown files?
│  ./docs # Here you will Add new md files.
│
◇  Site title:
│  Naughty Docs # Anything you desire.
│
◇  Site description:
│  Some more bla bla bla # Anything you desire.
│
◇  Theme:
│  Default Theme # This is what i chose when I was making this docs. so, just shut up and do it.
│
◇  Use TypeScript for config and theme files?
│  No # Because I havent learnt how ts works.
│
◇  Add VitePress npm scripts to package.json?
│  Yes # This is because its asking if it will add the scripts or not. just Go with Yes.
│
◇  Add a prefix for VitePress npm scripts?
│  No # This is because if it will add any prefix or not. I chose No because its just a standalone project so here will be this is for docs and no other project.
│
└  Done! Now run npm run dev and start writing.
```

You can now run the project now without any problems. But, I suggest that we should add a `.gitignore` file so that it will not send the `node_modules` folder to `GitHub` 😆

Create a `.gitignore File` at the root of your project and `Add these lines`.

```.gitginore:line-numbers [.gitignore]
node_modules/
.vitepress/cache
.vitepress/dist
.vitepress/.temp
```

And the `package.json` file will look like this after `VitePress Initialization`.

```json:line-numbers [package.json]
{
  "name": "demo-for-notes",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
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

And the file structure will look like this:

```shell [Terminal]
$ tree -a --dirsfirst --gitignore
.
├── docs
│   ├── api-examples.md
│   ├── index.md
│   └── markdown-examples.md
├── .vitepress
│   └── config.js
├── .gitignore
├── package.json
└── package-lock.json

3 directories, 7 files
```

Now, you will run the dev server.

```shell [Terminal]
$ npm run dev

> demo-for-notes@1.0.0 dev
> vitepress dev


  vitepress v2.0.0-alpha.15

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

```
