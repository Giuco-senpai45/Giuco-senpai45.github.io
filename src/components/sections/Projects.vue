<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '@/data/index'
import Project from '@/components/dynamic/Project.vue'

const totalDisplayed = ref(6)
</script>

<template>
  <section id="projects" class="flex flex-col gap-8 md:gap-12 px-2 sm:px-5 py-16 md:py-28 lg:px-10">
    <div class="flex flex-col gap-2 text-center">
      <p class="pb-6 md:pb-10 text-center section-title">03. Projects</p>
      <div class="self-center max-w-3xl text-justify backdrop-blur-sm px-2">
        <p class="mb-6 sm:mb-10 text-sm sm:text-base md:text-xl poppins">
          Below I've selected some of my more "consistent" personal projects — either technically challenging or built with significant depth.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
      <Project
        v-for="(project, i) in projects"
        :key="project.name"
        v-show="i < totalDisplayed"
        :project="project"
      />
    </div>

    <div class="flex justify-center gap-4 sm:gap-8">
      <button
        v-if="totalDisplayed < projects.length"
        class="px-5 py-3 sm:p-5 text-sm sm:text-lg md:text-xl font-semibold text-white bg-transparent rounded-xl border-2 border-amber-700 hover:bg-amber-700/40 hover:shadow-amber-400/20 hover:shadow-md hover:translate-y-[2px] transition-all duration-200"
        @click="totalDisplayed += 3"
      >
        Load more
      </button>
      <button
        v-if="totalDisplayed > 6"
        class="px-5 py-3 sm:p-5 text-sm sm:text-lg md:text-xl font-semibold text-white bg-transparent rounded-xl border-2 border-amber-700 hover:bg-amber-700/40 hover:shadow-amber-400/20 hover:shadow-md hover:translate-y-[2px] transition-all duration-200"
        @click="totalDisplayed -= 3"
      >
        See less
      </button>
    </div>
  </section>
</template>
