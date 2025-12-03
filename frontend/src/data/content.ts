export type DashboardRole = 'member' | 'officer' | 'executive' | 'admin';

export const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Team', path: '/team' },
  { label: 'Branches', path: '/branches' },
  { label: 'Contact', path: '/contact' },
];

export const heroContent = {
  eyebrow: 'Supreme Masqueraders Society • Est. 8 Jan 2000',
  title: 'Empowering youth through masquerade.',
  anniversary: 'Celebrating 25 Years of Good Ankos',
  description:
    'Engaging, empowering, and uplifting youth through masquerade culture. Join us for vibrant brass band outings on Christmas and New Year.',
  primaryCta: { label: 'Become a member', path: '/auth' },
  secondaryCta: { label: 'Connect with us', path: '/contact' },
};

export const aboutContent = {
  whoWeAre: {
    title: 'Who We Are',
    description:
      'The Supreme Masqueraders Society is a constitutionally chartered, non-profit youth body under the Ghana Youth Association. Founded on January 3rd, 2000, we have evolved from a fringe masquerade troupe into a cultural institution, anchoring a dynamic tradition once dismissed as a pastime for the unruly and transforming it into a symbol of pride, unity, and upward mobility. Headquartered in Esikafoanbantem Number Two, Sekondi-Takoradi, we advance the holistic development of young people through progressive masquerade training, civic responsibility, and community service.',
  },
  ourStory: {
    title: 'Our Story',
    establishment: '3 January 2000',
    origins:
      'We formally adopted our Constitution to honor the Almighty God, respect our founders, and strengthen intergenerational bonds between youth and elders. From our registered office in Sekondi-Takoradi we have grown into a disciplined network of 30+ branches across the Western and Central Regions, attracting participation from across Ghana and the international diaspora, including enthusiasts from the Caribbean. We operate under the motto',
    motto: 'Supreme: One Love',
    culturalSignificance:
      'Masquerade culture holds profound significance in our community, representing not just entertainment but a living connection to our ancestors, traditions, and collective identity. Our society serves as a bridge between generations, ensuring these precious traditions continue to thrive.',
    milestones: [
      { year: '2000', event: 'Society established in Sekondi-Takoradi' },
      { year: '2005', event: 'Expanded to first branch outside Sekondi-Takoradi' },
      { year: '2010', event: 'Reached 500 active members milestone' },
      { year: '2015', event: 'Launched youth empowerment programs' },
      { year: '2020', event: 'Celebrated 20 years of cultural preservation' },
      { year: '2024', event: 'Reached 4,000+ members across 30+ branches' },
    ],
    journey: {
      title: 'Our Journey: From Setbacks to Strength',
      paragraphs: [
        'The Supreme Masquerade Society has walked a path filled with challenges, determination, and remarkable comebacks. When the group first began in the early 2000s, the passion was strong—but the journey was far from smooth. After starting with hope and excitement, the society went off for a solid three years.',
        'They returned with renewed strength, only to face another setback… and another. Three consecutive times, the group attempted a comeback and each time they couldn’t sustain the momentum. Many people doubted them, some mocked them, and others believed the dream had ended.',
        'But Supreme never stopped believing.',
        'Behind the scenes, members held on to one thing—grit and resilience, the very qualities symbolized by the eagle in our logo. Instead of giving up, they prepared. They learned. They re-strategized. They built themselves quietly for the right moment.',
        'That moment came in 2017.',
        'In their first major comeback that year, the Supreme Masquerade Society shocked the community with a massive turnout—over 1,000 members proudly marching together. It was a powerful sign of what determination, unity, and preparation can achieve.',
        'From being counted out to becoming one of the strongest masquerade societies, Supreme’s story is a testament to perseverance and transformation. Every setback shaped the legacy, and every comeback grew stronger.',
      ],
    },
  },
  anniversary: {
    theme: 'My Community, My Responsibility',
    description:
      'This year’s anniversary is not merely a celebration; it is a manifesto. A declaration that masquerading, beyond its vibrant pageantry, holds the potential to shape character, build communities, and inspire youth. As Sir Isaac noted, “This is not just a costume. It’s a culture. And if we are to preserve it, we must practice and pass it down with integrity.”',
    dressWellCampaign: {
      title: 'Dress Well Campaign',
      description:
        'Launched in response to a growing trend among some participants to forgo the full masquerade regalia, this campaign is a call to return to form. It insists that the masquerade is not a half-hearted display but a complete artistic and cultural expression. “What we wear is part of the statement we make. It must reflect dignity, identity, and discipline.”',
    },
    projects: [
      {
        title: 'School Rehabilitation',
        description: 'Repainting and securing selected public school buildings in Takoradi.',
      },
      {
        title: 'Inter-branch Sports Festival',
        description: 'Designed to foster cohesion across our sprawling network.',
      },
      {
        title: 'JHS Quiz Competition',
        description: 'Targeting academic excellence and intellectual engagement among the region’s youth (Commencing May 28th).',
      },
      {
        title: 'Community Health Screening',
        description: 'Free checks for malaria, eye health, dental issues, and blood pressure at the local community center (June 3rd).',
      },
      {
        title: 'Borehole Project',
        description: 'A civic intervention in Apremdo to alleviate the community’s water access challenges.',
      },
    ],
    ankosVillage: {
      title: 'Ankos Village Project',
      description:
        'Envisioned as a hospitality and rest zone for revelers, complete with food vendors, live band music, and shaded seating. The village will serve as a sanctuary for masqueraders who pour into Takoradi from across the globe, signaling that Supreme is concerned with the full masquerading experience.',
    },
    costumePolicy: {
      title: 'Costume & Exclusivity',
      description:
        'Our policy of never repeating outfits is deliberate—it keeps our audience returning year after year to witness something new and breathtaking. The cost includes annual dues and contributions toward our community projects.',
    },
  },
  mission: {
    title: 'Mission Statement',
    statement:
      'To promote the physical, intellectual, social, and spiritual development of young people through the art of masquerade, nurturing responsible citizens who serve their local, national, and international communities.',
  },
  vision: {
    title: 'Vision Statement',
    statement:
      'To sustain a disciplined, non-political, and inclusive society where every youth finds mentorship, cultural pride, and opportunities to lead community development.',
  },
  coreValues: [
    { title: 'Faith & Integrity', description: 'Acknowledging the supremacy of God while upholding honesty and accountability.' },
    { title: 'Founders’ Legacy', description: 'Honouring the pioneers who established the society and safeguarding their vision.' },
    { title: 'Community Respect', description: 'Serving our neighborhoods with humility, civic responsibility, and respect for leadership.' },
    { title: 'Intergenerational Unity', description: 'Creating socio-economic and intellectual exchange between elders and youth.' },
    { title: 'Global Collaboration', description: 'Building alliances with other youth groups and masquerade societies around the world.' },
    { title: 'Service & Discipline', description: 'Maintaining disciplined conduct, responsible finance, and dutiful participation in meetings and outings.' },
  ],
  activities: [
    {
      title: 'Progressive Training Sessions',
      description: 'Structured rehearsals and mentorship that sharpen performance, leadership, and etiquette.',
      icon: '📘'
    },
    {
      title: 'Health & Wellness Drives',
      description: 'Clean-up exercises, health walks, and screenings that keep members and communities safe.',
      icon: '🏥'
    },
    {
      title: 'Educational Forums',
      description: 'Seminars that deepen civic education, financial stewardship, and constitutional literacy.',
      icon: '🎓'
    },
    {
      title: 'Community Outreach',
      description: 'Joint projects with elders, patrons, and partner youth groups across Ghana and the diaspora.',
      icon: '🤝'
    },
    {
      title: 'Festive Turnouts',
      description: 'Christmas and New Year outings led by brass bands that display our identity and unity.',
      icon: '🎉'
    },
  ],
  achievements: [
    { title: '24+ Years of Service', description: 'Constitution-led governance since 2000 with triennial board renewals.' },
    { title: '4,000+ Active Members', description: 'A dues-paying community spread across Sekondi-Takoradi and global chapters.' },
    { title: '10,000+ Annual Outing Attendees', description: 'Festive routes that welcome residents, elders, and partner groups each December.' },
    { title: 'Member Support Fund', description: 'By-law backed donations for marriages, outdooring, health crises, and bereavements.' },
  ],
  identity: {
    logo: {
      title: 'Our Logo',
      description:
        'The Supreme Masqueraders Society logo represents the fusion of tradition and modernity. A watchful eagle crowns the crest, signifying guardianship, resilience, and our mandate to protect future generations while preserving cultural heritage and embracing innovation.',
    },
    eagle: {
      title: 'Symbol of the Eagle',
      description:
        'The eagle’s outstretched wings represent protection over every branch, while its sharp gaze reminds members to stay vigilant, principled, and ready to soar above challenges in service to the community.',
    },
    colors: {
      title: 'Brand Colors',
      description:
        'Our brand colors reflect our vibrant culture: Primary Blue (#1D68FE) represents trust and unity, Red (#FC1313) symbolizes passion and energy, and Light Blue (#7FA4FC) represents creativity and innovation.',
      colors: [
        { name: 'Primary Blue', hex: '#1D68FE', description: 'Trust, unity, and strength' },
        { name: 'Red', hex: '#FC1313', description: 'Passion, energy, and celebration' },
        { name: 'Light Blue', hex: '#7FA4FC', description: 'Creativity and innovation' },
      ],
    },
    symbolism: {
      title: 'Cultural Symbolism',
      description:
        'Masks and costumes in our tradition carry deep symbolic meaning. They represent ancestral connections, spiritual protection, and the transformation of individuals into cultural ambassadors. Each mask tells a story, and every costume reflects the rich tapestry of our heritage.',
    },
  },
  designInspiration: [
    {
      year: 2024,
      theme: 'Unity Through Tradition',
      description: 'The 2024 collection celebrates our 25th anniversary by honoring the unity that has sustained us through decades of cultural preservation. Each outfit reflects the strength of our community bonds and the timeless traditions that connect us across generations.',
      image: '/assets/hero/2024outfit.png',
      highlights: [
        'Traditional patterns merged with contemporary design',
        'Colors representing unity and celebration',
        'Symbolic elements honoring our founding members'
      ],
    },
    {
      year: 2023,
      theme: 'Heritage Reimagined',
      description: 'Drawing from ancestral wisdom, the 2023 designs reimagine classic masquerade elements with modern flair, creating a bridge between past and present.',
      image: '/assets/hero/2023outfit.png',
      highlights: [
        'Ancient mask motifs with contemporary interpretations',
        'Sustainable materials honoring our connection to nature',
        'Stories from elders woven into fabric patterns'
      ],
    },
  ],
  contact: {
    phone: '+233 24 915 7755 / +233 24 425 0855',
    email: 'info@suprememasqueraders.org',
    location: 'Takoradi No. 2, Ghana',
    socialMedia: {
      facebook: 'https://web.facebook.com/suprememasqueraders',
      instagram: 'https://www.instagram.com/suprememasqueraders?igsh=MXV5dHM3N3planhybw==',
      twitter: 'https://x.com/S_masqueraders',
      youtube: 'https://www.youtube.com/@SupremeMasqueraders',
      xHandle: '@S_masqueraders',
    },
  },
};

