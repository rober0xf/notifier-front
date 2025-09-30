<script setup lang="ts">
import { onMounted } from 'vue';
import DashboardComponent from '@/components/DashboardComponent.vue';
import { usePayments } from '@/composables/getPayments';

const { listPayments, listPaymentsFetch } = usePayments();

onMounted(() => {
  listPaymentsFetch();
});
</script>

<template>
  <div>
    <DashboardComponent :payments="listPayments || []" />
  </div>
</template>
