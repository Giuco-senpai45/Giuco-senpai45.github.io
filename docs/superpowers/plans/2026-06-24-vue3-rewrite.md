# Vue 3 + Vite Portfolio Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port the existing SvelteKit portfolio to a Vue 3 + Vite + TypeScript app in `portfolio-vue/`, producing an identical visual result deployable to GitHub Pages.

**Architecture:** New sibling folder `portfolio-vue/` scaffolded with `create vue@latest`. All Svelte components are translated 1:1 to Vue SFCs. No router, no Pinia — all state is local `ref`. Once verified, the Svelte source is replaced with the Vue project at the repo root.

**Tech Stack:** Vue 3 (Composition API, `<script setup>`), Vite, TypeScript, Tailwind CSS, `tailwindcss-animated`, `tailwind-scrollbar`, Font Awesome 6 (CDN), particles.js (CDN), pnpm

## Global Constraints

- Working directory for all steps: `portfolio-vue/` (relative to repo root) unless stated otherwise
- TypeScript strict mode — no `any`, all props typed with `defineProps<{...}>()`
- No Vue Router, no Pinia
- Tailwind content paths must include `.vue` and `.ts` (not `.svelte`)
- Font Awesome, particles.js, and Google Fonts come from CDN — no npm package
- Package manager: pnpm
- Deploy target: `dist/` (Vite default), served at GitHub Pages root
- `static/` from the Svelte project → `public/` in the Vue project (copy verbatim)

---

### Task 1: Scaffold + configure

**Files:**
- Create: `portfolio-vue/` (scaffolded by create-vue)
- Modify: `portfolio-vue/index.html`
- Modify: `portfolio-vue/tailwind.config.js` (new file)
- Modify: `portfolio-vue/postcss.config.js` (new file)
- Modify: `portfolio-vue/vite.config.ts`
- Modify: `portfolio-vue/src/main.ts`
- Create: `portfolio-vue/src/app.css`

**Interfaces:**
- Produces: working dev server with Tailwind + Font Awesome + particles.js + Google Fonts

- [ ] **Step 1: Scaffold the project**

Run from the repo root (parent of `portfolio-vue/`):
```bash
pnpm create vue@latest portfolio-vue
```
Answer the prompts:
```
✔ Add TypeScript?                → Yes
✔ Add JSX Support?               → No
✔ Add Vue Router?                → No
✔ Add Pinia?                     → No
✔ Add Vitest?                    → No
✔ Add an End-to-End Testing?     → No
✔ Add ESLint?                    → Yes
✔ Add Prettier?                  → No
```

- [ ] **Step 2: Install base deps + Tailwind**

```bash
cd portfolio-vue
pnpm install
pnpm add -D tailwindcss postcss autoprefixer tailwind-scrollbar tailwindcss-animated
```

- [ ] **Step 3: Write tailwind.config.js**

Create `portfolio-vue/tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animated')],
}
```

- [ ] **Step 4: Write postcss.config.js**

Create `portfolio-vue/postcss.config.js`:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 5: Write src/app.css**

Create `portfolio-vue/src/app.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
    scroll-behavior: smooth;
}

* {
    font-family: 'Roboto', sans-serif;
}

h1,
h2,
h3,
.poppins {
    font-family: 'Poppins', sans-serif;
}

.tech-mono {
    font-family: "Share Tech Mono", monospace;
}

.section-title {
    @apply text-3xl md:text-4xl lg:text-5xl font-bold poppins text-violet-400 hover:text-violet-300;
}
```

- [ ] **Step 6: Import app.css in main.ts**

Edit `portfolio-vue/src/main.ts` — add the import at the top:
```ts
import './app.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

- [ ] **Step 7: Write index.html**

Replace the entire contents of `portfolio-vue/index.html`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/portfolio_logo2.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ardelean Daniel | Software Engineer</title>

    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Share+Tech+Mono&display=swap"
      rel="stylesheet"
    />

    <!-- particles.js -->
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"
      integrity="sha512-Kef5sc7gfTacR7TZKelcrRs15ipf7+t+n7Zh6mKNJbmW+/RRdCW9nwfLn4YX0s2nO6Kv5Y2ChqgIakaC6PW09A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </head>
  <body
    class="relative text-white bg-slate-950 scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-violet-500"
  >
    <div id="app"></div>

    <!-- Particles background (outside Vue app) -->
    <div class="absolute h-full top-0 left-0 w-full z-[-1] opacity-70">
      <div class="absolute inset-0" id="particles-js"></div>
    </div>

    <script type="module" src="/src/main.ts"></script>

    <script>
      document.addEventListener('DOMContentLoaded', function () {
        particlesJS.load('particles-js', 'assets/particles.json', function () {
          console.log('particles loaded');
        });
      });
    </script>
  </body>
</html>
```

- [ ] **Step 8: Update vite.config.ts with @ alias**