export const heroImages = [
  '/assets/hero/hero1.png',
  '/assets/hero/hero2.png',
  '/assets/hero/hero3.png',
  '/assets/hero/hero4.png',
  '/assets/hero/hero5.png',
  '/assets/hero/image6.png',
];

export const capabilityHighlights = [
  {
    title: 'Turnout outlines & live route tracking',
    copy:
      'Coordinate outing logistics, routes, safety marshals, and approvals with live status indicators for each branch.',
  },
  {
    title: 'Integrated payments & donations',
    copy:
      'Collect attire dues, benevolence funds, and Paystack donations with automated reminders and reconciliation.',
  },
  {
    title: 'Media hub & storytelling',
    copy:
      'Upload photos, videos, virtual performances, and allow members to like, comment, and share across branches.',
  },
  {
    title: 'Forums & engagement',
    copy:
      'Spark collaboration through moderated discussion boards, knowledge drops, and branch-level announcements.',
  },
];

export const eventHighlights = [
  {
    id: 1,
    title: 'Diaspora Virtual Ball',
    date: '23 Apr 2025',
    type: 'Global Livestream',
    route: 'Metaverse Pavilion',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80',
  },
];

export const whyJoinReasons = [
  {
    title: 'Festive Celebrations',
    description: 'Join us every December and New Year as we hit the streets to dance to the rhythm of beautiful brass band music, celebrating our culture with the community.',
  },
  {
    title: 'Cultural Heritage',
    description: 'Preserve and celebrate masquerade traditions while building meaningful connections with your community.',
  },
  {
    title: 'Youth Empowerment',
    description: 'Develop leadership skills, creativity, and confidence through performance, mentorship, and community engagement.',
  },
  {
    title: 'Global Network',
    description: 'Connect with 4,000+ members across 18 branches worldwide and expand your cultural horizons.',
  },
  {
    title: 'Creative Expression',
    description: 'Express yourself through art, performance, and cultural innovation in a supportive environment.',
  },
];

