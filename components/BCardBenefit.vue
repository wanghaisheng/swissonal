<script setup lang="ts">
export interface Props {
  benefitImage: string
  benefitTitle: string
  benefitDescription: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="min-w-50 flex flex-col items-center gap-8 overflow-hidden rounded-md bg-white-100 px-4 py-4 text-center tracking-wide shadow-md lg:min-w-120 md:min-w-80 sm:min-w-60 lg:py-16"
  >
    <p
      class="text-xl font-600 capitalize lg:text-4xl md:text-3xl"
      v-text="benefitTitle"
    />
    <NuxtImg
      class="h-32 w-32 select-none lg:h-64 lg:w-64 md:h-42 md:w-42"
      :src="benefitImage"
    />
    <p
      class="font-300 normal-case paragraph-text"
      v-text="benefitDescription"
    />
  </div>
</template>
