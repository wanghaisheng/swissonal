<template>
  <div class="h-100dvh flex flex-col">
    <BHeader class="fixed" />

    <div class="grow px-4 pt-30 lg:px-34">
      <slot />
    </div>

    <BFooter />
  </div>
</template>
