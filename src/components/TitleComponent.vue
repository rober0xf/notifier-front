<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TitleComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <h1 class="text-4xl font-extrabold text-gray-800 tracking-wide leading-tight">{{ title }}</h1>
</template>
