import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SERIES } from '@/lib/data'

export default function SeriesIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <section style={{ background: '#0F0D0B', padding: '48px 28px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#EF9F27', marginBottom: 8 }}>All Series</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: 12 }}>
            The Full <em style={{ fontStyle: 'italic', color: '#EF9F27' }}>Curriculum</em>
          </h1>
          <p style={{ fontSize: 15, color: '#888', maxWidth: 520, lineHeight: 1.7 }}>Seven series. 70 studies. A complete framework for couples who are serious about their covenant and their calling.</p>
        </div>
      </section>
      <div className="accent-bar"></div>

      <section style={{ padding: '48px 28px', background: '#F7F5F2', flex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {SERIES.map((series, i) => (
            <Link key={series.id} href={`/series/${series.slug}`}
              style={{ background: series.status === 'coming-soon' ? '#fff' : '#0F0D0B', border: `0.5px solid ${series.status === 'coming-soon' ? '#e5e0d8' : '#1F1C18'}`, borderRadius: 12, padding: '24px 28px', display: 'grid', gridTemplateColumns: '48px 220px 1fr 120px', gap: 24, alignItems: 'center', textDecoration: 'none', opacity: series.status === 'coming-soon' ? 0.75 : 1, borderLeft: `4px solid ${series.color}` }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: series.status === 'coming-soon' ? '#ccc' : '#333' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: series.status === 'coming-soon' ? '#aaa' : '#666', marginBottom: 4 }}>{series.subtitle}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 900, color: series.color, lineHeight: 1.15 }}>
                  <em style={{ fontStyle: 'italic' }}>{series.name}</em>
                </div>
              </div>
              <div style={{ fontSize: 14, color: series.status === 'coming-soon' ? '#888' : '#aaa', lineHeight: 1.65 }}>{series.tagline}</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: series.status === 'coming-soon' ? '#ccc' : '#fff' }}>{series.sessionCount}</div>
                <div style={{ fontSize: 11, color: '#555' }}>sessions</div>
                {series.status === 'coming-soon' && <div style={{ fontSize: 10, fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>Coming Soon</div>}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
