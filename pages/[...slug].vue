<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('header[0]'),
  meta: [
    { name: t('header[0]'), content: t('seo.project-description') },
  ],
  script: [{ innerHTML: 'console.log(\'Grow food, grow knowledge\')' }],
})

useSeoMeta({
  title: t('header[0]'),
  ogTitle: t('header[0]'),
  description: t('seo.project-description'),
  ogDescription: t('seo.project-description'),
})
</script>

<template>
  <div class="page-base-aligment selection:bg-red-100 selection:text-white-100">
    <SWhatWhenPlant />

    <SFoodFilter />

    <BScrollingTicker class="my-20" />

    <section
      v-once
      class="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-4"
    >
      <BCardImageLink
        image-path="/images/vegetables-garden.webp"
        :text="$t('card-links.benefits')"
        link="/benefits"
      />
      <BCardImageLink
        image-path="/images/planting-tomatos.webp"
        :text="$t('card-links.about')"
        link="/about"
      />
    </section>

    <SFormNewsletter />
  </div>
</template>
