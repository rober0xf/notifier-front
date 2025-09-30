<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const paymentId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
const user_id = ref(0)
const name = ref('')
const amount = ref(0)
const type = ref('')
const category = ref('')
const date = ref('')
const due_date = ref('')
const paid = ref(false)
const paid_at = ref('')
const recurrent = ref(false)
const frequency = ref('')
const statusMessage = ref('')

const getPayment = async () => {
  try {
    const response = await fetch(`/api/payments/${paymentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to get payment')
    }

    const payment = await response.json()
    user_id.value = payment.id
    net_amount.value = payment.net_amount
    gross_amount.value = payment.gross_amount
    deductible.value = payment.deductible
    name.value = payment.name
    type.value = payment.type
    date.value = payment.date
    recurrent.value = payment.recurrent
    paid.value = payment.paid
  } catch (error: unknown) {
    if (error instanceof Error) {
      statusMessage.value = `Error getting payment: ${error.message}`
    } else {
      statusMessage.value = 'Unknown error occurred'
    }
  }
}

const updatePayment = async () => {
  try {
    const response = await fetch(`/api/payments/${paymentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        id: user_id.value,
        net_amount: net_amount.value,
        gross_amount: gross_amount.value,
        deductible: deductible.value,
        name: name.value,
        type: type.value,
        date: date.value,
        recurrent: recurrent.value,
        paid: paid.value,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to update payment')
    }

    statusMessage.value = 'Payment updated successfully'
  } catch (error: unknown) {
    if (error instanceof Error) {
      statusMessage.value = `Error updating payment: ${error.message}`
    } else {
      statusMessage.value = 'Unknown error occurred'
    }
  }
}

onMounted(() => {
  getPayment()
  console.log('Payment is mounted')
})
</script>

<template>
  <main>
    <TitleComponent title="Update Payment" />
    <form @submit.prevent="updatePayment()">
      <InputComponent label="Name" id="name" name="name" v-model="name" />
      <InputComponent label="Net Amount" id="net_amount" name="net_amount" v-model="net_amount" />
      <InputComponent label="Gross Amount" id="gross_amount" name="gross_amount" v-model="gross_amount" />
      <InputComponent label="Deductible" id="deductible" name="deductible" v-model="deductible" />
      <InputComponent label="Type" id="type" name="type" v-model="type" />
      <InputComponent label="Date" id="date" name="date" v-model="date" />
      <InputComponent label="Recurrent" id="recurrent" name="recurrent" type="checkbox" v-model="recurrent" />
      <InputComponent label="Paid" id="paid" name="paid" type="checkbox" v-model="paid" />
    </form>
  </main>
</template>
