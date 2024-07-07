import Lenis from 'lenis'
import type { LenisOptions } from 'lenis'

export default defineNuxtPlugin(() => {
  const mainLenis = new Lenis()

  function raf(time: number) {
    mainLenis.raf(time)
    requestAnimationFrame(raf)
  }

  return {
    provide: {
      useLenis: mainLenis,
      startLenisScrollAnimation: () => {
        requestAnimationFrame(raf)
      },
      instantiateLenis: (lenisOptions?: LenisOptions) => {
        const lenis = new Lenis(lenisOptions)

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        return {
          lenis,
          start: () => requestAnimationFrame(raf),
        }
      },
    },
  }
})

