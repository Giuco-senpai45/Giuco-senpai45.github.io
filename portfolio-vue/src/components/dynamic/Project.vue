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
