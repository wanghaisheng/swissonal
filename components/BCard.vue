<script setup lang="ts">
export interface Props {
  foodImage: string
  foodName: string
  foodSpecification?: string
}

defineProps<Props>()

//hover que tem efeito carta 3d
</script>

<template>
  <div class="w-full flex flex-col items-center justify-start gap-5 rounded-md bg-white-100 px-4 py-10 text-center tracking-wide shadow-md">
    <NuxtImg
      class="h-24 w-24"
      :src="foodImage"
    />
    <p
      class="text-3xl font-600 capitalize"
      v-text="foodName"
    />
    <p
      class="font-300 normal-case"
      v-text="foodSpecification"
    />
  </div>
</template>
