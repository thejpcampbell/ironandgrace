import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SERIES, STUDIES, getLatestStudies } from '../lib/data'

export default function Home() {
  const latest = STUDIES[STUDIES.length - 1]
  const latestSeries = SERIES.find(s => s.id === latest.seriesId)!
  const recentStudies = getLatestStudies(3)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#0F0D0B', padding: '48px 28px 52px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 360px', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ background: latestSeries.color, color: '#0F0D0B', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 4 }}>
                {latestSeries.name}
              </span>
              <span style={{ fontSize: 11, color: '#555', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Session {String(latest.session).padStart(2, '0')} · {latest.date}
              </span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
              The Covenant<br />of <em style={{ fontStyle: 'italic', color: latestSeries.color }}>Surrender</em>
            </h1>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 28 }}>
              <div style={{ width: 3, background: '#1D9E75', borderRadius: 2, flexShrink: 0, alignSelf: 'stretch', minHeight: 44 }}></div>
              <div>
                <p style={{ fontSize: 15, color: '#aaa', fontStyle: 'italic', lineHeight: 1.7 }}>"{latest.scriptureText.slice(1, 120)}..."</p>
                <p style={{ fontSize: 12, color: '#1D9E75', fontWeight: 600, letterSpacing: '0.04em', marginTop: 6 }}>— {latest.scriptureRef}</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link href={`/studies/${latest.slug}`} style={{ background: '#EF9F27', color: '#0F0D0B', fontSize: 14, fontWeight: 700, padding: '13px 24px', borderRadius: 8, display: 'inline-block' }}>
                Read This Study
              </Link>
              <Link href="/studies" style={{ background: 'transparent', color: '#fff', fontSize: 14, border: '1px solid #2A2520', padding: '13px 24px', borderRadius: 8, display: 'inline-block' }}>
                All Studies
              </Link>
            </div>
          </div>

          {/* Outline card */}
          <div style={{ background: '#1A1612', border: '1px solid #2A2520', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ background: latestSeries.color, padding: '16px 20px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0F0D0B', marginBottom: 4 }}>Study Outline</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#0F0D0B', lineHeight: 1.3 }}>{latest.title}</div>
            </div>
            <div style={{ padding: 20 }}>
              {['Opening Scripture & Context', 'Core Teaching', 'Couples Discussion', 'Personal Reflection', "This Week's Challenge"].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: i < 4 ? '1px solid #2A2520' : 'none' }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: '#2A2520', color: '#EF9F27', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ fontSize: 13, color: '#ccc' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '10px 20px', background: '#141210', borderTop: '1px solid #2A2520', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: '#555' }}>{latest.date}</span>
              <span style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600 }}>{latest.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      <div className="accent-bar"></div>

      {/* Recent Studies */}
      <section style={{ padding: '48px 28px', background: '#F7F5F2' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#EF9F27', marginBottom: 4 }}>Recent Studies</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: '#0F0D0B' }}>
                Latest from the <em style={{ fontStyle: 'italic' }}>Archive</em>
              </h2>
            </div>
            <Link href="/studies" style={{ fontSize: 12, color: '#EF9F27', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>View All →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {recentStudies.map(study => {
              const series = SERIES.find(s => s.id === study.seriesId)!
              return (
                <Link key={study.id} href={`/studies/${study.slug}`} style={{ background: '#fff', border: '0.5px solid #e5e0d8', borderRadius: 10, overflow: 'hidden', display: 'block', textDecoration: 'none', transition: 'transform 0.15s' }}>
                  <div style={{ height: 4, background: series.color }}></div>
                  <div style={{ padding: 16 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: series.deep, marginBottom: 8 }}>{series.name}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#0F0D0B', marginBottom: 10, lineHeight: 1.3 }}>{study.title}</div>
                    <div style={{ fontSize: 12, color: '#888', fontStyle: 'italic', lineHeight: 1.55 }}>"{study.scriptureText.slice(1, 80)}..." — {study.scripture}</div>
                  </div>
                  <div style={{ padding: '10px 16px', borderTop: '0.5px solid #f0ebe3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: '#aaa' }}>{study.date}</span>
                    <span style={{ fontSize: 11, color: series.deep, fontWeight: 600 }}>{study.readTime} min →</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Series Grid */}
      <section style={{ padding: '48px 28px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#EF9F27', marginBottom: 4 }}>Full Curriculum</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: '#0F0D0B' }}>
              Seven <em style={{ fontStyle: 'italic' }}>Series</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {SERIES.map(series => (
              <Link key={series.id} href={`/series/${series.slug}`}
                style={{ background: series.status === 'coming-soon' ? '#F7F5F2' : '#0F0D0B', borderRadius: 10, padding: 20, display: 'block', opacity: series.status === 'coming-soon' ? 0.7 : 1, position: 'relative', overflow: 'hidden', textDecoration: 'none', border: `1px solid ${series.status === 'coming-soon' ? '#e5e0d8' : '#1F1C18'}` }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: series.color, marginBottom: 12 }}></div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: series.status === 'coming-soon' ? '#aaa' : '#555', marginBottom: 4 }}>{series.subtitle}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 900, color: series.status === 'coming-soon' ? '#888' : '#fff', lineHeight: 1.2, marginBottom: 6 }}>
                  <em style={{ fontStyle: 'italic', color: series.color }}>{series.name}</em>
                </div>
                <div style={{ fontSize: 11, color: series.status === 'coming-soon' ? '#aaa' : '#666', lineHeight: 1.5 }}>{series.sessionCount} sessions</div>
                {series.status === 'coming-soon' && (
                  <div style={{ position: 'absolute', top: 12, right: 12, background: '#f0ebe3', color: '#aaa', fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 4 }}>Soon</div>
                )}
              </Link>
            ))}
            <div style={{ background: '#EF9F27', borderRadius: 10, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', gridColumn: 'span 1' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 900, color: '#0F0D0B', lineHeight: 1.2, marginBottom: 6 }}>70 Studies</div>
              <div style={{ fontSize: 12, color: '#7A4E0A', lineHeight: 1.5 }}>35 weeks at 2x per week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section style={{ background: '#0F0D0B', padding: '64px 28px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: 40, height: 2, background: '#EF9F27', margin: '0 auto 24px' }}></div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
            A marriage that only looks <em style={{ fontStyle: 'italic', color: '#EF9F27' }}>inward</em> stagnates.
          </h2>
          <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8, marginBottom: 28 }}>
            Iron & Grace exists to give couples the tools to go deeper in faith, stronger in covenant, and bolder in mission. Every study is built to be done together — in your living room, at your kitchen table, wherever you do life.
          </p>
          <Link href="/studies" style={{ background: '#EF9F27', color: '#0F0D0B', fontSize: 14, fontWeight: 700, padding: '14px 28px', borderRadius: 8, display: 'inline-block' }}>
            Start Your First Study →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
