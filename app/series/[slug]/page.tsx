import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SERIES, STUDIES } from '../../lib/data'

export async function generateStaticParams() {
  return SERIES.map(s => ({ slug: s.slug }))
}

export default function SeriesPage({ params }: { params: { slug: string } }) {
  const series = SERIES.find(s => s.slug === params.slug)
  if (!series) notFound()
  const studies = STUDIES.filter(s => s.seriesId === series.id)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <section style={{ background: '#0F0D0B', padding: '48px 28px 44px', borderLeft: `6px solid ${series.color}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: series.color, marginBottom: 8 }}>{series.subtitle}</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: 16 }}>
            <em style={{ fontStyle: 'italic', color: series.color }}>{series.name}</em>
          </h1>
          <p style={{ fontSize: 16, color: '#888', maxWidth: 580, lineHeight: 1.75, marginBottom: 24 }}>{series.description}</p>
          <div style={{ display: 'flex', gap: 20, paddingTop: 18, borderTop: '1px solid #1F1C18' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: series.color }}></div>
              <span style={{ fontSize: 12, color: '#666' }}>{series.sessionCount} sessions total</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75' }}></div>
              <span style={{ fontSize: 12, color: '#666' }}>{studies.length} published</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#888' }}></div>
              <span style={{ fontSize: 12, color: '#666', textTransform: 'capitalize' }}>{series.status.replace('-', ' ')}</span>
            </div>
          </div>
        </div>
      </section>
      <div className="accent-bar"></div>

      <section style={{ padding: '48px 28px', background: '#F7F5F2', flex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {studies.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {studies.map(study => (
                <Link key={study.id} href={`/studies/${study.slug}`}
                  style={{ background: '#fff', border: '0.5px solid #e5e0d8', borderRadius: 10, overflow: 'hidden', display: 'block', textDecoration: 'none' }}>
                  <div style={{ height: 4, background: series.color }}></div>
                  <div style={{ padding: 20 }}>
                    <div style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Session {String(study.session).padStart(2, '0')}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#0F0D0B', marginBottom: 10, lineHeight: 1.3 }}>{study.title}</div>
                    <div style={{ fontSize: 12, color: '#aaa', fontStyle: 'italic', lineHeight: 1.55, marginBottom: 12 }}>"{study.scriptureText.slice(1, 100)}..."</div>
                    <div style={{ fontSize: 12, color: series.deep, fontWeight: 600 }}>{study.scripture}</div>
                  </div>
                  <div style={{ padding: '10px 20px', borderTop: '0.5px solid #f0ebe3', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 11, color: '#bbb' }}>{study.date}</span>
                    <span style={{ fontSize: 12, color: series.deep, fontWeight: 600 }}>{study.readTime} min →</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 28px' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: series.light, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: series.color }}></div>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 900, color: '#0F0D0B', marginBottom: 10 }}>
                <em style={{ fontStyle: 'italic', color: series.color }}>{series.name}</em> is coming soon
              </h2>
              <p style={{ fontSize: 15, color: '#888', maxWidth: 400, margin: '0 auto' }}>This series is in production. Check back soon — or start with one of the active series below.</p>
              <Link href="/series" style={{ display: 'inline-block', marginTop: 24, background: series.color, color: '#0F0D0B', fontSize: 13, fontWeight: 700, padding: '11px 22px', borderRadius: 8 }}>
                View All Series →
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
