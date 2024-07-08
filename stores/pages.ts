import { pages } from '~/data/pages'
import type { PageInformation } from '~/types/page'

export const usePageStore = defineStore('page', {
  state: () => ({
    pages,
    currentPageId: '',
  }),
  getters: {
    getPages({ pages }): PageInformation[] {
      return pages
    },
    getCurrentPage(state): PageInformation {
      return state.pages.find(page => page.id === state.currentPageId)!
    },
  },
  actions: {
    setCurrentPageId(id: string) {
      this.currentPageId = id
    },
  },
})
