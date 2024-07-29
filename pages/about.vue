<script setup lang="ts">
</script>

<template>
  <div class="selection:text-white-200 selection:bg-red-100">
    <section
      v-once
      class="selection:bg-white-100 selection:text-black-200"
    >
      <BMainTitleSubtitle
        :title="$t('about.title')"
        :subtitle="$t('about.subtitle')"
        class="mb-24"
      />

      <BTitleParagraph
        :title="$t('about.description.title')"
        text-white
        class="mb-24"
      >
        <p class="paragraph-text-light text-white-100">
          {{ $t('about.description.description') }}
        </p>
      </BTitleParagraph>
    </section>

    <span class="absolute inset-0 bg-red-100 -z-3" />

    <NuxtImg
      src="/images/landscape-swiss.webp"
      class="w-full"
    />

    <section
      v-once
    >
      <BTitleParagraph
        :title="$t('about.purpose.title')"
        class="mb-24"
      >
        <p class="paragraph-text-light text-black-200">
          {{ $t('about.purpose.description') }}
        </p>
      </BTitleParagraph>

      <BTitleParagraph
        :title="$t('about.who.title')"
        class="mb-24"
      >
        <div class="flex flex-wrap gap-2">
          <p class="paragraph-text-light text-black-200">
            {{ $t('about.who.description') }}
          </p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/brunafusiger/"
            class="paragraph-text-light text-black-200 italic underline"
          >
            Bruna Fusiger
          </a>
          <p class="paragraph-text-light text-wrap text-black-200">
            {{ $t('about.who.description2') }}
          </p>
        </div>
      </BTitleParagraph>
    </section>

    <section
      v-once
      class="bg-green-100 py-10"
    >
      <BTitleParagraph
        :title="$t('about.inspiration.title')"
        class="mb-24"
        text-white
      >
        <div>
          <p class="paragraph-text-light text-white-100 mb-8">
            {{ $t('about.inspiration.description') }}
          </p>
          <div class="mb-8 flex flex-wrap gap-2">
            <p class="paragraph-text-light text-white-100 font-semibold">
              {{ $t('about.inspiration.description2') }}
            </p>

            <p class="paragraph-text-light text-white-100">
              {{ $t('about.inspiration.description3') }}
            </p>
          </div>

          <p class="paragraph-text-light text-white-100">
            {{ $t('about.inspiration.description4') }}
          </p>
        </div>
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
