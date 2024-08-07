<script setup lang="ts"></script>

<template>
  <footer
    class="relative w-screen flex flex-col items-center gap-12 bg-red-100 px-4 py-6.5 lg:flex-row lg:justify-center lg:gap-32 selection:bg-green-100 lg:py-16 selection:text-white-100"
    text="sm sm:base xl:lg"
  >
    <NuxtImg
      class="absolute left-6 w-20 -top-10 lg:left-24 xl:left-32 lg:w-28 lg:-top-16"
      src="/images/stickers/cow.webp"
      alt="Sticker draw of a  cow black and white with swiss flag behind"
    />
    <Logo class="w-50 fill-white-100 lg:w-60 xl:w-70" />
    <ul
      class="flex flex-col gap-8 text-start"
    >
      <li>
        <p
          class="footer-base-style font-600"
          v-text="$t('footer.your-guide')"
        />
      </li>

      <li>
        <p
          class="footer-base-style font-600"
        >
          ✉️ contact@swissonal.ch
        </p>
      </li>

      <li class="flex items-center gap-1">
        <p
          class="footer-base-style font-100"
          v-text="$t('footer.made-by')"
        />
        <a
          href="https://www.linkedin.com/in/brunafusiger/"
          target="_blank"
          class="footer-base-style font-600"
        >
          Bruna Fusiger
        </a>
      </li>
      <li>
        <p
          class="footer-base-style font-100 italic"
          v-text="$t('footer.based-on')"
        />
      </li>
    </ul>
  </footer>
</template>

<style lang="scss">
.footer-base-style {
  @apply text-white-100 tracking-wide;
}
</style>
