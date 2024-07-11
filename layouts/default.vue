<template>
  <div class="h-100dvh flex flex-col items-center">
    <BHeader class="fixed" />

    <div class="max-w-[1224px] grow px-4 pt-30">
      <slot />
    </div>

    <BFooter />
  </div>
</template>
