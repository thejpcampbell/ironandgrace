import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SERIES, STUDIES } from '../lib/data'

export default function StudiesPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <section style={{ background: '#0F0D0B', padding: '48px 28px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#EF9F27', marginBottom: 8 }}>All Studies</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: 12 }}>
            The <em style={{ fontStyle: 'italic', color: '#EF9F27' }}>Archive</em>
          </h1>
          <p style={{ fontSize: 15, color: '#888', maxWidth: 520, lineHeight: 1.7 }}>Every study published on Iron & Grace, organized by series. Start anywhere — but start.</p>
        </div>
      </section>
      <div className="accent-bar"></div>

      <section style={{ padding: '48px 28px', background: '#F7F5F2', flex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {SERIES.filter(s => s.status !== 'coming-soon').map(series => {
            const seriesStudies = STUDIES.filter(s => s.seriesId === series.id)
            return (
              <div key={series.id} style={{ marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, paddingBottom: 14, borderBottom: `2px solid ${series.color}` }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: series.color }}></div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: series.deep }}>{series.subtitle}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 900, color: '#0F0D0B' }}>{series.name}</div>
                  </div>
                  <Link href={`/series/${series.slug}`} style={{ marginLeft: 'auto', fontSize: 12, color: series.deep, fontWeight: 600 }}>View Series →</Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                  {seriesStudies.map(study => (
                    <Link key={study.id} href={`/studies/${study.slug}`}
                      style={{ background: '#fff', border: '0.5px solid #e5e0d8', borderRadius: 10, overflow: 'hidden', display: 'block', textDecoration: 'none' }}>
                      <div style={{ height: 3, background: series.color }}></div>
                      <div style={{ padding: '14px 16px' }}>
                        <div style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>Session {String(study.session).padStart(2, '0')}</div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#0F0D0B', marginBottom: 8, lineHeight: 1.3 }}>{study.title}</div>
                        <div style={{ fontSize: 12, color: '#aaa', fontStyle: 'italic' }}>{study.scripture}</div>
                      </div>
                      <div style={{ padding: '8px 16px', borderTop: '0.5px solid #f0ebe3', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 11, color: '#bbb' }}>{study.date}</span>
                        <span style={{ fontSize: 11, color: series.deep, fontWeight: 600 }}>{study.readTime} min</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Coming soon */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>Coming Soon</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {SERIES.filter(s => s.status === 'coming-soon').map(series => (
                <div key={series.id} style={{ background: '#f7f5f2', border: '0.5px solid #e5e0d8', borderRadius: 10, padding: '16px', opacity: 0.7 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: series.color, marginBottom: 10 }}></div>
                  <div style={{ fontSize: 10, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{series.subtitle}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#888' }}>{series.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
