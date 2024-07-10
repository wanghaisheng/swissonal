<script lang="ts" setup>
provideHeadlessUseId(() => useId())

onMounted(() => {
  useNuxtApp().$startLenisScrollAnimation()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage class="pt-30" />
  </NuxtLayout>
</template>
