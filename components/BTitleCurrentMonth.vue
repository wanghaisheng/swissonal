<script setup lang="ts">
export interface Props {
  text1?: string
  month: string
  text2?: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-2 text-black-200 title-lg">
    <p v-text="text1" />
    <p
      class="text-red-100"
      v-text="$t(`months.${month}`)"
    />
    <p v-text="text2" />
  </div>
</template>
