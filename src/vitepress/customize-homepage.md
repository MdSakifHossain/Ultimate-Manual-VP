---
title: Customize Homepage of VitePress
---

# Customize Homepage of VitePress

Customizing is very Easy. Dont sweat you got this before and you will.

::: details Spoiler Alert
We will not make any style related changes, not editing `Navbar` or the `Sidebar`. Those are just `different things`.

Just the contents of the `Homepage`.
:::

## Quick Recap

```shell [Terminal]
$ tree -a --dirsfirst --gitignore
.
├── docs
│   ├── api-examples.md
│   ├── index.md    # <== This is the Homepage.
│   └── markdown-examples.md
├── .vitepress
│   └── config.js
├── .gitignore
├── package.json
└── package-lock.json

3 directories, 7 files
```

::: warning
Dont Rename this File.
:::

## Get Started

This is the inner contents of Homepage. Everything inside of the `---` is called frontmatter. These are like `Little configurations/settings` for this page. These are for page specific config which `Overrides the Site specific configurations/settings`

```md:line-numbers [docs/index.md] {6-8}
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Naughty Docs"
  text: "Some more bla bla bla"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

```

## Customizing Homepage

So, if you think that, Lets change the `hero.name` and it will change the Websites Title. Well my nigga, you are Wrong. It will change the index page's text and nothing else. Its in the `frontmatter` so it will change this pages contents. Also that `hero.name` will not change the navbars text also. its just for the Homepages thing only.

Note: `hero.name`, `hero.text` and `hero.tagline` is just text. Nothing is important about them.

::: tip
`hero.name`, `hero.text` and `hero.tagline` is just text. Nothing is important about them. But you can change how they look with css. But, thats a differnet times talk.
:::

## Actions

Actions is something a `little more imporant`. These are the `buttons on the Homepage` which will lead to `internal` or `external` links.

```md:line-numbers [docs/index.md] {9-15}
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Dirty Docs"
  text: "Some more bla bla bla"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
```

Notice that `actions[0].theme = brand`. So, this is like the `primary` color. And, that `actions[1].theme = alt`. `alt` is the `secondary` color. I only need one button here so i just remove those 2 buttons and there will be a primary button which will be called `Get Started`. And, its link will be to a page inside of the `docs/getting-started.md`. now it will point out to the first page of the docs.

Here is the code:

```md:line-numbers [docs/index.md] {10-12}
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Dirty Docs"
  text: "Some more bla bla bla"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
```

::: warning
You dont have to include the extention of the markdown file.
:::

Because, it will later compile from `getting-started.md ==> getting-started.html`. just dont overthink on this one thing and life will be easier. Thats all "your honour" 😁

## Add a Hero Image

So, Since `/docs` folder is the `Source Folder` so thats why we have to add a `public` folder inside the `/docs` folder. so this will be `/docs/public/` folder. Also you have to put an `Image`.

::: info
You can put `any kind of image` but, using an `SVG` file because Its scalable ya fucking bitch.
:::

And the folder structure will be like:

```shell [Terminal] {3-5,7}
$ tree -a --dirsfirst --gitignore
.
├── docs  # <== this is the source folder. Its not compolsary to name the source the folder 'docs'.
│   ├── public
│   │   └── icon.svg # <== this is the icon file inside the public folder.
│   ├── api-examples.md
│   ├── index.md  # <== this is just the index file which will import the icon.
│   └── markdown-examples.md
├── .vitepress
│   └── config.js
├── .gitignore
├── package.json
└── package-lock.json

4 directories, 8 files
```

Open `index.md` and add these lines inside of the `hero`

```md:line-numbers [docs/index.md] {13-15}
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Naughty Docs"
  text: "Some more bla bla bla"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
  image:
    src: /icon.svg
    alt: icon

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
```

And BOOM. You have a `Hero Image`.

## Features Customization

Its nothing but just the bottom sections cards. These are just static cards with zero interactivity.

::: tip
These cards are kind of in a `grid container`. if the `features` have only one card then that one card will take the whole damn `row`. Same for `if the features have 2 cards` then it will also take up the `full row` equally.

Max a row can contain 3 cards. More cards will go on the next rows.
:::

```md:line-numbers [docs/index.md] {17-23}
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Naughty Docs"
  text: "Some more bla bla bla"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
  image:
    src: /icon.svg
    alt: icon

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
```

But, these lifeless cards can be used as links which will point to internal or external link.

::: warning
I never tried the external link. Just tried internal links.
:::

Now we will turn the cards into links.

```md:line-numbers [docs/index.md] {20,23}
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Naughty Docs"
  text: "Some more bla bla bla"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
  image:
    src: /icon.svg
    alt: icon

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: /getting-started
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: https://x.com/HoossainSakif
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

```

Now if you hover on the `link property` injected card then it will have a hover effect. And `this works for both internal and external links`.
