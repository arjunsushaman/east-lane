const BOOKING_URL = 'https://www.sevenrooms.com/explore/eastlaneasianbistro/reservations/create/search/'

export function initBookingWidget(): void {}

export function openBookingWidget(): Promise<void> {
  window.open(BOOKING_URL, '_blank', 'noopener,noreferrer')
  return Promise.resolve()
}
