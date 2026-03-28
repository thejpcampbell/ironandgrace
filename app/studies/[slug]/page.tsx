import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { STUDIES, SERIES, getStudiesBySeries } from '@/lib/data'

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

  const C = series.color
  const D = series.deep
  const L = series.light

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0A0805' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#0A0805', padding: '36px 32px 44px', borderBottom: `3px solid ${C}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 20, fontSize: 11, color: '#333', letterSpacing: '.06em', textTransform: 'uppercase' }}>
            <Link href="/studies" style={{ color: '#333', textDecoration: 'none' }}>Studies</Link>
            <span>›</span>
            <Link href={`/series/${series.slug}`} style={{ color: '#333', textDecoration: 'none' }}>{series.name}</Link>
            <span>›</span>
            <span style={{ color: C }}>Session {String(study.session).padStart(2, '0')}</span>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
            <span style={{ background: C, color: '#0A0805', fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 4 }}>{series.name}</span>
            <span style={{ fontSize: 11, color: '#444', letterSpacing: '.06em', textTransform: 'uppercase' }}>Session {String(study.session).padStart(2, '0')} of {series.sessionCount}</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-.02em', marginBottom: 24 }}>
            {study.title.replace(study.titleEmphasis, '')}<em style={{ fontStyle: 'italic', color: C }}>{study.titleEmphasis}</em>
          </h1>
          <div style={{ display: 'flex', gap: 20, paddingTop: 18, borderTop: `1px solid #1A1510` }}>
            {[study.date, `${study.readTime} min read`, study.scripture].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: [C, '#1D9E75', C][i] }}></div>
                <span style={{ fontSize: 12, color: '#555' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <div style={{ flex: 1, background: '#0D0B08' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 280px' }}>

          {/* Main */}
          <div style={{ borderRight: '1px solid #1A1510' }}>

            {/* 1. Scripture */}
            <div style={{ padding: '32px 32px', borderBottom: '1px solid #1A1510' }}>
              <SectionHeader num="1" label="Opening Scripture" bg="#1C1408" color={C} />
              <div style={{ background: '#0A0805', borderRadius: 10, padding: '24px 28px', border: '1px solid #1A1510' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: C, marginBottom: 12 }}>{study.scriptureRef}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontStyle: 'italic', lineHeight: 1.8, color: '#ccc' }}>
                  "{study.scriptureText}"
                </div>
              </div>
            </div>

            {/* 2. Context */}
            <div style={{ padding: '32px 32px', borderBottom: '1px solid #1A1510' }}>
              <SectionHeader num="2" label="Context & Background" bg="#081A10" color="#1D9E75" />
              {study.context.map((p, i) => (
                <p key={i} style={{ fontSize: 15, lineHeight: 1.85, color: '#4A4540', marginBottom: 14 }}>{p}</p>
              ))}
            </div>

            {/* 3. Core Teaching */}
            <div style={{ padding: '32px 32px', borderBottom: '1px solid #1A1510' }}>
              <SectionHeader num="3" label="Core Teaching" bg="#1C1408" color={C} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 24, lineHeight: 1.25 }}>
                {study.teachingTitle} <em style={{ fontStyle: 'italic', color: C }}>{study.teachingTitleEmphasis}</em>
              </h3>
              {study.teachingBlocks.map((block, i) => (
                <div key={i} style={{ marginBottom: 24 }}>
                  {block.heading && (
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: C, marginBottom: 8 }}>{block.heading}</div>
                  )}
                  <p style={{ fontSize: 15, lineHeight: 1.85, color: '#4A4540' }}>{block.body}</p>
                  {i === 1 && (
                    <div style={{ borderLeft: `3px solid #1D9E75`, padding: '16px 20px', margin: '24px 0', background: '#0A0805', borderRadius: '0 8px 8px 0', border: '1px solid #1A1510', borderLeftColor: '#1D9E75' }}>
                      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontStyle: 'italic', color: '#ccc', lineHeight: 1.7, marginBottom: 6 }}>{study.pullquote}</p>
                      {study.pullquoteSource && <p style={{ fontSize: 11, color: '#333', letterSpacing: '.06em', textTransform: 'uppercase' }}>— {study.pullquoteSource}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 4. Signature Lines */}
            <div style={{ padding: '32px 32px', borderBottom: '1px solid #1A1510' }}>
              <SectionHeader num="4" label="Lines Worth Remembering" bg="#0D1A26" color="#378ADD" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {study.signatureLines.map((line, i) => (
                  <div key={i} style={{ background: '#0A0805', border: '1px solid #1A1510', borderLeft: `3px solid ${C}`, borderRadius: '0 8px 8px 0', padding: '14px 18px' }}>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontStyle: 'italic', color: '#888', lineHeight: 1.65 }}>{line}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Discussion */}
            <div style={{ padding: '32px 32px', borderBottom: '1px solid #1A1510' }}>
              <SectionHeader num="5" label="Couples Discussion" bg="#1A1020" color="#7F77DD" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {study.discussionQuestions.map((q, i) => (
                  <div key={i} style={{ background: '#0A0805', border: '1px solid #1A1510', borderRadius: 8, padding: '16px 18px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: C, color: '#0A0805', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: '#666', paddingTop: 3 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Reflection */}
            <div style={{ padding: '32px 32px', borderBottom: '1px solid #1A1510' }}>
              <SectionHeader num="6" label="Personal Reflection" bg="#0D1820" color="#378ADD" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ borderRadius: 10, padding: 20, background: '#0A0805', border: '1px solid #1A1510', borderTop: '3px solid #185FA5' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#185FA5', marginBottom: 14 }}>His Reflection</div>
                  {study.hisReflection.map((p, i) => (
                    <p key={i} style={{ fontSize: 13, lineHeight: 1.7, color: '#4A4540', marginBottom: 10, paddingLeft: 12, borderLeft: '2px solid #1A1510' }}>{p}</p>
                  ))}
                </div>
                <div style={{ borderRadius: 10, padding: 20, background: '#0A0805', border: '1px solid #1A1510', borderTop: '3px solid #D4537E' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4537E', marginBottom: 14 }}>Her Reflection</div>
                  {study.herReflection.map((p, i) => (
                    <p key={i} style={{ fontSize: 13, lineHeight: 1.7, color: '#4A4540', marginBottom: 10, paddingLeft: 12, borderLeft: '2px solid #1A1510' }}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* 7. Challenge */}
            <div style={{ padding: '32px 32px' }}>
              <div style={{ background: '#0A0805', borderRadius: 12, padding: 28, border: '1px solid #1A1510', borderLeft: `3px solid ${C}` }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: C, marginBottom: 8 }}>This Week's Challenge</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>
                  {study.challengeTitle} <em style={{ fontStyle: 'italic', color: C }}>{study.challengeTitleEmphasis}</em>
                </h3>
                <p style={{ fontSize: 15, color: '#4A4540', lineHeight: 1.8 }}>{study.challenge}</p>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div style={{ padding: '28px 20px', background: '#0A0805', borderTop: '1px solid #1A1510' }}>

            {/* TOC */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#242018', marginBottom: 12 }}>In This Study</div>
              {['Opening Scripture', 'Context & Background', 'Core Teaching', 'Lines Worth Remembering', 'Couples Discussion', 'Personal Reflection', "This Week's Challenge"].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 10px', borderRadius: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: [C,'#1D9E75',C,C,'#7F77DD','#378ADD',C][i], flexShrink: 0 }}></div>
                  <span style={{ fontSize: 12, color: '#3A3530' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Series progress */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#242018', marginBottom: 12 }}>Series Progress</div>
              <div style={{ background: '#0D0B08', borderRadius: 10, padding: 16, border: '1px solid #1A1510' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{series.name}</div>
                <div style={{ fontSize: 11, color: '#333', marginBottom: 14 }}>{seriesStudies.length} of {series.sessionCount} sessions published</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {seriesStudies.map(s => (
                    <Link key={s.id} href={`/studies/${s.slug}`}
                      style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 8px', borderRadius: 6, background: s.slug === params.slug ? '#131008' : 'transparent', border: s.slug === params.slug ? `1px solid #2A1E08` : '1px solid transparent', textDecoration: 'none' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: s.slug === params.slug ? C : '#1D9E75', flexShrink: 0 }}></div>
                      <span style={{ fontSize: 11, color: s.slug === params.slug ? '#ccc' : '#333', flex: 1 }}>{s.title}</span>
                      {s.slug === params.slug && <span style={{ fontSize: 9, fontWeight: 700, color: C, letterSpacing: '.06em', textTransform: 'uppercase' }}>Now</span>}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Share */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#242018', marginBottom: 12 }}>Share This Study</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a
                  href={study.pdfFile}
                  download
                  style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: '#0D0B08', border: `1px solid ${C}33`, borderRadius: 8, cursor: 'pointer', fontSize: 12, color: C, fontFamily: "'DM Sans', sans-serif", width: '100%', textDecoration: 'none', fontWeight: 600 }}
                >
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: '#0A0805', border: `1px solid ${C}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 2v7M4 6l3 3 3-3" stroke={C} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 11h10" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  Download PDF
                </a>
                {[{ label: 'Copy Link', c: '#378ADD' }, { label: 'Send to Group', c: '#1D9E75' }].map(btn => (
                  <button key={btn.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: '#0D0B08', border: '1px solid #1A1510', borderRadius: 8, cursor: 'pointer', fontSize: 12, color: '#4A4540', fontFamily: "'DM Sans', sans-serif", width: '100%' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: '#0A0805', border: '1px solid #1A1510', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: btn.c }}></div>
                    </div>
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Prev/Next */}
        <div style={{ background: '#060503', padding: '20px 32px', borderTop: '1px solid #1A1510', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            {prev ? (
              <Link href={`/studies/${prev.slug}`} style={{ background: '#0D0B08', border: '1px solid #1A1510', color: '#555', fontSize: 12, padding: '9px 16px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>← {prev.title}</Link>
            ) : <div />}
            {next ? (
              <Link href={`/studies/${next.slug}`} style={{ background: C, color: '#0A0805', fontSize: 12, fontWeight: 700, padding: '9px 16px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>{next.title} →</Link>
            ) : (
              <Link href={`/series/${series.slug}`} style={{ background: C, color: '#0A0805', fontSize: 12, fontWeight: 700, padding: '9px 16px', borderRadius: 8, textDecoration: 'none' }}>View Full Series →</Link>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function SectionHeader({ num, label, bg, color }: { num: string; label: string; bg: string; color: string }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20 }}>
      <div style={{ width: 28, height: 28, borderRadius: 8, background: bg, color: color, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${color}22` }}>{num}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: '#555', letterSpacing: '.04em', textTransform: 'uppercase' }}>{label}</div>
    </div>
  )
}
