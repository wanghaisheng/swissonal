<template>
  <div class="flex flex-col items-center">
    <BHeader class="fixed" />

    <div
      class="w-full flex grow flex-col items-center"
    >
      <slot />
    </div>

    <BFooter />
  </div>
</template>
