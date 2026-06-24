<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '@/components/Header.vue'
import MainContent from '@/components/MainContent.vue'
import Footer from '@/components/Footer.vue'
import Introduction from '@/components/sections/Introduction.vue'
import About from '@/components/sections/About.vue'
import Experience from '@/components/sections/Experience.vue'
import Projects from '@/components/sections/Projects.vue'
import Contact from '@/components/sections/Contact.vue'

const y = ref(0)
const handleScroll = () => { y.value = window.scrollY }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const goTop = () => document.body.scrollIntoView()
</script>

<template>
  <!-- Background light orbs — sit behind glass panels, bleed through backdrop-blur -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    <div class="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full bg-amber-500/20 blur-[140px]"></div>
    <div class="absolute top-[40%] -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[120px]"></div>
    <div class="absolute -bottom-32 left-[30%] w-[500px] h-[500px] rounded-full bg-amber-600/15 blur-[130px]"></div>
  </div>

  <div class="relative flex flex-col max-w-[1800px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div
      :class="[
        'fixed bottom-0 w-full duration-200 flex p-10 z-[10]',
        y > 0 ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
      ]"
    >
      <button
        @click="goTop"
        class="px-3 ml-auto rounded-full cursor-pointer bg-slate-900 text-amber-400 sm:px-4 hover:bg-slate-800"
      >
        <i class="grid fa-solid fa-arrow-up place-items-center aspect-square"></i>
      </button>
    </div>

    <Header :y="y" />
    <MainContent>
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </MainContent>
    <Footer />
  </div>
</template>

