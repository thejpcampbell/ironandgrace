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
    description: "What you entered into on your wedding day was not a contract — it was a covenant. This series builds the theology and the practice of a marriage that holds. Through every season, every storm, every stretch of silence and every breakthrough.",
    colorClass: 'series-1', color: '#EF9F27', light: '#FAEEDA', deep: '#BA7517',
    sessionCount: 12, status: 'active'
  },
  {
    id: 2, slug: 'the-walk', name: 'The Walk', subtitle: 'Discipleship',
    tagline: 'Following Christ is not an event. It\'s a daily walk.',
    description: "Following Christ isn't an event — it's a daily walk. This series covers what it means to grow as a disciple, together and individually. Your faith is either growing or it's dying. There's no neutral ground.",
    colorClass: 'series-2', color: '#1D9E75', light: '#E1F5EE', deep: '#0F6E56',
    sessionCount: 10, status: 'active'
  },
  {
    id: 3, slug: 'the-bloodline', name: 'The Bloodline', subtitle: 'Family & Legacy',
    tagline: 'What are you passing down?',
    description: "What are you passing down? Faith doesn't transfer automatically — it's built, modeled, and spoken. This series is about raising a generation, not just raising kids. The decisions you make in your home today become the foundations your children build on tomorrow.",
    colorClass: 'series-3', color: '#D85A30', light: '#FAECE7', deep: '#993C1D',
    sessionCount: 10, status: 'coming-soon'
  },
  {
    id: 4, slug: 'the-steward', name: 'The Steward', subtitle: 'Stewardship',
    tagline: 'Money, time, and resources aren\'t yours.',
    description: "Money, time, and resources aren't yours — you're managing them for God. This series strips the tension out of finances and replaces it with purpose. When a couple gets aligned on stewardship, the marriage stops fighting about money and starts building something together.",
    colorClass: 'series-4', color: '#7F77DD', light: '#EEEDFE', deep: '#534AB7',
    sessionCount: 10, status: 'coming-soon'
  },
  {
    id: 5, slug: 'the-calling', name: 'The Calling', subtitle: 'Identity & Purpose',
    tagline: 'You were not placed here by accident.',
    description: "You were not placed here by accident. This series helps couples discover who God made them to be — individually and as a unit — and what they're deployed to do. Your marriage has a mission. This series helps you find it.",
    colorClass: 'series-5', color: '#378ADD', light: '#E6F1FB', deep: '#185FA5',
    sessionCount: 10, status: 'coming-soon'
  },
  {
    id: 6, slug: 'the-war-room', name: 'The War Room', subtitle: 'Spiritual Warfare',
    tagline: 'There is an enemy and he is after your marriage.',
    description: "There is an enemy and he is after your marriage. This series teaches couples to pray together, fight together, and stand together — on the same side of the line. You don't have a communication problem. You have a spiritual warfare problem.",
    colorClass: 'series-6', color: '#D4537E', light: '#FBEAF0', deep: '#993556',
    sessionCount: 10, status: 'coming-soon'
  },
  {
    id: 7, slug: 'the-mission', name: 'The Mission', subtitle: 'Community & Mission',
    tagline: 'You were called and deployed.',
    description: "You were called and deployed — not just to survive together but to serve together. This series turns your marriage outward toward the world it was always meant to impact. A marriage that only looks inward eventually stagnates. Purpose is found in mission.",
    colorClass: 'series-7', color: '#639922', light: '#EAF3DE', deep: '#3B6D11',
    sessionCount: 8, status: 'coming-soon'
  }
]

