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
          <form method="POST" @submit.prevent="handleSubmit">
            <div class="gap-5">
              <!-- inputs -->
              <InputComponent
                :modelValue="props.username"
                @update:modelValue="(value) => emit('update:username', value)"
                type="text"
                id="username"
                name="username"
                class="border border-gray-400 px-2 py-1 font-medium text-white"
                placeholder="Username"
                required
              />
            </div>
            <div class="mt-5">
              <InputComponent
                :modelValue="props.email"
                @update:modelValue="(value) => emit('update:email', value)"
                type="email"
                id="email"
                name="email"
                class="border border-gray-400 px-2 py-1 font-medium text-white"
                placeholder="Email"
                required
              />
            </div>
            <div class="mt-5">
              <InputComponent
                :modelValue="props.password"
                @update:modelValue="(value) => emit('update:password', value)"
                type="password"
                id="password"
                name="password"
                class="border border-gray-400 px-2 py-1 font-medium text-white"
                placeholder="Password"
                required
              />
            </div>
            <div class="mt-5">
              <InputComponent
                :modelValue="props.confirmPassword"
                @update:modelValue="(value) => emit('update:confirmPassword', value)"
                type="password"
                id="confirm_password"
                name="confirm_password"
                class="border border-gray-400 px-2 py-1 font-medium text-white"
                placeholder="Confirm Password"
                required
              />
            </div>

            <!-- terms and conditions -->
            <TermsAndConditions
              :modelValue="props.termsAccepted || false"
              @update:modelValue="(value) => emit('update:termsAccepted', value)"
              required
            />

            <!-- information messages -->
            <div v-if="props.errorMessage" class="mt-4 p-3 text-center text-base font-semibold text-red-600 select-none">
              {{ props.errorMessage }}
            </div>
            <div v-if="props.successMessage" class="mt-4 p-3 text-center text-base font-semibold text-green-600 select-none">
              {{ props.successMessage }}
            </div>

            <div class="mt-5">
              <Button
                type="submit"
                class="w-full cursor-pointer bg-green-800 py-3 text-center text-lg font-medium text-gray-200 duration-300 hover:bg-green-900"
                :class="{ 'cursor-not-allowed opacity-50': props.isLoading }"
                :disabled="props.isLoading"
                :label="props.isLoading ? 'Registering...' : 'Register'"
              />
            </div>
            <p class="mt-10 text-sm font-medium text-gray-300">
              Already have an account? <a href="/login" class="text-sm font-semibold text-blue-600 hover:underline">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TermsAndConditions from '@/components/TermsCheckbox.vue';
import InputComponent from '@/components/InputComponent.vue';
import Button from '@/components/ButtonComponent.vue';

const props = defineProps<{
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  isLoading?: boolean;
  errorMessage?: string;
  successMessage?: string;
  termsAccepted?: boolean;
}>();

const emit = defineEmits<{
  'update:username': [value: string];
  'update:email': [value: string];
  'update:password': [value: string];
  'update:confirmPassword': [value: string];
  'update:termsAccepted': [value: boolean];
  submit: [];
}>();

const handleSubmit = () => {
  emit('submit');
};
</script>
