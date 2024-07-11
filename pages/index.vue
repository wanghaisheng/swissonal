<script setup lang="ts">
</script>

<template>
  <div>
    <div class="mb-10 flex flex-col gap-5">
      <h1 class="font-base uppercase">
        Components here
      </h1>

      <div class="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-4">
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
      </div>
    </div>

    <ContentList
      v-slot="{ list }"
      path="de/january"
      fields="title,description"
    >
      {{ list }}
    </ContentList>
  </div>
</template>
