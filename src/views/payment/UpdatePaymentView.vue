<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import UpdatePaymentComponent from '@/components/UpdatePaymentComponent.vue';

const route = useRoute();
const paymentId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

const payment = ref(null);
const loading = ref(true);
const error = ref('');

onMounted(async () => {
  try {
    const url = `http://localhost:3000/v1/auth/payments/${paymentId}`;
    console.log('Fetching payment from:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    console.log('Response status:', response.status);

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Received non-JSON response:', text.substring(0, 200));
      throw new Error(`Server returned ${response.status}: Expected JSON but got ${contentType || 'HTML'}`);
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || `Failed to fetch payment`);
    }

    payment.value = await response.json();
    console.log('Fetched payment:', payment.value);
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err.message;
      console.error('Error loading payment:', err);
    } else {
      error.value = 'Unknown error occurred while loading payment';
    }
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main>
    <div v-if="loading" class="flex min-h-screen items-center justify-center">
      <p class="text-lg">loading payment data...</p>
    </div>

    <div v-else-if="error" class="mx-auto mt-10 max-w-2xl">
      <div class="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
        <p class="font-bold">error loading payment:</p>
        <p>{{ error }}</p>
        <div class="mt-4">
          <a href="/payments" class="text-blue-600 hover:underline">back to payments</a>
        </div>
      </div>
    </div>

    <UpdatePaymentComponent v-else :payment="payment" />
  </main>
</template>
