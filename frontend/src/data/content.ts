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
      'The Supreme Masqueraders Society is a vibrant cultural organization dedicated to preserving, promoting, and celebrating the rich tradition of masquerade culture. We are a community of passionate individuals committed to engaging, empowering, and uplifting youth through the art and culture of masquerade.',
  },
  ourStory: {
    title: 'Our Story',
    establishment: '8 January 2000',
    origins:
      'Founded in Sekondi-Takoradi, the Supreme Masqueraders Society emerged from a deep-rooted passion for preserving our cultural heritage. What began as a small group of dedicated individuals has grown into a thriving community of over 4,000 members across 18 branches worldwide.',
    culturalSignificance:
      'Masquerade culture holds profound significance in our community, representing not just entertainment but a living connection to our ancestors, traditions, and collective identity. Our society serves as a bridge between generations, ensuring these precious traditions continue to thrive.',
    milestones: [
      { year: '2000', event: 'Society established in Sekondi-Takoradi' },
      { year: '2005', event: 'Expanded to first branch outside Sekondi-Takoradi' },
      { year: '2010', event: 'Reached 500 active members milestone' },
      { year: '2015', event: 'Launched youth empowerment programs' },
      { year: '2020', event: 'Celebrated 20 years of cultural preservation' },
      { year: '2024', event: 'Reached 4,000+ members across 18 branches' },
    ],
  },
  mission: {
    title: 'Mission Statement',
    statement:
      'To engage, empower, and uplift youth through the art and culture of masquerade, fostering unity, creativity, and community development.',
  },
  vision: {
    title: 'Vision Statement',
    statement:
      'To build a vibrant and inclusive community where the youth embrace cultural identity, celebrate heritage, and achieve personal growth through masquerade traditions.',
  },
  coreValues: [
    { title: 'Youth Empowerment', description: 'Encouraging leadership, participation, and self-expression among young people.' },
    { title: 'Unity', description: 'Strengthening social bonds and teamwork through collective participation.' },
    { title: 'Heritage', description: 'Preserving and promoting masquerade traditions and local customs.' },
    { title: 'Creativity', description: 'Fostering artistic expression, performance skills, and cultural innovation.' },
    { title: 'Discipline', description: 'Upholding ethical behavior, respect, and commitment to excellence.' },
    { title: 'Community', description: 'Building stronger communities through engagement and service.' },
  ],
  activities: [
    { 
      title: 'Masquerade Performances', 
      description: 'Regular performances at festivals, cultural events, and community celebrations.',
      icon: '🎭'
    },
    { 
      title: 'Youth Empowerment Initiatives', 
      description: 'Programs designed to develop leadership skills, creativity, and confidence in young members.',
      icon: '🌟'
    },
    { 
      title: 'Cultural Preservation', 
      description: 'Documenting, teaching, and preserving traditional masquerade practices and knowledge.',
      icon: '📚'
    },
    { 
      title: 'Community Programs', 
      description: 'Outreach initiatives that bring masquerade culture to schools, community centers, and public spaces.',
      icon: '🤝'
    },
    { 
      title: 'Festive Celebrations', 
      description: 'Annual December and New Year outings with brass band music, showcasing our vibrant traditions.',
      icon: '🎉'
    },
  ],
  achievements: [
    { title: '24+ Years of Service', description: 'Over two decades of dedicated cultural preservation and community engagement.' },
    { title: '4,000+ Active Members', description: 'A growing community of passionate individuals across 18 branches worldwide.' },
    { title: '10,000+ Annual Outing Attendees', description: 'Our festive celebrations bring together thousands of community members each year.' },
    { title: '500+ Youth Mentored', description: 'Comprehensive mentorship programs that have transformed young lives.' },
  ],
  identity: {
    logo: {
      title: 'Our Logo',
      description:
        'The Supreme Masqueraders Society logo represents the fusion of tradition and modernity. The design incorporates elements that symbolize our commitment to preserving cultural heritage while embracing innovation and growth.',
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
  contact: {
    phone: '+233 XX XXX XXXX',
    email: 'info@suprememasqueraders.org',
    location: 'Sekondi-Takoradi, Ghana',
    socialMedia: {
      facebook: 'https://facebook.com/suprememasqueraders',
      instagram: 'https://instagram.com/suprememasqueraders',
      twitter: 'https://x.com/S_masqueraders',
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

export const sponsorsAndPartners = [
  { name: 'Evergreen Band Movement', logo: '/assets/hero/partner.png' },
  { name: 'Emoji Designer', logo: '/assets/hero/partner1.png' },
  { name: 'Blue Scouts Band', logo: '/assets/hero/partners2.png' },
  { name: 'Orpnation Foundation', logo: '/assets/hero/partner3.png' },
  { name: 'COWRM', logo: '/assets/hero/partner4.png' },
  { name: 'Connect FM', logo: '/assets/hero/partner6.png' },
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
    name: 'Ama Tetteh',
    title: 'Global Executive Director',
    focus: 'Vision & partnerships',
    portrait: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Chike Adewale',
    title: 'Chief Operations Officer',
    focus: 'Turnouts & safety',
    portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Lola Mensah',
    title: 'Head of Media & Storytelling',
    focus: 'Media hub & archives',
    portrait: 'https://images.unsplash.com/photo-1544723795-432537f5f40b?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Kwame Owusu',
    title: 'Chief Financial Steward',
    focus: 'Payments & donor relations',
    portrait: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
  },
];

export const branches = [
  {
    name: 'KANSA',
    lead: 'Branch Lead',
    members: 0,
    contact: 'kansa@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'FIFA',
    lead: 'Branch Lead',
    members: 0,
    contact: 'fifa@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'DAAVI AMA',
    lead: 'Branch Lead',
    members: 0,
    contact: 'daavi@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'JM',
    lead: 'Branch Lead',
    members: 0,
    contact: 'jm@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'MPOHOR',
    lead: 'Branch Lead',
    members: 0,
    contact: 'mpohor@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'APOWA',
    lead: 'Branch Lead',
    members: 0,
    contact: 'apowa@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'BMB',
    lead: 'Branch Lead',
    members: 0,
    contact: 'bmb@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'MALIK',
    lead: 'Branch Lead',
    members: 0,
    contact: 'malik@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'APREMEDO',
    lead: 'Branch Lead',
    members: 0,
    contact: 'apremedo@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'NEWSITE',
    lead: 'Branch Lead',
    members: 0,
    contact: 'newsite@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'COCOA VILLA',
    lead: 'Branch Lead',
    members: 0,
    contact: 'cocoavilla@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'UNCLE CEE',
    lead: 'Branch Lead',
    members: 0,
    contact: 'unclecee@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'NO.2',
    lead: 'Branch Lead',
    members: 0,
    contact: 'no2@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'NO.3',
    lead: 'Branch Lead',
    members: 0,
    contact: 'no3@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'ASEMENSUDO',
    lead: 'Branch Lead',
    members: 0,
    contact: 'asemensudo@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'ESSIKADO',
    lead: 'Branch Lead',
    members: 0,
    contact: 'essikado@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'TAKOR',
    lead: 'Branch Lead',
    members: 0,
    contact: 'takor@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'ELMINA',
    lead: 'Branch Lead',
    members: 0,
    contact: 'elmina@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'LAGOS TOWN',
    lead: 'Branch Lead',
    members: 0,
    contact: 'lagostown@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'KWESIMINTIM',
    lead: 'Branch Lead',
    members: 0,
    contact: 'kwesimintim@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'ANAJI',
    lead: 'Branch Lead',
    members: 0,
    contact: 'anaji@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'AMANFUL',
    lead: 'Branch Lead',
    members: 0,
    contact: 'amanful@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'TEDDY',
    lead: 'Branch Lead',
    members: 0,
    contact: 'teddy@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'GHOSTY',
    lead: 'Branch Lead',
    members: 0,
    contact: 'ghosty@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'PRESIDENT',
    lead: 'Branch Lead',
    members: 0,
    contact: 'president@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'NEW TAKORADI',
    lead: 'Branch Lead',
    members: 0,
    contact: 'newtakoradi@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'EFFIAKUMA',
    lead: 'Branch Lead',
    members: 0,
    contact: 'effiakuma@suprememasq.org',
    focus: 'Community engagement & cultural activities',
  },
  {
    name: 'SMALL LONDON',
    lead: 'Branch Lead',
    members: 0,
    contact: 'smalllondon@suprememasq.org',
    focus: 'Community engagement & cultural activities',
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
  { label: 'Global branches', value: '18' },
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

