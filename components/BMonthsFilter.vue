<script lang="ts" setup>
export interface Props {
  currentCategory: string
  currentUserMonth: string
}

const props = defineProps<Props>()

const { t } = useI18n()

export interface IMonth {
  name: string
  icon: string
}

const months: { [key: string]: IMonth } = {
  january: {
    name: t('months.january'),
    icon: 'i-material-symbols:severe-cold-rounded',
  },
  february: {
    name: t('months.february'),
    icon: 'i-material-symbols:snowing-heavy',
  },
  march: {
    name: t('months.march'),
    icon: 'i-material-symbols:local-florist-outline',
  },
  april: {
    name: t('months.april'),
    icon: 'i-material-symbols:home-and-garden-outline-rounded',
  },
  may: {
    name: t('months.may'),
    icon: 'i-material-symbols:outdoor-garden-outline',
  },
  june: {
    name: t('months.june'),
    icon: 'i-material-symbols:wb-sunny-outline-rounded',
  },
  july: {
    name: t('months.july'),
    icon: 'i-material-symbols:tsunami-outline',
  },
  august: {
    name: t('months.august'),
    icon: 'i-material-symbols:thermometer-gain-outline-rounded',
  },
  september: {
    name: t('months.september'),
    icon: 'i-material-symbols:nest-eco-leaf-outline-rounded',
  },
  october: {
    name: t('months.october'),
    icon: 'i-material-symbols:rainy-outline',
  },
  november: {
    name: t('months.november'),
    icon: 'i-material-symbols:rainy-snow',
  },
  december: {
    name: t('months.december'),
    icon: 'i-material-symbols:weather-snowy-outline',
  },
}

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

const activeMonth = ref<string | number>(props.currentUserMonth)
const monthSwiperInstance = ref<any>()

async function handleWithMonth(newMonth: string | number) {
  useFilterStore().setCurrentMonth(newMonth)
  setActiveMonth(newMonth)
}

function setActiveMonth(monthName: string | number) {
  activeMonth.value = monthName
}

function updateArrows(swiper: any) {
  const prevButton = document.querySelector('.prev-button') as HTMLButtonElement
  const nextButton = document.querySelector('.next-button') as HTMLButtonElement

  prevButton.classList.toggle('opacity-20', swiper.isBeginning)
  prevButton.disabled = swiper.isBeginning

  nextButton.classList.toggle('opacity-20', swiper.isEnd)
  nextButton.disabled = swiper.isEnd
}

function next() {
  monthSwiperInstance.value!.slideNext()
}

function prev() {
  monthSwiperInstance.value!.slidePrev()
}

onMounted(() => {
  monthSwiperInstance.value.on('slideChange', () => updateArrows(monthSwiperInstance.value))
  updateArrows(monthSwiperInstance.value)

  const initialMonthIndex = Object.keys(months).indexOf(props.currentUserMonth)

  if (initialMonthIndex >= 0) {
    monthSwiperInstance.value.slideTo(initialMonthIndex)
  }
})
</script>

<template>
  <div
    class="relative h-max w-100dvw bg-white-100 px-4 shadow-[0px_2px_2px_0.5px_rgba(30,30,0,0.05)] md:w-full xl:px-0 lg:shadow-none"
  >
    <div class="invisible absolute top-0 z-10 h-full bg-white-100 md:visible xl:invisible -left-3">
      <button
        class="prev-button z-50 h-6 w-6 flex translate-y-[80%] items-center justify-center border-1 border-black-200 rounded-full bg-white-100 transition-all duration-200 ease-in hover:shadow-md"
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
        class="next-button h-6 w-6 flex translate-y-[80%] items-center justify-center border-1 border-black-200 rounded-full bg-white-100 transition-all duration-200 ease-in hover:scale-101 hover:shadow-md"
        @click="next"
      >
        <Icon
          class="m-1 w-2 text-black-200"
          name="i-material-symbols:arrow-forward-ios-rounded"
        />
      </button>
    </div>
    <Swiper
      class="transition-opacity duration-1000"
      :class="{
        'opacity-0': !monthSwiperInstance,
        'opacity-100': monthSwiperInstance,
      }"
      :modules="[SwiperNavigation]"
      :slides-per-view="3"
      :space-between="30"
      :breakpoints="swiperParams.breakpoints"
      @swiper="monthSwiperInstance = $event"
    >
      <SwiperSlide
        v-for="(month, key) in months"
        :key="key"
      >
        <button
          class="w-full select-none border-2 border-transparent rounded-sm pb-4 pt-1 text-sm font-semibold tracking-wider transition-all duration-300 ease-out lg:w-max"
          :class="[
            activeMonth === key
              ? 'border-b-red-100'
              : 'text-black-200 hover:border-b-red-100/[0.10]',
          ]"
          @click="handleWithMonth(key)"
        >
          <Icon
            class="text-black-200"
            :name="month.icon"
          />
          <p v-text="month.name" />
        </button>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
