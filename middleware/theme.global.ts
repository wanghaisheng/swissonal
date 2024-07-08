export default defineNuxtRouteMiddleware((to) => {
  const lastRouteName = to.path.split('/').reverse()[0]

  let pageId = lastRouteName

  if ((isEmpty(lastRouteName)) || (lastRouteName === 'de' || 'it'))
    pageId = 'calendar'

  usePageStore().setCurrentPageId(pageId!)
})