export const impactHighlights = [
  {
    category: 'Member Development',
    title: 'Youth Empowerment',
    description: 'Over 4,000 active members have developed leadership skills, creativity, and confidence through our programs and performances.',
    stat: '4,000+',
    statLabel: 'Empowered Members',
  },
  {
    category: 'Community Engagement',
    title: 'Cultural Preservation',
    description: 'We have preserved and promoted masquerade traditions across Sekondi-Takoradi, keeping our cultural heritage alive for future generations.',
    stat: '24+',
    statLabel: 'Years of Service',
  },
  {
    category: 'Sekondi-Takoradi',
    title: 'Community Impact',
    description: 'Our annual December and New Year outings bring together thousands of residents, fostering unity and celebrating our vibrant culture.',
    stat: '10,000+',
    statLabel: 'Annual Outing Attendees',
  },
  {
    category: 'Social Development',
    title: 'Skills & Mentorship',
    description: 'Through mentorship programs and skills development workshops, we have equipped young people with valuable life and performance skills.',
    stat: '500+',
    statLabel: 'Youth Mentored',
  },
];

export const upcomingEvents = [
  {
    id: 1,
    title: 'Ankos Village 25th Anniversary Grand Celebration',
    date: '24, 25 & 26 December 2024',
    location: 'Supreme Secretariat, Sekondi-Takoradi, Ghana',
    type: 'Anniversary Celebration',
    image: '/assets/hero/event1.png',
    description: 'Join us as we celebrate 25 years of cultural preservation, youth empowerment, and community engagement. A three-day grand celebration at the Supreme Secretariat.',
  },
  {
    id: 2,
    title: 'All White Anniversary Float with Evergreen Band',
    date: '29 November 2024, 3:00 PM',
    location: 'Police Park at Effiakuma',
    type: 'Anniversary Float',
    image: '/assets/hero/event2.png',
    description: 'Experience our vibrant all-white anniversary float celebration featuring the Evergreen Band. Join us at the Police Park for an unforgettable cultural experience.',
  },
];

