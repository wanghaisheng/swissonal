<script setup lang="ts">
const currentCategory = computed(() => useFilterStore().getCategory)
const currentMonth = computed(() => useFilterStore().getMonth)

const localePath = useLocalePath()
const route = useRoute()
const { locale } = useI18n()

const pageId = useId()

const filter = ref()

async function loadData() {
  filter.value = await queryContent(`${locale.value}/${currentMonth.value}/${currentCategory.value}`).findOne()
}

callOnce(pageId, () => {
  const { slug } = route.params

  if (typeof slug !== 'string' && slug?.length) {
    useFilterStore().setCurrentCategory(slug[0])
    const month = slug[1]
    if (month)
      useFilterStore().setCurrentMonth(month)
  }
})

watch([currentCategory, currentMonth], () => {
  const newUrl = localePath(`/${currentCategory.value}/${currentMonth.value}`)
  history.pushState({}, '', newUrl)

  loadData()
})

onMounted(() => {
  loadData()
})
</script>

<template>
  <div>
    <SWhatWhenPlant />
    <section class="w-full flex flex-col items-center justify-center gap-20">
      <BTab
        :current-category="currentCategory"
        :current-user-month="currentMonth"
      />
      <BMonthsFilter
        :current-category="currentCategory"
        :current-user-month="currentMonth"
      />

      <BTitleCurrentMonth
        :month="currentMonth"
        :text1="$t('current-month-text.text1')"
        :text2="$t('current-month-text.text2')"
      />

      <div
        v-if="filter?.fruits"
        class="grid-container-cards w-full rounded-lg bg-red-100 p-2"
      >
        <BCard
          v-for="(fruit, index) in filter.fruits"
          :key="index"
          :food-image="fruit.image"
          :food-name="fruit.title"
          :food-specification="fruit.description"
        />
      </div>
      <div
        v-else-if="filter?.vegetables"
        class="grid-container-cards w-full rounded-lg bg-red-100 p-2"
      >
        <BCard
          v-for="(vegetable, index) in filter.vegetables"
          :key="index"
          :food-image="vegetable.image"
          :food-name="vegetable.title"
          :food-specification="vegetable.description"
        />
      </div>
      <div
        v-else-if="filter?.herbs"
        class="grid-container-cards w-full rounded-lg bg-red-100 p-2"
      >
        <BCard
          v-for="(herb, index) in filter.herbs"
          :key="index"
          :food-image="herb.image"
          :food-name="herb.title"
          :food-specification="herb.description"
        />
      </div>
      <div
        v-else-if="filter?.all"
        class="grid-container-cards w-full rounded-lg bg-red-100 p-2"
      >
        <BCard
          v-for="(all, index) in filter.all"
          :key="index"
          :food-image="all.image"
          :food-name="all.title"
          :food-specification="all.description"
        />
      </div>
    </section>

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
