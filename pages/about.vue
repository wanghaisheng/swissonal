<script setup lang="ts">
</script>

<template>
  <div class="selection:text-white-200 selection:bg-red-100">
    <section class="bg-red-100 selection:bg-white-100 selection:text-black-200">
      <BMainTitleSubtitle
        :title="$t('about.title')"
        :subtitle="$t('about.subtitle')"
        class="mb-12"
      />

      <BTitleParagraph :title="$t('about.description.title')">
        <p class="paragraph-text-light text-white-100">
          {{ $t('about.description.description') }}
        </p>
      </BTitleParagraph>
    </section>
    <BScrollingTicker class="my-20" />

    <section
      v-once
      class="mb-20 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-4"
    >
      <BCardImageLink
        image-path="/images/calendar.webp"
        :text="$t('card-links.calendar')"
        link="/"
      />
      <BCardImageLink
        image-path="/images/planting-tomatos.webp"
        :text="$t('card-links.about')"
        link="/about"
      />
    </section>
  </div>
</template>