export type SponsorCategory = 'vendors' | 'sponsors' | 'partners' | 'band' | 'tv-radio' | 'others';

export type SponsorItem = {
  name: string;
  logo: string;
  category: SponsorCategory;
};

export const sponsorsAndPartners: SponsorItem[] = [
  { name: 'Evergreen Band Movement', logo: '/assets/hero/partner.png', category: 'band' },
  { name: 'Emoji Designer', logo: '/assets/hero/partner1.png', category: 'vendors' },
  { name: 'Blue Scouts Band', logo: '/assets/hero/partners2.png', category: 'band' },
  { name: 'CorpNation Foundation', logo: '/assets/hero/partner3.png', category: 'partners' },
  { name: 'COWRM', logo: '/assets/hero/partner4.png', category: 'sponsors' },
  { name: 'Connect FM', logo: '/assets/hero/partner6.png', category: 'tv-radio' },
];

export const partners = [
  'Heritage Trust Bank',
  'ArkTech Solutions',
  'Paystack',
  'Creative Roots Foundation',
  'City Arts Council',
  'Cultural Affairs Ministry',
];

export const galleryItems = [
  {
    id: 1,
    year: 2024,
    outing: 'New Year Outing',
    date: '1 January 2024',
    mediaType: 'photo',
    image: '/assets/hero/gallery1.png',
    caption: 'New Year Outing 2024 - Supreme Masqueraders in action',
  },
  {
    id: 2,
    year: 2024,
    outing: 'New Year Outing',
    date: '1 January 2024',
    mediaType: 'photo',
    image: '/assets/hero/gallery2.png',
    caption: 'Colorful masquerade performance',
  },
  {
    id: 3,
    year: 2024,
    outing: 'Christmas Outing',
    date: '25 December 2024',
    mediaType: 'photo',
    image: '/assets/hero/gallery3.png',
    caption: 'Christmas Parade celebrations',
  },
  {
    id: 4,
    year: 2024,
    outing: 'Christmas Outing',
    date: '25 December 2024',
    mediaType: 'photo',
    image: '/assets/hero/gallery4.png',
    caption: 'Festive masquerade display',
  },
  {
    id: 5,
    year: 2024,
    outing: 'Anniversary Celebration',
    date: '8 January 2024',
    mediaType: 'photo',
    image: '/assets/hero/hero1.png',
    caption: '25th Anniversary Grand Celebration',
  },
  {
    id: 6,
    year: 2024,
    outing: 'Anniversary Celebration',
    date: '8 January 2024',
    mediaType: 'photo',
    image: '/assets/hero/hero2.png',
    caption: 'Anniversary outing highlights',
  },
  {
    id: 7,
    year: 2024,
    outing: 'New Year Outing',
    date: '1 January 2024',
    mediaType: 'photo',
    image: '/assets/hero/gallery5.png',
    caption: 'New Year Parade 2024 - Community celebration',
  },
  {
    id: 8,
    year: 2024,
    outing: 'New Year Outing',
    date: '1 January 2024',
    mediaType: 'photo',
    image: '/assets/hero/gallery6.png',
    caption: 'New Year Parade 2024 - Masquerade showcase',
  },
  {
    id: 9,
    year: 2024,
    outing: 'New Year Outing',
    date: '1 January 2024',
    mediaType: 'photo',
    image: '/assets/hero/gallery_1_2024.png',
    caption: '2024 New Year Parade - Cultural celebration',
  },
  {
    id: 10,
    year: 2024,
    outing: 'New Year Outing',
    date: '1 January 2024',
    mediaType: 'photo',
    image: '/assets/hero/gallery_2024.png',
    caption: '2024 New Year Parade - Festive display',
  },
  {
    id: 11,
    year: 2023,
    outing: 'New Year Outing',
    date: '1 January 2023',
    mediaType: 'photo',
    image: '/assets/hero/hero3.png',
    caption: '2023 New Year Parade highlights',
  },
  {
    id: 12,
    year: 2023,
    outing: 'Anniversary Celebration',
    date: '8 January 2023',
    mediaType: 'photo',
    image: '/assets/hero/hero4.png',
    caption: '24th Anniversary celebration',
  },
  {
    id: 13,
    year: 2023,
    outing: 'Heritage Night',
    date: '15 December 2023',
    mediaType: 'photo',
    image: '/assets/hero/hero5.png',
    caption: 'Heritage Night 2023',
  },
  {
    id: 14,
    year: 2023,
    outing: 'New Year Outing',
    date: '1 January 2023',
    mediaType: 'photo',
    image: '/assets/hero/gallery7_2023.png',
    caption: '2023 New Year Parade - Masquerade performance',
  },
  {
    id: 15,
    year: 2023,
    outing: 'New Year Outing',
    date: '1 January 2023',
    mediaType: 'photo',
    image: '/assets/hero/gallery8_2023.png',
    caption: '2023 New Year Parade - Community celebration',
  },
  {
    id: 16,
    year: 2023,
    outing: 'New Year Outing',
    date: '1 January 2023',
    mediaType: 'photo',
    image: '/assets/hero/gallery9_2023.png',
    caption: '2023 New Year Parade - Cultural showcase',
  },
  {
    id: 17,
    year: 2023,
    outing: 'New Year Outing',
    date: '1 January 2023',
    mediaType: 'photo',
    image: '/assets/hero/gallery10_2023.png',
    caption: '2023 New Year Parade - Festive display',
  },
  {
    id: 18,
    year: 2023,
    outing: 'New Year Outing',
    date: '1 January 2023',
    mediaType: 'photo',
    image: '/assets/hero/gallery11_2023.png',
    caption: '2023 New Year Parade - Grand finale',
  },
  {
    id: 19,
    year: 2022,
    outing: 'New Year Outing',
    date: '1 January 2022',
    mediaType: 'photo',
    image: '/assets/hero/image6.png',
    caption: '2022 New Year Parade',
  },
  {
    id: 20,
    year: 2022,
    outing: 'New Year Outing',
    date: '1 January 2022',
    mediaType: 'photo',
    image: '/assets/hero/gallery12_2022.png',
    caption: '2022 New Year Parade - Masquerade celebration',
  },
  {
    id: 21,
    year: 2022,
    outing: 'New Year Outing',
    date: '1 January 2022',
    mediaType: 'photo',
    image: '/assets/hero/gallery13_2022.png',
    caption: '2022 New Year Parade - Community gathering',
  },
  {
    id: 22,
    year: 2022,
    outing: 'New Year Outing',
    date: '1 January 2022',
    mediaType: 'photo',
    image: '/assets/hero/gallery14_2022.png',
    caption: '2022 New Year Parade - Cultural performance',
  },
  {
    id: 23,
    year: 2022,
    outing: 'New Year Outing',
    date: '1 January 2022',
    mediaType: 'photo',
    image: '/assets/hero/gallery15_2022.png',
    caption: '2022 New Year Parade - Festive showcase',
  },
  {
    id: 24,
    year: 2021,
    outing: 'New Year Outing',
    date: '1 January 2021',
    mediaType: 'photo',
    image: '/assets/hero/gallery_2021.png',
    caption: '2021 New Year Parade - Cultural celebration',
  },
  {
    id: 25,
    year: 2021,
    outing: 'New Year Outing',
    date: '1 January 2021',
    mediaType: 'photo',
    image: '/assets/hero/gallery16_2021.png',
    caption: '2021 New Year Parade - Masquerade performance',
  },
  {
    id: 26,
    year: 2021,
    outing: 'New Year Outing',
    date: '1 January 2021',
    mediaType: 'photo',
    image: '/assets/hero/gallery17_2021.png',
    caption: '2021 New Year Parade - Community gathering',
  },
  {
    id: 27,
    year: 2021,
    outing: 'New Year Outing',
    date: '1 January 2021',
    mediaType: 'photo',
    image: '/assets/hero/gallery18_2021.png',
    caption: '2021 New Year Parade - Festive display',
  },
  {
    id: 28,
    year: 2021,
    outing: 'New Year Outing',
    date: '1 January 2021',
    mediaType: 'photo',
    image: '/assets/hero/gallery19_2021.png',
    caption: '2021 New Year Parade - Grand celebration',
  },
];

