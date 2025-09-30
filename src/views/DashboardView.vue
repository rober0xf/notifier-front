<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DashboardComponent from '@/components/DashboardComponent.vue'
import type Payment from '@/composables/payment'

const payments = ref<Payment[]>([])

const fetchPayments = async () => {
  payments.value = []
}

onMounted(() => {
  fetchPayments()
})
</script>

<template>
  <div>
    <DashboardComponent :payments="payments" />
  </div>
</template>
