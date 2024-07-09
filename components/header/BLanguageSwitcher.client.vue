<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

export interface Props {
  isMenuOpen?: boolean
}

defineProps<Props>()

const switchLocalePath = useSwitchLocalePath()

const { locales, locale } = useNuxtApp().$i18n
const currentPage = computed(() => usePageStore().getCurrentPage)
</script>

<template>
  <div>
    <Menu
      as="div"
      class="relative z-2 font-black uppercase lg:font-semibold"
      text="[6vw] sm:[4vw] md:base lg:dark-200 "
    >
      <MenuButton
        as="button"
        aria-label="Language switcher"
        class="flex items-center font-base uppercase lg:text-base"
      >
        <p
          text="6vw sm:[4vw] lg:base"
          :class="`${currentPage.id === 'calendar' && !isMenuOpen ? 'text-black-200' : 'text-white-100'}`"
          v-text="locale"
        />
      </MenuButton>

      <transition
        enter-active-class="transition-all duration-250 ease-out"
        enter-from-class="max-h-0"
        enter-to-class="max-h-20"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="max-h-20"
        leave-to-class="max-h-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 origin-top-left overflow-clip rounded-b-2 bg-white-100 shadow-lg"
        >
          <div
            v-for="({ code }, index) in locales"
            :key="index"
          >
            <MenuItem v-slot="{ active }">
              <NuxtLink
                class="w-full flex content-center items-center gap-4 px-4 py-2 transition-colors duration-200"
                :class="[
                  active && code !== locale ? 'bg-red-10' : '',
                  code === locale ? 'bg-red-100 text-white-100' : '',
                ]"
                :to="switchLocalePath(code)"
                aria-label="Change language"
              >
                <Icon
                  class="text-white-100"
                  :class="[
                    code === locale ? 'visible' : 'invisible',
                  ]"
                  name="i-material-symbols:check-rounded"
                />

                {{ code }}
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
