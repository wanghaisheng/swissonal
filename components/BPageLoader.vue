<script setup lang="ts">
const isLoading = ref(true)

const { isLoading: isLoadingIndicator } = useLoadingIndicator()

onMounted(() => {
  watch(isLoadingIndicator, () => {
    isLoading.value = isLoadingIndicator.value
  }, { immediate: true })
})
</script>

<template>
  <Transition
    leave-active-class="transition-opacity duration-350 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="isLoading"
      class="fixed left-0 top-0 z-10000 h-100dvh w-100dvw flex items-center justify-center bg-red-100"
    >
      <div class="cube" />
      <div class="cube" />
      <div class="cube" />
      <div class="cube" />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
   $colors: #03973a, #ffffff, #e5d548, #8d4c93;

.cube {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #1e1e1e;

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
      animation: right 1s infinite calc($i * 0.1s);
    }
  }
}

@keyframes left {
  40% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0);
  }
}

@keyframes right {
  40% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
}
</style>
