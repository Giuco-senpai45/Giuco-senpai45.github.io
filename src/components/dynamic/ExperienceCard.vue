<script setup lang="ts">
import { computed } from 'vue'
import { work_experiences } from '@/data/index'

const props = defineProps<{ experienceIndex: number }>()
const exp = computed(() => work_experiences[props.experienceIndex])
</script>

<template>
  <div class="glass-card p-5 sm:p-7 md:p-10">
    <div class="grid grid-cols-1 gap-4">
      <h3 class="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl text-amber-400 poppins leading-snug">
        {{ exp.title }}
        <span class="text-amber-300 hover:text-amber-200">
          @
          <a :href="exp.link" target="_blank">{{ exp.company }}</a>
        </span>
      </h3>
      <p class="text-sm sm:text-base md:text-lg font-semibold tech-mono text-slate-300">
        {{ exp.start }} — {{ exp.end }}
      </p>
      <ul class="space-y-2 list-disc px-5">
        <li v-for="(detail, i) in exp.description" :key="i" class="text-sm sm:text-base md:text-lg poppins leading-relaxed">
          {{ detail }}
        </li>
      </ul>
      <div class="flex flex-row flex-wrap gap-x-3 gap-y-1 pt-1">
        <span
          v-for="tech in exp.technologies"
          :key="tech"
          class="text-xs sm:text-sm md:text-base font-thin text-amber-300 tech-mono"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
