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
  <div>
    <NuxtImg
      id="cursor-small"
      src="/bee.svg"
      alt="bee following cursor"
      class="pointer-events-none fixed left-0 top-4 z-10000 h-24px w-24px opacity-0 transition-opacity duration-100 ease-in -rotate-18"
    />
  </div>
</template>

<style scoped>
@media screen and (min-width: 1100px) {
  * {
    cursor: none !important;
  }
}
</style>
