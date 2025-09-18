<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import InputComponent from './InputComponent.vue'
import LoginImage from '@/images/hero.jpg'

defineOptions({
  name: 'LoginComponent',
})

// variables to use in the child (loginview)
const props = defineProps<{
  email: string
  password: string
  isLoading?: boolean
  errorMessage?: string
}>()
const emit = defineEmits<{
  'update:email': [value: string]
  'update:password': [value: string]
  submit: []
}>()
const handleSubmit = () => {
  emit('submit')
}
const updateEmail = (value: string) => {
  emit('update:email', value)
}
const updatePassword = (value: string) => {
  emit('update:password', value)
}
</script>

<template>
  <div class="relative flex w-screen flex-col items-center justify-center">
    <div class="relative mt-16 flex w-[30%] flex-col items-center gap-4 rounded-md border-2 border-gray-700 px-4 py-6 text-center text-white">
      <h1 class="text-2xl font-medium text-gray-700 uppercase">Login Page</h1>

      <!-- email field-->
      <div class="mx-auto flex w-[60%] flex-col gap-2">
        <label for="email" class="text-sm font-medium text-gray-700 underline">Email</label>
        <InputComponent
          :modelValue="email"
          class="rounded-full border-2 bg-gray-200 px-4 py-2 font-semibold text-gray-900 outline-none"
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          @update:modelValue="updateEmail"
        />
      </div>

      <!-- password field-->
      <div class="mx-auto flex w-[60%] flex-col gap-2">
        <label for="password" class="text-sm font-medium text-gray-700 underline">Password</label>
        <InputComponent
          :modelValue="password"
          class="rounded-full border-2 bg-gray-200 px-4 py-2 font-semibold text-gray-900 outline-none"
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          @update:modelValue="updatePassword"
        />
      </div>
      <div class="mb-5">
        <a href="#" class="font-medium text-gray-900 hover:underline">Forgot password? </a>
      </div>

      <!-- login button -->
      <ButtonComponent
        label="Login"
        :disabled="isLoading"
        class="relative mx-auto flex cursor-pointer flex-col gap-4 rounded-md border-2 bg-[#fcc61d] px-4 py-2 text-center text-xl text-gray-900 shadow-xl shadow-gray-400 transition-colors duration-300 hover:bg-yellow-500 sm:w-[150px] md:w-[200px]"
        @click="handleSubmit"
      />

      <!-- error message if something is wrong -->
      <div v-if="errorMessage" class="mt-2 text-sm font-bold text-red-500 select-none">
        {{ errorMessage }}
      </div>

      <!-- create account -->
      <p class="mt-4 text-sm font-medium text-gray-700">
        Not a user?
        <a href="/register" class="font-medium text-blue-600 hover:underline"> Create an account </a>
      </p>
    </div>
    <img :src="LoginImage" alt="Logo" class="-mt-25 w-auto items-center object-contain select-none" />
  </div>
</template>
