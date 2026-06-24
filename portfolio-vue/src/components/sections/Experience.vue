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
