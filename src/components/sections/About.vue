<script setup lang="ts">
import { UBB_BACHELORS, UBB_MASTERS, UBB_PHD, HERMES } from '@/data/constants'

const row1 = [
  { img: 'h1', label: 'Coordination' },
  { img: 'h2', label: 'Teamwork' },
  { img: 'h3', label: 'Team player' },
]
const row2 = [
  { img: 'h4', label: 'Charismatic' },
  { img: 'h6', label: 'Flexibility' },
  { img: 'h7', label: 'Cool headed' },
]
</script>

<template>
  <section id="about" class="flex flex-col py-16 md:py-28 gap-4">
    <p class="pb-8 text-center section-title">01. About Me</p>

    <!-- On md+: two-column layout. On mobile: single column stack -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

      <!-- Text block 1 -->
      <div class="glass-card px-5 py-6 md:px-10 space-y-4">
        <p class="text-sm sm:text-base md:text-lg leading-relaxed">
          I'm Daniel — driven by an endless curiosity for how things work and how to make them better.
        </p>
        <p class="text-sm sm:text-base md:text-lg leading-relaxed">
          I hold a Bachelor's in Computer Science and a Master's in
          <a :href="UBB_MASTERS" target="_blank" class="text-amber-400 hover:text-amber-300 transition-colors">Distributed Systems</a>
          from
          <a :href="UBB_BACHELORS" target="_blank" class="text-amber-400 hover:text-amber-300 transition-colors">Babeș-Bolyai University</a>.
          I'm currently pursuing a
          <a :href="UBB_PHD" target="_blank" class="text-amber-400 hover:text-amber-300 transition-colors">PhD focused on Artificial Intelligence for Healthcare</a>,
          with research in Computer Vision and Deep Learning applied to medical rehabilitation devices.
        </p>
      </div>

      <!-- Photo row 1 -->
      <div class="grid grid-cols-3 gap-2 sm:gap-3">
        <div
          v-for="card in row1"
          :key="card.img"
          class="relative flex items-center justify-center overflow-hidden shadow-xl h-28 sm:h-32 rounded-md group"
        >
          <div
            :style="{ backgroundImage: `url('/images/volunteering/${card.img}.jpg')` }"
            class="absolute w-full h-full transition-all duration-500 ease-in-out bg-center bg-cover group-hover:scale-150"
          />
          <p class="absolute text-xs sm:text-sm font-extrabold transition-all duration-500 ease-in-out scale-100 md:scale-110 lg:scale-150 group-hover:scale-100 text-white opacity-80 tech-mono text-center px-1">
            {{ card.label }}
          </p>
        </div>
      </div>

      <!-- Photo row 2 -->
      <div class="grid grid-cols-3 gap-2 sm:gap-3">
        <div
          v-for="card in row2"
          :key="card.img"
          class="relative flex items-center justify-center overflow-hidden shadow-xl h-28 sm:h-32 rounded-md group"
        >
          <div
            :style="{ backgroundImage: `url('/images/volunteering/${card.img}.jpg')` }"
            class="absolute w-full h-full transition-all duration-500 ease-in-out bg-center bg-cover group-hover:scale-150"
          />
          <p class="absolute text-xs sm:text-sm font-extrabold transition-all duration-500 ease-in-out scale-100 md:scale-110 lg:scale-150 group-hover:scale-100 text-white opacity-80 tech-mono text-center px-1">
            {{ card.label }}
          </p>
        </div>
      </div>

      <!-- Text block 2 -->
      <div class="glass-card px-5 py-6 md:px-10">
        <p class="text-sm sm:text-base md:text-lg leading-relaxed poppins">
          Beyond code, I spent three years volunteering at
          <a :href="HERMES" target="_blank" class="text-amber-400 hover:text-amber-300 transition-colors">Societatea Hermes</a>
          — two in HR and one as Events Manager on the leadership board. I now maintain their IT infrastructure and lead teams rebuilding their web presence.
        </p>
      </div>

    </div>
  </section>
</template>
