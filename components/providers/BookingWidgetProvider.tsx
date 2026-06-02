'use client'

import Script from 'next/script'
import { initBookingWidget } from '@/lib/bookingWidget'

export default function BookingWidgetProvider() {
  return (
    <Script
      src="https://online-booking-widget.lsk-prod.app/v1/widget.js"
      data-merchant-id="e23b6d1c-d6db-4756-a3f0-268269466e8d"
      strategy="lazyOnload"
      onLoad={initBookingWidget}
    />
  )
}
