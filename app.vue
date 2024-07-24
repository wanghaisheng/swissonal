<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

provideHeadlessUseId(() => useId())

onMounted(() => {
  useNuxtApp().$startLenisScrollAnimation()
  
  gsap.registerPlugin(ScrollTrigger)
})

const today = new Date()
const month = today.toLocaleString('en-EN', { month: 'long' })

callOnce(() => {
  useFilterStore().setCurrentMonth(toKebabCase(month))
})
</script>

<template>
  <NuxtLayout>
    <BCustomCursor />
    <NuxtPage />
  </NuxtLayout>
</template>
