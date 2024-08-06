<template>
  <div
    class="w-100dvw flex select-none items-center justify-center gap-8 overflow-x-hidden truncate border-y border-black-200 -translate-x-4 2lg:-translate-x-[calc(calc(100dvw-1194px)/2)]"
  >
    <div
      v-for="paragraph in 10"
      :key="paragraph"
      class="animate-scrolling-ticker flex items-center gap-4"
    >
      <div
        class="h-full w-max flex flex-row justify-between gap-2"
      >
        <NuxtImg
          width="16px"
          height="16px"
          src="/images/emojis/swiss-flag.webp"
        />
        <NuxtImg
          width="16px"
          height="16px"
          src="/images/emojis/plant.webp"
        />
      </div>
      <p
        class="paragraph"
        v-text="$t('discover-what-to-plant')"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes ticker {
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scrolling-ticker {
  animation: ticker 8s linear infinite;
}
</style>