export const galleryYears = [2024, 2023, 2022, 2021, 2020];

export const teamMembers = [
  {
    name: 'Sampson Yaw Boateng',
    title: 'Chairperson / President',
    focus: 'Executive headship, AGM stewardship, and constitutional guardianship.',
    portrait: '/assets/hero/sampson.png',
    isExecutive: true,
  },
  {
    name: 'Magnus Nii-Boye',
    title: 'Vice Chairperson',
    focus: 'Acts for the Chairperson and coordinates emergency meetings when required.',
    portrait: '/assets/hero/magnus.png',
    isExecutive: true,
  },
  {
    name: 'Alfred Ankomah',
    title: 'Vice Chairperson',
    focus: 'Acts for the Chairperson and coordinates emergency meetings when required.',
    portrait: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    isExecutive: true,
  },
  {
    name: 'Georgina',
    title: 'General Secretary',
    focus: 'Correspondence, notices, and accurate minutes for MM, OM, and EMB sittings.',
    portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    isExecutive: true,
  },
  {
    name: 'Evelyn Adu Gyamfi',
    title: 'Vice General Secretary',
    focus: 'Supports documentation, agenda preparation, and records continuity.',
    portrait: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    isExecutive: false,
  },
  {
    name: 'Isaac Kofi Takor',
    title: 'Treasurer / Financial Secretary',
    focus: 'Receives dues, banks funds, and issues audited financial statements.',
    portrait: 'https://images.unsplash.com/photo-1519345178453-4c7e3a976aa0?auto=format&fit=crop&w=600&q=80',
    isExecutive: true,
  },
  {
    name: 'Matthew Ntsiful',
    title: 'Vice Treasurer',
    focus: 'Ensures dual-control on collections and benevolence disbursements.',
    portrait: '/assets/hero/mathew.png',
    isExecutive: false,
  },
  {
    name: 'Alfred Edusei',
    title: 'Organizing Secretary',
    focus: 'Mobilizes branches, turnout logistics, and volunteer rosters.',
    portrait: '/assets/hero/Edusei.png',
    isExecutive: true,
  },
  {
    name: 'McDonald Som',
    title: 'Public Relations Officer',
    focus: 'Represents the society publicly and leads socio-economic partnerships.',
    portrait: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    isExecutive: true,
  },
  {
    name: 'Aaron Paha',
    title: 'Public Relations Officer',
    focus: 'Represents the society publicly and leads socio-economic partnerships.',
    portrait: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80',
    isExecutive: false,
  },
  {
    name: 'Benjamin Doke',
    title: 'Band Leader',
    focus: 'Directs brass ensembles, music rehearsals, and parade cadence.',
    portrait: '/assets/hero/doke.png',
    isExecutive: false,
  },
  {
    name: 'Teddy Abakah-Ansah Jnr',
    title: 'Chief Tailor',
    focus: 'Oversees costumes, fittings, and design continuity for annual collections.',
    portrait: '/assets/hero/teddy.png',
    isExecutive: false,
  },
  {
    name: 'Richard Addo Sackah',
    title: 'Chaplain',
    focus: 'Spiritual care, devotionals, and pastoral guidance for members.',
    portrait: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    isExecutive: false,
  },
  {
    name: 'Malik Abdallah',
    title: 'Operations Manager',
    focus: 'Implements safety plans, turnout routes, and resource deployment.',
    portrait: '/assets/hero/malik.png',
    isExecutive: true,
    imagePosition: 'center top',
  },
  {
    name: 'Branch Leaders Council',
    title: 'Regional Representatives',
    focus: 'Provide ground intelligence from branches and enforce EMB resolutions.',
    portrait: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80',
    isExecutive: false,
  },
];

