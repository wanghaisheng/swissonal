<script setup>
import { Tab, TabGroup, TabList } from '@headlessui/vue'

const { t } = useI18n()

const months = [
  {
    name: t('months.january'),
    icon: 'i-material-symbols:severe-cold-rounded',
  },
  {
    name: t('months.february'),
    icon: 'i-material-symbols:snowing-heavy',
  },
  {
    name: t('months.march'),
    icon: 'i-material-symbols:local-florist-outline',
  },
  {
    name: t('months.april'),
    icon: 'i-material-symbols:home-and-garden-outline-rounded',
  },
  {
    name: t('months.may'),
    icon: 'i-material-symbols:outdoor-garden-outline',
  },
  {
    name: t('months.june'),
    icon: 'i-material-symbols:wb-sunny-outline-rounded',
  },
  {
    name: t('months.july'),
    icon: 'i-material-symbols:tsunami-outline',
  },
  {
    name: t('months.august'),
    icon: 'i-material-symbols:thermometer-gain-outline-rounded',
  },
  {
    name: t('months.september'),
    icon: 'i-material-symbols:nest-eco-leaf-outline-rounded',
  },
  {
    name: t('months.october'),
    icon: 'i-material-symbols:rainy-outline',
  },
  {
    name: t('months.november'),
    icon: 'i-material-symbols:rainy-snow',
  },
  {
    name: t('months.december'),
    icon: 'i-material-symbols:weather-snowy-outline',
  },
]
</script>

<template>
  <div class="w-100dvw overflow-x-auto bg-green">
    <TabGroup>
      <TabList class="w-max flex flex-row gap-8 bg-white-100">
        <Tab
          v-for="month in months"
          :key="month"
          v-slot="{ selected }"
          as="template"
        >
          <button
            class="w-full px-2 py-1 text-sm font-semibold tracking-wider transition-all duration-300 ease-out md:px-0 md:py-1.5 md:text-base"
            :class="[
              selected
                ? 'bg-red-100'
                : 'text-black-200 hover:bg-red-10/[0.40]',
            ]"
          >
            <Icon
              class="text-black-200"
              :name="month.icon"
            />
            <p>{{ month.name }} </p>
          </button>
        </Tab>
      </TabList>
    </TabGroup>
  </div>
</template>
