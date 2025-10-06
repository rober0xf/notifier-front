<template>
  <div class="p-6 text-center">
    <h1 class="mb-4 text-xl font-bold">Delete Payment: {{ paymentName }}</h1>
    <p class="mb-6 font-medium">Are you sure you want to delete this payment?</p>

    <div class="space-x-4">
      <button @click="deletePayment" class="cursor-pointer rounded bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700">Yes, delete</button>
      <button @click="cancel" class="cursor-pointer rounded bg-gray-300 px-4 py-2 font-medium text-gray-800 hover:bg-gray-400">Cancel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const paymentId = Number(route.params.id);
const paymentName = localStorage.getItem('paymentName') || 'Unknown';

async function deletePayment() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/v1/auth/payments/${paymentId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error(`delete failed: ${response.status}`);
    localStorage.removeItem('paymentName');
    router.push('/dashboard');
  } catch (err) {
    console.log('error:', err);
  }
}

function cancel() {
  localStorage.removeItem('paymentName');
  router.push('/dashboard');
}
</script>
