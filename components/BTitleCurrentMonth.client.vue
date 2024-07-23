<script setup lang="ts">
export interface Props {
  text1?: string
  month: string
  text2?: string
}

defineProps<Props>()
</script>

<template>
  <div class="title-lg flex flex-wrap items-center justify-center gap-2 text-black-200">
    <p>{{ text1 }}</p>
    <p
      class="text-red-100"
      v-text="month"
    />
    <p>{{ text2 }}</p>
  </div>
</template>
