<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('[data-speed]', {
    y: (i, el) => (1 - Number.parseFloat(el.getAttribute('data-speed'))) * ScrollTrigger.maxScroll(window),
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: 'max',
      invalidateOnRefresh: true,
      scrub: 0,
    },
  })
})
</script>

<template>
  <section class="relative mb-10 w-full flex flex-col items-center justify-center gap-8 lg:mb-15 sm:mb-5 xl:gap-4">
    <Sun
      class="absolute left-0 top-0 z-1 w-10 lg:left-15% xl:left-5% sm:w-20 xl:w-30 lg:-top-8% sm:-top-5%"
    />
    <BTitleTypewriter
      :what="$t('what-when-plant.what')"
      :when="$t('what-when-plant.when')"
      :to-plant="$t('what-when-plant.to-plant')"
      class="z-2"
    />
    <Plant
      class="z-3 w-50dvw sm:w-60 xl:w-65 xl:-transform-translate-y-10"
    />
    <div
      class="flex-inline flex-wrap items-center justify-center gap-2 text-center"
    >
      <p class="paragraph">
        {{ $t('what-when-plant.description') }}
      </p>
      <NuxtImg
        width="16px"
        height="16px"
        src="/images/emojis/swiss-flag.webp"
      />
    </div>

    <NuxtImg
      data-speed="0.9"
      class="absolute top-35 w-15 -left-2 md:left-4 sm:left-0 lg:w-28 md:w-22 sm:w-18 xl:-left-12"
      src="/images/stickers/calendar.webp"
    />
    <NuxtImg
      data-speed="0.9"
      class="absolute left-2 top-70 w-20 rotate-20 lg:left-32 md:left-10 sm:top-90 xl:top-80 lg:w-38 md:w-28 sm:w-22 md:rotate-0"
      src="/images/stickers/watering-can.webp"
    />
    <NuxtImg
      data-speed="0.8"
      class="absolute top-50 w-15 -right-6 lg:right-16 md:right-10 lg:w-24 md:w-20 xl:w-28 sm:-right-2"
      src="/images/stickers/love-to-plant.webp"
    />
  </section>
</template>
