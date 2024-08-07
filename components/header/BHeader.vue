<script setup lang="ts">
const localePath = useLocalePath()

const isMenuOpen = ref<boolean>(false)

const pagesInformation = usePageStore().getPages
const currentPage = computed(() => usePageStore().getCurrentPage)
</script>

<template>
  <header
    class="z-50 w-full flex flex-row items-center justify-between px-4 py-6 shadow-md transition-all duration-500 ease-in-out selection:bg-red-100 selection:text-white-100"
    :style="{
      backgroundColor: currentPage.theme.headerColor,
    }"
  >
    <NuxtLink
      :to="localePath('/')"
      class="z-51 transition-all"
      @click="isMenuOpen = false"
      aria-label="Swissonal logo bring you to the default page"
    >
      <Logotype
        class="h-10 fill-dark-200 transition-all duration-500 delay-200 ease-in-out"
        :class="{ '!fill-white-100 ': isMenuOpen }"
        :style="{
          fill: currentPage.theme.color,
        }"
      />
    </NuxtLink>

    <button
      aria-label="Hamburger button to open and close header menu"
      class="z-51 block h-10 w-10 lg:hidden"
      @click="isMenuOpen = !isMenuOpen"
    >
      <Hamburger :is-open="isMenuOpen" />
    </button>

    <div class="hidden gap-16 lg:flex lg:flex-row">
      <ul class="flex flex-row gap-8">
        <li
          v-for="(information, index) in pagesInformation"
          :key="index"
          class="cursor-pointer"
        >
          <NuxtLink :to="localePath(`${information.link.href}`)">
            <p
              class="text-base font-semibold tracking-wide font-base uppercase"
              :style="{
                color: currentPage.theme.color,
              }"
            >
              {{ $t(information.link.titleI18n) }}
            </p>
          </NuxtLink>
        </li>
      </ul>

      <BLanguageSwitcher :is-menu-open="isMenuOpen" />
    </div>

    <transition
      enter-active-class="transition-transform duration-800 ease-in-out"
      enter-from-class="transform translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition-transform duration-350 ease-in"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform translate-x-full"
    >
      <LazyBMobileMenu
        v-model:is-open="isMenuOpen"
        class="z-50"
      />
    </transition>
  </header>
</template>
