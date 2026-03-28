'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      background: '#0F0D0B', padding: '14px 28px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'sticky', top: 0, zIndex: 100,
      borderBottom: '1px solid #1F1C18'
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="2" y="12" width="5" height="14" rx="1.5" fill="#EF9F27"/>
          <rect x="2" y="2" width="5" height="8" rx="1.5" fill="#EF9F27" opacity="0.35"/>
          <path d="M12 14 C12 10 18 10 18 6 C18 3.5 16.5 2 14.5 2" stroke="#EF9F27" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          <path d="M12 14 C12 18 18 18 18 22 C18 24.5 16.5 26 14.5 26" stroke="#1D9E75" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          <line x1="22" y1="7" x2="27" y2="7" stroke="#333" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="22" y1="11" x2="26" y2="11" stroke="#333" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="22" y1="17" x2="27" y2="17" stroke="#333" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="22" y1="21" x2="26" y2="21" stroke="#333" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 900, color: '#fff' }}>
          Iron <em style={{ fontStyle: 'italic', color: '#EF9F27' }}>&</em> Grace
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="nav-links">
        <Link href="/studies" style={{ fontSize: 12, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>Studies</Link>
        <Link href="/series" style={{ fontSize: 12, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>Series</Link>
        <Link href="/about" style={{ fontSize: 12, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>About</Link>
        <Link href="/studies" style={{
          background: '#EF9F27', color: '#0F0D0B', fontSize: 12, fontWeight: 700,
          padding: '8px 16px', borderRadius: 6, letterSpacing: '0.04em'
        }}>Start Studying</Link>
      </div>
    </nav>
  )
}
