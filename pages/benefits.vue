<script setup lang="ts">
import gsap from 'gsap'

const { t } = useI18n()

interface Item {
  image: string
  title: string
  description: string
}

const { locale } = useI18n()

const benefitItems = ref<Item[]>([])

async function loadData() {
  const data = await queryContent(`${locale.value}/benefits`).find()
  benefitItems.value = data[0]?.benefits
}

const containerCards = ref<HTMLDivElement | null>(null)

onMounted(() => {
  loadData().then(() => {
    const cards = document.querySelectorAll('.card')

    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#benefitCardsSection',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        end: () => `+=${containerCards.value?.offsetWidth}`,
      },
    })
  })
})

const links: string[] = [
  'https://www.sge-ssn.ch/',
  'https://www.konsumentenschutz.ch/',
  'https://www.sbv-usp.ch/en/',
  'https://bienen.ch/ueber-uns/apisuisse/',
  'https://www.pronatura.ch/en',
  'https://www.epa.gov/sustainable-management-food/composting',
]

useHead({
  title: t('header[2]'),
  meta: [
    { name: t('header[2]'), content: t('seo.benefits-plant') },
  ],
  script: [{ innerHTML: 'console.log(\'Those who grow their own food harvest more than just organic produce; they reap wisdom, independence, and health: Hippocrates, Father of Medicine.\')' }],
})

useSeoMeta({
  title: t('header[2]'),
  ogTitle: t('header[2]'),
  description: t('seo.benefits-plant'),
  ogDescription: t('seo.benefits-plant'),
})
</script>

<template>
  <div class="selection:text-white-200 w-dvw flex flex-col items-center justify-center selection:bg-red-100">
    <section
      class="section-full-width-aligment-parent flex flex-col items-center bg-green-100 selection:bg-white-100 selection:text-black-200"
    >
      <div class="section-full-width-aligment-child-first-section">
        <BMainTitleSubtitle
          :title="$t('benefits.title')"
          :subtitle="$t('benefits.subtitle')"
        />
      </div>
    </section>

    <section
      id="benefitCardsSection"
      class="relative z-10 h-max h-screen flex items-center overflow-x-hidden bg-green-100 md:p-0"
    >
      <div
        ref="containerCards"
        class="relative inset-x-5 mx-10 w-dvw flex flex-row flex-nowrap justify-start gap-4 md:left-30% sm:left-10% md:mr-0"
      >
        <BCardBenefit
          v-for="(item, index) in benefitItems"
          :key="index"
          class="card"
          :benefit-title="item.title"
          :benefit-description="item.description"
          :benefit-image="item.image"
        />
      </div>
    </section>

    <section
      v-once
      class="section-full-width-aligment-parent"
    >
      <div class="section-full-width-aligment-child">
        <BTitleParagraph
          :title="$t('benefits.sources')"
          class="my-20"
        >
          <ul
            class="flex flex-col gap-4"
          >
            <li
              v-for="(link, i) in links"
              :key="i"
            >
              <a
                :href="link"
                target="_blank"
                class="flex flex-row items-center gap-2 text-black-200 underline underline-black-200 paragraph-text-light"
              >
                <span class="flex">
                  <Icon
                    class="text-black-200 opacity-60"
                    width="24px"
                    height="24px"
                    name="i-material-symbols:arrow-outward-rounded"
                  />
                </span>
                <p>{{ link }}</p>
              </a>
            </li>
          </ul>
        </BTitleParagraph>
      </div>
    </section>

    <div class="max-w-[1224px] w-full grow">
      <BScrollingTicker class="my-20" />
    </div>

    <section class="section-full-width-aligment-parent">
      <div
        v-once
        class="mb-20 max-w-[1024px] flex grow flex-col items-center gap-8 px-8 md:flex-row md:items-start md:justify-between md:gap-4"
      >
        <LazyBCardImageLink
          image-path="/images/calendar.webp"
          :text="$t('card-links.calendar')"
          link="/"
        />
        <LazyBCardImageLink
          image-path="/images/planting-tomatos.webp"
          :text="$t('card-links.about')"
          link="/about"
        />
      </div>
    </section>
  </div>
</template>
