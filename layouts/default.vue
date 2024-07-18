<template>
  <div class="h-100dvh flex flex-col items-center">
    <BHeader class="fixed" />

    <div class="max-w-[1224px] w-full grow px-4 pt-30">
      <slot />
    </div>

    <BFooter />
  </div>
</template>
