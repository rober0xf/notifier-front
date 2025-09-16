<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between py-6">
          <h1 class="text-3xl font-bold text-gray-900">Notifier Front</h1>
          <nav class="flex space-x-8">
            <RouterLink to="/" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Home</RouterLink>
            <RouterLink to="/dashboard" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Dashboard</RouterLink>
            <RouterLink to="/login" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Login</RouterLink>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
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
