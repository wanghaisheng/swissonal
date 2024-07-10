<template>
  <div class="min-h-100dvh flex flex-col">
    <BHeader class="fixed" />

    <div class="grow pt-30">
      <slot />
    </div>

    <BFooter />
  </div>
</template>
