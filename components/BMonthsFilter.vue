<script lang="ts" setup>
const { t } = useI18n()

export interface IMonth {
  name: string
  icon: string
}

const months: IMonth[] = [
  {
    name: t('months.january'),
    icon: 'i-material-symbols:severe-cold-rounded',
  },
  {
    name: t('months.february'),
    icon: 'i-material-symbols:snowing-heavy',
  },
  {
    name: t('months.march'),
    icon: 'i-material-symbols:local-florist-outline',
  },
  {
    name: t('months.april'),
    icon: 'i-material-symbols:home-and-garden-outline-rounded',
  },
  {
    name: t('months.may'),
    icon: 'i-material-symbols:outdoor-garden-outline',
  },
  {
    name: t('months.june'),
    icon: 'i-material-symbols:wb-sunny-outline-rounded',
  },
  {
    name: t('months.july'),
    icon: 'i-material-symbols:tsunami-outline',
  },
  {
    name: t('months.august'),
    icon: 'i-material-symbols:thermometer-gain-outline-rounded',
  },
  {
    name: t('months.september'),
    icon: 'i-material-symbols:nest-eco-leaf-outline-rounded',
  },
  {
    name: t('months.october'),
    icon: 'i-material-symbols:rainy-outline',
  },
  {
    name: t('months.november'),
    icon: 'i-material-symbols:rainy-snow',
  },
  {
    name: t('months.december'),
    icon: 'i-material-symbols:weather-snowy-outline',
  },
]

const swiperParams = {
  breakpoints: {
    355: {
      slidesPerView: 4,
    },
    744: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 10,
    },
    1440: {
      slidesPerView: 12,
    },
  },
}

const activeMonth = ref(null)

function setActiveMonth(monthName: any) {
  activeMonth.value = monthName
}

const monthSwiperInstance = ref<any>()

function next() {
  monthSwiperInstance.value!.slideNext()
}

function prev() {
  monthSwiperInstance.value!.slidePrev()
}
</script>

<template>
  <div
    class="relative h-max w-100dvw bg-white-100 px-4 shadow-[0px_2px_2px_0.5px_rgba(30,30,0,0.05)] md:w-full xl:px-0 lg:shadow-none"
  >
    <div class="invisible absolute top-0 z-10 h-full bg-white-100 md:visible xl:invisible -left-3">
      <button
        class="z-50 h-6 w-6 flex translate-y-[80%] items-center justify-center border-1 border-black-200 rounded-full bg-white-100 transition-all duration-200 ease-in hover:shadow-md"
        @click="prev"
      >
        <Icon
          class="m-1 w-2 text-black-200"
          name="i-material-symbols:arrow-back-ios-rounded"
        />
      </button>
    </div>
    <div class="arrow-background-shadow invisible absolute top-0 z-10 h-full md:visible xl:invisible -right-3">
      <button
        class="ease-i h-6 w-6 flex translate-y-[80%] items-center justify-center border-1 border-black-200 rounded-full bg-white-100 transition-all duration-200 hover:scale-101 hover:shadow-md"
        @click="next"
      >
        <Icon
          class="m-1 w-2 text-black-200"
          name="i-material-symbols:arrow-forward-ios-rounded"
        />
      </button>
    </div>
    <Swiper
      :modules="[SwiperNavigation]"
      :slides-per-view="3"
      :space-between="30"
      :breakpoints="swiperParams.breakpoints"
      class="grid auto-rows-max grid-flow-row"
      @swiper="monthSwiperInstance = $event"
    >
      <SwiperSlide
        v-for="month in months"
        :key="month.name"
      >
        <button
          class="w-full border-2 border-transparent rounded-sm pb-4 pt-1 text-sm font-semibold tracking-wider transition-all duration-300 ease-out lg:w-max"
          :class="[
            activeMonth === month.name
              ? 'border-b-red-100'
              : 'text-black-200 hover:border-b-red-100/[0.10]',
          ]"
          @click="setActiveMonth(month.name)"
        >
          <Icon
            class="text-black-200"
            :name="month.icon"
          />
          <p>{{ month.name }} </p>
        </button>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
