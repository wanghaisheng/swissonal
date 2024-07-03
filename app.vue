<script setup>
</script>

<template>
  <div>
    <ContentList v-slot="{ list }" path="de/january" fields="title,description">
      {{ list }}
    </ContentList>
  </div>
</template>
