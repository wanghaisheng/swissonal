<script setup>
import { Tab, TabGroup, TabList } from '@headlessui/vue'

const { t } = useI18n()

const categories = {
  all: t('categories.all'),
  vegetables: t('categories.vegetables'),
  fruits: t('categories.fruits'),
  herbs: t('categories.herbs'),
}
</script>

<template>
  <TabGroup>
    <TabList class="w-full flex border-1 border-black-200 rounded-full bg-white-100 shadow-[3px_3px_0px_0px_rgb(30,30,30)] md:w-[566px]">
      <Tab
        v-for="category in categories"
        :key="category"
        v-slot="{ selected }"
        as="template"
      >
        <button
          class="w-full rounded-full px-2 py-1 text-sm font-semibold tracking-wider transition-all duration-300 ease-out md:px-0 md:py-1.5 md:text-base"
          :class="[
            selected
              ? 'bg-red-100 text-white-100'
              : 'text-black-200 hover:bg-red-10/[0.40]',
          ]"
        >
          {{ category }}
        </button>
      </Tab>
    </TabList>
  </TabGroup>
</template>
