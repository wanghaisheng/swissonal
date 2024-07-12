<script setup lang="ts">
</script>

<template>
  <div>
    <section class="flex justify-center">
      <BTab />
    </section>

    <BScrollingTicker class="my-20" />

    <section class="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-4">
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

    <ContentList
      v-slot="{ list }"
      path="de/january"
      fields="title,description"
    >
      {{ list }}
    </ContentList>
  </div>
</template>
