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
