<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  type?: 'submit' | 'button' | 'reset'
  label: string
}>()

const buttonType = props.type ?? 'submit'
</script>

<template>
  <button :type="buttonType">{{ props.label }}</button>
</template>
