let widgetRoot: HTMLElement | null = null
let widgetVisible = false
let pendingOpen = false

function isWidgetEl(el: Element): boolean {
  if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'NOSCRIPT') return false
  if ((el as HTMLElement).id?.startsWith('__')) return false
  return window.getComputedStyle(el).position === 'fixed'
}

function captureAndHide(el: HTMLElement): void {
  widgetRoot = el
  widgetVisible = false
  el.style.setProperty('opacity', '0', 'important')
  el.style.setProperty('pointer-events', 'none', 'important')
}

async function callOpen(): Promise<void> {
  const w = window as any
  if (w.LSReservationWidget?.client) {
    const client = await w.LSReservationWidget.client()
    client.open()
  }
}

export function initBookingWidget(): void {
  if (typeof window === 'undefined') return

  const existing = document.getElementById('ls-reservation-widget') as HTMLElement | null
  if (existing) {
    captureAndHide(existing)
    if (pendingOpen) { pendingOpen = false; openBookingWidget() }
    return
  }

  const preExisting = new Set(Array.from(document.querySelectorAll('body > *')))

  const mo = new MutationObserver((mutations) => {
    for (const mut of mutations) {
      for (const node of mut.addedNodes) {
        if (node.nodeType !== 1) continue
        const el = node as HTMLElement
        if (preExisting.has(el)) continue
        if (el.id !== 'ls-reservation-widget' && !isWidgetEl(el)) continue
        requestAnimationFrame(() => {
          captureAndHide(el)
          mo.disconnect()
          if (pendingOpen) { pendingOpen = false; openBookingWidget() }
        })
        return
      }
    }
  })

  mo.observe(document.body, { childList: true })
  setTimeout(() => mo.disconnect(), 15_000)
}

export async function openBookingWidget(): Promise<void> {
  if (!widgetRoot) {
    pendingOpen = true
    return
  }

  // Already visible — just open without re-animating
  if (widgetVisible) {
    callOpen()
    return
  }

  const { gsap } = await import('@/lib/gsap')
  widgetRoot.style.removeProperty('pointer-events')

  gsap.fromTo(
    widgetRoot,
    { opacity: 0, x: 40, scale: 0.97 },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.45,
      ease: 'power3.out',
      clearProps: 'transform',
      onComplete: () => {
        widgetVisible = true
        callOpen()
      },
    }
  )
}
