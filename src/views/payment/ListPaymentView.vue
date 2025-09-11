<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type Payment from '@/views/payment/lib/payment'

const listPayments = ref<Payment[]>([])
const listPaymentFetch = async () => {
  try {
    const response = await fetch('/api/payments', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    if (response.ok) {
      const res = await response.json()
      listPayments.value = res.data
      console.log('Payments fetched:', listPayments.value)
    } else {
      console.error('Error fetching payments:', await response.text())
    }
  } catch (error) {
    console.error('Error fetching payments:', error)
  }
}

const deletePayment = async (id: number) => {
  try {
    const response = await fetch(`/api/payments/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    if (response.ok) {
      console.log('Payment deleted:', id)
      listPaymentFetch()
    } else {
      console.error('Error deleting payment:', await response.text())
    }
  } catch (error) {
    console.error('Error deleting payment:', error)
  }
}

onMounted(() => {
  listPaymentFetch()
  console.log('ListPayments mounted')
  deletePayment(1)
  console.log('Payment deleted:', 1)
})
</script>

<template>
  <main>
    <TitleComponent title="Payment List" />
    <RouterLink to="/payment/create" class="btn btn-primary">Create Payment</RouterLink>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Net Amount</th>
            <th>Gross Amount</th>
            <th>Deductible</th>
            <th>Type</th>
            <th>Date</th>
            <th>Recurrent</th>
            <th>Paid</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in listPayments" :key="payment.id">
            <td>{{ payment.name }}</td>
            <td>{{ payment.net_amount }}</td>
            <td>{{ payment.gross_amount }}</td>
            <td>{{ payment.deductible }}</td>
            <td>{{ payment.type }}</td>
            <td>{{ payment.date }}</td>
            <td>{{ payment.recurrent }}</td>
            <td>{{ payment.paid }}</td>
            <td>
              <RouterLink :to="`/payment/${payment.id}`" class="btn btn-secondary">View</RouterLink>
              <button @click="deletePayment(payment.id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
