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

const localePath = useLocalePath()
</script>

<template>
  <menu
    v-if="isOpen"
    class="fixed inset-0 h-screen w-screen flex flex-col items-end justify-center gap-12 bg-red-100 px-8 md:gap-10"
  >
    <li
      v-for="currentIndex in 3"
      :key="currentIndex"
      class="cursor-pointer text-[10vw] font-black tracking-wide font-base uppercase md:text-[8vw]"
    >
      <NuxtLink :to="localePath('/')">
        <p class="text-white-100">
          {{ $t(`header.${currentIndex - 1}`) }}
        </p>
      </NuxtLink>
    </li>
    <li>
      <BLanguageSwitcher />
    </li>
  </menu>
</template>
