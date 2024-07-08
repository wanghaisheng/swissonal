<script setup>
const pageId = useId()

await callOnce(`call-${pageId}`, () => {
  usePageStore().setCurrentPageId('calendar')
})
</script>

<template>
  <div>
    <div class="mb-10 flex flex-col gap-5">
      <h1 class="font-base uppercase">
        Components here
      </h1>
    </div>

    <ContentList
      v-slot="{ list }"
      path="de/january"
      fields="title,description"
    >
      {{ list }}
    </ContentList>
  </div>
</template>
