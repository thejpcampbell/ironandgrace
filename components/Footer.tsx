import Link from 'next/link'
import { SERIES } from '../lib/data'

export default function Footer() {
  return (
    <footer style={{ background: '#0F0D0B', padding: '48px 28px 28px', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 900, color: '#fff', marginBottom: 8 }}>
              Iron <em style={{ fontStyle: 'italic', color: '#EF9F27' }}>&</em> Grace
            </div>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7, maxWidth: 260 }}>
              Strength meets faith. Bible studies built for couples who are serious about their covenant.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#444', marginBottom: 14 }}>Series</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SERIES.map(s => (
                <Link key={s.id} href={`/series/${s.slug}`} style={{ fontSize: 13, color: '#666', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, display: 'inline-block', flexShrink: 0 }}></span>
                  {s.name}
                  {s.status === 'coming-soon' && <span style={{ fontSize: 9, color: '#444', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Soon</span>}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#444', marginBottom: 14 }}>Navigate</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Studies', 'Series', 'About'].map(l => (
                <Link key={l} href={`/${l.toLowerCase()}`} style={{ fontSize: 13, color: '#666' }}>{l}</Link>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1F1C18', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: '#444' }}>© 2026 Iron & Grace. All rights reserved.</span>
          <span style={{ fontSize: 11, color: '#444', fontStyle: 'italic' }}>Strength meets faith. Couples built to last.</span>
        </div>
      </div>
    </footer>
  )
}