Replace `portfolio-vue/vite.config.ts`:
```ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

- [ ] **Step 9: Copy public assets**

From the repo root:
```bash
cp -r static/* portfolio-vue/public/
```
Expected: `portfolio-vue/public/images/`, `portfolio-vue/public/assets/particles.json`, `portfolio-vue/public/favicon.png`, `portfolio-vue/public/portfolio_logo.svg`, `portfolio-vue/public/portfolio_logo2.svg`, `portfolio-vue/public/.nojekyll`

- [ ] **Step 10: Delete scaffolded placeholder files**

```bash
rm -rf portfolio-vue/src/components portfolio-vue/src/assets
```
(create-vue generates sample HelloWorld components and a Vue logo — remove them)

- [ ] **Step 11: Replace App.vue with a minimal placeholder**

Write `portfolio-vue/src/App.vue`:
```vue
<template>
  <div>Hello Vue</div>
</template>
```

- [ ] **Step 12: Verify dev server starts**

```bash
cd portfolio-vue && pnpm dev
```
Expected: Vite dev server starts, browser shows "Hello Vue" with dark background (`bg-slate-950`). Particles animation should appear. If particles error in console, verify `public/assets/particles.json` exists.

- [ ] **Step 13: Verify TypeScript**

```bash
cd portfolio-vue && pnpm type-check
```
Expected: No errors.

- [ ] **Step 14: Commit**

```bash
git add portfolio-vue/
git commit -m "feat: scaffold Vue 3 + Vite + Tailwind portfolio project"
```

---

### Task 2: Data files

**Files:**
- Create: `portfolio-vue/src/data/constants.ts`
- Create: `portfolio-vue/src/data/index.ts`

**Interfaces:**
- Produces:
  - `export const WORK_MAIL: string`
  - `export const UBB_BACHELORS: string`, `UBB_MASTERS`, `UBB_PHD`, `HERMES`, `LINKEDIN_URL`, `GITHUB_URL`
  - `export interface Project { name, description, link, langs, image? }`
  - `export interface WorkExperience { title, company, link, start, end, technologies, description }`
  - `export const projects: Project[]`
  - `export const work_experiences: WorkExperience[]`

- [ ] **Step 1: Create src/data/constants.ts**

```ts
export const WORK_MAIL = 'danicodes45@gmail.com'
export const UBB_BACHELORS = 'https://www.cs.ubbcluj.ro/education/academic-programmes/undergraduate-programmes/computer-science-programme-profile/'
export const UBB_MASTERS = 'https://www.cs.ubbcluj.ro/education/academic-programmes/masters-programmes/distributed-systems-in-internet-programme-profile/'
export const UBB_PHD = 'https://www.cs.ubbcluj.ro/education/academic-programmes/doctoral-programmes/the-doctoral-school-in-mathematics-and-computer-science/'
export const HERMES = 'https://societateahermes.ro'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ardelean-george/'
export const GITHUB_URL = 'https://github.com/Giuco-senpai45'
```

- [ ] **Step 2: Create src/data/index.ts**

```ts
export interface Project {
  name: string
  description: string
  link: string
  langs: string[]
  image?: string
}

export interface WorkExperience {
  title: string
  company: string
  link: string
  start: string
  end: string
  technologies: string[]
  description: string[]
}

export const projects: Project[] = [
  {
    name: 'Multipath variants 4 congestion control',
    description:
      'Multiple paths means multiple providers, which have separate hardware infrastructure, essentially improving points of failure and making use of horizontal scaling to avoid the congestion of the network. I used a network simulation language and created a virtual topology that implemented a multipath wrapper which used the NADA algorithm for congestion control. Overall improvements in almost every metric. Higher packet throughput, better experience quality for the users, avoided the known issue of buffer starvation.',
    link: 'https://github.com/Giuco-senpai45/multipath-variants-for-congestion-control',
    langs: ['C++', 'ns-3', 'Networking', 'Congestion control', 'WebRTC'],
    image: 'images/projects/mp.png',
  },
  {
    name: 'Distributed Database simulated bank',
    description:
      'Correctly implemented a Multiversion Concurrency Control (MVCC) algorithm in order to avoid the common pitfalls of distributed databases. The project simulates a bank with multiple branches, each branch being a node in the distributed database. Each branch can process transactions (withdraw, deposit, transfer) and the data is replicated across all nodes. The system is resilient to node failures and network partitions, ensuring that the database remains consistent and available.',
    link: 'https://github.com/Giuco-senpai45/distributed-transactions',
    langs: ['Go', 'Vue', 'Distributed transactions', 'Concurrency control', 'Process algebrae', 'Python', 'Locust', 'Postgres', 'Docker'],
    image: 'images/projects/mvcc.png',
  },
  {
    name: 'WiFi Analyzer',
    description:
      'Correctly understand the IEEE 802.11 architecture. Manually parse raw data captured by the network interface card. Developed a desktop app using Tauri for the low-level capabilities of Rust. Analyzed and correctly parsed and interpreted the incoming beacon packets from nearby WiFi networks. Implemented a packet sniffer to monitor existing traffic. App correctly scans nearby WiFi routers with signal strengths and possibility to connect to them and sniff existing traffic.',
    link: 'https://github.com/Giuco-senpai45/wifi-analyzer',
    langs: ['802.11', 'Networking', 'Rust', 'Tauri', 'Sveltekit', 'C++', 'Linux', 'Wireshark', 'Aircrack-ng', 'Packet analysis', 'Network security'],
  },
  {
    name: 'Task Tracker',
    description:
      'Correctly implement failover and load balancing mechanisms in distributed systems. Microservice architecture implying 3 services. An authentication service (protects routes with JWT\'s), a task tracking service and a notification service that checks periodically for deadlines using the Kafka Producer/Consumer pattern. Load-balancing and failover are managed by a Nginx reverse proxy.',
    link: 'https://github.com/Giuco-senpai45/task-tracker',
    langs: ['Go', 'Postgres', 'Kafka', 'Docker', 'Nginx', 'Microservices', 'Load balancing'],
  },
  {
    name: 'JamSpot',
    description:
      'JamSpot represents a platform that lets users explore their musical tastes by providing an interaction with a hybrid music recommender system which will react to their preferences. I developed this project fueled by my passion about music. I knew that recommender systems were an important part of the Internet and I wanted to learn more about them. This project got me into the world of recommender systems and in my research I chose to develop a hybrid ensemble of two recommender systems that complement each other by covering the particular caveats that each of them have individually',
    link: 'https://github.com/Giuco-senpai45/Jamspot',
    langs: ['Python', 'Pandas', 'Prisma', 'Svelte', 'SciKitLearn', 'TypeScript'],
    image: 'images/projects/jamspot.png',
  },
  {
    name: 'Microservices Cluster',
    description:
      'This project presents itself as 5 different services: Broker, Authenticator, Logger, Emailer and Listener. These services can communicate with each other by 3 distinct methods: HTTP calls with JSON payloads, RCP calls and gRCP calls. The "client" was simulated by requests realized in Postman. These services communicate with 2 different databases (Mongo and Postgres) and are containerized in Docker containers to be orchestrated using Kubernetes.',
    link: 'https://github.com/Giuco-senpai45/go-microservices',
    langs: ['Go', 'gRPC', 'RabbitMQ', 'Docker', 'Kubernetes', 'Mongo'],
    image: 'images/projects/micros.png',
  },
  {
    name: 'Lucene Search Engine',
    description:
      'This projects creates a search engine on a dataset consisting of various Wikipedia pages, which are parsed and built into an inverted index. This project was made in order to materialize techniques learned in my Data mining course, in particular this project creates an optimized inverted index through various processing steps (tokenization, lemmatization and compression). The resulted inverted index was then tested with various metrics to prove it\'s effectiveness.',
    link: 'https://github.com/Giuco-senpai45/DM_UBB-2023.git',
    langs: ['Java', 'Apache Lucene'],
    image: 'images/projects/invertedindex.png',
  },
  {
    name: 'Project Manager',
    description:
      'This project is a backend design for a project management system similar to a Kanban Board. It presents itself as a cluster managed by Kubernetes of 2 different API\'s one in ExpressJs and one in Go. These API\'s also implement a authentication system using JWT and cookies. Only registered and logged in user\'s can create, access and modify their projects.',
    link: 'https://github.com/Giuco-senpai45/project-management',
    langs: ['Go', 'ExpressJS', 'Docker', 'Kubernetes'],
    image: 'images/projects/pm.png',
  },
  {
    name: 'Library Manager',
    description:
      'This projects simulates a library management system letting it\'s user manage books and their authors. The project uses a Postgres database and it was developed using the MVC pattern.',
    link: 'https://github.com/Giuco-senpai45/Library-Management.git',
    langs: ['Java', 'SpringBoot', 'ThymeLeaf', 'Hibernate'],
    image: 'images/projects/lbm.png',
  },
  {
    name: 'Forkify',
    description:
      'A web application that lets you explore different cooking recipes. Being a static web page the project is hosted using Surge. The recipes data is extracted from an API and they will be modified dynamically based on the number of serving. Users can bookmark recipes (saved in local storage) and they can upload their own recipes (also stored on local storage)',
    link: 'https://github.com/Giuco-senpai45/Forkify-Recipe-Application.git',
    langs: ['JavaScript', 'Sass', 'Axios'],
    image: 'images/projects/forky.png',
  },
  {
    name: 'Mapty',
    description:
      'Show the users general area based on their current location using the Leaflet library. Users can pin 2 types of markers based on a sports activity they had (running or cycling). The marker will store some date (cadence, number of kilometers, elevation), markers are saved in local storage',
    link: 'https://github.com/Giuco-senpai45/Mapty',
    langs: ['JavaScript', 'Leaflet'],
    image: 'images/projects/mapty.png',
  },
]

export const work_experiences: WorkExperience[] = [
  {
    title: 'Co-Founder & CTO',
    technologies: ['Golang', 'VueJS', 'C++', 'Docker', 'Deep Learning', 'Embedded Systems', 'Arduino'],
    start: 'July 2024',
    end: 'Ongoing',
    company: 'NeuroRevive',
    description: [
      'Principal software engineer, currently maintaining the whole software ecosystem',
      'Architect and actively develop intelligent software solutions',
      'Research current landscape of healthcare applied artificial intelligence',
      'Create a modern infrastructure and seamless deployment',
    ],
    link: 'https://www.neurorevive.eu',
  },
  {
    title: 'Full-Stack Engineer',
    technologies: ['Golang', 'VueJS', '.NET', 'C++', 'Jenkins'],
    start: 'October 2024',
    end: 'Ongoing',
    company: 'OpenText',
    description: [
      'Member of the Load Runner Performance team.',
      'Maintaining and actively developing new features on enterprise grade software (Virtual User Generator)',
      'Work with and modernize existing legacy code',
      'Active member in the company wide AI first transistion',
    ],
    link: 'https://www.opentext.com',
  },
  {
    title: 'Backend Developer',
    technologies: ['Golang', 'ExpressJS', 'Docker', 'Kubernetes', 'AWS EKS'],
    start: 'August 2023',
    end: 'December 2023',
    company: 'Lasting Dynamics',
    description: [
      'Worked in an agile environment with weekly scrums',
      'Architected and developed two different API\'s (Go and Express)',
      'Implemented sessions in the form of cookies with JWT for some protected routes',
      'Embedded the API\'s in a Kubernetes cluster deployed on AWS using EKS',
    ],
    link: 'https://www.lastingdynamics.com',
  },
  {
    title: 'Junior Full-Stack Developer',
    technologies: ['Rails', 'React', 'Figma', 'Redux', 'Tailwind'],
    start: 'June 2022',
    end: 'November 2022',
    company: 'Appssemble',
    description: [
      'Continued developing my abilities of creating quality production software in the form of MVP\'s (Minimum Viable Products)',
      'Send and confirm e-mails using Devise and Sendgrid',
      'Create and run scripts (different languages bash, python, java) or executables from the Rails server',
      'Analyse and take architectural decisions in implementing the API\'s and the database (schema of the database and the endpoints offered by the API)',
      'Create the actual frontend for the product using React with Redux and Tailwind from Figma designs',
    ],
    link: 'https://appssemble.com',
  },
  {
    title: 'Intern Backend Developer',
    technologies: ['Rails', 'AWS', 'Postman', 'Bash'],
    start: 'March 2022',
    end: 'June 2022',
    company: 'Appssemble',
    description: [
      'Create custom API\'s and deployed them to production',
      'Automate server-side functions to run at a set time using Cronjobs and Sidekiq',
      'Create and administrate blob storages in the form of AWS S3 buckets',
      'Worked in an Agile environment',
      'Create complex relational databases using Rails Active Records',
    ],
    link: 'https://appssemble.com',
  },
]
```

- [ ] **Step 3: Verify TypeScript**

```bash
cd portfolio-vue && pnpm type-check
```
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add portfolio-vue/src/data/
git commit -m "feat: add TypeScript data files for projects and work experiences"
```

---

### Task 3: Layout shell — App.vue, Header.vue, Footer.vue, MainContent.vue

**Files:**
- Create: `portfolio-vue/src/components/Header.vue`
- Create: `portfolio-vue/src/components/Footer.vue`
- Create: `portfolio-vue/src/components/MainContent.vue`
- Modify: `portfolio-vue/src/App.vue`

**Interfaces:**
- Consumes: nothing from prior tasks (no data imports yet)
- Produces:
  - `Header.vue` — prop `y: number`
  - `MainContent.vue` — renders `<slot />`
  - `App.vue` — scroll `y` as `ref<number>`, wires Header + MainContent + Footer + back-to-top

- [ ] **Step 1: Create Footer.vue**

`portfolio-vue/src/components/Footer.vue`:
```vue
<template></template>
```

- [ ] **Step 2: Create MainContent.vue**

`portfolio-vue/src/components/MainContent.vue`:
```vue
<template>
  <main class="flex flex-col flex-1 p-4 mx-14 space-y-10">
    <slot />
  </main>
</template>
```

- [ ] **Step 3: Create Header.vue**

`portfolio-vue/src/components/Header.vue`:
```vue
<script setup lang="ts">
defineProps<{ y: number }>()

const tabs = [
  { name: 'About', link: '#about' },
  { name: 'Experience', link: '#experience' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
]
</script>

<template>
  <header
    :class="[
      'sticky z-50 top-0 duration-200 px-20 pb-20 flex items-center justify-between',
      y > 0 ? 'py-4 bg-slate-950' : 'py-6 backdrop-blur-sm bg-transparent border-transparent'
    ]"
  >
    <div class="hidden sm:flex items-center space-x-5">
      <template v-if="y <= 0">
        <p class="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl poppins">Welcome</p>
        <img src="/images/wave.gif" alt="wave" class="rounded-full max-h-5 sm:max-h-12 bg-slate-800 opacity-80" />
      </template>
    </div>

    <div :class="['items-center gap-12 flex', y > 0 ? 'mr-auto ml-auto' : 'ml-auto']">
      <a v-for="tab in tabs" :key="tab.name" :href="tab.link" class="duration-200 hover:text-violet-400">
        <p class="text-md sm:text-xl md:text-2xl lg:text-3xl tech-mono uppercase">{{ tab.name }}</p>
      </a>
    </div>
  </header>
</template>
```

- [ ] **Step 4: Write App.vue with scroll state and layout**

`portfolio-vue/src/App.vue`:
```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '@/components/Header.vue'
import MainContent from '@/components/MainContent.vue'
import Footer from '@/components/Footer.vue'

const y = ref(0)
const handleScroll = () => { y.value = window.scrollY }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const goTop = () => document.body.scrollIntoView()
</script>

<template>
  <div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div
      :class="[
        'fixed bottom-0 w-full duration-200 flex p-10 z-[10]',
        y > 0 ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
      ]"
    >
      <button
        @click="goTop"
        class="px-3 ml-auto rounded-full cursor-pointer bg-slate-900 text-violet-400 sm:px-4 hover:bg-slate-800"
      >
        <i class="grid fa-solid fa-arrow-up place-items-center aspect-square" />
      </button>
    </div>

    <Header :y="y" />
    <MainContent>
      <!-- sections go here in Task 10 -->
    </MainContent>
    <Footer />
  </div>
</template>
```

- [ ] **Step 5: Verify dev server**

```bash
cd portfolio-vue && pnpm dev
```
Expected: Header renders with nav tabs. Dark background. "Welcome" + wave gif visible when at top. Nav centers when scrolled down.

- [ ] **Step 6: Verify TypeScript**

```bash
cd portfolio-vue && pnpm type-check
```
Expected: No errors.

- [ ] **Step 7: Commit**

```bash
git add portfolio-vue/src/
git commit -m "feat: add layout shell — App, Header, MainContent, Footer"
```

---

### Task 4: Introduction.vue

**Files:**
- Create: `portfolio-vue/src/components/sections/Introduction.vue`

**Interfaces:**
- Consumes: `WORK_MAIL` from `@/data/constants`
- Produces: `Introduction.vue` — image hover swap between `me-slate.png` and `me-pic.png`

- [ ] **Step 1: Create Introduction.vue**

`portfolio-vue/src/components/sections/Introduction.vue`:
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { WORK_MAIL } from '@/data/constants'

const imgElem = ref<HTMLImageElement | null>(null)

const hoveringPic = () => {
  if (imgElem.value) imgElem.value.src = '/images/me-pic.png'
}
const leavingPic = () => {
  if (imgElem.value) imgElem.value.src = '/images/me-slate.png'
}
</script>

<template>
  <section id="introduction" class="grid items-center grid-cols-2">
    <div class="flex flex-col gap-6 text-center lg:justify-center lg:text-left md:gap-8">
      <div class="px-5 space-y-2 backdrop-blur-sm">
        <p class="text-lg font-bold text-center sm:text-3xl md:text-5xl md:text-left text-cyan-300 poppins">Hello,</p>
        <p class="text-lg font-bold text-center sm:text-3xl md:text-5xl md:text-left poppins">
          <span class="text-cyan-300">I'm</span>
          <span
            tabindex="0"
            role="button"
            @mouseleave="leavingPic"
            @focus="hoveringPic"
            @mouseover="hoveringPic"
            class="text-violet-400 hover:text-amber-600"
          >
            Ardelean Daniel,
          </span>
        </p>
        <p class="text-lg font-bold sm:text-3xl md:text-5xl poppins text-cyan-300">
          I build modern software solutions.
        </p>
        <p class="text-sm sm:text-md md:text-xl lg:pt-3 tech-mono text-slate-300">
          Adaptable / Passionate / Ambitious
        </p>
      </div>

      <a
        :href="`mailto:${WORK_MAIL}`"
        target="_blank"
        class="relative items-center self-start block px-6 py-3 mx-5 overflow-hidden transition-all ring-cyan-600 ring-2 btn group sm:text-lg md:text-xl poppins"
      >
        <span class="z-10 w-full transition-colors duration-300 ease-in-out">
          Get in touch &rarr;
        </span>
      </a>
    </div>

    <div class="grid shadow-2xl place-items-center">
      <img
        ref="imgElem"
        src="/images/me-slate.png"
        @mouseleave="leavingPic"
        @focus="hoveringPic"
        @mouseover="hoveringPic"
        alt="Me pic"
        class="object-cover z-[2] max-h-[40vh] md:max-h-[50vh] lg:max-h-[70vh]"
      />
    </div>
  </section>
</template>
```

- [ ] **Step 2: Mount Introduction in App.vue to verify**

Edit `portfolio-vue/src/App.vue` — add import and drop `<Introduction />` inside `<MainContent>`:
```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '@/components/Header.vue'
import MainContent from '@/components/MainContent.vue'
import Footer from '@/components/Footer.vue'
import Introduction from '@/components/sections/Introduction.vue'

const y = ref(0)
const handleScroll = () => { y.value = window.scrollY }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const goTop = () => document.body.scrollIntoView()
</script>

<template>
  <div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div
      :class="[
        'fixed bottom-0 w-full duration-200 flex p-10 z-[10]',
        y > 0 ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
      ]"
    >
      <button
        @click="goTop"
        class="px-3 ml-auto rounded-full cursor-pointer bg-slate-900 text-violet-400 sm:px-4 hover:bg-slate-800"
      >
        <i class="grid fa-solid fa-arrow-up place-items-center aspect-square" />
      </button>
    </div>

    <Header :y="y" />
    <MainContent>
      <Introduction />
    </MainContent>
    <Footer />
  </div>
</template>
```

- [ ] **Step 3: Verify in browser**

```bash
cd portfolio-vue && pnpm dev
```
Expected: Introduction section renders. Hovering over the name or the photo swaps the image.

- [ ] **Step 4: Verify TypeScript**

```bash
cd portfolio-vue && pnpm type-check
```
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add portfolio-vue/src/components/sections/Introduction.vue portfolio-vue/src/App.vue
git commit -m "feat: add Introduction section with image hover swap"
```

---

### Task 5: About.vue

**Files:**
- Create: `portfolio-vue/src/components/sections/About.vue`

**Interfaces:**
- Consumes: `UBB_BACHELORS`, `UBB_MASTERS`, `UBB_PHD`, `HERMES` from `@/data/constants`
- Produces: `About.vue` — static section with text and photo grid with zoom hover

- [ ] **Step 1: Create About.vue**

`portfolio-vue/src/components/sections/About.vue`:
```vue
<script setup lang="ts">
import { UBB_BACHELORS, UBB_MASTERS, UBB_PHD, HERMES } from '@/data/constants'

const row1 = [
  { img: 'h1', label: 'Coordination' },
  { img: 'h2', label: 'Teamwork' },
  { img: 'h3', label: 'Team player' },
]
const row2 = [
  { img: 'h4', label: 'Charismatic' },
  { img: 'h6', label: 'Flexibility' },
  { img: 'h7', label: 'Cool headed' },
]
</script>

<template>
  <section id="about" class="grid grid-cols-2 py-20">
    <p class="col-span-2 pb-10 text-center section-title">01. About Me</p>
    <div class="px-5 pt-10 lg:px-10 backdrop-blur-sm">
      <p class="text-sm md:text-lg lg:text-xl">Hello!</p>
      <br />
      <p class="text-sm md:text-lg lg:text-xl">
        I'm Daniel, and one of my favorite perks about myself is my endless curiosity.
      </p>
      <p class="text-sm md:text-lg lg:text-xl">
        I graduated from
        <a :href="UBB_BACHELORS" target="_blank" class="text-violet-400 hover:text-cyan-400">
          Babes-Bolyai's Computer Science Bachelors programme
        </a>
        followed by a master's in
        <a :href="UBB_MASTERS" target="_blank" class="text-violet-400 hover:text-cyan-400">
          Distributed Systems
        </a>
        at the same university. Currently I'm pursuing a
        <a :href="UBB_PHD" target="_blank" class="text-violet-400 hover:text-cyan-400">
          PhD in the field of Artificial Intelligence for Healthcare
        </a>.
        <br />
        My research focuses mainly on: Computer Vision, Deep Learning, applied on medical recuperation devices.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:px-5 lg:px-5 lg:grid-cols-3 justify-center">
      <div
        v-for="card in row1"
        :key="card.img"
        class="relative flex items-center justify-center m-3 overflow-hidden shadow-xl h-32 w-auto rounded-md group"
      >
        <div
          :style="{ backgroundImage: `url('/images/volunteering/${card.img}.jpg')` }"
          class="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-150"
        />
        <h1 class="absolute text-base xl:text-lg font-extrabold transition-all duration-500 ease-in-out transform scale-105 md:scale-110 lg:scale-150 group-hover:scale-100 text-white opacity-80 tech-mono">
          {{ card.label }}
        </h1>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:px-5 lg:px-5 lg:grid-cols-3 justify-center">
      <div
        v-for="card in row2"
        :key="card.img"
        class="relative flex items-center justify-center m-3 overflow-hidden shadow-xl h-32 w-auto rounded-md group"
      >
        <div
          :style="{ backgroundImage: `url('/images/volunteering/${card.img}.jpg')` }"
          class="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-150"
        />
        <h1 class="absolute text-base xl:text-lg font-extrabold transition-all duration-500 ease-in-out transform scale-105 md:scale-110 lg:scale-150 group-hover:scale-100 text-white opacity-80 tech-mono">
          {{ card.label }}
        </h1>
      </div>
    </div>

    <div class="px-5 pt-10 lg:px-10 backdrop-blur-sm">
      <p class="text-sm md:text-lg lg:text-xl poppins">
        In a journey to discover myself I started volunteering and I was part of the HR department for 2 years followed by a year in the leading board as the Events Manager for
        <a :href="HERMES" target="_blank" class="text-violet-400 hover:text-cyan-400">Societatea Hermes</a>.
        Currently I'm maintaining the IT infrastructure of the organization where I also coordinate volunteer teams for revamping old websites.
      </p>
    </div>
  </section>
</template>
```
- [ ] **Step 2: Add About to App.vue**

Edit `portfolio-vue/src/App.vue` — add to the `<script setup>` imports and to `<MainContent>`:
```vue
import About from '@/components/sections/About.vue'
```
In template:
```vue
<MainContent>
  <Introduction />
  <About />
</MainContent>
```

- [ ] **Step 3: Verify in browser**

```bash
cd portfolio-vue && pnpm dev
```
Expected: About section renders with text and 6 photo cards. Hovering a card zooms the image and shrinks the text label.

- [ ] **Step 4: Verify TypeScript**

```bash
cd portfolio-vue && pnpm type-check
```
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add portfolio-vue/src/components/sections/About.vue portfolio-vue/src/App.vue
git commit -m "feat: add About section"
```

---

### Task 6: ExperienceCard.vue + Experience.vue

**Files:**
- Create: `portfolio-vue/src/components/dynamic/ExperienceCard.vue`
- Create: `portfolio-vue/src/components/sections/Experience.vue`

**Interfaces:**
- Consumes: `work_experiences: WorkExperience[]` from `@/data/index`
- Produces:
  - `ExperienceCard.vue` — prop `experienceIndex: number`
  - `Experience.vue` — tab list that switches `experienceIndex`, `:key` triggers fade-right animation

- [ ] **Step 1: Create ExperienceCard.vue**

`portfolio-vue/src/components/dynamic/ExperienceCard.vue`:
```vue
<script setup lang="ts">
import { computed } from 'vue'
import { work_experiences } from '@/data/index'

const props = defineProps<{ experienceIndex: number }>()
const exp = computed(() => work_experiences[props.experienceIndex])
</script>

<template>
  <div class="p-10 min-h-[600px]">
    <div class="grid grid-cols-1 gap-5">
      <h3 class="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl text-violet-400 poppins">
        {{ exp.title }}
        <span class="text-cyan-400 hover:text-cyan-300">
          @
          <a :href="exp.link" target="_blank">{{ exp.company }}</a>
        </span>
      </h3>
      <p class="pb-2 text-lg font-semibold sm:text-xl md:text-2xl tech-mono">
        {{ exp.start }} - {{ exp.end }}
      </p>
      <ul class="space-y-2 list-disc px-6">
        <li v-for="(detail, i) in exp.description" :key="i" class="md:text-lg lg:text-xl poppins">
          {{ detail }}
        </li>
      </ul>
      <div class="flex flex-row space-x-6 flex-wrap">
        <p
          v-for="tech in exp.technologies"
          :key="tech"
          class="font-thin text-cyan-300 text-md tech-mono sm:text-lg md:text-xl lg:text-2xl"
        >
          {{ tech }}
        </p>
      </div>
    </div>
  </div>
</template>
```

- [ ] **Step 2: Create Experience.vue**

`portfolio-vue/src/components/sections/Experience.vue`:
```vue
<script setup lang="ts">
import { ref } from 'vue'
import ExperienceCard from '@/components/dynamic/ExperienceCard.vue'

const experienceLabels = [
  'Co-Founder & CTO',
  'Full-Stack Engineer',
  'Backend Academy Golang',
  'Junior Full-Stack Developer',
  'Internship Backend Ruby on Rails',
]

const experienceIndex = ref(0)
</script>

<template>
  <section id="experience" class="grid items-center grid-cols-1">
    <p class="pb-5 text-center md:pb-10 section-title">02. Experience</p>
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 place-items-center backdrop-blur-sm">
      <ul class="space-y-5 border-l-2">
        <li v-for="(label, i) in experienceLabels" :key="i">
          <button
            @click="experienceIndex = i"
            :class="[
              'p-5 text-lg sm:text-xl md:text-2xl lg:text-3xl cursor-pointer hover:text-cyan-400 poppins',
              experienceIndex === i ? 'border-l-4 border-cyan-400 duration-200 text-cyan-400 font-semibold' : ''
            ]"
          >
            {{ label }}
          </button>
        </li>
      </ul>

      <div :key="experienceIndex" class="animate-fade-right">
        <ExperienceCard :experienceIndex="experienceIndex" />
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 3: Add Experience to App.vue**

Edit `portfolio-vue/src/App.vue`:
```vue
import Experience from '@/components/sections/Experience.vue'
```
In template:
```vue
<MainContent>
  <Introduction />
  <About />
  <Experience />
</MainContent>
```

- [ ] **Step 4: Verify in browser**

```bash
cd portfolio-vue && pnpm dev
```
Expected: Experience section renders. Clicking a job title on the left updates the card on the right with a fade-right animation.

- [ ] **Step 5: Verify TypeScript**

```bash
cd portfolio-vue && pnpm type-check
```
Expected: No errors.

- [ ] **Step 6: Commit**

```bash
git add portfolio-vue/src/components/dynamic/ExperienceCard.vue portfolio-vue/src/components/sections/Experience.vue portfolio-vue/src/App.vue
git commit -m "feat: add Experience section with animated tab switching"
```

---

### Task 7: Project.vue + Projects.vue

**Files:**
- Create: `portfolio-vue/src/components/dynamic/Project.vue`
- Create: `portfolio-vue/src/components/sections/Projects.vue`

**Interfaces:**
- Consumes: `projects: Project[]`, `Project` interface from `@/data/index`
- Produces:
  - `Project.vue` — prop `project: Project`; toggles between description and image
  - `Projects.vue` — paged list (6 at a time), load-more / see-less buttons

- [ ] **Step 1: Create Project.vue**

`portfolio-vue/src/components/dynamic/Project.vue`:
```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/data/index'

defineProps<{ project: Project }>()

const showPic = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4 p-4 text-justify duration-200 border border-solid rounded-lg shadow-md hover:shadow-lg hover:-translate-y-[2px] hover:-skew-y-1 sm:p-6 md:p-8 border-violet-700 group hover:border-violet-400 hover:shadow-violet-500 shadow-violet-700 backdrop-blur-sm">
    <div class="flex justify-center">
      <button
        class="p-2 mb-6 text-2xl duration-200 bg-transparent rounded-full hover:bg-violet-700 hover:bg-opacity-40 hover:shadow-md hover:shadow-violet-300"
        @click="showPic = !showPic"
      >
        <i :class="showPic ? 'fas fa-eye-slash' : 'fas fa-eye'" />
      </button>
    </div>
    <a
      :href="project.link"
      target="_blank"
      class="self-end w-4 mx-2 -mt-24 text-2xl rounded-full cursor-pointer md:text-4xl hover:text-cyan-400 fa-brands fa-github"
    />
    <div class="grid mx-auto text-5xl duration-200 gap-y-4 place-items-center md:text-5xl">
      <h3 class="pb-2 text-xl font-medium sm:text-3xl md:text-4xl">{{ project.name }}</h3>
      <img
        v-if="showPic && project.image"
        :src="project.image"
        :alt="project.name"
        class="bg-slate-800 md:w-full md:h-full"
      />
      <p v-else class="text-sm md:text-lg poppins">{{ project.description }}</p>
    </div>
    <div class="grid items-center grid-cols-2 gap-2 mt-5 align-bottom 2xl:grid-cols-3">
      <p v-for="lang in project.langs" :key="lang" class="text-sm md:text-lg tech-mono">{{ lang }}</p>
    </div>
  </div>
</template>
```

- [ ] **Step 2: Create Projects.vue**

`portfolio-vue/src/components/sections/Projects.vue`:
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '@/data/index'
import Project from '@/components/dynamic/Project.vue'

const totalDisplayed = ref(6)
</script>

<template>
  <section id="projects" class="flex flex-col gap-12 px-5 py-20 lg:gap-24 md:px-7 lg:px-10 lg:py-32">
    <div class="flex flex-col gap-2 text-center">
      <p class="pb-10 text-center section-title">03. Projects</p>
      <div class="self-center max-w-3xl text-justify backdrop-blur-sm">
        <p class="mb-10 sm:text-lg md:text-xl poppins">
          Below I've selected some of my more "consistent" personal projects. Most
          of them either peak from a consistency (lots of coding) or from a
          technical (a challenging implementation) point of view.
        </p>
        <p class="sm:text-lg md:text-xl poppins">
          For a more detalied view of the projects I highly suggest checking out
          their github repository.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      <Project
        v-for="(project, i) in projects"
        :key="project.name"
        v-show="i < totalDisplayed"
        :project="project"
      />
    </div>
    <div class="flex justify-center space-x-36">
      <button
        v-if="totalDisplayed <= projects.length"
        class="p-5 text-lg backdrop-blur-sm sm:text-xl md:text-2xl font-semibold text-white bg-transparent rounded-xl shadow-md hover:shadow-md hover:shadow-violet-300 hover:translate-y-[2px] border-2 border-violet-700 hover:bg-violet-700 hover:bg-opacity-40"
        @click="totalDisplayed += 3"
      >
        Load more
      </button>
      <button
        v-if="totalDisplayed > 6"
        class="p-5 text-lg backdrop-blur-sm sm:text-xl md:text-2xl font-semibold text-white bg-transparent rounded-xl shadow-md hover:shadow-md hover:shadow-violet-300 hover:translate-y-[2px] border-2 border-violet-700 hover:bg-violet-700 hover:bg-opacity-40"
        @click="totalDisplayed -= 3"
      >
        See less
      </button>
    </div>
  </section>
</template>
```

- [ ] **Step 3: Add Projects to App.vue**

Edit `portfolio-vue/src/App.vue`:
```vue
import Projects from '@/components/sections/Projects.vue'
```
In template:
```vue
<MainContent>
  <Introduction />
  <About />
  <Experience />
  <Projects />
</MainContent>
```

- [ ] **Step 4: Verify in browser**

```bash
cd portfolio-vue && pnpm dev
```
Expected: Projects section shows 6 cards. "Load more" adds 3. "See less" removes 3. Eye icon toggles description/image on each card.

- [ ] **Step 5: Verify TypeScript**

```bash
cd portfolio-vue && pnpm type-check
```
Expected: No errors.

- [ ] **Step 6: Commit**

```bash
git add portfolio-vue/src/components/dynamic/Project.vue portfolio-vue/src/components/sections/Projects.vue portfolio-vue/src/App.vue
git commit -m "feat: add Projects section with load-more and image toggle"
```

---

### Task 8: Contact.vue + final App.vue wiring

**Files:**
- Create: `portfolio-vue/src/components/sections/Contact.vue`
- Modify: `portfolio-vue/src/App.vue` (final state)

**Interfaces:**
- Consumes: `WORK_MAIL`, `GITHUB_URL`, `LINKEDIN_URL` from `@/data/constants`

- [ ] **Step 1: Create Contact.vue**

`portfolio-vue/src/components/sections/Contact.vue`:
```vue
<script setup lang="ts">
import { WORK_MAIL, GITHUB_URL, LINKEDIN_URL } from '@/data/constants'
</script>

<template>
  <section id="contact" class="flex flex-col items-center">
    <p class="col-span-2 pb-5 lg:pb-10 section-title text-center">04. Contact</p>
    <div class="grid grid-cols-2 max-w-3xl justify-center py-10">
      <div class="space-y-2 px-4 border-r-2 border-slate-700">
        <h4 class="text-3xl text-amber-500 font-semibold">Want to chat?</h4>
        <p class="text-lg poppins">
          My inbox is open for all. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>
      <div class="flex text-xl px-14 pt-2">
        <ul class="space-y-2">
          <li>
            <a :href="GITHUB_URL" target="_blank">
              <i class="fa-brands fa-github" /> GitHub
            </a>
          </li>
          <li>
            <a :href="LINKEDIN_URL" target="_blank">
              <i class="fa-brands fa-linkedin" /> Linkedin
            </a>
          </li>
          <li>
            <a :href="`mailto:${WORK_MAIL}`" target="_blank">
              <i class="fa-regular fa-envelope" /> E-mail
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Write the final App.vue with all sections**

`portfolio-vue/src/App.vue` (final state):
```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '@/components/Header.vue'
import MainContent from '@/components/MainContent.vue'
import Footer from '@/components/Footer.vue'
import Introduction from '@/components/sections/Introduction.vue'
import About from '@/components/sections/About.vue'
import Experience from '@/components/sections/Experience.vue'
import Projects from '@/components/sections/Projects.vue'
import Contact from '@/components/sections/Contact.vue'

const y = ref(0)
const handleScroll = () => { y.value = window.scrollY }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const goTop = () => document.body.scrollIntoView()
</script>

<template>
  <div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div
      :class="[
        'fixed bottom-0 w-full duration-200 flex p-10 z-[10]',
        y > 0 ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
      ]"
    >
      <button
        @click="goTop"
        class="px-3 ml-auto rounded-full cursor-pointer bg-slate-900 text-violet-400 sm:px-4 hover:bg-slate-800"
      >
        <i class="grid fa-solid fa-arrow-up place-items-center aspect-square" />
      </button>
    </div>

    <Header :y="y" />
    <MainContent>
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </MainContent>
    <Footer />
  </div>
</template>
```

- [ ] **Step 3: Full visual verification**

```bash
cd portfolio-vue && pnpm dev
```
Walk through the full page and verify:
- [ ] Header shows "Welcome" + wave at top, centers nav when scrolled
- [ ] Back-to-top button appears when scrolled
- [ ] Introduction: name hover swaps image
- [ ] About: 6 photo cards with zoom, links to UBB/Hermes
- [ ] Experience: tab switching with fade animation, all 5 jobs
- [ ] Projects: 6 cards, load more/less, eye toggle, GitHub links
- [ ] Contact: GitHub/LinkedIn/email links

- [ ] **Step 4: Verify TypeScript**

```bash
cd portfolio-vue && pnpm type-check
```
Expected: No errors.

- [ ] **Step 5: Verify production build**

```bash
cd portfolio-vue && pnpm build
```
Expected: `dist/` generated with no errors.

- [ ] **Step 6: Preview production build**

```bash
cd portfolio-vue && pnpm preview
```
Expected: Site looks identical to dev. Particles background running. All sections render.

- [ ] **Step 7: Commit**

```bash
git add portfolio-vue/src/components/sections/Contact.vue portfolio-vue/src/App.vue
git commit -m "feat: add Contact section, complete full-page wiring"
```

---

### Task 9: Deploy configuration

**Files:**
- Modify: `portfolio-vue/package.json` (add deploy script)

**Interfaces:**
- Produces: `pnpm deploy` builds and pushes `dist/` to GitHub Pages via `gh-pages`

- [ ] **Step 1: Add gh-pages dependency**

```bash
cd portfolio-vue && pnpm add -D gh-pages
```

- [ ] **Step 2: Add deploy script to package.json**

Edit `portfolio-vue/package.json` — add to `"scripts"`:
```json
"deploy": "pnpm run build && pnpm dlx gh-pages -d dist -t"
```
Full scripts section after edit:
```json
"scripts": {
  "dev": "vite",
  "build": "vue-tsc -b && vite build",
  "preview": "vite preview",
  "type-check": "vue-tsc --build --noEmit",
  "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
  "deploy": "pnpm run build && pnpm dlx gh-pages -d dist -t"
}
```

- [ ] **Step 3: Verify build still passes**

```bash
cd portfolio-vue && pnpm build
```
Expected: `dist/` generated cleanly.

- [ ] **Step 4: Commit**

```bash
git add portfolio-vue/package.json
git commit -m "feat: add gh-pages deploy script"
```

---

## Promotion Checklist (after all tasks complete)

When you're happy with the Vue port and want to make it the live site:

```bash
# From repo root
# 1. Delete Svelte source
rm -rf src svelte.config.js static .svelte-kit .npmrc pnpm-lock.yaml package.json postcss.config.js tailwind.config.js vite.config.js

# 2. Move Vue project up
cp -r portfolio-vue/. .
rm -rf portfolio-vue

# 3. Reinstall
pnpm install

# 4. Verify
pnpm build

# 5. Commit
git add -A
git commit -m "feat: replace Svelte with Vue 3 + Vite portfolio"

# 6. Deploy
pnpm deploy
```