export type BranchLeader = {
  name: string;
  image: string;
  role?: string;
};

export type Branch = {
  name: string;
  lead: string;
  leaders: BranchLeader[];
  members: number;
  contact: string;
  focus: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  address?: string;
};

// Helper function to generate human placeholder avatar based on seed
const getLeaderAvatar = (seed: string) =>
  `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;

export const branches: Branch[] = [
  {
    name: 'KANSA',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: getLeaderAvatar('KANSA'), role: 'Lead' }
    ],
    members: 0,
    contact: 'kansa@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Kansa, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'FIFA',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: getLeaderAvatar('FIFA'), role: 'Lead' }
    ],
    members: 0,
    contact: 'fifa@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'FIFA, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'DAAVI AMA',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: getLeaderAvatar('DAAVI AMA'), role: 'Lead' }
    ],
    members: 0,
    contact: 'daavi@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Daavi Ama, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'JM',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: getLeaderAvatar('JM'), role: 'Lead' }
    ],
    members: 0,
    contact: 'jm@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'JM, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'MPOHOR',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'mpohor@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Mpohor, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'APOWA',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'apowa@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Apowa, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'BMB',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'bmb@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'BMB, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'MALIK',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'malik@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Malik, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'APREMEDO',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'apremedo@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Apremedo, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'NEWSITE',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'newsite@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Newsite, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'COCOA VILLA',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'cocoavilla@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Cocoa Villa, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'UNCLE CEE',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'unclecee@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Uncle Cee, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'NO.2',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'no2@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'No.2, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'NO.3',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'no3@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'No.3, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'ASEMENSUDO',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'asemensudo@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Asemensudo, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'ESSIKADO',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'essikado@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Essikado, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'TAKOR',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'takor@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Takor, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'ELMINA',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'elmina@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 5.0847, lng: -1.3500 },
    address: 'Elmina, Central Region, Ghana',
  },
  {
    name: 'LAGOS TOWN',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'lagostown@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Lagos Town, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'KWESIMINTIM',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'kwesimintim@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Kwesimintim, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'ANAJI',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'anaji@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Anaji, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'AMANFUL',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'amanful@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Amanful, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'TEDDY',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'teddy@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Teddy, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'GHOSTY',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'ghosty@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Ghosty, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'PRESIDENT',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'president@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'President, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'NEW TAKORADI',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'newtakoradi@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'New Takoradi, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'EFFIAKUMA',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'effiakuma@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Effiakuma, Sekondi-Takoradi, Ghana',
  },
  {
    name: 'SMALL LONDON',
    lead: 'Branch Lead',
    leaders: [
      { name: 'Branch Leader', image: '', role: 'Lead' }
    ],
    members: 0,
    contact: 'smalllondon@suprememasq.org',
    focus: 'Community engagement & cultural activities',
    coordinates: { lat: 4.9431, lng: -1.7074 },
    address: 'Small London, Sekondi-Takoradi, Ghana',
  },
];

export const newsFeed = [
  {
    branch: 'Society HQ',
    title: '2025 Heritage Route approvals confirmed',
    summary: 'City authorities approved the updated outing blueprint with new hydration pods and medics.',
    postedOn: '12 Jan 2025 • 08:45',
  },
  {
    branch: 'Lagos Marina',
    title: 'New member onboarding sprint',
    summary: 'Branch officers reviewing 53 volunteer applications with design, finance, and media expertise.',
    postedOn: '11 Jan 2025 • 17:20',
  },
  {
    branch: 'Accra Central',
    title: 'Media upload marathon',
    summary: '35 new rehearsal clips added to the archive for executive review and diaspora streaming.',
    postedOn: '10 Jan 2025 • 19:00',
  },
];

export const stats = [
  { label: 'Active members', value: '4,000+' },
  { label: 'Global branches', value: '30+' },
];

export const dashboards: Record<
  DashboardRole,
  {
    title: string;
    subtitle: string;
    sidebarLinks: { label: string; badge?: string }[];
    stats: { label: string; value: string; trend?: string }[];
    highlights: { title: string; detail: string }[];
    actions: { label: string; helper: string }[];
  }
> = {
  member: {
    title: 'Member workspace',
    subtitle: 'Track attire dues, RSVP to turnouts, and engage with your branch forum.',
    sidebarLinks: [
      { label: 'Branch updates', badge: '4' },
      { label: 'Forums' },
      { label: 'Payments' },
      { label: 'Event reminders', badge: '2' },
      { label: 'Media gallery' },
    ],
    stats: [
      { label: 'Attire dues', value: 'Paid - Jan', trend: 'Auto-reminder active' },
      { label: 'Events this month', value: '3 turnouts' },
      { label: 'Forum threads', value: '12 unread' },
    ],
    highlights: [
      { title: 'Branch forum pulse', detail: 'Share costume sketches before Friday review.' },
      { title: 'Upcoming reminder', detail: 'Lagos Marina Float dress rehearsal • 16 Jan, 18:00' },
    ],
    actions: [
      { label: 'Pay donation via Paystack', helper: 'Support benevolence fund' },
      { label: 'Upload rehearsal clip', helper: 'Media hub • 4K encouraged' },
    ],
  },
  officer: {
    title: 'Branch officer console',
    subtitle: 'Approve members, oversee payments, and keep forums healthy.',
    sidebarLinks: [
      { label: 'Membership requests', badge: '9' },
      { label: 'Branch forums' },
      { label: 'Payments & dues' },
      { label: 'Branch events' },
      { label: 'Media uploads' },
    ],
    stats: [
      { label: 'Pending approvals', value: '9' },
      { label: 'Collections', value: '₦4.2M', trend: '+12% vs last month' },
      { label: 'Gallery submissions', value: '18' },
    ],
    highlights: [
      { title: 'Route tracking', detail: 'Confirm marshals for Marina → Cathedral corridor.' },
      { title: 'Forum check-in', detail: 'Pin new turnout outlines for clarity.' },
    ],
    actions: [
      { label: 'Approve 3 costume artisans', helper: 'Interviews scheduled Thursday' },
      { label: 'Sync Paystack payout', helper: 'Next transfer • 14 Jan' },
    ],
  },
  executive: {
    title: 'Executive intelligence',
    subtitle: 'Oversee branches, manage society-wide events, and broadcast announcements.',
    sidebarLinks: [
      { label: 'Announcements' },
      { label: 'Event control room' },
      { label: 'Branch oversight' },
      { label: 'Media hub' },
      { label: 'Notifications' },
    ],
    stats: [
      { label: 'Upcoming national events', value: '6' },
      { label: 'Branches on track', value: '16 / 18' },
      { label: 'Media reach', value: '2.3M impressions', trend: 'FCM push ready' },
    ],
    highlights: [
      { title: 'National briefing', detail: 'Schedule Arkasel push for joint announcement.' },
      { title: 'Media hub', detail: 'Review diaspora submissions before Friday stream.' },
    ],
    actions: [
      { label: 'Publish society-wide update', helper: 'Draft saved 85%' },
      { label: 'Review branch KPIs', helper: 'Export analytics to PDF' },
    ],
  },
  admin: {
    title: 'Admin control center',
    subtitle: 'Manage roles, partners, and analytics with precision.',
    sidebarLinks: [
      { label: 'User roles' },
      { label: 'Payments & donations' },
      { label: 'Gallery moderation', badge: '5' },
      { label: 'Reporting & analytics' },
      { label: 'Partner management' },
    ],
    stats: [
      { label: 'Active roles', value: '4,812' },
      { label: 'Paystack recon', value: '100% synced' },
      { label: 'Flagged assets', value: '5' },
    ],
    highlights: [
      { title: 'Audit reminder', detail: 'Update media rights before diasporan showcase.' },
      { title: 'Partner spotlight', detail: 'New sponsorship proposal from CultureLab.' },
    ],
    actions: [
      { label: 'Assign new executive', helper: 'Pending verification' },
      { label: 'Export quarterly report', helper: 'MySQL snapshot • 60 MB' },
    ],
  },
};

