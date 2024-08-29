<script setup lang="ts">
export interface Props {
  title: string
  textWhite?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <h3
      class="select-text capitalize selection:bg-white-100 paragraph-text-bold selection:text-black-200"
      :class="textWhite ? 'text-white-100' : 'text-black-200'"
    >
      {{ title }}
    </h3>
    <slot />
  </div>
</template>
