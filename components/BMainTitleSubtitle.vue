<script setup lang="ts">
export interface Props {
  title: string
  subtitle: string
}

defineProps<Props>()
</script>

<template>
  <h1 class="flex flex-col items-center title-xl">
    <span class="text-white-100">
      {{ title }}
    </span>
    <span class="text-white-100 subtitle-xl">
      {{ subtitle }}
    </span>
  </h1>
</template>
