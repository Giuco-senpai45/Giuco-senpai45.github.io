<script setup lang="ts">
import type { Project } from '@/data/index'

defineProps<{ project: Project }>()
</script>

<template>
  <div class="group relative flex flex-col rounded-xl border border-violet-700 hover:border-violet-400 shadow-md hover:shadow-violet-500 shadow-violet-700 overflow-hidden duration-200 hover:-translate-y-1 backdrop-blur-sm">
    <!-- Image area with hover description overlay -->
    <div class="relative h-72 md:h-96 overflow-hidden">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        v-else
        class="w-full h-full bg-gradient-to-br from-violet-900/60 to-slate-800"
      />

      <!-- Description overlay on hover -->
      <div class="absolute inset-0 bg-slate-950/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p class="text-sm md:text-base poppins text-slate-200 text-center leading-relaxed">
          {{ project.description }}
        </p>
      </div>
    </div>

    <!-- Bottom: name + GitHub + tech tags -->
    <div class="flex flex-col gap-3 p-5">
      <div class="flex items-center justify-between">
        <h3 class="text-lg md:text-xl font-semibold poppins">{{ project.name }}</h3>
        <a
          :href="project.link"
          target="_blank"
          class="text-xl md:text-2xl hover:text-cyan-400 duration-200 fa-brands fa-github"
        ></a>
      </div>
      <div class="flex flex-wrap gap-x-3 gap-y-1">
        <span v-for="lang in project.langs" :key="lang" class="text-xs md:text-sm tech-mono text-cyan-300">
          {{ lang }}
        </span>
      </div>
    </div>
  </div>
</template>
