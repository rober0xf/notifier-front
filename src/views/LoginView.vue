<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginView',
  setup() {
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
          const data = await response.json()
          localStorage.setItem('token', data.token)
          router.push({ name: 'Home' })
        } else {
          errorMessage.value = 'Invalid username or password.'
        }
      } catch (error) {
        errorMessage.value = 'An error occurred while logging in.'
      }
    }
    return {
      username,
      password,
      errorMessage,
      login,
    }
  },
})
</script>

<template>
  <main>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input for="username" id="username" name="username" required />
      <label for="password">Password</label>
      <input for="password" type="password" id="password" name="password" required />
      <button type="submit">Log In</button>
    </form>
  </main>
</template>
