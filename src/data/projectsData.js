// Export categories separately
export const categories = [
  { id: "all", name: "All Projects", nameAm: "ሁሉም ፕሮጀክቶች" },
  { id: "Telecom Infrastructure", name: "Telecom Infrastructure", nameAm: "ቴሌኮም መሠረተ ልማት" },
  { id: "Power & Utilities", name: "Power & Utilities", nameAm: "ሃይል እና መገልገያዎች" }
];

export const projectsData = [
  {
    id: 1,
    title: "Afdera Utility Infrastructure Project",
    titleAm: "አፋደራ የመገልገያ መሠረተ ልማት ፕሮጀክት",
    location: "Afar-Afdera Region, Ethiopia",
    category: "Power & Utilities",
    completed: "2024",
    duration: "12 months",
    description: "Complete utility infrastructure deployment including pole installation, fiber optic cabling, and electrical systems in the challenging Afar-Afdera region.",
    challenge: "Extreme temperatures reaching 45°C+, remote location with limited access, difficult rocky terrain, and logistical challenges.",
    solution: "Specialized heat-resistant equipment, local workforce training, phased deployment approach with mobile support teams, and drone-assisted surveying.",
    result: "Successfully deployed 50+ km of fiber optic network and 200+ utility poles serving 5,000+ residents. Improved connectivity and power access for the local community.",
    impact: "Reduced power outage by 75% and increased internet connectivity by 200% in the region.",
    client: "Ethiopian Electric Utility / Ethio Telecom",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/3861969/engineer-working-on-fiber-optic-cable-3861969.jpg",
        thumbnail: "https://images.pexels.com/photos/3861969/engineer-working-on-fiber-optic-cable-3861969.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        caption: "Fiber optic cable installation in Afar region",
        captionAm: "በአፋር ክልል የፋይበር ኦፕቲክ ገመድ መትከል",
        type: "installation",
        date: "March 2024"
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/261855/pexels-photo-261855.jpeg",
        thumbnail: "https://images.pexels.com/photos/261855/pexels-photo-261855.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        caption: "Utility pole installation team at work",
        captionAm: "የመገልገያ ምሰሶ መትከል ቡድን በስራ ላይ",
        type: "installation",
        date: "April 2024"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/159298/gears-cogs-machining-technology-159298.jpeg",
        thumbnail: "https://images.pexels.com/photos/159298/gears-cogs-machining-technology-159298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        caption: "Equipment and hardware setup",
        captionAm: "የመሳሪያ እና ሃርድዌር መጫን",
        type: "equipment",
        date: "May 2024"
      }
    ],
    beforeAfter: {
      before: {
        url: "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg",
        caption: "Before: Undeveloped area with no infrastructure",
        captionAm: "ከበፊቱ: መሠረተ ልማት የሌለው አካባቢ"
      },
      after: {
        url: "https://images.pexels.com/photos/3861969/engineer-working-on-fiber-optic-cable-3861969.jpg",
        caption: "After: New utility poles and fiber optic network installed",
        captionAm: "ከሆነ በኋላ: አዲስ የመገልገያ ምሰሶዎች እና የፋይበር ኦፕቲክ ኔትወርክ ተጭኗል"
      }
    },
    mapView: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260485283!2d40.5!3d13.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMwJzAwLjAiTiA0MMKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890",
      location: "Afar-Afdera Region, Ethiopia",
      coordinates: "13.5° N, 40.5° E"
    },
    stats: {
      fiberKm: "50+",
      utilityPoles: "200+",
      households: "5,000+",
      powerReduction: "75%"
    }
  },
  {
    id: 2,
    title: "Addis Ababa Fiber Optic Network",
    titleAm: "አዲስ አበባ የፋይበር ኦፕቲክ ኔትወርክ",
    location: "Addis Ababa, Ethiopia",
    category: "Telecom Infrastructure",
    completed: "2023",
    duration: "18 months",
    description: "Design and implementation of fiber optic network infrastructure across key districts of Addis Ababa.",
    challenge: "Urban density, traffic management during construction, existing utility conflicts, and strict city regulations.",
    solution: "Night-time construction schedule, micro-trenching technology, comprehensive stakeholder coordination.",
    result: "80+ km of fiber optic network deployed across 5 districts serving 100,000+ households.",
    client: "Ethio Telecom",
    images: [],
    stats: {
      fiberKm: "80+",
      districts: "5",
      households: "100,000+",
      speedIncrease: "500%"
    }
  },
  {
    id: 3,
    title: "Bahir Dar University Campus Network",
    titleAm: "ባህር ዳር ዩኒቨርሲቲ ካምፓስ ኔትወርክ",
    location: "Bahir Dar, Ethiopia",
    category: "Telecom Infrastructure",
    completed: "2023",
    duration: "8 months",
    description: "Complete campus-wide network infrastructure installation for Bahir Dar University.",
    challenge: "Large campus area covering 500+ hectares, multiple buildings requiring connectivity, academic schedule disruptions.",
    solution: "Phased installation during academic breaks, underground duct system, fiber to each building.",
    result: "Complete campus connectivity for 15+ buildings serving 50,000+ students and faculty.",
    client: "Bahir Dar University",
    images: [],
    stats: {
      buildings: "15+",
      students: "50,000+",
      connectionSpeed: "1 Gbps"
    }
  }
];

export default { projectsData, categories };