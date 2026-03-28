export type Series = {
  id: number; slug: string; name: string; subtitle: string;
  tagline: string; description: string; colorClass: string;
  color: string; light: string; deep: string;
  sessionCount: number; status: 'active' | 'complete' | 'coming-soon';
}

export type TeachingBlock = {
  heading?: string; body: string;
}

export type Study = {
  id: string; slug: string; seriesId: number; session: number;
  title: string; titleEmphasis: string;
  scripture: string; scriptureRef: string; scriptureText: string;
  date: string; readTime: number;
  context: string[];
  teachingTitle: string; teachingTitleEmphasis: string;
  teachingBlocks: TeachingBlock[];
  pullquote: string; pullquoteSource?: string;
  signatureLines: string[];
  scriptures: { ref: string; text: string; note: string }[];
  discussionQuestions: string[];
  hisReflection: string[];
  herReflection: string[];
  challenge: string; challengeTitle: string; challengeTitleEmphasis: string;
}

export const SERIES: Series[] = [
  { id:1, slug:'the-covenant', name:'The Covenant', subtitle:'Marriage', tagline:"What you entered into on your wedding day was not a contract.", description:"What you entered into on your wedding day was not a contract — it was a covenant. This series builds the theology and the practice of a marriage that holds.", colorClass:'series-1', color:'#EF9F27', light:'#FAEEDA', deep:'#BA7517', sessionCount:12, status:'active' },
  { id:2, slug:'the-walk', name:'The Walk', subtitle:'Discipleship', tagline:"Following Christ is not an event. It's a daily walk.", description:"Following Christ isn't an event — it's a daily walk. This series covers what it means to grow as a disciple, together and individually.", colorClass:'series-2', color:'#1D9E75', light:'#E1F5EE', deep:'#0F6E56', sessionCount:10, status:'active' },
  { id:3, slug:'the-bloodline', name:'The Bloodline', subtitle:'Family & Legacy', tagline:'What are you passing down?', description:"What are you passing down? Faith doesn't transfer automatically.", colorClass:'series-3', color:'#D85A30', light:'#FAECE7', deep:'#993C1D', sessionCount:10, status:'coming-soon' },
  { id:4, slug:'the-steward', name:'The Steward', subtitle:'Stewardship', tagline:"Money, time, and resources aren't yours.", description:"Money, time, and resources aren't yours — you're managing them for God.", colorClass:'series-4', color:'#7F77DD', light:'#EEEDFE', deep:'#534AB7', sessionCount:10, status:'coming-soon' },
  { id:5, slug:'the-calling', name:'The Calling', subtitle:'Identity & Purpose', tagline:'You were not placed here by accident.', description:"You were not placed here by accident.", colorClass:'series-5', color:'#378ADD', light:'#E6F1FB', deep:'#185FA5', sessionCount:10, status:'coming-soon' },
  { id:6, slug:'the-war-room', name:'The War Room', subtitle:'Spiritual Warfare', tagline:'There is an enemy and he is after your marriage.', description:"There is an enemy and he is after your marriage.", colorClass:'series-6', color:'#D4537E', light:'#FBEAF0', deep:'#993556', sessionCount:10, status:'coming-soon' },
  { id:7, slug:'the-mission', name:'The Mission', subtitle:'Community & Mission', tagline:'You were called and deployed.', description:"You were called and deployed — not just to survive together but to serve together.", colorClass:'series-7', color:'#639922', light:'#EAF3DE', deep:'#3B6D11', sessionCount:8, status:'coming-soon' }
]

