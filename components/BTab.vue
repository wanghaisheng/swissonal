<script setup lang="ts">
export interface Props {
  currentCategory: string
  currentUserMonth: string
}

const props = defineProps<Props>()

const { t } = useI18n()

const categories = {
  all: t('categories.all'),
  vegetables: t('categories.vegetables'),
  fruits: t('categories.fruits'),
  herbs: t('categories.herbs'),
}

async function handleWithCategory(newCategory: string | number) {
  useFilterStore().setCurrentCategory(newCategory)

  setActiveTab(newCategory)
}

const activeTab = ref(props.currentCategory)

function setActiveTab(tabName: any) {
  activeTab.value = tabName
}
</script>

<template>
  <HeadlessTabGroup>
    <HeadlessTabList class="w-full flex select-none border-1 border-black-200 rounded-full bg-white-100 shadow-[3px_3px_0px_0px_rgb(30,30,30)] md:w-[566px]">
      <HeadlessTab
        v-for="(category, index) in categories"
        :key="index"
        as="template"
      >
        <button
          class="w-full flex cursor-pointer items-center justify-center rounded-full px-2 py-1 text-black-200 transition-all duration-300 ease-out md:px-0 md:py-1.5 paragraph-bold-tab"
          :class="[
            activeTab === index
              ? 'bg-red-100 text-white-100'
              : '',
          ]"
          @click="handleWithCategory(index)"
        >
          {{ category }}
        </button>
      </HeadlessTab>
    </HeadlessTabList>
  </HeadlessTabGroup>
</template>
