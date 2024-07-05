<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <header class="flex flex-row items-center justify-between bg-white-100 px-4 py-6 shadow-md">
    <GraphicElementsLogosLogotype class="h-10 fill-dark-200" />

    <button class="block h-10 w-10 lg:hidden">
      <GraphicElementsIconsHamburger />
    </button>

    <div class="hidden gap-16 lg:flex lg:flex-row">
      <ul class="flex flex-row gap-8">
        <li
          v-for="currentIndex in 3" :key="currentIndex"
          class="btn-text cursor-pointer text-base font-semibold tracking-wide font-base uppercase"
        >
          <NuxtLink :to="localePath('/')">
            {{ $t(`header.${currentIndex - 1}`) }}
          </NuxtLink>
        </li>
      </ul>

      <BaseLanguageSwitcher />
    </div>
  </header>
</template>
