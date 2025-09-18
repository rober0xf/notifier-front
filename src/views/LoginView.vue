<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import LoginComponent from '@/components/LoginComponent.vue'
import { useAuth } from '@/composables/useAuth'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const router = useRouter()
const { login: authLogin } = useAuth()

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
    const response = await fetch('http://localhost:3000/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    })
    if (response.ok) {
      const res = await response.json()

      authLogin(res.token)
      router.push({ name: 'Home' })
    } else {
      const errorData = await response.text()
      errorMessage.value = 'Invalid email or password.'
    }
  } catch (error) {
    errorMessage.value = 'An error occurred while logging in.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main>
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
