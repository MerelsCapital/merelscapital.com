type RouteLoader = () => Promise<{ html: string; init?: () => void }>

const routes = new Map<string, RouteLoader>()

export function registerRoute(name: string, loader: RouteLoader) {
  routes.set(name, loader)
}

function routeToPath(route: string): string {
  return route === 'home' ? '/' : `/${route}`
}

function pathToRoute(path: string): string {
  return path.replace(/^\//, '') || 'home'
}

async function renderRoute(route: string, scrollTarget?: string) {
  const resolved = routes.has(route) ? route : 'home'
  const { html, init } = await routes.get(resolved)!()
  const main = document.getElementById('main-content')!
  main.innerHTML = html
  init?.()
  if (scrollTarget) {
    document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }
}

export function navigate(route: string, scrollTarget?: string) {
  history.pushState({ route, scrollTarget }, '', routeToPath(route))
  renderRoute(route, scrollTarget)
}

export function initRouter() {
  window.addEventListener('popstate', (e) => {
    renderRoute(e.state?.route ?? pathToRoute(location.pathname), e.state?.scrollTarget)
  })

  document.addEventListener('click', (e) => {
    const el = (e.target as Element).closest<HTMLElement>('[data-route]')
    if (!el) return
    e.preventDefault()
    navigate(el.dataset.route!, el.dataset.scroll)
  })

  const initialRoute = pathToRoute(location.pathname)
  history.replaceState({ route: initialRoute }, '', routeToPath(initialRoute))
  renderRoute(initialRoute)
}
