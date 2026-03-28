import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Iron & Grace — Couples Bible Studies',
  description: 'Strength meets faith. Bible studies built for couples who are serious about their covenant.',
  openGraph: {
    title: 'Iron & Grace',
    description: 'Strength meets faith. Couples built to last.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
