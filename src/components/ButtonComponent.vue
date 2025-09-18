<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  type?: 'submit' | 'button' | 'reset'
  label: string
  class?: string
  disabled?: boolean
}>()
const buttonType = props.type ?? 'submit'

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <button :type="buttonType" :class="props.class" :disabled="props.disabled" @click="handleClick">{{ props.label }}</button>
</template>
