<template>
  <div class="mt-4 flex justify-end">
    <a class="mb-10 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" href="/payments/create">Add Payment</a>
  </div>

  <div class="relative overflow-x-auto">
    <table class="w-full border-collapse border-2 border-yellow-500 text-left text-sm text-gray-500 rtl:text-right">
      <thead class="bg-gray-50 text-xs text-gray-700 uppercase">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Amount</th>
          <th scope="col" class="px-6 py-3">Date</th>
          <th scope="col" class="px-6 py-3">Due Date</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Paid At</th>
          <th scope="col" class="px-6 py-3">Recurrent</th>
          <th scope="col" class="px-6 py-3">Frequency</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="payments.length === 0">
          <td colspan="12" class="px-6 py-4 text-center text-xl font-medium text-gray-900">No payments found</td>
        </tr>
        <tr v-for="payment in payments" :key="payment.id" class="bg-white hover:bg-gray-50">
          <td class="px-6 py-4">{{ payment.id }}</td>
          <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-gray-900">{{ payment.name }}</th>
          <td class="px-6 py-4">{{ payment.type }}</td>
          <td class="px-6 py-4">{{ payment.category }}</td>
          <td class="px-6 py-4">${{ payment.amount }}</td>
          <td class="px-6 py-4">{{ formatDate(payment.date) }}</td>
          <td class="px-6 py-4">{{ payment.due_date ? formatDate(payment.due_date) : '-' }}</td>
          <td class="px-6 py-4">
            <span :class="payment.paid ? 'text-green-600' : 'text-red-600'" class="font-medium">
              {{ payment.paid ? 'Paid' : 'Unpaid' }}
            </span>
          </td>
          <td class="px-6 py-4">{{ payment.paid_at ? formatDate(payment.paid_at) : '-' }}</td>
          <td class="px-6 py-4">
            <span :class="payment.recurrent ? 'text-blue-600' : 'text-gray-500'" class="font-medium">
              {{ payment.recurrent ? 'Yes' : 'No' }}
            </span>
          </td>
          <td class="px-6 py-4">{{ payment.frequency || '-' }}</td>
          <td class="px-6 py-4 text-right">
            <a :href="`/payments/${payment.id}/edit`" class="font-medium text-blue-600 hover:underline">Edit</a>
          </td>
          <td class="px-6 py-4 text-right">
            <a :href="`/payments/${payment.id}/delete`" @click.prevent="prepareDelete(payment)" class="font-medium text-red-600 hover:underline"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type Payment from '@/composables/payment';

interface Props {
  payments?: Payment[];
}
const { payments = [] } = defineProps<Props>();

// format the dates
const formatDate = (dateStr: string | null) => {
  if (!dateStr) return '-';
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

function prepareDelete(payment: { id: number; name: string }) {
  localStorage.setItem('paymentName', payment.name);
  window.location.href = `/payments/${payment.id}/delete`;
}
</script>
