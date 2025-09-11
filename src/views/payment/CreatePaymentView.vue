<script setup lang="ts">
import { ref } from 'vue'

const user_id = ref(0)
const net_amount = ref(0)
const gross_amount = ref(0)
const deductible = ref(0)
const name = ref('')
const type = ref('')
const date = ref(new Date())
const recurrent = ref(false)
const paid = ref(false)
const statusMessage = ref('')

const createPayment = async () => {
  try {
    const response = await fetch('/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        user_id: user_id.value,
        net_amount: net_amount.value,
        gross_amount: gross_amount.value,
        deductible: deductible.value,
        name: name.value,
        type: type.value,
        date: date.value.toISOString(),
        recurrent: recurrent.value,
        paid: paid.value,
      }),
    })
    if (response.ok) {
      const res = await response.json()
      statusMessage.value = 'Payment created successfully'
      console.log(res)
    } else {
      console.error(await response.text())
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <main>
    <TitleComponent title="Create Payment" />
    <form @submit.prevent="createPayment">
      <InputComponent label="User ID" id="user_id" name="user_id" v-model="user_id" />
      <InputComponent label="Net Amount" id="net_amount" name="net_amount" v-model="net_amount" />
      <InputComponent
        label="Gross Amount"
        id="gross_amount"
        name="gross_amount"
        v-model="gross_amount"
      />
      <InputComponent label="Deductible" id="deductible" name="deductible" v-model="deductible" />
      <InputComponent label="Name" id="name" name="name" v-model="name" />
      <InputComponent label="Type" id="type" name="type" v-model="type" />
      <InputComponent label="Date" id="date" name="date" type="date" v-model="date" />
      <InputComponent
        label="Recurrent"
        id="recurrent"
        name="recurrent"
        type="checkbox"
        v-model="recurrent"
      />
      <InputComponent label="Paid" id="paid" name="paid" type="checkbox" v-model="paid" />
      <ButtonComponent label="Create Payment" type="submit" />
    </form>
  </main>
</template>
