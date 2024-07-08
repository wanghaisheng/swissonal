<script setup lang="ts">
import { appBreakpoints } from '~/breakpoints'

export interface Props {
  isOpen?: boolean
}

defineProps<Props>()

const emits = defineEmits(['update:isOpen'])

onMounted(manageMenuOnResize)

function manageMenuOnResize() {
  window.addEventListener('resize', closeOnScreenGreaterThanLg)
}

function closeOnScreenGreaterThanLg() {
  if (useBreakpoints(appBreakpoints).isGreaterOrEqual('lg')) {
    emits('update:isOpen', false)
  }
}

function closeOnClicked() {
  return emits('update:isOpen', false)
}

const localePath = useLocalePath()

const pagesInformation = usePageStore().getPages
</script>

<template>
  <menu
    v-if="isOpen"
    class="fixed inset-0 h-screen w-screen flex flex-col items-end justify-center gap-12 bg-red-100 px-8 md:gap-10"
  >
    <li
      v-for="(information, index) in pagesInformation"
      :key="index"
      class="cursor-pointer text-[10vw] font-black tracking-wide font-base uppercase md:text-[8vw]"
    >
      <NuxtLink
        :to="localePath(`${information.link.href}`)"
        @click="closeOnClicked"
      >
        <p class="text-white-100">
          {{ $t(information.link.titleI18n) }}
        </p>
      </NuxtLink>
    </li>
    <li>
      <BLanguageSwitcher />
    </li>
  </menu>
</template>
