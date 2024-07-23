<script setup lang="ts">
export interface Props {
  foodImage: string
  foodName: string
  foodSpecification?: string
}

defineProps<Props>()

const card = ref<HTMLDivElement | null>(null)
const reflection = ref<HTMLDivElement | null>(null)

function over() {
  card.value!.style.zIndex = '10'
  reflection.value!.style.opacity = '1'
}

function leave() {
  card.value!.style.transform = 'perspective(500px) scale(1)'
  card.value!.style.zIndex = '1'
  reflection.value!.style.opacity = '0'
}

function move(event: MouseEvent) {
  const relX = (event.offsetX + 1) / card.value!.offsetWidth
  const relY = (event.offsetY + 1) / card.value!.offsetHeight
  const rotY = `rotateY(${(relX - 0.5) * 5}deg)`
  card.value!.style.transform = `perspective(500px) scale(1.01) ${rotY}`

  const lightX = scale(relX, 0, 1, 150, -50)
  const lightY = scale(relY, 0, 1, 30, -100)
  const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7)
  const lightOpacity = scale(lightConstrain, 0.3, 1, 1, 0) * 255
  const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`
  const lightShadeBlack = `rgba(0, 0, 0, 1)`
  reflection.value!.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`
}

function scale(val: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return outMin + ((val - inMin) * (outMax - outMin)) / (inMax - inMin)
}
</script>

<template>
  <div
    ref="card"
    class="relative w-full flex flex-col cursor-pointer items-center justify-start gap-5 overflow-hidden rounded-md bg-white-100 px-4 py-10 text-center tracking-wide shadow-[0_0_5px_rgba(0,0,0,0)] transition-all ease-linear hover:shadow-[0px_0px_4px_rgba(0,0,0,0.5)]"
    @mousemove="move"
    @mouseleave="leave"
    @mouseover="over"
  >
    <div
      ref="reflection"
      class="absolute left-0 top-0 h-full w-full opacity-0 mix-blend-soft-light transition-all ease-linear"
    />
    <NuxtImg
      class="h-24 w-24"
      :src="foodImage"
    />
    <p
      class="text-3xl font-600 capitalize"
      v-text="foodName"
    />
    <p
      class="paragraph font-300 normal-case"
      v-text="foodSpecification"
    />
  </div>
</template>
