<template>
  <RegistrationComponent
    :username="username"
    :email="email"
    :password="password"
    :confirmPassword="confirmPassword"
    :termsAccepted="termsAccepted"
    :isLoading="isLoading"
    :errorMessage="errorMessage"
    :successMessage="successMessage"
    @update:username="updateUsername"
    @update:email="updateEmail"
    @update:password="updatePassword"
    @update:confirmPassword="updateConfirmPassword"
    @update:termsAccepted="termsAccepted = $event"
    @submit="handleRegistration"
  />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import RegistrationComponent from '@/components/RegistrationComponent.vue';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const termsAccepted = ref(false);

// ui
const errorMessage = ref('');
const successMessage = ref('');

const isLoading = ref(false);

const router = useRouter();

const handleRegistration = async (): Promise<void> => {
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  // simple validation
  if (password.value != confirmPassword.value) {
    errorMessage.value = 'passwords do not match';
    isLoading.value = false;
    return;
  }
  if (!termsAccepted.value) {
    errorMessage.value = 'you must accept the terms and conditions';
    isLoading.value = false;
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || `registration failed: ${response.status}`);
    }
    successMessage.value = 'email sent for verification. check your email';
    setTimeout(() => {
      router.push('/login');
    }, 3000);

    if (data.token) {
      localStorage.setItem('token', data.token);
    }
  } catch (error) {
    console.error('registration failed:', error);
    errorMessage.value = error instanceof Error ? error.message : 'unknown error';
  } finally {
    isLoading.value = false;
  }
};

const clearErrors = () => {
  if (errorMessage.value) errorMessage.value = '';
  if (successMessage.value) successMessage.value = '';
};

const updateUsername = (value: string) => {
  username.value = value;
  clearErrors();
};

const updateEmail = (value: string) => {
  email.value = value;
  clearErrors();
};

const updatePassword = (value: string) => {
  password.value = value;
  clearErrors();
};

const updateConfirmPassword = (value: string) => {
  confirmPassword.value = value;
  clearErrors();
};
</script>
