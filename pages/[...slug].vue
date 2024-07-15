<script setup lang="ts">
const route = useRoute()

//pegar parametros e salvar store
//usar parametros salvos para filtrar
//na primeira entrada pega mes atual e all

console.log(
  route.params.slug,
)
</script>

<template>
  <div>
    <section class="w-full flex flex-col items-center justify-center gap-20">
      <BTab />
      <BMonthsFilter />
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
