<script setup lang="ts">
export interface Props {
  text1?: string
  month: string
  text2?: string
}

defineProps<Props>()
</script>

<template>
  <h2 class="flex flex-wrap items-center justify-center gap-2 text-black-200 title-lg">
    <span v-text="text1" />
    <span
      class="text-red-100"
      v-text="$t(`months.${month}`)"
    />
    <span v-text="text2" />
  </h2>
</template>
