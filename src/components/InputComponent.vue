<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  label: string
  value?: string
  id: string
  name: string
  type?: string
  modelValue?: string | number | boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean]
}>()

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const inputType = props.type ?? 'text'
const inputValue = props.value ?? ''
</script>

<template>
  <div>
    <label :for="props.id">{{ props.label }}</label>
    <input
      :type="inputType"
      :id="props.id"
      :name="props.name"
      :value="inputValue"
      @input="onInput"
      required
    />
  </div>
</template>
