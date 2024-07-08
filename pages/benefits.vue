<script setup lang="ts">
const pageId = useId()

await callOnce(`call-${pageId}`, () => {
  usePageStore().setCurrentPageId('benefits')
})
</script>

<template>
  <div>
    benefits
  </div>
</template>
