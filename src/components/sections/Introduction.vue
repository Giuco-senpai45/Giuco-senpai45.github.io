<script setup lang="ts">
import { ref } from 'vue'
import { WORK_MAIL } from '@/data/constants'

const imgElem = ref<HTMLImageElement | null>(null)

const hoveringPic = () => {
  if (imgElem.value) imgElem.value.src = '/images/me-pic.png'
}
const leavingPic = () => {
  if (imgElem.value) imgElem.value.src = '/images/me-slate.png'
}
</script>

<template>
  <section id="introduction" class="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-8 py-10 md:py-16">
    <div class="flex flex-col gap-6 text-center md:text-left">
      <div class="px-2 sm:px-5 space-y-3">
        <p class="text-sm font-medium text-amber-400 tech-mono tracking-widest uppercase">
          Hello, I'm
        </p>
        <h1 class="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl poppins leading-tight">
          <span
            tabindex="0"
            role="button"
            @mouseleave="leavingPic"
            @focus="hoveringPic"
            @mouseover="hoveringPic"
            class="text-amber-400 hover:text-amber-200 transition-colors duration-200"
          >
            Ardelean Daniel
          </span>
        </h1>
        <p class="text-base font-semibold sm:text-lg md:text-2xl lg:text-3xl poppins text-slate-200 leading-snug">
          Software Engineer · PhD Researcher · Founder
        </p>
        <p class="text-xs sm:text-sm md:text-base tech-mono text-slate-400">
          Distributed Systems · Applied AI · Backend Security
        </p>
      </div>

      <div class="px-2 sm:px-5">
        <a
          :href="`mailto:${WORK_MAIL}`"
          target="_blank"
          class="inline-block px-6 py-2.5 sm:px-8 sm:py-3 poppins font-medium text-sm sm:text-base md:text-lg border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all duration-200 rounded-sm"
        >
          Get in touch &rarr;
        </a>
      </div>
    </div>

    <div class="grid place-items-center">
      <img
        ref="imgElem"
        src="/images/me-slate.png"
        @mouseleave="leavingPic"
        @focus="hoveringPic"
        @mouseover="hoveringPic"
        alt="Me pic"
        class="object-cover z-[2] max-h-[35vh] sm:max-h-[45vh] md:max-h-[55vh] lg:max-h-[70vh]"
      />
    </div>
  </section>
</template>
