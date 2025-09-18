<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <header class="p-2">
    <Navbar />
  </header>
  <main class="flex min-h-screen items-center justify-center">
    <RouterView />
  </main>
  <footer class="border-t-6 border-gray-800">
    <Footer />
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

body {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.3;
  font-weight: 300;
}
</style>
