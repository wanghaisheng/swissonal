<script setup lang="ts">
export interface Props {
  what: string
  when: string
  toPlant: string
}

const props = defineProps<Props>()

const phrases = ref([props.what, props.when])
const currentPhrase = ref('')
const currentPhraseIndex = ref(0)
const currentCharIndex = ref(0)
const showBall = ref(true)

const useSeoTitle = shallowRef(true)

if (import.meta.client)
  useSeoTitle.value = false

onMounted(() => {
  startAnimatedTyping(
    phrases.value,
    currentPhrase,
    currentPhraseIndex,
    currentCharIndex,
    showBall,
  )
})
</script>

<template>
  <h1
    class="flex flex-wrap select-none items-center justify-center gap-2 text-center text-black-200 title-xl"
  >
    <span
      v-if="useSeoTitle"
      v-text="$t('what-when-plant.seo-title')"
    />
    <template v-else>
      <span
        text="5xl md:7xl"
        class="min-h-12 min-w-40 md:min-h-18 md:min-w-60"
      >
        <span v-text="currentPhrase" />
        <span v-if="showBall">|</span>
      </span>
      <span
        text="5xl md:7xl "
        v-text="toPlant"
      />
    </template>
  </h1>
</template>