export const STUDIES: Study[] = [
  {
    id: 's1-01', slug: 'the-foundation', seriesId: 1, session: 1,
    title: 'The Foundation', titleEmphasis: 'Foundation',
    scripture: 'Matthew 7:24–27', scriptureRef: 'Matthew 7:24–27 (ESV)',
    scriptureText: '"Everyone then who hears these words of mine and does them will be like a wise man who built his house on the rock. And the rain fell, and the floods came, and the winds blew and beat on that house, but it did not fall, because it had been founded on the rock."',
    date: 'March 13, 2026', readTime: 18,
    context: [
      "Jesus ends the Sermon on the Mount with a builder's choice — not a preacher's metaphor. Two foundations, two outcomes, one determining factor: whether you hear and do. Passive faith produces a weak foundation. Active obedience is the bedrock.",
      "Every marriage is built on something. Some are built on attraction, on shared goals, on family expectation, on financial stability. All of those are sand. The only marriage that survives every storm is the one built on the Word of God, obeyed daily."
    ],
    teachingTitle: 'You are always building on', teachingTitleEmphasis: 'something',
    teachingBody: [
      "The question isn't whether your marriage has a foundation — it does. The question is whether that foundation will hold when the rain comes. And it will come.",
      "A covenant marriage isn't built on feelings. Feelings change. It isn't built on compatibility. Compatibility is tested. It is built on a commitment to hear God's Word together and do it — in your finances, in your communication, in your conflict, in your intimacy.",
      "Most couples discover their foundation during crisis. The time to examine what you're building on is before the storm, not during it."
    ],
    pullquote: "The couple that prays together, reads together, and obeys together doesn't just survive storms — they come out stronger on the other side.",
    discussionQuestions: [
      "What is your marriage currently built on — if you're being honest? What takes priority when decisions get hard?",
      "When was the last time you and your spouse made a major decision together based on Scripture rather than preference or practicality?",
      "What does 'hearing and doing' look like practically in your home right now?",
      "Where does your foundation feel solid? Where does it feel like sand?",
      "What is one area where you need to rebuild on firmer ground — and what would that actually require from both of you?"
    ],
    hisReflection: [
      "Am I leading this family on the Word of God or on my own instincts and preferences?",
      "What does my daily life communicate to my wife about what our marriage is actually built on?",
      "What storm have we been through that revealed something about our foundation?"
    ],
    herReflection: [
      "Do I trust that our foundation is strong enough for what's coming — and if not, what am I doing about it?",
      "Where am I building on fear instead of faith in our marriage?",
      "What does it look like for me to actively contribute to the foundation of this home?"
    ],
    challenge: "This week, sit down together and identify the three most significant decisions you've made as a couple in the last year. Evaluate each one: what was it built on? Scripture, wisdom, fear, preference? No judgment — just honesty. Then pray together and ask God to show you where the foundation needs reinforcing.",
    challengeTitle: 'Examine the', challengeTitleEmphasis: 'foundation'
  },
  {
    id: 's1-02', slug: 'the-covenant-of-surrender', seriesId: 1, session: 2,
    title: 'The Covenant of Surrender', titleEmphasis: 'Surrender',
    scripture: 'Ephesians 5:22–25', scriptureRef: 'Ephesians 5:22–25 (ESV)',
    scriptureText: '"Wives, submit to your own husbands, as to the Lord. For the husband is the head of the wife even as Christ is the head of the church, his body, and is himself its Savior. Now as the church submits to Christ, so also wives should submit in everything to their husbands. Husbands, love your wives, as Christ loved the church and gave himself up for her."',
    date: 'March 17, 2026', readTime: 20,
    context: [
      "Paul writes Ephesians 5 not as a power structure but as a picture — a living metaphor of Christ's relationship to his church. The word translated 'submit' in verse 22 carries the same root as verse 21: mutual submission rooted in reverence for God.",
      "The revolutionary command in this passage isn't directed at wives — it's directed at husbands. In first-century Roman culture, a husband's authority was absolute. Paul flips the script: love your wife the way Christ loved the church. Christ died. That is the standard."
    ],
    teachingTitle: 'Surrender is not weakness —', teachingTitleEmphasis: "it's architecture",
    teachingBody: [
      "Every covenant relationship needs structure. Not hierarchy for the sake of power, but order for the sake of peace. When both partners fight for the lead, the marriage drifts. When both partners fight to serve, the marriage flourishes.",
      "Surrender in a covenant marriage isn't one-sided. It's a daily act of trust — the wife trusting her husband's lead, and the husband trusting God enough to lead sacrificially, not selfishly.",
      "The husband who demands submission has missed the point entirely. The husband who earns trust through consistent, sacrificial love — the way Christ served the church — creates an environment where trust is freely given."
    ],
    pullquote: "The husband who demands submission has missed the point. The husband who earns trust through sacrifice has understood it.",
    discussionQuestions: [
      "In what area of your marriage do you find it hardest to surrender control — and why?",
      "Husbands: what would it look like to lead your wife the way Christ leads the church — through sacrifice, not position?",
      "Wives: what would make it easier to trust your husband's lead? Have you communicated that to him directly?",
      "Where does your marriage currently reflect mutual submission well — and where does it break down?",
      "If your marriage were a picture of Christ and the church, what would that picture say about God right now?"
    ],
    hisReflection: [
      "Where am I leading from position rather than from sacrifice?",
      "Am I the kind of husband my wife can trust? What's one thing I can do this week to earn more of her trust?",
      "What does 'giving myself up for her' look like in the daily decisions of our home?"
    ],
    herReflection: [
      "Am I releasing control in areas where I've been holding the lead out of fear rather than wisdom?",
      "What does respect look like for me right now — and am I expressing it in ways he can actually receive?",
      "Where is God asking me to trust Him through trusting my husband?"
    ],
    challenge: "This week, identify one area where you've been holding the lead out of habit, fear, or preference — and consciously release it to your spouse. Don't announce it. Just do it. At the end of the week, sit together and share what you noticed.",
    challengeTitle: 'One act of intentional', challengeTitleEmphasis: 'surrender'
  },
  {
    id: 's2-01', slug: 'the-daily-walk', seriesId: 2, session: 1,
    title: 'The Daily Walk', titleEmphasis: 'Daily',
    scripture: 'Colossians 2:6–7', scriptureRef: 'Colossians 2:6–7 (ESV)',
    scriptureText: '"Therefore, as you received Christ Jesus the Lord, so walk in him, rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving."',
    date: 'March 20, 2026', readTime: 16,
    context: [
      "Paul's instruction here is deceptively simple: walk in Christ the same way you received him — by faith. The Christian life isn't a series of spiritual events you attend. It's a walk. Daily, consistent, forward movement.",
      "The Greek word for 'walk' here describes a way of life — a habitual pattern of behavior. Paul is saying: the posture that saved you is the posture that sustains you. Dependence. Trust. Faith."
    ],
    teachingTitle: 'Discipleship is a', teachingTitleEmphasis: 'daily decision',
    teachingBody: [
      "Most couples who drift spiritually don't fall away in one dramatic moment. They drift in a thousand small daily decisions — skipped devotionals, deferred conversations, convenience chosen over conviction.",
      "Walking in Christ as a couple requires a daily commitment that is built before it is needed. You don't develop spiritual disciplines in a crisis. You deploy them.",
      "The goal isn't a perfect spiritual routine. The goal is a direction — consistently moving toward Christ, together, every day you're given."
    ],
    pullquote: "You don't develop spiritual disciplines in a crisis. You deploy them.",
    discussionQuestions: [
      "What does your daily walk with Christ look like right now — individually and as a couple?",
      "Where has convenience replaced conviction in your spiritual life recently?",
      "What rhythm or practice has most strengthened your faith in a past season — and why did you stop?",
      "What is the one spiritual discipline that would have the most impact on your marriage if you started it this week?",
      "How do you hold each other accountable spiritually without it becoming performance or pressure?"
    ],
    hisReflection: [
      "Am I leading our household in spiritual discipline or waiting for my wife to initiate it?",
      "What does my daily time with God actually look like — and is it producing fruit in my character?",
      "Where is my walk with Christ growing? Where is it stagnant?"
    ],
    herReflection: [
      "Am I nurturing my own walk with Christ independent of whether my husband is leading well spiritually?",
      "What spiritual hunger have I been suppressing or deferring?",
      "How is my personal walk with God showing up in how I love my husband?"
    ],
    challenge: "For the next seven days, each of you commits to one daily spiritual practice — individually. It can be the same practice or different ones. At the end of the week, share honestly what you encountered. Don't perform it. Do it.",
    challengeTitle: 'Seven days of', challengeTitleEmphasis: 'intentional walk'
  }
]

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
