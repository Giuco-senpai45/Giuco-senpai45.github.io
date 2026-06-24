<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '@/components/Header.vue'
import MainContent from '@/components/MainContent.vue'
import Footer from '@/components/Footer.vue'
import Introduction from '@/components/sections/Introduction.vue'
import About from '@/components/sections/About.vue'
import Experience from '@/components/sections/Experience.vue'
import Projects from '@/components/sections/Projects.vue'

const y = ref(0)
const handleScroll = () => { y.value = window.scrollY }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const goTop = () => document.body.scrollIntoView()
</script>

<template>
  <div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div
      :class="[
        'fixed bottom-0 w-full duration-200 flex p-10 z-[10]',
        y > 0 ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
      ]"
    >
      <button
        @click="goTop"
        class="px-3 ml-auto rounded-full cursor-pointer bg-slate-900 text-violet-400 sm:px-4 hover:bg-slate-800"
      >
        <i class="grid fa-solid fa-arrow-up place-items-center aspect-square" />
      </button>
    </div>

    <Header :y="y" />
    <MainContent>
      <Introduction />
      <About />
      <Experience />
      <Projects />
    </MainContent>
    <Footer />
  </div>
</template>
