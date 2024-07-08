<script setup lang="ts">
const pageId = useId()

await callOnce(`call-${pageId}`, () => {
  usePageStore().setCurrentPageId('about')
})
</script>

<template>
  <div>
    about
  </div>
</template>
