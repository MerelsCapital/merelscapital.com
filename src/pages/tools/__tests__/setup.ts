import { vi } from 'vitest'

// jsdom doesn't implement these browser APIs
vi.stubGlobal('alert', vi.fn())
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo
Element.prototype.scrollIntoView = vi.fn()
