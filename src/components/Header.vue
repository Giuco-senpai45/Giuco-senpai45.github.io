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
    class="sticky top-0 z-50 duration-200 flex items-center px-4 sm:px-10 md:px-20 py-4"
    :class="y > 0 ? 'justify-center' : 'justify-between'"
  >
    <!-- Welcome (top only, hidden on small screens) -->
    <div v-if="y <= 0" class="hidden sm:flex items-center space-x-3 mr-auto">
      <p class="text-base sm:text-xl md:text-2xl lg:text-3xl poppins text-white">Welcome</p>
      <span class="wave-icon text-2xl sm:text-3xl md:text-4xl" aria-hidden="true">👋</span>
    </div>

    <!-- Nav pill when scrolled, inline when at top -->
    <div
      :class="y > 0
        ? 'glass-card flex items-center gap-4 sm:gap-6 md:gap-8 px-5 sm:px-7 py-2 sm:py-3 rounded-full'
        : 'flex items-center gap-4 sm:gap-8 md:gap-12'"
    >
      <a
        v-for="tab in tabs"
        :key="tab.name"
        :href="tab.link"
        class="duration-200 hover:text-amber-400 tech-mono uppercase"
        :class="y > 0
          ? 'text-xs sm:text-sm md:text-base tracking-wider'
          : 'text-sm sm:text-lg md:text-xl lg:text-2xl'"
      >
        {{ tab.name }}
      </a>
    </div>
  </header>
</template>
