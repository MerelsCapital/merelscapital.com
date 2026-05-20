interface RouteMeta {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
}

type RouteLoader = () => Promise<{ html: string; init?: () => void; meta?: RouteMeta }>

const routes = new Map<string, RouteLoader>()

const DEFAULT_META: RouteMeta = {
  title: 'Merels Capital – Independent Wealth Management',
  description: 'Merels Capital provides independent, unconflicted wealth management for individuals, families, and institutions.',
}

function applyMeta(meta: RouteMeta, route: string) {
  document.title = meta.title

  const setMeta = (sel: string, attr: string, val: string) => {
    const el = document.querySelector<HTMLMetaElement>(sel)
    if (el) el.setAttribute(attr, val)
  }

  setMeta('meta[name="description"]', 'content', meta.description)
  setMeta('meta[property="og:title"]', 'content', meta.ogTitle ?? meta.title)
  setMeta('meta[property="og:description"]', 'content', meta.ogDescription ?? meta.description)
  setMeta('meta[property="og:url"]', 'content', `https://merelscapital.com${route === 'home' ? '/' : `/${route}`}`)
}

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
  const { html, init, meta } = await routes.get(resolved)!()
  const main = document.getElementById('main-content')!
  main.innerHTML = html
  applyMeta(meta ?? DEFAULT_META, resolved)
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
