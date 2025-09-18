<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarView from '@/views/NavbarView.vue'
import FooterView from '@/views/FooterView.vue'
</script>

<template>
  <header class="p-2">
    <NavbarView />
  </header>
  <main class="flex min-h-screen items-center justify-center">
    <RouterView />
  </main>
  <footer class="border-t-6 border-gray-800">
    <FooterView />
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
