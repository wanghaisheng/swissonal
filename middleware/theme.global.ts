export default defineNuxtRouteMiddleware((to) => {
  const lastRouteName = to.path.split('/').reverse()[0]

  let pageId = lastRouteName


  if (to.name?.toString().includes('slug'))
    pageId = 'calendar'

  usePageStore().setCurrentPageId(pageId!)
})
