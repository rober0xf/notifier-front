<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string | number
  id?: string
  name?: string
  type?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  class?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputValue = computed({
  get: () => props.modelValue || '',
  set: (value: string) => emit('update:modelValue', value)
})

const inputType = props.type || 'text'
</script>

<template>
  <input
    :id="props.id"
    :name="props.name"
    :type="inputType"
    :placeholder="props.placeholder"
    :required="props.required"
    :disabled="props.disabled"
    :class="props.class"
    v-model="inputValue"
  />
</template>