<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import LoginComponent from '@/components/LoginComponent.vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const router = useRouter()

// here we use the variables from the parent component
const updateEmail = (value: string) => {
  email.value = value
}

const updatePassword = (value: string) => {
  password.value = value
}

const login = async () => {
  if (!email.value || !password.value) {
    errorMessage.value = 'fields missing!'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    })
    console.log('Response:', response)
    if (response.ok) {
      const res = await response.json()
      localStorage.setItem('token', res.data)
      router.push({ name: 'Home' })
    } else {
      errorMessage.value = 'Invalid email or password.'
    }
  } catch {
    errorMessage.value = 'An error occurred while logging in.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main style="background-image: linear-gradient(115deg, #000000, #0f3d0f)">
    <LoginComponent
      :email="email"
      :password="password"
      :isLoading="isLoading"
      :errorMessage="errorMessage"
      @update:email="updateEmail"
      @update:password="updatePassword"
      @submit="login"
    />
  </main>
</template>
