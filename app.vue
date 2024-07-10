<script lang="ts" setup>
provideHeadlessUseId(() => useId())

onMounted(() => {
  useNuxtApp().$startLenisScrollAnimation()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
