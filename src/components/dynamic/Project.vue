<script setup lang="ts">
import type { Project } from '@/data/index'

defineProps<{ project: Project }>()
</script>

<template>
  <div class="glass-card group relative flex flex-col overflow-hidden duration-200 hover:-translate-y-1">
    <!-- Image with hover overlay (desktop only) -->
    <div class="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 overflow-hidden">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.name"
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        v-else
        class="w-full h-full bg-gradient-to-br from-amber-900/40 to-slate-800"
      />

      <!-- Hover overlay — desktop only -->
      <div class="hidden md:flex absolute inset-0 items-start justify-center p-6 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto"
        style="background: rgba(10, 12, 18, 0.77);">
        <p class="text-sm md:text-base poppins text-slate-300 text-center leading-relaxed">
          {{ project.description }}
        </p>
      </div>
    </div>

    <!-- Bottom: name + GitHub + description (mobile) + tech tags -->
    <div class="flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 bg-slate-900/20 border-t border-white/5">
      <div class="flex items-center justify-between gap-3">
        <h3 class="text-sm sm:text-base md:text-lg font-semibold poppins leading-snug">{{ project.name }}</h3>
        <a
          :href="project.link"
          target="_blank"
          class="text-lg sm:text-xl md:text-2xl text-slate-400 hover:text-amber-400 duration-200 fa-brands fa-github flex-shrink-0"
        ></a>
      </div>

      <!-- Description always visible on mobile, hidden on md+ (shown via hover overlay) -->
      <p class="md:hidden text-xs sm:text-sm poppins text-slate-300 leading-relaxed line-clamp-3">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1">
        <span v-for="lang in project.langs" :key="lang" class="text-xs md:text-sm lg:text-base tech-mono text-amber-300/80">
          {{ lang }}
        </span>
      </div>
    </div>
  </div>
</template>
