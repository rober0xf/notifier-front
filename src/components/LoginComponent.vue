<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import InputComponent from './InputComponent.vue'

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
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" style="background-image: linear-gradient(115deg, #000000, #0f3d0f)">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Notifier" class="mx-auto h-10 w-auto" />
      <h2 class="mt-10 text-center text-2xl/9 font-medium tracking-tight text-gray-300">Sign in to your account</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div v-if="errorMessage" class="rounded-md bg-red-50 p-4">
          <div class="text-sm font-medium text-red-700">
            {{ errorMessage }}
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-300">Email address</label>
          <div class="mt-2">
            <InputComponent
              :modelValue="email"
              @update:modelValue="updateEmail"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              class="block w-full rounded-md bg-white/5 px-3 py-1.5 font-medium text-gray-300 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6"
              required
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-100">Password</label>
            <div class="text-sm">
              <a href="#" class="font-medium text-green-600 hover:text-green-700">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <InputComponent
              :modelValue="password"
              @update:modelValue="updatePassword"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6"
              required
            />
          </div>
        </div>

        <div>
          <ButtonComponent
            type="submit"
            :label="props.isLoading ? 'Logging in...' : 'Log in'"
            :disabled="props.isLoading"
            class="flex w-full cursor-pointer justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-medium text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          />
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 font-medium text-gray-300">
        Not a user?
        <a href="/register" class="font-medium text-green-600 hover:text-green-700">Create an account</a>
      </p>
    </div>
  </div>
</template>
