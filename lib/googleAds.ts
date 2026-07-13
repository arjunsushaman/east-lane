const CONVERSION_SEND_TO = 'AW-18196726861/EgtKCNeI9M8cEM2I8ORD'

export function trackConversion(): void {
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  w.gtag?.('event', 'conversion', {
    send_to: CONVERSION_SEND_TO,
    value: 1.0,
    currency: 'GBP',
  })
}
