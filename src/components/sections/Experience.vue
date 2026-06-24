<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ExperienceCard from '@/components/dynamic/ExperienceCard.vue'
import { work_experiences } from '@/data/index'

const experienceLabels = [
  'Software Engineer',
  'Co-Founder & CTO',
  'Full-Stack Developer',
  'Junior Full-Stack Developer',
  'Backend Developer',
  'Intern Backend Developer',
]

const experienceIndex = ref(0)

const targetYears = computed(() => {
  const earliest = work_experiences
    .map(e => new Date(e.start).getTime())
    .reduce((min, t) => Math.min(min, t), Infinity)
  return Math.floor((Date.now() - earliest) / (1000 * 60 * 60 * 24 * 365.25))
})

const displayedYears = ref(0)
const shining = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  let timer: ReturnType<typeof setInterval> | null = null

  const observer = new IntersectionObserver(([entry]) => {
    if (timer) clearInterval(timer)
    shining.value = false

    if (entry.isIntersecting) {
      displayedYears.value = 0
      const target = targetYears.value
      let current = 0
      timer = setInterval(() => {
        current++
        displayedYears.value = current
        if (current >= target) {
          clearInterval(timer!)
          shining.value = true
          setTimeout(() => { shining.value = false }, 1200)
        }
      }, 1500 / target)
    } else {
      displayedYears.value = 0
    }
  }, { threshold: 0.2 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" id="experience" class="grid items-start grid-cols-1 py-16 md:py-28">
    <div class="pb-8 md:pb-12 flex items-center justify-center gap-4">
      <p class="section-title">02. Experience</p>
      <span
        class="text-lg sm:text-xl md:text-2xl lg:text-3xl tech-mono px-4 py-1.5 rounded-full transition-all duration-300"
        :class="shining
          ? 'text-amber-200 border border-amber-300 bg-amber-300/20 shadow-lg shadow-amber-400/40'
          : 'text-amber-400 border border-amber-400/50 bg-amber-400/10'"
      >
        {{ displayedYears }}+ yrs
      </span>
    </div>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
      <ul class="glass-card border-l-2 border-amber-500/20 w-full py-1">
        <li v-for="(label, i) in experienceLabels" :key="i">
          <button
            @click="experienceIndex = i"
            :class="[
              'w-full text-left px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg cursor-pointer transition-colors duration-200 hover:text-amber-400 poppins',
              experienceIndex === i
                ? 'border-l-4 border-amber-400 -ml-[2px] text-amber-400 font-semibold bg-amber-400/5'
                : 'text-slate-400'
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