export const STUDIES: Study[] = [
  {
    id: 's2-01',
    slug: 'the-calling-is-still-on',
    seriesId: 2,
    session: 1,
    title: 'The Calling Is Still',
    titleEmphasis: 'On',
    scripture: 'Luke 5:1–11',
    scriptureRef: 'Luke 5:4–5, 10–11 (ESV)',
    scriptureText: '"Put out into the deep and let down your nets for a catch." And Simon answered, "Master, we toiled all night and took nothing! But at your word I will let down the nets." And Jesus said to Simon, "Do not be afraid; from now on you will be catching men." And when they had brought their boats to land, they left everything and followed him.',
    date: 'March 28, 2026',
    readTime: 40,
    context: [
      "There's a moment in Luke 5 that most people read right past. Jesus is standing on the shore of the Sea of Galilee — one of five names the New Testament uses for the same body of water. He sees two boats, steps into the one belonging to a commercial fisherman named Simon, and begins teaching the crowd from the water.",
      "After the teaching, he tells Simon to push out into the deep and let the nets down. Simon has been fishing all night and caught nothing. He's tired, he's empty-handed, and this carpenter's advice makes no professional sense. But he does it — and the catch is so massive the nets begin to tear.",
      "What happens next is the scene the rest of this study hinges on. Simon Peter falls to his knees and says: 'Depart from me, for I am a sinful man, O Lord.' This is what an encounter with holiness produces — not comfort, not optimism, but a shattering awareness of the gap. And into that gap, Jesus speaks four words that become the entire arc of Peter's life: Do not be afraid.",
      "Jesus then gives him his calling. From now on, you will be catching men. Peter leaves everything and follows. This is the moment the calling is placed on his life — and it happens on a boat, with empty nets, when he feels most unworthy. Keep that image in mind. It becomes everything."
    ],
    teachingTitle: 'When the calling gets',
    teachingTitleEmphasis: 'recreated',
    teachingBlocks: [
      {
        heading: 'Condemnation — understanding the word',
        body: "Satan's primary weapon after failure isn't temptation — it's condemnation. And condemnation is actually a builder's term. It means unfit for use. When a building is condemned, it doesn't mean it's been destroyed. It means someone in authority has declared it no longer usable for its intended purpose. That's exactly what Satan tries to do after you fall. He doesn't just make you feel bad — he tries to stamp you: unfit for use. Ministry over. Calling revoked. Go back to what you were doing before Jesus found you."
      },
      {
        heading: 'Peter goes back to the boat',
        body: "Three and a half years after that first encounter on the Sea of Galilee, Peter has walked with Jesus, seen miracles, preached, led — and then denied his closest friend three times in one night. Afterward, Peter does exactly what Satan wanted him to do. He goes back to fishing. Not as recreation. As retreat. He's convinced himself that whatever calling was placed on his life in Luke 5, he forfeited it through his failure. He goes back to the boat. He goes back to the empty nets. He goes back to being just a fisherman."
      },
      {
        heading: 'Jesus walks 80 miles',
        body: "Here's what the Gospel of John records next, in chapter 21. Jesus has been raised from the dead. The place where he raises Peter back to ministry is on the shore of the Sea of Galilee — about 80 miles from where the resurrection happened. So the first thing on the risen Christ's agenda is to start walking. He walks 80 miles because there is one thing on his mind: getting back to his friend. Not to lecture him. Not to remind him of his failure. To restore him. And when he gets there, he doesn't show up with a rebuke. He shows up with breakfast and a fire on the beach."
      },
      {
        heading: 'The conditions are recreated exactly',
        body: "This is the part that should stop you cold. When Jesus finds Peter in John 21, the scene is a deliberate recreation of Luke 5. Peter is on a boat. He's been fishing all night and caught nothing — empty nets again. Jesus calls from the shore and tells him to throw the net on the other side. He does. The catch is overwhelming. And then Jesus reaffirms the calling: feed my sheep. You're not going back to being a fisherman. The calling is still on. When Jesus restores someone to their calling, he takes them back to the exact moment the calling was first given — and he says: this still stands. What happened between then and now doesn't change this."
      },
      {
        heading: 'What this means for you',
        body: "Whatever you've done. However far you've run. Whatever version of going-back-to-the-boat you've been living in — Jesus is not finished with you. The calling placed on your life when he first found you was not issued on the condition of your perfect performance. It was issued by his authority, and his authority doesn't expire when you fail. There is therefore now no condemnation for those who are in Christ Jesus. That's Romans 8:1 — and it's not a comfort verse. It's a declaration of legal status. The condemned stamp has been removed. You are not unfit for use. You are being rebuilt."
      }
    ],
    pullquote: '"No matter how many times I fail my Lord, he is always going to come back. He is always going to say — why don\'t you come back? The calling is still on."',
    signatureLines: [
      '"Condemnation is a builder\'s term. It means unfit for use. That\'s what Satan tries to stamp on you after you fall."',
      '"The first thing on the risen Christ\'s agenda was to start walking. He walked 80 miles because there was one thing on his mind — getting back to his friend."',
      '"When Jesus restores Peter, he recreates the exact conditions of when he first called him. Empty nets. A boat. The shore. He\'s saying: this still stands."',
      '"There is therefore now no condemnation for those who are in Christ Jesus. That\'s not a comfort verse. That\'s a declaration of legal status."',
      '"Peter thought his ministry was over because that\'s what Satan does — condemnation. But Jesus didn\'t walk 80 miles to agree with Satan."',
    ],
    scriptures: [
      { ref: 'Luke 5:1–11', text: 'The first calling of Peter. Empty nets, an overwhelming catch, and the first commission: from now on you will be catching men.', note: 'The anchor passage — read the full section together.' },
      { ref: 'John 21:1–17', text: 'The restoration of Peter after his denial. Jesus recreates the Luke 5 conditions and reaffirms the calling: feed my sheep.', note: 'Read this immediately after Luke 5. The parallel is everything.' },
      { ref: 'Romans 8:1–4', text: '"There is therefore now no condemnation for those who are in Christ Jesus."', note: 'The theological ground for everything this study teaches.' },
    ],
    discussionQuestions: [
      "Peter's failure didn't disqualify him — but he acted like it did. Is there an area of your life where you've quietly gone back to the boat, convinced yourself the calling no longer applies to you? What was the failure that sent you back?",
      "Satan uses condemnation — the 'unfit for use' stamp — to pull people out of their calling. What does condemnation sound like in your head? What specific lies does it tell you about who you are and what you're capable of?",
      "Jesus walked 80 miles to get to Peter. Not because Peter deserved it — but because the calling he placed on Peter's life was still his to honor. What does it do to you to sit with that image — that Jesus is actively pursuing you even when you've retreated?",
      "The restoration scene in John 21 recreates the exact conditions of the original calling in Luke 5. Jesus doesn't give Peter a new identity — he brings him back to the original one. What was the original thing God placed in you before failure, shame, or life convinced you otherwise?",
      "As a couple: are there things you've stopped doing, pursuing, or believing about your future together because of something that happened — a failure, a loss, a season of falling short? What would it look like to let Jesus speak over those things the way he spoke to Peter on the shore?",
      "Romans 8:1 says there is now no condemnation for those who are in Christ Jesus. Do you actually live like that's true? What would change in your daily life if you genuinely believed the condemned stamp had been removed?",
      "What is one area where you sense God is calling you back to the shore — not to replay the failure, but to recommission what he originally placed on your life?"
    ],
    hisReflection: [
      "Is there something I walked away from — a calling, a role, a belief about who God made me to be — because I failed and decided I forfeited it? Have I been living condemned when Christ has declared me free?",
      "Am I leading our marriage from a place of freedom from condemnation — or from a place of shame that's made me smaller, more withdrawn, less willing to step into what God has for us?",
      "What would it look like for me to let Jesus 'walk 80 miles' back into the area of my life where I've most retreated?",
    ],
    herReflection: [
      "Where have I gone back to the boat in my own life — spiritually, in our marriage, in my sense of calling — because failure or disappointment convinced me the original thing no longer applied?",
      "Do I carry condemnation quietly? Does it show up as perfectionism, over-apologizing, shrinking back, or believing I have to earn my way back into God's good graces?",
      "What does Romans 8:1 actually mean for the specific shame I carry? If there is now no condemnation — what does that free me to do that I've been holding back?",
    ],
    challenge: "This week, each of you read Luke 5:1–11 and John 21:1–17 back to back — ideally out loud together. Let the parallel land. Then spend ten minutes individually writing down one area where you've been living condemned — one place where you've gone back to the boat. Bring those back together and pray over each other's paper. Don't fix it. Don't coach it. Just speak Romans 8:1 over each other. The calling is still on.",
    challengeTitle: 'Back to the',
    challengeTitleEmphasis: 'shore',
    pdfFile: '/studies/the-calling-is-still-on.pdf'
  },

  {
    id: 's2-02',
    slug: 'assemble-your-band',
    seriesId: 2,
    session: 2,
    title: 'Assemble Your',
    titleEmphasis: 'Band',
    scripture: 'Luke 6:12–13',
    scriptureRef: 'Luke 6:12–13 (ESV)',
    scriptureText: 'In these days he went out to the mountain to pray, and all night he continued in prayer to God. And when day came, he called his disciples and chose from them twelve, whom he named apostles.',
    date: 'April 1, 2026',
    readTime: 45,
    context: [
      "Jesus spent the entire night in prayer before he chose his twelve. He didn't assemble his team out of convenience or proximity — he sought the Father first, then moved with intention. The team came after the prayer. That sequence tells you something about how seriously he took this.",
      "The twelve he chose were wildly different men. Fishermen and a tax collector. A zealot revolutionary and a political collaborator who would have despised each other under any other circumstances. What unified them wasn't temperament or background — it was a shared commitment to following Jesus. That's the only prerequisite for a band of brothers or sisters that actually works.",
      "This study is built around what may be the single highest-return investment you can make in your discipleship — not a program, not a book, not a method. It's this: assembling a small group of people who know the real you, who are serious about following Jesus, and who have both the love and the permission to speak into your life. Jesus didn't wait for this to happen organically. He built it intentionally. So should you."
    ],
    teachingTitle: 'The four yous — and the community that',
    teachingTitleEmphasis: 'unlocks each one',
    teachingBlocks: [
      {
        heading: 'The Arena You — the public self',
        body: "This is the you that everyone can see — including yourself. The you at work. The you in social settings. The you at your best. Most people never get past this. They live their entire Christian life in the arena and wonder why they're not growing. The arena you is real, but it's not the whole you. And if it's the only you that ever gets revealed, you've already hit your ceiling as a disciple."
      },
      {
        heading: 'The Mask You — what you know but hide',
        body: "This is the part of you that you know — but nobody else does. The private struggle. The addiction nobody suspects. The pattern you've managed alone for years behind a functioning exterior. The Bible addresses this directly. James 5 says: confess your sins to each other and pray for each other, that you may be healed. Notice the word — healed. Not just forgiven. We confess to God for forgiveness. We confess to trusted people for healing. And here's the truth you can't escape: whatever stays hidden stays powerful. Sin is like fungus. It grows in the dark and dies in the light. The part of you that you keep hidden from everyone except yourself — that's the part that will eventually enslave you."
      },
      {
        heading: 'The Blind Spot You — what others see that you don\'t',
        body: "This is the part of you that the people around you can see clearly — but you can't. Everyone has blind spots. The question is whether you've given anyone permission to show you yours. Proverbs 27 says as iron sharpens iron, so one person sharpens another. That sharpening isn't comfortable — it requires friction, and it requires trust. One practical way to do this is what some call deputizing: you sit down with a handful of trusted people and explicitly give them permission to call you out whenever they see something off. You tell them: if you ever see me acting funny, if you ever see something in me that's not of God, I'm asking you to reach out. I've given you authority to do that. Without that explicit permission, most people — even people who love you — won't say the hard thing."
      },
      {
        heading: 'The Blind Spot in real life — a story',
        body: "A woman was processing some frustrations in her marriage with an older mentor she deeply trusted. She was expecting sympathy — she was young, still maturing, and the story she was telling herself painted her as the reasonable one. Her mentor listened, then looked at her and said: 'I think you're just bitter.' Not what she wanted to hear. Exactly what she needed. She went home, sat with it, evaluated it honestly, and realized her mentor was right. She repented. And because that blind spot got exposed when it did — not coddled, not agreed with — a foothold that could have hardened into something much worse was dealt with early. That's what a blind spot friend does. They love you too much to let you go the wrong direction unchallenged."
      },
      {
        heading: 'The Potential You — what only God fully knows',
        body: "This is the part of you that neither you nor anyone around you fully understands yet. Only God sees the complete picture of what you can become when you're yielded entirely to his Spirit. And here's why this is the most important of all four: you cannot reach that potential alone. In 2 Peter 1, when it says God has granted 'you' everything needed for life and godliness, the 'you' in the original Greek is plural. Not you individually — us collectively. The body. God's system for your potential is to connect you to other spirit-filled believers around you. Think of it this way: if you're the hand, you can't do everything you were designed to do until the hand finds the arm that finds the shoulder that connects to the head — and Jesus is the head. You were designed to function as part of something larger than yourself. That's not a limitation. That's the design."
      },
      {
        heading: 'Men and women assemble differently — and both need to know it',
        body: "Men and women do relationships differently, and ignoring this creates unnecessary friction. Women tend to do relationships face-to-face — sitting across from each other, talking about what's actually going on. Men tend to do relationships shoulder-to-shoulder — side by side, doing something together, with conversation as a byproduct. Neither is wrong. Both need depth. For women, the trap is often having community but the wrong kind — the kind that affirms every feeling rather than sharpens every conviction. The 'you-go-girl, he's the worst, I don't know why you put up with this' friendship circle that confirms bitterness rather than confronting it. For men, the trap is usually simpler: they just don't have any. They have acquaintances, coworkers, guys they watch football with — but no one who actually knows them. The fix for men is almost always to add the Word to whatever they're already doing together. You like to fish? Fish with a man of God and open the Bible on the boat. You hunt? Same principle. The relationship starts shoulder-to-shoulder and goes from there."
      },
      {
        heading: 'Driving 80 minutes with a notebook — how you go get what you need',
        body: "A pastor who felt weak in prayer and fasting identified someone in his city who had clearly developed those disciplines in a way he hadn't. He drove over an hour across town, showed up at that man's home with a notebook full of prepared questions, and sat there for 40 minutes asking everything he could. He didn't wait for a conference. He didn't hope the information would find him. He pursued it. The things God wants to do in your life that you don't yet have access to — they're often sitting in the people around you. You have to be willing to go get them. Community is made, not given."
      }
    ],
    pullquote: '"There are two conversions that become the most important in your Christian walk. The first is when your soul is converted to Jesus. The second is when your relationships are converted to discipleship."',
    signatureLines: [
      '"Don\'t fight the devil in the dark. You fight the devil in the dark, you\'re going to lose — because the darkness is his domain."',
      '"Sin is like fungus. It grows in the dark and dies in the light."',
      '"You don\'t have to tell everybody. But you have to tell somebody."',
      '"We confess to God for forgiveness. We confess to trusted people for healing."',
      '"As iron sharpens iron, so one person sharpens another — but that will never happen unless you give someone permission to sharpen you."',
      '"Men do relationships shoulder-to-shoulder. Women do relationships face-to-face. Neither is wrong — but both need iron sharpening iron."',
      '"Community is made, not given. Stop waiting for it to come to you."',
      '"The potential you can\'t become — it\'s in the body of Christ around you. You won\'t access it in isolation."',
    ],
    scriptures: [
      { ref: 'Luke 6:12–13', text: 'Jesus prays all night before assembling his twelve. The team came after the prayer.', note: 'The pattern: prayer first, then intentional assembly.' },
      { ref: 'James 5:16', text: '"Confess your sins to one another and pray for one another, that you may be healed."', note: 'Confession to God = forgiveness. Confession to people = healing.' },
      { ref: 'Proverbs 27:17', text: '"As iron sharpens iron, so one person sharpens another."', note: 'Sharpening requires friction. That only happens with permission.' },
      { ref: '2 Peter 1:3', text: '"His divine power has granted to us all things that pertain to life and godliness."', note: 'The "us" is plural. This promise is collective, not individual.' },
    ],
    discussionQuestions: [
      "Which of the four yous — Arena, Mask, Blind Spot, or Potential — do you feel most disconnected from right now? What specifically is keeping you there?",
      "Is there something behind the mask that you've never told anyone? Not asking you to share it right now — but what would need to be true about a person or a group for you to bring it into the light?",
      "Have you ever deputized anyone — explicitly given someone permission to call you out? If not, what's stopped you? If yes, has it actually worked the way you hoped?",
      "The story of the mentor calling someone out for bitterness — has anyone ever loved you enough to say something that hard to your face? What happened as a result? If no one has — what does that tell you about the quality of your community?",
      "James 5 draws a distinction between confessing to God for forgiveness and confessing to people for healing. Is there an area where you've received forgiveness but not yet healing — because you've never brought it to another person?",
      "As a couple: do you have community where you could call someone tonight and say 'I'm struggling, I don't have this, will you pray for me?' If not — who is one person each of you could reach out to this week as a first step?",
      "The 2 Peter 1 'you' is plural. Some of what God wants to do in your life is locked in the people around you. What's one thing you sense you need that you haven't been willing to go get from someone else?"
    ],
    hisReflection: [
      "Do I have men in my life who actually know me — not the arena version, the real one? Am I shoulder-to-shoulder with anyone who is serious about following Jesus?",
      "Have I deputized anyone? Is there a man who has explicit permission to call me out — and would he actually do it?",
      "Am I leading our marriage toward deeper community, or have I been content with functional isolation? What's one move I could make this week?",
    ],
    herReflection: [
      "Is my community iron-sharpening-iron — or is it the kind that affirms every feeling and confirms every grievance? Would someone in my circle tell me I'm bitter if I was?",
      "Am I hiding behind busyness, pride, or the fear of being a burden — and using it as cover not to be truly known?",
      "Jana said with the exception of once in her life, she has always pursued the people she wanted to learn from — never waited for them to come to her. Who is one woman I respect spiritually that I could pursue this week?",
    ],
    challenge: "This week, each of you identify one person — someone on Team Jesus, someone you respect — and reach out. It doesn't have to be a big conversation. It can be as simple as: 'Hey, I've been thinking about what it looks like to have people in my life who actually know me. Can we get together?' Don't wait for perfect conditions. Community is made. Make one move.",
    challengeTitle: 'One move toward your',
    challengeTitleEmphasis: 'band',
    pdfFile: '/studies/assemble-your-band.pdf'
  },

  {
    id: 's2-03',
    slug: 'the-amputation',
    seriesId: 2,
    session: 3,
    title: 'The Necessary',
    titleEmphasis: 'Amputation',
    scripture: 'Matthew 5:29–30',
    scriptureRef: 'Matthew 5:29–30 (ESV)',
    scriptureText: 'If your right eye causes you to sin, tear it out and throw it away. For it is better that you lose one of your members than that your whole body be thrown into hell. And if your right hand causes you to sin, cut it off and throw it away.',
    date: 'April 4, 2026',
    readTime: 40,
    context: [
      "Jesus is in the middle of the Sermon on the Mount when he says something that sounds extreme enough to make people uncomfortable. Tear out your eye. Cut off your hand. He's using a rhetorical technique called hyperbole — intentional overstatement to make a point unforgettable. He's not giving surgical instructions. He's making a discipleship claim: if you want to follow me with your whole heart, you have to be willing to radically amputate anything in your life that keeps you from doing that.",
      "For most new or growing Christians, the thing that needs amputating isn't a habit or a hobby. It's a relationship. A close connection with someone who is moving in the opposite direction from Jesus — and whose influence is quietly but consistently pulling you the same way.",
      "This study deals with one of the most practically difficult parts of serious discipleship: what to do when the people around you are working against what God is doing in you. It's uncomfortable. It has an edge. But the Bible doesn't let you around it."
    ],
    teachingTitle: 'Before you can build the right',
    teachingTitleEmphasis: 'relationships',
    teachingBlocks: [
      {
        heading: 'Two conversions — the one people miss',
        body: "Most Christians understand the first conversion: the moment your soul is converted to Jesus. You believe, you repent, you cross from death to life. What fewer people talk about is the second conversion — the one that tends to happen later, and often more painfully: when your relationships are converted to discipleship. This is the moment you stop organizing your relational life around comfort and convenience, and start organizing it around who God is calling you to become. These two conversions are both essential. And for a lot of people, the second one is the harder one."
      },
      {
        heading: '2 Corinthians 6 — the verse people misapply',
        body: "Do not be unequally yoked with unbelievers. Most people hear that verse and think marriage. But that's not actually what the passage is about. In context, Paul is talking about every area of life — every close, binding relationship. The metaphor is an ox yoke: two animals locked together, moving in the same direction, at the same pace. If one is pulling toward Jesus and the other is pulling toward the world, the result isn't a compromise — it's drift. The direction of your closest relationships is the direction of your life. That's not cynicism. That's just how influence works."
      },
      {
        heading: 'The radical amputation — what Jesus actually means',
        body: "Matthew 5 is not about self-harm. Jesus is asking a question: Is there anything in your life — any habit, any relationship, any pattern — that is consistently pulling you away from wholehearted discipleship? If so, are you willing to cut it out? Not reduce it. Not manage it. Remove it. This is what it looks like when someone is serious about becoming a disciple. They stop tolerating the things that are quietly working against their formation. Before you assemble a band of brothers or sisters, you may need to disassemble the group you've already surrounded yourself with — the people who are, however unintentionally, working for the other side."
      },
      {
        heading: 'What to do when a relationship needs amputating — especially as parents',
        body: "This is where it gets practical. For adults, the amputation usually means moving a relationship from your inner circle to your outer circle — from intimate to cordial. You don't hate the person. You don't shun them. You love them. But you stop giving them access to the most vulnerable parts of your life. The book of Proverbs says whoever walks with the wise becomes wise, but a companion of fools suffers harm. That's not mean. It's structural. For parents of young children, this principle extends to your kids' friendships. You choose who your children spend time with while they're young and their character is forming. You are the door. You decide what comes through it. This isn't control — it's stewardship of the most important people God has given you."
      },
      {
        heading: 'Your spouse can see your blind spots in this area',
        body: "Here's one of the most important and most ignored pieces of practical wisdom on this subject: the person most likely to see clearly whether a relationship in your life is pulling you away from God is the person who lives with you. Your spouse watches you when you come home from certain conversations. They notice what your mood is after you've spent time with certain people. They see the before and after. If your spouse has expressed concern about a relationship you're in — even if you can't see it yourself — that concern deserves serious weight. This is the blind spot principle applied to your relational life. Don't dismiss it."
      }
    ],
    pullquote: '"Before you assemble a band of brothers, you may need to disassemble the band you\'ve already got. Some of the people closest to you right now are working for the other team — and they don\'t even know it."',
    signatureLines: [
      '"There are two conversions. The first is when your soul is converted to Jesus. The second — and often harder — is when your relationships are converted to discipleship."',
      '"Do not be unequally yoked with unbelievers. That\'s not a marriage verse. That\'s a life verse."',
      '"The direction of your closest relationships is the direction of your life."',
      '"You are the parent. You choose your kids\' friends. You are the door — and you decide what comes through it."',
      '"If your spouse has expressed concern about a relationship you\'re in — that concern deserves serious weight. They can see what you can\'t."',
      '"Whoever walks with the wise becomes wise, but a companion of fools suffers harm. That\'s Proverbs. That\'s not mean — that\'s structural."',
    ],
    scriptures: [
      { ref: 'Matthew 5:29–30', text: 'Jesus on radical amputation — removing anything that consistently pulls you away from wholehearted discipleship.', note: 'Hyperbole used deliberately. The point is the willingness, not the act.' },
      { ref: '2 Corinthians 6:14', text: '"Do not be unequally yoked with unbelievers."', note: 'Not a marriage verse — a relational principle for every area of life.' },
      { ref: 'Proverbs 13:20', text: '"Whoever walks with the wise becomes wise, but the companion of fools will suffer harm."', note: 'Influence is structural. You become what you walk alongside.' },
      { ref: 'Proverbs 22:15', text: '"Folly is bound up in the heart of a child, but the rod of discipline drives it far from him."', note: 'Parents are responsible for the formation environment their children grow up in.' },
    ],
    discussionQuestions: [
      "Have you experienced the second conversion — the moment your relationships were converted to discipleship? Or is your relational life still organized mostly around comfort and history rather than around who God is calling you to become?",
      "Is there a relationship in your life right now — a close friendship, a regular connection — that you sense is quietly pulling you away from God? Not necessarily a bad person, but a wrong direction for you right now?",
      "2 Corinthians 6:14 is usually applied to marriage, but it's actually about every close relationship. How does that reframe the way you think about who you give the most intimate access to your life?",
      "Jesus says be willing to amputate — not reduce, not manage, but remove. Is there something you've been managing rather than cutting? What would it cost you to actually cut it?",
      "Has your spouse ever expressed concern about a relationship you were in — and you dismissed it or explained it away? Looking back, were they seeing something you were blind to?",
      "As parents: are you exercising your authority over the relational environment your kids are growing up in? Are there friendships your kids have that you know in your gut aren't forming them well — and you've been too conflict-averse to address?",
      "What would it look like, practically, to move a relationship from your inner circle to your outer circle — to love someone at a distance rather than amputating them entirely from your life?"
    ],
    hisReflection: [
      "Am I honest with myself about which relationships in my life are pulling me toward Jesus and which are pulling me away? Or do I rationalize the ones that are convenient?",
      "Have I listened to my wife when she's expressed concern about a friendship or connection I have? Or have I dismissed her perspective as controlling or overly cautious?",
      "Am I exercising my authority as a father over who my children are being formed by — or am I abdicating that responsibility and calling it respect for their autonomy?",
    ],
    herReflection: [
      "Do I have close friendships that affirm my flesh rather than sharpen my spirit? Friends who agree with me when I'm in the wrong, who validate bitterness, who pull me away from my husband rather than toward him?",
      "Is there a relationship in my life that I know needs to change — but I've been avoiding the conversation because it will be uncomfortable or I'm afraid of losing the friendship?",
      "Am I using my influence as a mother to actively shape the relational environment my children are in — or am I defaulting to whatever is easiest?",
    ],
    challenge: "This week, each of you spend 15 minutes alone with this question: Is there a relationship in my life that needs to change? Not necessarily a full amputation — but a shift. Maybe it moves from inner circle to outer circle. Maybe a conversation needs to happen. Write down what comes up. Then come back together and share what you each wrote — not to judge each other's answers, but to be the blind spot friend your spouse needs on this one.",
    challengeTitle: 'The honest',
    challengeTitleEmphasis: 'audit',
    pdfFile: '/studies/the-necessary-amputation.pdf'
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
