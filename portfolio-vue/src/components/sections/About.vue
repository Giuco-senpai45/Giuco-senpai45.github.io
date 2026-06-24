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
  <section id="about" class="grid grid-cols-2 py-20">
    <p class="col-span-2 pb-10 text-center section-title">01. About Me</p>
    <div class="px-5 pt-10 lg:px-10 backdrop-blur-sm">
      <p class="text-sm md:text-lg lg:text-xl">Hello!</p>
      <br />
      <p class="text-sm md:text-lg lg:text-xl">
        I'm Daniel, and one of my favorite perks about myself is my endless curiosity.
      </p>
      <p class="text-sm md:text-lg lg:text-xl">
        I graduated from
        <a :href="UBB_BACHELORS" target="_blank" class="text-violet-400 hover:text-cyan-400">
          Babes-Bolyai's Computer Science Bachelors programme
        </a>
        followed by a master's in
        <a :href="UBB_MASTERS" target="_blank" class="text-violet-400 hover:text-cyan-400">
          Distributed Systems
        </a>
        at the same university. Currently I'm pursuing a
        <a :href="UBB_PHD" target="_blank" class="text-violet-400 hover:text-cyan-400">
          PhD in the field of Artificial Intelligence for Healthcare
        </a>.
        <br />
        My research focuses mainly on: Computer Vision, Deep Learning, applied on medical recuperation devices.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:px-5 lg:px-5 lg:grid-cols-3 justify-center">
      <div
        v-for="card in row1"
        :key="card.img"
        class="relative flex items-center justify-center m-3 overflow-hidden shadow-xl h-32 w-auto rounded-md group"
      >
        <div
          :style="{ backgroundImage: `url('/images/volunteering/${card.img}.jpg')` }"
          class="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-150"
        />
        <h1 class="absolute text-base xl:text-lg font-extrabold transition-all duration-500 ease-in-out transform scale-105 md:scale-110 lg:scale-150 group-hover:scale-100 text-white opacity-80 tech-mono">
          {{ card.label }}
        </h1>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:px-5 lg:px-5 lg:grid-cols-3 justify-center">
      <div
        v-for="card in row2"
        :key="card.img"
        class="relative flex items-center justify-center m-3 overflow-hidden shadow-xl h-32 w-auto rounded-md group"
      >
        <div
          :style="{ backgroundImage: `url('/images/volunteering/${card.img}.jpg')` }"
          class="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-150"
        />
        <h1 class="absolute text-base xl:text-lg font-extrabold transition-all duration-500 ease-in-out transform scale-105 md:scale-110 lg:scale-150 group-hover:scale-100 text-white opacity-80 tech-mono">
          {{ card.label }}
        </h1>
      </div>
    </div>

    <div class="px-5 pt-10 lg:px-10 backdrop-blur-sm">
      <p class="text-sm md:text-lg lg:text-xl poppins">
        In a journey to discover myself I started volunteering and I was part of the HR department for 2 years followed by a year in the leading board as the Events Manager for
        <a :href="HERMES" target="_blank" class="text-violet-400 hover:text-cyan-400">Societatea Hermes</a>.
        Currently I'm maintaining the IT infrastructure of the organization where I also coordinate volunteer teams for revamping old websites.
      </p>
    </div>
  </section>
</template>
