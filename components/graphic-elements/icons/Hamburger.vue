<script setup lang="ts">
const openMenu = ref<boolean>(false)
</script>

<template>
  <div
    class="h-full w-full flex flex-col cursor-pointer items-center justify-around" :class="{ active: openMenu }" @click="openMenu = !openMenu"
  >
    <div class="menu-bar one" />
    <div class="menu-bar two" />
  </div>
</template>

<style scoped>
.menu-bar {
  --at-apply: w-full h-2 w-full border-1 border-black-200 rounded-full;
  box-shadow: 1px 2px 0px 0px #1e1e1e;
  background-color: #ffffff;
}

.one {
  --at-apply: animate-delay-100 transition-all-300;
  transform-origin: center bottom;
}

.two {
  --at-apply: transition-all-300;
  transform-origin: center top;
}

.active .one {
  transform: translate(0, 100%) rotate(45deg);
}

.active .two {
  transform: translate(0, -100%) rotate(-45deg);
}
</style>
