<script lang="ts" setup>
import gsap from 'gsap'

const cursorSmall = ref<HTMLElement | null>(null)

function init() {
  setTimeout(() => {
    cursorSmall.value = document.getElementById('cursor-small')
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
  }, 100)
}

function destroy() {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseenter', onMouseEnter)
  document.removeEventListener('mouseleave', onMouseLeave)
}

function onMouseEnter() {
  cursorSmall.value!.style.opacity = '1'
}

function onMouseLeave() {
  cursorSmall.value!.style.opacity = '0'
}

function onMouseMove(e: MouseEvent) {
  cursorSmall.value!.style.opacity = '1'
  gsap.to(cursorSmall.value, { duration: 0.8, x: e.clientX - 3, y: e.clientY - 3 })
}

onMounted(() => {
  nextTick(init)
})

onBeforeUnmount(() => {
  destroy()
})
</script>

<template>
  <div class="custom-cursor">
    <div
      id="cursor-small"
      class="custom-cursor__ball"
    />
  </div>
</template>

<style scoped>
@media screen and (min-width: 1100px) {
  * {
    cursor: none !important;
  }

  .custom-cursor__ball {
    --at-apply: bg-red-100 -top-1 left-0 fixed w-6px h-6px rounded-full z-10000 opacity-0
      pointer-events-none transition-opacity duration-100 ease-in;
  }
}
</style>
