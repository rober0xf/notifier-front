<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  type?: 'submit' | 'button' | 'reset'
  label: string
  class?: string
  disabled?: boolean
}>()

const buttonType = props.type ?? 'submit'
</script>

<template>
  <button :type="buttonType" :class="props.class" :disabled="props.disabled">{{ props.label }}</button>
</template>
