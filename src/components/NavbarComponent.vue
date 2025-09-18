<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import Logo from '@/images/linux.svg'
import Button from '@/components/ButtonComponent.vue'
import NavbarLinks from '@/composables/navLinks'

const { isAuthenticated, logout } = useAuth()

const handleLogout = () => {
  logout()
}
</script>

<template>
  <div class="container flex items-center justify-between py-4">
    <!-- logo section-->
    <div class="flex items-center gap-1">
      <a href="/">
        <img :src="Logo" alt="Logo" class="w-[60px]" />
      </a>
      <p class="text-xl font-bold transition duration-300 select-none hover:text-[#fcc61d]">Notifier</p>
    </div>

    <!-- link section-->
    <div class="hidden md:block">
      <ul class="flex gap-3 xl:gap-7">
        <li v-for="link in NavbarLinks" :key="link.id">
          <router-link :to="link.to" class="uppercase hover:text-[#fcc61d] xl:text-base">{{ link.label }}</router-link>
        </li>
        <li v-if="isAuthenticated">
          <router-link to="/dashboard" class="uppercase hover:text-[#fcc61d] xl:text-base">Dashboard</router-link>
        </li>
      </ul>
    </div>

    <!-- button section-->
    <div class="flex items-center gap-3">
      <div v-if="!isAuthenticated">
        <router-link to="/login" class="primary-btn cursor-pointer text-lg">Log In</router-link>
      </div>
      <div v-else class="flex items-center gap-3">
        <Button @click="handleLogout" type="button" label="Log out" class="primary-btn cursor-pointer text-lg" />
      </div>
    </div>
  </div>
</template>
