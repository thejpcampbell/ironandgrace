import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <section style={{ background: '#0F0D0B', padding: '64px 28px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#EF9F27', marginBottom: 12 }}>About Iron & Grace</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Strength meets <em style={{ fontStyle: 'italic', color: '#EF9F27' }}>faith</em>.<br />Couples built to last.
          </h1>
          <div style={{ width: 40, height: 2, background: '#EF9F27', marginBottom: 24 }}></div>
          <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8, marginBottom: 16 }}>
            Iron & Grace is a couples Bible study resource built for marriages that are serious about their covenant. Not polished religion. Not comfortable Christianity. The real thing — hard, honest, and grounded in the Word.
          </p>
          <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8, marginBottom: 16 }}>
            The name comes from two truths that have to coexist in a healthy marriage: the iron of strength, accountability, and sacrificial leadership — and the grace that covers every failure, every gap, every moment where neither of you was enough.
          </p>
          <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8 }}>
            Every study is designed to be done together. In your living room. At your kitchen table. Wherever you do life. The goal isn't information — it's transformation.
          </p>
        </div>
      </section>
      <div className="accent-bar"></div>
      <section style={{ padding: '64px 28px', background: '#F7F5F2', flex: 1 }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, color: '#0F0D0B', marginBottom: 12 }}>
            Ready to <em style={{ fontStyle: 'italic', color: '#EF9F27' }}>start?</em>
          </h2>
          <p style={{ fontSize: 15, color: '#888', marginBottom: 28 }}>Don't overthink it. Pick a study and sit down together.</p>
          <Link href="/studies" style={{ background: '#EF9F27', color: '#0F0D0B', fontSize: 14, fontWeight: 700, padding: '14px 28px', borderRadius: 8, display: 'inline-block' }}>
            Start Your First Study →
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
