<script setup lang="ts">
defineOptions({
  name: 'RegistrationPage',
})
import TermsAndConditions from '@/components/TermsCheckbox.vue'
import { ref } from 'vue'
import Button from '@/components/ButtonComponent.vue'

const termsAccepted = ref(false)
</script>

<template>
  <div class="min-h-screen py-40">
    <div class="container mx-auto">
      <div
        class="mx-auto flex w-10/12 flex-col overflow-hidden rounded-3xl border-gray-800 lg:w-8/12 lg:flex-row"
        style="
          background-color: #222;
          filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.4));
        "
      >
        <div
          class="relative flex w-full flex-col items-center bg-cover bg-center bg-no-repeat p-12 lg:w-1/2"
          style="background-image: url('/src/images/registration.jpg')"
        >
          <h1 class="mb-3 text-3xl font-medium text-gray-300">Welcome</h1>
          <div>
            <p class="mt-5 text-sm font-medium text-gray-300">An easy to use app to keep an eye on your upcoming payments.</p>
          </div>
        </div>
        <div class="w-full px-12 py-16 lg:w-1/2">
          <h2 class="-mt-4 text-center text-3xl font-medium text-gray-300">Register</h2>
          <p class="mt-6 mb-4 text-sm font-medium text-gray-300">Please fill out the form below to register.</p>
          <form action="/#" method="POST">
            <div class="gap-5">
              <input
                placeholder="Username"
                type="text"
                id="username"
                name="username"
                class="border border-gray-400 px-2 py-1 font-medium text-white"
                required
              />
            </div>
            <div class="mt-5">
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                class="border border-gray-400 px-2 py-1 font-medium text-white"
                required
              />
            </div>
            <div class="mt-5">
              <input
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                class="border border-gray-400 px-2 py-1 font-medium text-white"
                required
              />
            </div>
            <div class="mt-5">
              <input
                placeholder="Confirm Password"
                type="password"
                id="confirm_password"
                name="confirm_password"
                class="border border-gray-400 px-2 py-1 font-medium text-white"
                required
              />
            </div>
            <!-- terms and conditions -->
            <TermsAndConditions v-model="termsAccepted" required />

            <div class="mt-5">
              <Button
                type="submit"
                class="w-full cursor-pointer bg-green-800 py-3 text-center text-lg font-medium text-gray-200 duration-300 hover:bg-green-900"
                label="Register"
              />
            </div>
            <p class="mt-10 text-sm font-medium text-gray-300">
              Already have an account? <a href="/login" class="font-semibold text-sm text-blue-600 hover:underline">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
