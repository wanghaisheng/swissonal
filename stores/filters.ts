export const useFilterStore = defineStore('filter', {
  state: () => ({
    category: 'all',
    month: '',
  }),
  getters: {
    getCategory: ({ category }) => category,
    getMonth: ({ month }) => month,
  },
  actions: {
    setCurrentCategory(currentCategory: any) {
      this.category = currentCategory
    },
    setCurrentMonth(currentMonth: any) {
      this.month = currentMonth
    },
  },
})
