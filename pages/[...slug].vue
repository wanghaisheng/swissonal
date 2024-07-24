<template>
  <div>
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

<style lang="scss">
.grid-container-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
}
</style>
