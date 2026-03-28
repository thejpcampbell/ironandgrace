import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { STUDIES, SERIES, getStudiesBySeries } from '../../lib/data'

export async function generateStaticParams() {
  return STUDIES.map(s => ({ slug: s.slug }))
}

export default function StudyPage({ params }: { params: { slug: string } }) {
  const study = STUDIES.find(s => s.slug === params.slug)
  if (!study) notFound()
  const series = SERIES.find(s => s.id === study.seriesId)!
  const seriesStudies = getStudiesBySeries(series.id)
  const currentIndex = seriesStudies.findIndex(s => s.slug === params.slug)
  const prev = seriesStudies[currentIndex - 1]
  const next = seriesStudies[currentIndex + 1]

  const sectionColors = [series.color, '#1D9E75', series.color, '#7F77DD', '#378ADD']
  const sectionBgs = [series.light, '#E1F5EE', series.light, '#EEEDFE', '#E6F1FB']
  const sectionDeeps = [series.deep, '#0F6E56', series.deep, '#534AB7', '#185FA5']

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#0F0D0B', padding: '36px 28px 44px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 20, fontSize: 11, color: '#555', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <Link href="/studies" style={{ color: '#555' }}>Studies</Link>
            <span>›</span>
            <Link href={`/series/${series.slug}`} style={{ color: '#555' }}>{series.name}</Link>
            <span>›</span>
            <span style={{ color: series.color }}>Session {String(study.session).padStart(2, '0')}</span>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
            <span style={{ background: series.color, color: '#0F0D0B', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 4 }}>{series.name}</span>
            <span style={{ fontSize: 11, color: '#555', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Session {String(study.session).padStart(2, '0')} of {series.sessionCount}</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
            {study.title.replace(study.titleEmphasis, '')}<em style={{ fontStyle: 'italic', color: series.color }}>{study.titleEmphasis}</em>
          </h1>
          <div style={{ display: 'flex', gap: 20, paddingTop: 18, borderTop: '1px solid #1F1C18' }}>
            {[study.date, `${study.readTime} min read`, study.scripture].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: [series.color, '#1D9E75', series.color][i] }}></div>
                <span style={{ fontSize: 12, color: '#666' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="accent-bar"></div>

      {/* Body */}
      <div style={{ background: '#F7F5F2', flex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 0 }}>

          {/* Main content */}
          <div style={{ borderRight: '0.5px solid #e5e0d8' }}>

            {/* 1. Scripture */}
            <div style={{ padding: '32px 28px', borderBottom: '0.5px solid #e5e0d8' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: sectionBgs[0], color: sectionDeeps[0], fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: '#0F0D0B', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Opening Scripture</div>
              </div>
              <div style={{ background: '#0F0D0B', borderRadius: 10, padding: '24px 28px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: series.color, marginBottom: 12 }}>{study.scriptureRef}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontStyle: 'italic', lineHeight: 1.75, color: '#e0dcd6' }}
                  dangerouslySetInnerHTML={{ __html: `"${study.scriptureText.slice(1)}"` }}>
                </div>
              </div>
            </div>

            {/* 2. Context */}
            <div style={{ padding: '32px 28px', borderBottom: '0.5px solid #e5e0d8' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: sectionBgs[1], color: sectionDeeps[1], fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: '#0F0D0B', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Context & Background</div>
              </div>
              {study.context.map((p, i) => (
                <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: '#555', marginBottom: 14 }}>{p}</p>
              ))}
            </div>

            {/* 3. Teaching */}
            <div style={{ padding: '32px 28px', borderBottom: '0.5px solid #e5e0d8' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: sectionBgs[2], color: sectionDeeps[2], fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: '#0F0D0B', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Core Teaching</div>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#0F0D0B', marginBottom: 14, lineHeight: 1.3 }}>
                {study.teachingTitle} <em style={{ fontStyle: 'italic', color: series.color }}>{study.teachingTitleEmphasis}</em>
              </h3>
              {study.teachingBody.map((p, i) => (
                <div key={i}>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: '#555', marginBottom: 14 }}>{p}</p>
                  {i === 1 && (
                    <div style={{ borderLeft: '3px solid #1D9E75', padding: '14px 20px', margin: '20px 0', background: '#fff', borderRadius: '0 8px 8px 0' }}>
                      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontStyle: 'italic', color: '#0F0D0B', lineHeight: 1.6 }}>{study.pullquote}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 4. Discussion */}
            <div style={{ padding: '32px 28px', borderBottom: '0.5px solid #e5e0d8' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: sectionBgs[3], color: sectionDeeps[3], fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>4</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: '#0F0D0B', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Couples Discussion</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {study.discussionQuestions.map((q, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '16px 18px', display: 'flex', gap: 14, alignItems: 'flex-start', border: '0.5px solid #e5e0d8' }}>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#EF9F27', color: '#0F0D0B', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: '#333', paddingTop: 3 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Reflection */}
            <div style={{ padding: '32px 28px', borderBottom: '0.5px solid #e5e0d8' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: sectionBgs[4], color: sectionDeeps[4], fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>5</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: '#0F0D0B', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Personal Reflection</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ borderRadius: 10, padding: 18, border: '0.5px solid #e5e0d8', borderTop: '3px solid #185FA5', background: '#fff' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#185FA5', marginBottom: 12 }}>His Reflection</div>
                  {study.hisReflection.map((p, i) => (
                    <p key={i} style={{ fontSize: 13, lineHeight: 1.65, color: '#666', marginBottom: 8, paddingLeft: 12, borderLeft: '2px solid #e5e0d8' }}>{p}</p>
                  ))}
                </div>
                <div style={{ borderRadius: 10, padding: 18, border: '0.5px solid #e5e0d8', borderTop: '3px solid #D4537E', background: '#fff' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D4537E', marginBottom: 12 }}>Her Reflection</div>
                  {study.herReflection.map((p, i) => (
                    <p key={i} style={{ fontSize: 13, lineHeight: 1.65, color: '#666', marginBottom: 8, paddingLeft: 12, borderLeft: '2px solid #e5e0d8' }}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Challenge */}
            <div style={{ padding: '32px 28px' }}>
              <div style={{ background: '#0F0D0B', borderRadius: 12, padding: 28 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: series.color, marginBottom: 8 }}>This Week's Challenge</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>
                  {study.challengeTitle} <em style={{ fontStyle: 'italic', color: series.color }}>{study.challengeTitleEmphasis}</em>
                </h3>
                <p style={{ fontSize: 15, color: '#aaa', lineHeight: 1.7, marginBottom: 20 }}>{study.challenge}</p>
                <button style={{ background: series.color, color: '#0F0D0B', fontSize: 13, fontWeight: 700, border: 'none', padding: '11px 22px', borderRadius: 8, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                  Mark Complete ✓
                </button>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div style={{ padding: '24px 20px', background: '#fff', borderTop: '0.5px solid #e5e0d8' }}>

            {/* TOC */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>In This Study</div>
              {['Opening Scripture', 'Context & Background', 'Core Teaching', 'Couples Discussion', 'Personal Reflection', "This Week's Challenge"].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 7 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: sectionColors[Math.min(i, 4)], flexShrink: 0 }}></div>
                  <span style={{ fontSize: 12, color: '#888' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Series progress */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>Series Progress</div>
              <div style={{ background: '#0F0D0B', borderRadius: 10, padding: 16 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{series.name}</div>
                <div style={{ fontSize: 11, color: '#555', marginBottom: 14 }}>{seriesStudies.length} of {series.sessionCount} sessions published</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {seriesStudies.map(s => (
                    <Link key={s.id} href={`/studies/${s.slug}`}
                      style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 8px', borderRadius: 6, background: s.slug === params.slug ? '#1A1612' : 'transparent', border: s.slug === params.slug ? '1px solid #2A2520' : '1px solid transparent', textDecoration: 'none' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: s.slug === params.slug ? series.color : '#1D9E75', flexShrink: 0 }}></div>
                      <span style={{ fontSize: 11, color: s.slug === params.slug ? '#ccc' : '#555', flex: 1 }}>{s.title}</span>
                      {s.slug === params.slug && <span style={{ fontSize: 9, fontWeight: 700, color: series.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Now</span>}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Share */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>Share This Study</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Download PDF', bg: '#FAECE7', color: '#993C1D' },
                  { label: 'Copy Link', bg: '#E6F1FB', color: '#185FA5' },
                  { label: 'Send to Group', bg: '#E1F5EE', color: '#0F6E56' }
                ].map(btn => (
                  <button key={btn.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: '#fff', border: '0.5px solid #e5e0d8', borderRadius: 8, cursor: 'pointer', fontSize: 12, color: '#666', fontFamily: "'DM Sans', sans-serif", width: '100%' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: btn.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: btn.color }}></div>
                    </div>
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Prev / Next nav */}
        <div style={{ background: '#0F0D0B', padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            {prev ? (
              <Link href={`/studies/${prev.slug}`} style={{ background: '#1A1612', border: '1px solid #2A2520', color: '#aaa', fontSize: 12, padding: '9px 16px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                ← {prev.title}
              </Link>
            ) : <div></div>}
            {next ? (
              <Link href={`/studies/${next.slug}`} style={{ background: series.color, color: '#0F0D0B', fontSize: 12, fontWeight: 700, padding: '9px 16px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                {next.title} →
              </Link>
            ) : <Link href={`/series/${series.slug}`} style={{ background: series.color, color: '#0F0D0B', fontSize: 12, fontWeight: 700, padding: '9px 16px', borderRadius: 8 }}>View Full Series →</Link>}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
