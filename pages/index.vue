<script setup>
</script>

<template>
  <div>
    <div class="flex flex-col gap-5 mb-10">
      <h1 class="font-base uppercase">
        Components here
      </h1>
      <LazyBaseCard />
    </div>

    <ContentList v-slot="{ list }" path="de/january" fields="title,description">
      {{ list }}
    </ContentList>
  </div>
</template>
