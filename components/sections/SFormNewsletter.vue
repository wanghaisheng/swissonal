<script setup lang="ts">
import InputText from 'primevue/inputtext'

const value = ''
</script>

<template>
  <section class="my-20 w-full flex flex-col items-center justify-center gap-8 rounded-md bg-green-100 px-4 py-8 text-center">
    <p class="title-lg text-white-100">
      {{ $t('form-newsletter.title') }}
    </p>
    <p class="text-sm text-white-100 font-600 leading-4 tracking-wide font-base">
      {{ $t('form-newsletter.description') }}
    </p>
    <div class="w-full flex flex-col gap-6">
      <FloatLabel
        class="newsletter-input"
      >
        <InputText
          id="name"
          v-model="value"
          class="w-full"
        />
        <label
          for="name"
          class="newsletter-input-text"
        >{{ $t('form-newsletter.name') }}</label>
      </FloatLabel>
      <FloatLabel
        class="newsletter-input"
      >
        <InputText
          id="email"
          v-model="value"
          class="w-full"
          type="email"
        />
        <label
          for="email"
          class="newsletter-input-text"
        >{{ $t('form-newsletter.email') }}</label>
      </FloatLabel>
    </div>

    <button class="btn-outline-white">
      {{ $t('form-newsletter.send') }}
      <Icon
        class="text-white-100"
        name="i-material-symbols:arrow-right-alt-rounded"
      />
    </button>
  </section>
</template>

<style lang="scss" scoped>
.newsletter-input {
  --at-apply: w-full rounded-md bg-white-100 px-2 py-1.5 text-green-400;

  &-text {
    --at-apply: font-600 font-base text-sm;
  }
}
</style>
