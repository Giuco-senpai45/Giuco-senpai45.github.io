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
