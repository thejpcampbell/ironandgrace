import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SERIES } from '../lib/data'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0A0805' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#0A0805', padding: '64px 32px 68px', borderBottom: '3px solid #EF9F27' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2A2520', marginBottom: 22 }}>
            For our couples group
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 60, fontWeight: 900, color: '#fff', lineHeight: 1.04, letterSpacing: '-.025em', marginBottom: 28 }}>
            Studies for marriages<br />built to <em style={{ fontStyle: 'italic', color: '#EF9F27' }}>last.</em>
          </h1>
          <p style={{ fontSize: 15, color: '#3A3530', lineHeight: 1.85, maxWidth: 500, paddingLeft: 16, borderLeft: '2px solid #1D9E75' }}>
            Every study is here when you're ready. Come back after our sessions, dig in with your spouse, use it whenever you need it. This is a{' '}
            <span style={{ color: '#1D9E75', fontWeight: 500 }}>resource for us</span> — not a performance.
          </p>
        </div>
      </section>

      {/* Seven Series */}
      <section style={{ background: '#0D0B08', padding: '40px 32px', flex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#242018', marginBottom: 18 }}>
            The seven series
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {SERIES.map(series => (
              <Link
                key={series.id}
                href={series.status === 'active' ? `/series/${series.slug}` : '#'}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 20px', borderRadius: 8,
                  background: '#0A0805', border: '1px solid #161210',
                  borderLeft: `3px solid ${series.color}`,
                  textDecoration: 'none',
                  cursor: series.status === 'active' ? 'pointer' : 'default'
                }}
              >
                <div style={{ fontSize: 12, width: 22, flexShrink: 0, fontWeight: 700, color: series.color }}>
                  {String(series.id).padStart(2, '0')}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 900, lineHeight: 1.2,
                    color: series.status === 'active' ? series.color : '#3A3530',
                    fontStyle: series.status === 'active' ? 'italic' : 'normal'
                  }}>
                    {series.name}
                  </div>
                  <div style={{ fontSize: 11, color: '#242018', marginTop: 2 }}>
                    {series.subtitle} · {series.sessionCount} sessions
                  </div>
                </div>
                <div style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
                  padding: '3px 10px', borderRadius: 4, whiteSpace: 'nowrap',
                  background: series.status === 'active' ? (series.id === 1 ? '#1C1408' : '#081A10') : '#111',
                  color: series.status === 'active' ? series.color : '#2A2520',
                  border: `1px solid ${series.status === 'active' ? (series.id === 1 ? '#2A1E08' : '#0F2E1C') : '#1A1510'}`
                }}>
                  {series.status === 'active' ? 'Live' : 'Coming soon'}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
