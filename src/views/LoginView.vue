/** functionality */
<script setup lang="ts">
import { useLogin } from '../composables/useLogin';

const { identity, password, errorMessage, login } = useLogin();
</script>

/** templates */
<template>
    <main>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <!-- v-model is there reference to the variables that has the ref function -->
            <label for="identity">Email</label>
            <input v-model="identity" type="identity" id="identity" name="identity" required />
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password" name="password" required />
            <button type="submit">Login</button>
            <p v-if="errorMessage">{{ errorMessage }}</p>
        </form>
    </main>
</template>

/** styles */