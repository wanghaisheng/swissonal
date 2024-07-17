<script lang="ts" setup>
provideHeadlessUseId(() => useId())

onMounted(() => {
  useNuxtApp().$startLenisScrollAnimation()
})

const today = new Date()
const month = today.toLocaleString('en-EN', { month: 'long' })

callOnce(() => {
  useFilterStore().setCurrentMonth(toKebabCase(month))
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
