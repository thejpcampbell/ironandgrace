# Iron & Grace — Couples Bible Studies

> Strength meets faith. Couples built to last.

A full-stack Next.js 14 site for publishing couples Bible studies — built for [ironandgrace.com](https://ironandgrace.com) and deployed on Vercel.

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Inline styles + CSS variables (zero dependencies)
- **Fonts**: Playfair Display + DM Sans (Google Fonts)
- **Deployment**: Vercel

---

## Project Structure

```
iron-and-grace/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Brand tokens + global styles
│   ├── studies/
│   │   ├── page.tsx        # All studies archive
│   │   └── [slug]/
│   │       └── page.tsx    # Individual study page
│   ├── series/
│   │   ├── page.tsx        # All series overview
│   │   └── [slug]/
│   │       └── page.tsx    # Individual series page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Navbar.tsx          # Sticky nav
│   └── Footer.tsx          # Footer with series links
├── lib/
│   └── data.ts             # ALL content lives here
└── vercel.json             # Vercel deployment config
```

---

## Deploy to Vercel (3 steps)

### Option A — GitHub (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js. Hit Deploy. Done.

### Option B — Vercel CLI

```bash
npm i -g vercel
cd iron-and-grace
vercel
```

Follow the prompts. It deploys in under 2 minutes.

---

## Adding a New Study

All content lives in **`lib/data.ts`**. To add a study, append a new object to the `STUDIES` array:

```ts
{
  id: 's1-03',
  slug: 'your-study-slug',        // becomes the URL: /studies/your-study-slug
  seriesId: 1,                     // 1=Covenant, 2=Walk, 3=Bloodline, etc.
  session: 3,
  title: 'Your Study Title',
  titleEmphasis: 'Title',          // the word that gets italic gold treatment
  scripture: 'Romans 8:1',
  scriptureRef: 'Romans 8:1 (ESV)',
  scriptureText: '"There is therefore now no condemnation..."',
  date: 'April 1, 2026',
  readTime: 18,
  context: ['Paragraph 1...', 'Paragraph 2...'],
  teachingTitle: 'Main teaching heading',
  teachingTitleEmphasis: 'heading',
  teachingBody: ['Para 1...', 'Para 2...', 'Para 3...'],
  pullquote: 'The key quote from this study.',
  discussionQuestions: ['Q1?', 'Q2?', 'Q3?', 'Q4?', 'Q5?'],
  hisReflection: ['Prompt 1...', 'Prompt 2...', 'Prompt 3...'],
  herReflection: ['Prompt 1...', 'Prompt 2...', 'Prompt 3...'],
  challenge: 'Full challenge description...',
  challengeTitle: 'Challenge headline',
  challengeTitleEmphasis: 'headline',
}
```

Commit and push. Vercel redeploys automatically. No code changes needed beyond `lib/data.ts`.

---

## The 7 Series

| # | Series | Topic | Sessions |
|---|--------|-------|----------|
| 1 | The Covenant | Marriage | 12 |
| 2 | The Walk | Discipleship | 10 |
| 3 | The Bloodline | Family & Legacy | 10 |
| 4 | The Steward | Stewardship | 10 |
| 5 | The Calling | Identity & Purpose | 10 |
| 6 | The War Room | Spiritual Warfare | 10 |
| 7 | The Mission | Community & Mission | 8 |

**Total: 70 studies · 35 weeks at 2x per week**

---

## Adding a Transcript (Workflow)

1. Drop raw transcript in Claude
2. Claude structures it into the `STUDIES` data format
3. Paste the new study object into `lib/data.ts`
4. Commit → push → Vercel deploys automatically

Turnaround: under 10 minutes from raw voice drop to live published study.

---

## Brand Tokens

Defined in `app/globals.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-gold` | `#EF9F27` | Primary accent, CTAs |
| `--brand-teal` | `#1D9E75` | Scripture callouts |
| `--brand-coral` | `#D85A30` | Series 3 |
| `--brand-dark` | `#0F0D0B` | Dark sections |
| Series 1–7 | See CSS | Color-coded by series |
