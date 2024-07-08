<script setup lang="ts">
import { appRoutes } from '~/routes'

const localePath = useLocalePath()

const isMenuOpen = ref<boolean>(false)

const pagesInformation = usePageStore().getPages
</script>

<template>
  <header
    class="fixed w-full flex flex-row items-center justify-between bg-white-100 px-4 py-6 shadow-md"
  >
    <NuxtLink
      :to="localePath('/')"
      class="z-2 transition-all"
      @click="isMenuOpen = false"
    >
      <Logotype
        class="h-10 fill-dark-200 transition-all duration-500 delay-200 ease-in-out"
        :class="{ 'fill-white-100 ': isMenuOpen }"
      />
    </NuxtLink>

    <button
      class="z-2 block h-10 w-10 lg:hidden"
      @click="isMenuOpen = !isMenuOpen"
    >
      <Hamburger :is-open="isMenuOpen" />
    </button>

    <div class="hidden gap-16 lg:flex lg:flex-row">
      <ul class="flex flex-row gap-8">
        <li
          v-for="(information, index) in pagesInformation"
          :key="index"
          class="cursor-pointer text-base font-semibold tracking-wide font-base uppercase btn-text"
        >
          <NuxtLink :to="localePath(`${information.link.href}`)">
            <p>
              {{ $t(information.link.titleI18n) }}
            </p>
          </NuxtLink>
        </li>
      </ul>

      <BLanguageSwitcher />
    </div>

    <transition
      enter-active-class="transition-transform duration-800 ease-in-out"
      enter-from-class="transform translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition-transform duration-350 ease-in"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform translate-x-full"
    >
      <BMobileMenu
        v-model:is-open="isMenuOpen"
        class="z-1"
      />
    </transition>
  </header>
</template>
