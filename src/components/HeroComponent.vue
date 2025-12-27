<script setup lang="ts">
import HeroImage from '@/images/hero.png'
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <div class="container">
    <div class="grid min-h-[600px] grid-cols-1 md:grid-cols-2">
      <!-- text content section -->
      <div class="flex flex-col items-center justify-center space-y-5 px-10 py-20 text-center md:items-start md:px-0 md:py-0 md:pr-24 md:text-left">
        <h1 class="text-4xl font-bold xl:text-5xl">
          Track your payments with
          <span class="font-medium text-yellow-300">Notifier</span>
        </h1>
        <p class="text-lg text-gray-700">
          Keep an eye on your upcoming payments. <br />
          Track your bills, subscriptions, and purchases.
        </p>
        <a href="/register" class="primary-btn bg bg-gray-900 text-lg text-white transition duration-300 hover:bg-[#fcc61d] hover:text-gray-700">
          Sign Up Now
        </a>
      </div>

      <!-- hero image section -->
      <div class="flex items-center justify-center">
        <img :src="HeroImage" alt="Hero image" class="w-[80%] select-none md:w-[550px] xl:max-w-[600px]" />
      </div>
    </div>
  </div>
</template>
