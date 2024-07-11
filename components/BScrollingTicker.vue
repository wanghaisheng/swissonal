<script setup lang="ts"></script>

<template>
  <div
    class="min-w-100dvw flex items-center justify-start gap-8 truncate border-y border-black-200 bg-white-100 py-2 -translate-x-[calc(calc(100dvw-1224px)/2)]"
  >
    <div
      v-for="paragraph in 5"
      :key="paragraph"
      class="flex items-center gap-8"
    >
      <img
        class="h-16 w-16 flex-shrink-0 object-contain"
        src="/images/emojis/swiss-flag.webp"
      >
      <img
        class="h-16 w-16 flex-shrink-0 object-contain"
        src="/images/emojis/plant.webp"
      >
      <p text="base">
        {{ $t('discover-what-to-plant') }}
      </p>
    </div>
  </div>
</template>
