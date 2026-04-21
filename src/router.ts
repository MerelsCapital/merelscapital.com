type RouteRender = () => string
type RouteInit = () => void

const routes = new Map<string, RouteRender>()
const inits  = new Map<string, RouteInit>()

export function registerRoute(name: string, render: RouteRender, init?: RouteInit) {
  routes.set(name, render)
  if (init) inits.set(name, init)
}

function routeToPath(route: string): string {
  return route === 'home' ? '/' : `/${route}`
}

function pathToRoute(path: string): string {
  const segment = path.replace(/^\//, '') || 'home'
  return segment
}

function renderRoute(route: string, scrollTarget?: string) {
  const resolved = routes.has(route) ? route : 'home'
  const main = document.getElementById('main-content')!
  main.innerHTML = routes.get(resolved)!()
  inits.get(resolved)?.()
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
  // Handle back/forward
  window.addEventListener('popstate', (e) => {
    renderRoute(e.state?.route ?? pathToRoute(location.pathname), e.state?.scrollTarget)
  })

  // Handle link clicks
  document.addEventListener('click', (e) => {
    const el = (e.target as Element).closest<HTMLElement>('[data-route]')
    if (!el) return
    e.preventDefault()
    navigate(el.dataset.route!, el.dataset.scroll)
  })

  // Load the route matching the current URL (handles direct links and refresh)
  const initialRoute = pathToRoute(location.pathname)
  history.replaceState({ route: initialRoute }, '', routeToPath(initialRoute))
  renderRoute(initialRoute)
}
