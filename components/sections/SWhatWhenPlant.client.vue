<template>
  <section class="relative mb-10 w-full flex flex-col items-center justify-center gap-8 lg:mb-15 sm:mb-5 xl:gap-4">
    <Sun class="absolute left-0 top-0 z-1 w-10 lg:left-15% xl:left-5% sm:w-20 xl:w-30 lg:-top-8% sm:-top-5%" />
    <BTitleTypewriter
      :what="$t('what-when-plant.what')"
      :when="$t('what-when-plant.when')"
      :to-plant="$t('what-when-plant.to-plant')"
      class="z-2"
    />
    <Plant class="z-3 w-50dvw sm:w-60 xl:w-65 xl:-transform-translate-y-10" />
    <div class="flex-inline flex-wrap items-center justify-center gap-2 text-center">
      <p class="paragraph">
        {{ $t('what-when-plant.description') }}
      </p>
      <NuxtImg
        width="16px"
        height="16px"
        src="/images/emojis/swiss-flag.webp"
      />
    </div>
  </section>
</template>
