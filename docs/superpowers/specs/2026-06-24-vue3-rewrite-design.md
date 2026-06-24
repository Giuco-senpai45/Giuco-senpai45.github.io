# Vue 3 + Vite Portfolio Rewrite

**Date:** 2026-06-24  
**Status:** Approved

## Goal

1:1 port of the existing SvelteKit portfolio to Vue 3 + Vite + TypeScript. No visual changes. Deploy target remains GitHub Pages.

## Approach

New folder `portfolio-vue/` alongside the existing repo root. Original Svelte code stays intact until the Vue port is verified. Once done, Svelte files are deleted and `portfolio-vue/` contents are promoted to the repo root.

## Stack

| Concern | Choice |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build tool | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS (copy `tailwind.config.js`, `postcss.config.js`, `app.css` verbatim) |
| Animations | `tailwindcss-animated` (same dep) |
| Icons | Font Awesome via CDN (same `<link>` in `index.html`) |
| Routing | None — single page, anchor links |
| State | Local `ref` per component — no Pinia |
| Package manager | pnpm |

## Project Structure

```
portfolio-vue/
  index.html              # Font Awesome CDN link, app mount point
  vite.config.ts
  tsconfig.json
  tailwind.config.js      # copied verbatim
  postcss.config.js       # copied verbatim
  public/                 # copy all of static/: images/, assets/, favicon.png, *.svg, .nojekyll
  src/
    main.ts
    App.vue               # replaces +layout.svelte: scroll state, back-to-top, Header + MainContent + Footer
    app.css               # copied verbatim
    data/
      constants.ts        # WORK_MAIL, UBB_*, HERMES, LINKEDIN_URL, GITHUB_URL
      index.ts            # projects[], work_experiences[] with TypeScript interfaces
    components/
      Header.vue
      MainContent.vue
      Footer.vue
      sections/
        Introduction.vue
        About.vue
        Experience.vue
        Contact.vue
        Projects.vue
      dynamic/
        ExperienceCard.vue
        Project.vue
```

## Component Mapping

| Svelte | Vue | Key translation |
|---|---|---|
| `+layout.svelte` | `App.vue` | `svelte:window bind:scrollY` → `onMounted` scroll listener |
| `Header.svelte` | `Header.vue` | prop `y: number` → `defineProps<{ y: number }>()` |
| `Main.svelte` | `MainContent.vue` | thin wrapper, `<slot>` → `<slot>` |
| `Introduction.svelte` | `Introduction.vue` | `bind:this={imgElem}` → `const imgElem = useTemplateRef('imgElem')` |
| `About.svelte` | `About.vue` | static, direct translation |
| `Experience.svelte` | `Experience.vue` | `currentExperience` + `experienceIndex` → two `ref`s; `class:activexp` → `:class="{ activexp: ... }"` |
| `ExperienceCard.svelte` | `ExperienceCard.vue` | prop `experienceIndex: number` |
| `Projects.svelte` | `Projects.vue` | `{#each projects}` → `v-for` |
| `Project.svelte` | `Project.vue` | prop `project: Project`; `showPic` toggle → `ref(false)` |
| `Contact.svelte` | `Contact.vue` | static |
| `Footer.svelte` | `Footer.vue` | empty |

## TypeScript Interfaces

```ts
// src/data/index.ts
interface Project {
  name: string
  description: string
  link: string
  langs: string[]
  image?: string
}

interface WorkExperience {
  title: string
  company: string
  link: string
  start: string
  end: string
  technologies: string[]
  description: string[]
}
```

## Svelte → Vue Cheat Sheet

| Svelte | Vue 3 (`<script setup>`) |
|---|---|
| `export let prop` | `defineProps<{ prop: T }>()` |
| `{#each items as item}` | `v-for="item in items" :key="item.id"` |
| `{#if cond}` / `{:else}` | `v-if` / `v-else` |
| `on:click={fn}` | `@click="fn"` |
| `on:mouseover` / `on:mouseleave` | `@mouseover` / `@mouseleave` |
| `bind:this={el}` | `const el = ref<HTMLImageElement \| null>(null)` + `ref="el"` |
| `class:name={cond}` | `:class="{ name: cond }"` |
| `{#key val}<div>…</div>` | `:key="val"` on the element |
| `svelte:window bind:scrollY={y}` | `onMounted(() => window.addEventListener('scroll', ...))` |
| `<slot />` | `<slot />` |
| `$lib` alias | `@/` alias (configured in `vite.config.ts`) |

## Animation

`tailwindcss-animated` provides `animate-fade-right` used on `ExperienceCard`. The `:key` trick that forces a re-render on tab change in Svelte (`{#key experienceIndex}`) translates directly — put `:key="experienceIndex"` on the wrapper `<div>` in `Experience.vue`.

## Deploy

During development: run `portfolio-vue/` independently with `pnpm dev`.

After port is verified:
1. Delete Svelte source files from repo root (`src/`, `svelte.config.js`, `static/`)
2. Move `portfolio-vue/` contents to repo root
3. Update deploy script in `package.json`: `vite build && gh-pages -d dist`

## Out of Scope

- No visual changes
- No Vue Router
- No Pinia
- No additional dependencies beyond what currently exists
