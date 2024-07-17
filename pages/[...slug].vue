<script setup lang="ts">
const currentCategory = computed(() => useFilterStore().getCategory)
const currentMonth = computed(() => useFilterStore().getMonth)

const localePath = useLocalePath()
const router = useRouter()
const route = useRoute()

const pageId = useId()

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
  router.push(localePath(`/${currentCategory.value}/${currentMonth.value}`))
})
</script>

<template>
  <div>
    <section class="w-full flex flex-col items-center justify-center gap-20">
      <BTab
        :current-category="currentCategory"
        :current-user-month="currentMonth"
      />
      <BMonthsFilter
        :current-category="currentCategory"
        :current-user-month="currentMonth"
      />
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
