<script setup lang="ts">
export interface Props {
  text: string
  link: string
  imagePath: string
}

defineProps<Props>()

const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    class="max-w-[550px] w-full cursor-pointer"
    :to="localePath(link)"
  >
    <NuxtImg
      class="max-h-[410px] w-full rounded-lg object-cover shadow-md transition-all duration-500 ease md:h-100 hover:brightness-75"
      :src="imagePath"
      :alt="`Image about:${text}`"
    />

    <div class="flex items-center justify-between gap-4 py-4">
      <p
        class="text-sm text-black-200 font-black tracking-wide uppercase md:text-base"
      >
        {{ text }}
      </p>
      <span class="flex items-center justify-center border-1 border-black-200 rounded-full bg-white-100 shadow-[1px_1px_0px_0px_rgb(30,30,30)] transition-all duration-200 ease-in hover:bg-red-10">
        <Icon
          class="m-1 w-4 text-black-200"
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
