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
    getCurrentPage({ pages, currentPageId }): PageInformation {
      return pages.find(page => page.id === currentPageId)!
    },
  },
  actions: {
    setCurrentPageId(id: string) {
      this.currentPageId = id
    },
  },
})
