<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
    <div class="relative w-full bg-green">
      <NuxtImg
        id="sticker1"
        class="absolute z-11 w-15 -right-4 -top-8 lg:w-28 md:w-20 lg:-right-8 lg:-top-20 md:-top-12"
        src="/images/stickers/bioemeglio.webp"
      />
      <NuxtImg
        id="sticker2"
        class="absolute z-11 w-15 -bottom-8 -left-4 lg:w-22 md:w-20 xl:w-28 lg:-bottom-10 lg:-left-8 md:-bottom-12 xl:-left-22"
        src="/images/stickers/organischisbeter.webp"
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
    </div>
  </section>
</template>
