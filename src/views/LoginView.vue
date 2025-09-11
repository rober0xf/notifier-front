<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import InputComponent from '@/components/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const login = async () => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username.value, password: password.value }),
    })
    if (response.ok) {
      const res = await response.json()
      localStorage.setItem('token', res.data)
      router.push({ name: 'Home' })
    } else {
      errorMessage.value = 'Invalid username or password.'
    }
  } catch {
    errorMessage.value = 'An error occurred while logging in.'
  }
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <InputComponent
        v-model="username"
        type="text"
        id="username"
        name="username"
        label="Username"
        required
      />
      <InputComponent
        v-model="password"
        for="password"
        id="password"
        name="password"
        type="password"
        label="Password"
        required
      />

      <ButtonComponent type="submit" label="Log In" />
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </main>
</template>
