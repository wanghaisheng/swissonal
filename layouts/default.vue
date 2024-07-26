<template>
  <div class="flex flex-col items-center">
    <BHeader class="fixed" />

    <div
      class="max-w-[1224px] w-full grow touch-none touch-none px-4 pt-40 selection:bg-red-100 selection:text-white-100"
    >
      <slot />
    </div>

    <BFooter />
  </div>
</template>
