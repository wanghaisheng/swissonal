<script setup lang="ts">
export interface Props {
  title: string
  textWhite?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <p
      class="select-text capitalize selection:bg-white-100 paragraph-text-bold selection:text-black-200"
      :class="textWhite ? 'text-white-100' : 'text-black-200'"
    >
      {{ title }}
    </p>
    <slot />
  </div>
</template>
