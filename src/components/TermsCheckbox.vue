<script setup lang="ts">
defineProps<{
  modelValue?: boolean;
  required?: boolean;
}>();

defineEmits(['update:modelValue']);
</script>

<template>
  <label class="mt-5 flex cursor-pointer items-center">
    <input
      type="checkbox"
      class="border border-gray-400"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      :required="required"
    />
    <span class="ml-2 font-medium text-white">
      I accept the
      <a href="/terms" class="font-bold text-green-600">Terms of Use</a>
      and
      <a href="/conditions" class="font-bold text-green-600">Privacy Policy</a>
    </span>
  </label>
</template>
