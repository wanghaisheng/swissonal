<script setup lang="ts">
export interface Props {
  title: string
  subtitle: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-white-100 title-xl">
      {{ title }}
    </h1>
    <h2 class="subtitle-xl text-white-100">
      {{ subtitle }}
    </h2>
  </div>
</template>
