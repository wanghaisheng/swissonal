<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

const { t } = useI18n()

const { data } = await useFetch('/api/subscribe')

const email = ref('')
const errorMessage = ref('')
const successMessage = ref('')

async function subscribe() {
  errorMessage.value = ''
  successMessage.value = ''

  const emailPattern = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/

  if (!emailPattern.test(email.value)) {
    errorMessage.value = t('form-newsletter.message.enter-valid-email')
    return
  }

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value }),
    })
    if (!response.ok)
      throw new Error(t('form-newsletter.message.unknown-error'))
      email.value = ''
      successMessage.value = t('form-newsletter.message.success-subscription')

      setTimeout((() => {successMessage.value = ''}), 5000);
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      errorMessage.value = error.message
    }
    else {
      errorMessage.value = t('form-newsletter.message.unknown-error')
    }
  }
}
</script>

<template>
  <section class="relative my-20 w-full flex flex-col items-center justify-center gap-8 rounded-md bg-green-100 px-4 py-8 text-center lg:px-64 md:px-32">
    <NuxtImg
      class="absolute w-20 -left-6 -top-8 md:w-24 xl:w-32 md:rotate-10 xl:rotate-20 md:-top-12 xl:-left-10 xl:-top-14"
      src="/images/stickers/mein-bester.webp"
    />
    <NuxtImg
      class="absolute w-15 -bottom-8 -right-4 md:w-20 xl:w-28 xl:-right-14"
      src="/images/stickers/seasonal-tastes.webp"
    />

    {{ data }}
    <p class="text-white-100 title-lg">
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
          id="email"
          v-model="email"
          class="w-full"
          type="email"
        />
        <label
          for="email"
          class="newsletter-input-text"
        >{{ $t('form-newsletter.email') }}</label>
      </FloatLabel>

      <Message
        v-if="errorMessage"
      >
        {{ errorMessage }}
      </Message>
      <Message
        v-else-if="successMessage"
      >
        {{ successMessage }}
      </Message>
    </div>
    <div class="w-full flex justify-center md:justify-end">
      <button
        class="btn-outline-white"
        type="submit"
        @click="subscribe"
      >
        {{ $t('form-newsletter.send') }}
        <Icon
          class="text-white-100"
          name="i-material-symbols:arrow-right-alt-rounded"
        />
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.newsletter-input {
  --at-apply: w-full rounded-md bg-white-100 px-2 py-1.5 text-green-400;

  &-text {
    --at-apply: font-600 font-base text-sm;
  }
}

:deep() {
  .p-message {
    --at-apply: outline-none -mt-2;
  }
  .p-message .p-message-content .p-message-text	 {
    --at-apply: font-base text-white-100 px-2 border bg-white-100/0.5 border-white-100 rounded-md text-sm lg:text-base font-300 tracking-wider transition-all duration-100;
  }
}
</style>
