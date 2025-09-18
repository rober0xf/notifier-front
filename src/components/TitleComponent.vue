<script setup lang="ts">
defineProps<{
  title: string
  class?: string
}>()
</script>

<template>
<h1 :class="class">{{ title }}</h1>
</template>
