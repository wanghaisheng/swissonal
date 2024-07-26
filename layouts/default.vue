<template>
  <div class="flex flex-col items-center">
    <BHeader class="fixed" />

    <div
      class="max-w-[1224px] w-full grow touch-none touch-none px-4 pt-40"
    >
      <slot />
    </div>

    <BFooter />
  </div>
</template>
