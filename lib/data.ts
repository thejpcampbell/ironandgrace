export type Series = {
  id: number
  slug: string
  name: string
  subtitle: string
  tagline: string
  description: string
  colorClass: string
  color: string
  light: string
  deep: string
  sessionCount: number
  status: 'active' | 'complete' | 'coming-soon'
}

export type Study = {
  id: string
  slug: string
  seriesId: number
  session: number
  title: string
  titleEmphasis: string
  scripture: string
  scriptureRef: string
  scriptureText: string
  date: string
  readTime: number
  context: string[]
  teachingTitle: string
  teachingTitleEmphasis: string
  teachingBody: string[]
  pullquote: string
  discussionQuestions: string[]
  hisReflection: string[]
  herReflection: string[]
  challenge: string
  challengeTitle: string
  challengeTitleEmphasis: string
}

export const SERIES: Series[] = [
  {
    id: 1, slug: 'the-covenant', name: 'The Covenant', subtitle: 'Marriage',
    tagline: 'What you entered into on your wedding day was not a contract.',
    description: "What you entered into on your wedding day was not a contract — it was a covenant. This series builds the theology and the practice of a marriage that holds.",
    colorClass: 'series-1', color: '#EF9F27', light: '#FAEEDA', deep: '#BA7517',
    sessionCount: 12, status: 'active'
  },
  {
    id: 2, slug: 'the-walk', name: 'The Walk', subtitle: 'Discipleship',
    tagline: "Following Christ is not an event. It's a daily walk.",
    description: "Following Christ isn't an event — it's a daily walk. This series covers what it means to grow as a disciple, together and individually.",
    colorClass: 'series-2', color: '#1D9E75', light: '#E1F5EE', deep: '#0F6E56',
    sessionCount: 10, status: 'active'
  },
  {
    id: 3, slug: 'the-bloodline', name: 'The Bloodline', subtitle: 'Family & Legacy',
    tagline: 'What are you passing down?',
    description: "What are you passing down? Faith doesn't transfer automatically — it's built, modeled, and spoken.",
    colorClass: 'series-3', color: '#D85A30', light: '#FAECE7', deep: '#993C1D',
    sessionCount: 10, status: 'coming-soon'
  },
  {
    id: 4, slug: 'the-steward', name: 'The Steward', subtitle: 'Stewardship',
    tagline: "Money, time, and resources aren't yours.",
    description: "Money, time, and resources aren't yours — you're managing them for God.",
    colorClass: 'series-4', color: '#7F77DD', light: '#EEEDFE', deep: '#534AB7',
    sessionCount: 10, status: 'coming-soon'
  },
  {
    id: 5, slug: 'the-calling', name: 'The Calling', subtitle: 'Identity & Purpose',
    tagline: 'You were not placed here by accident.',
    description: "You were not placed here by accident. This series helps couples discover who God made them to be.",
    colorClass: 'series-5', color: '#378ADD', light: '#E6F1FB', deep: '#185FA5',
    sessionCount: 10, status: 'coming-soon'
  },
  {
    id: 6, slug: 'the-war-room', name: 'The War Room', subtitle: 'Spiritual Warfare',
    tagline: 'There is an enemy and he is after your marriage.',
    description: "There is an enemy and he is after your marriage. This series teaches couples to pray together, fight together, and stand together.",
    colorClass: 'series-6', color: '#D4537E', light: '#FBEAF0', deep: '#993556',
    sessionCount: 10, status: 'coming-soon'
  },
  {
    id: 7, slug: 'the-mission', name: 'The Mission', subtitle: 'Community & Mission',
    tagline: 'You were called and deployed.',
    description: "You were called and deployed — not just to survive together but to serve together.",
    colorClass: 'series-7', color: '#639922', light: '#EAF3DE', deep: '#3B6D11',
    sessionCount: 8, status: 'coming-soon'
  }
]

export const STUDIES: Study[] = []

export function getSeriesBySlug(slug: string): Series | undefined {
  return SERIES.find(s => s.slug === slug)
}

export function getStudyBySlug(slug: string): Study | undefined {
  return STUDIES.find(s => s.slug === slug)
}

export function getStudiesBySeries(seriesId: number): Study[] {
  return STUDIES.filter(s => s.seriesId === seriesId)
}

export function getLatestStudies(count: number = 3): Study[] {
  return [...STUDIES].reverse().slice(0, count)
}
