<script setup lang="ts"></script>

<template>
  <NuxtLink class="max-w-[550px] w-full cursor-pointer">
    <NuxtImg
      class="max-h-[410px] w-full rounded-lg object-cover shadow-md"
      src="/images/vegetables-garden.webp"
    />

    <div class="flex items-center justify-between py-4">
      <p
        class="text-base text-base text-black-200 font-black tracking-wide uppercase md:text-lg"
      >
        Benefits of growing your food
      </p>
      <span class="h-[32px] w-[32px] flex items-center justify-center border-1 border-black-200 rounded-full bg-white-100 shadow-[1px_1px_0px_0px_rgb(30,30,30)] transition-all duration-200 ease-in md:h-8 md:w-8 hover:bg-red-10">
        <Icon
          class="w-3 text-black-200 sm:w-4"
          name="i-material-symbols:arrow-right-alt-rounded"
        /></span>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.border-arrow {
  box-shadow: 1px 1px 0px 0px #1e1e1e;
}
</style>
