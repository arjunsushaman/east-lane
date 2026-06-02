'use client'

import { openBookingWidget } from '@/lib/bookingWidget'

interface BookingCTAProps extends React.ComponentPropsWithoutRef<'button'> {
  label?: string
}

export default function BookingCTA({ label = '· Book a Table ·', className, ...props }: BookingCTAProps) {
  return (
    <button onClick={() => openBookingWidget()} className={className} {...props}>
      {label}
    </button>
  )
}
