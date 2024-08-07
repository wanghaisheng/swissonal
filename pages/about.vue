<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { t } = useI18n()

onMounted(() => {
  ScrollTrigger.create({
    trigger: '#section-parallax',
    start: '+=45% top',
    pin: true,
    pinSpacing: false,
  })
})

useHead({
  title: t('header[1]'),
  meta: [
    { name: t('header[1]'), content: t('seo.project-about') },
  ],
  script: [{ innerHTML: 'console.log(\'To plant a garden is to believe in tomorrow\')' }],
})

useSeoMeta({
  title: t('header[1]'),
  ogTitle: t('header[1]'),
  description: t('seo.project-about'),
  ogDescription: t('seo.project-about'),
})
</script>

<template>
  <div class="selection:text-white-200 w-screen flex flex-col items-center justify-center selection:bg-red-100">
    <section
      v-once
      id="section-parallax"
      class="section-full-width-aligment-parent bg-red-100 selection:bg-white-100 selection:text-black-200"
    >
      <div class="section-full-width-aligment-child-first-section">
        <BMainTitleSubtitle
          :title="$t('about.title')"
          :subtitle="$t('about.subtitle')"
          class="mb-24"
        />

        <BTitleParagraph
          :title="$t('about.description.title')"
          text-white
          class="mb-8 md:mb-24"
        >
          <p class="text-white-100 paragraph-text-light">
            {{ $t('about.description.description') }}
          </p>
        </BTitleParagraph>
      </div>
    </section>

    <NuxtImg
      quality="10"
      src="/images/landscape-swiss.webp"
      class="2xl:40vh mb-10 w-full object-cover object-bottom lg:h-100vh"
      alt="Draw of a swiss landscape with montains in the background of a fruit and vegetable garden and a swiss flag in the right"
    />

    <section
      v-once
      class="section-full-width-aligment-parent"
    >
      <div class="section-full-width-aligment-child">
        <BTitleParagraph
          :title="$t('about.purpose.title')"
          class="mb-24"
        >
          <p class="text-black-200 paragraph-text-light">
            {{ $t('about.purpose.description') }}
          </p>
        </BTitleParagraph>

        <BTitleParagraph
          :title="$t('about.who.title')"
          class="mb-24"
        >
          <div class="flex flex-wrap gap-2">
            <p class="text-black-200 paragraph-text-light">
              {{ $t('about.who.description') }}
            </p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/brunafusiger/"
              class="text-black-200 italic underline paragraph-text-light"
            >
              Bruna Fusiger
            </a>
            <p class="text-wrap text-black-200 paragraph-text-light">
              {{ $t('about.who.description2') }}
            </p>
          </div>
        </BTitleParagraph>
      </div>
    </section>

    <section
      v-once
      class="section-full-width-aligment-parent bg-green-100 py-10"
    >
      <div class="section-full-width-aligment-child">
        <BTitleParagraph
          :title="$t('about.inspiration.title')"
          class="py-8"
          text-white
        >
          <div>
            <p class="mb-8 text-white-100 paragraph-text-light">
              {{ $t('about.inspiration.description') }}
            </p>
            <div class="mb-8 flex flex-wrap gap-2">
              <p class="text-white-100 font-semibold paragraph-text-light">
                {{ $t('about.inspiration.description2') }}
              </p>

              <p class="text-white-100 paragraph-text-light">
                {{ $t('about.inspiration.description3') }}
              </p>
            </div>

            <p class="text-white-100 paragraph-text-light">
              {{ $t('about.inspiration.description4') }}
            </p>
          </div>
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
        <BCardImageLink
          image-path="/images/calendar.webp"
          :text="$t('card-links.calendar')"
          link="/"
        />
        <BCardImageLink
          image-path="/images/vegetables-garden.webp"
          :text="$t('card-links.benefits')"
          link="/benefits"
        />
      </div>
    </section>
  </div>
</template>
