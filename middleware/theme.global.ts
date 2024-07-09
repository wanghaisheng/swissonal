export default defineNuxtRouteMiddleware((to) => {
  const lastRouteName = to.path.split('/').reverse()[0]

  let pageId = lastRouteName

  if (isEmpty(lastRouteName) || lastRouteName === 'de' || lastRouteName === 'it')
    pageId = 'calendar'

  usePageStore().setCurrentPageId(pageId!)
})
