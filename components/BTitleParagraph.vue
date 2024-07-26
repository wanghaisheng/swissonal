<script setup lang="ts">
export interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <p class="text-white-100 paragraph-text-bold select-text selection:bg-white-100 selection:text-black-200">
      {{ title }}
    </p>
    <slot />
  </div>
</template>
