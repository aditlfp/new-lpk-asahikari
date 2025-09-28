// Mock data for WMSJ 2025 website

export const mockData = {
  // Event Information
  eventInfo: {
    title: "World Muslim Scout Jamboree 2025",
    subtitle: "100th Gontor",
    tagline: "We are Muslim- Civilized, United, and Peaceful",
    description: "Join the World Muslim Scouts Jamboree 2025 as we gather scouts from across the globe to foster brotherhood, leadership, and peace. Explore the excitement, challenge your skills, and create lasting memories in the heart of Jakarta.",
    dates: {
      start: "2025-09-09",
      end: "2025-09-14",
      islamicDates: "16 – 21 Rabi'ul Awwal 1447 H"
    },
    location: {
      venue: "Cibubur Camping Ground",
      city: "East Jakarta",
      country: "Indonesia"
    }
  },

  // Navigation items
  navigation: [
    { label: 'Home', href: '#home', active: true },
    { label: 'Event Info', href: '#event-info' },
    { label: 'Payment Procedure', href: '#payment' },
    { label: 'Registration', href: '#registration' },
    { label: 'About Us', href: '#about' },
    { label: 'Publication Media', href: '#media' },
    { label: 'Sponsorship', href: '#sponsorship' },
    { label: 'e-Store', href: '#store' },
  ],

  // Social media links
  socialMedia: [
    { name: 'Twitter', url: 'https://x.com/WMSJamboree2025', icon: 'Twitter' },
    { name: 'Instagram', url: 'https://instagram.com/wmsjamboree2025', icon: 'Instagram' },
    { name: 'YouTube', url: 'https://www.youtube.com/@WMSJamboree2025', icon: 'Youtube' }
  ],

  // About section
  about: {
    title: "About WMSJ-2025",
    description: "World Muslim Scout Jamboree 2025 is a global gathering of Muslim Scouts, combining adventure, education, and unity in an immersive outdoor camp. Designed to foster brotherhood, harmony, peace for all humanity, and connecting youth from around the world.",
    images: [
      "/api/placeholder/300/200",
      "/api/placeholder/300/200",
      "/api/placeholder/300/300"
    ]
  },

  // Event schedule
  schedule: [
    {
      date: '09',
      month: 'SEPT',
      title: 'Opening Ceremony & Culture',
      activities: ['Opening Ceremony', 'Culture Activities', 'Welcome Reception']
    },
    {
      date: '10',
      month: 'SEPT',
      title: 'On Site Programme',
      activities: ['GDV', 'Culture', 'Peace', 'Adventure', 'Water Activities', 'Free time activity', 'Activities for International Participants', 'Out Site Programme', 'Community', 'Nature', 'Technology and Science']
    },
    {
      date: '11',
      month: 'SEPT',
      title: 'On Site Programme',
      activities: ['GDV', 'Culture', 'Peace', 'Adventure', 'Water Activities', 'Free time activity', 'Activities for International', 'Out Site Programme', 'Community', 'Nature', 'Technology and Science']
    },
    {
      date: '12',
      month: 'SEPT',
      title: 'On Site Programme',
      activities: ['GDV', 'Culture', 'Peace', 'Adventure', 'Water Activities', 'Free time activity', 'Activities for International', 'Out Site Programme', 'Community', 'Nature', 'Technology and Science']
    },
    {
      date: '13',
      month: 'SEPT',
      title: 'Sport Fest Together | Closing Ceremony',
      activities: ['Sports Festival', 'Closing Ceremony', 'Award Presentation']
    },
    {
      date: '14',
      month: 'SEPT',
      title: 'Camp Clearence & Departure',
      activities: ['Camp Cleanup', 'Departure Preparations', 'Final Goodbyes']
    }
  ],

  // Registration process
  registrationSteps: [
    {
      step: '01',
      title: 'Online Registration',
      description: 'Each participant must fill out the online registration form individually. Make sure all required personal information is filled in correctly.'
    },
    {
      step: '02',
      title: 'Participant Data Completion',
      description: 'After the registration and payment are completed, the committee will contact each team\'s accompanying leader to provide participant details. A WhatsApp group will be created for all accompanying leaders.'
    },
    {
      step: '03',
      title: 'Payment Process',
      description: 'Each international participant and accompanying leader must pay USD 350 per person. After payment, the proof of payment must be uploaded through the online registration form.'
    },
    {
      step: '04',
      title: 'Re-registration',
      description: 'Re-registration is done through the WMSJ application. Each delegation must also complete the Arrival and Departure Form via the link provided by the committee.'
    },
    {
      step: '05',
      title: 'Check-In',
      description: 'All participants must arrive at Cibubur Camping Ground, Jakarta, Indonesia, at least two days before September 9, 2025. Check-in is done by scanning the QR code using the WMSJ app upon arrival.'
    }
  ],

  // Contact information
  contact: {
    address: {
      line1: "Panitia World Muslim Scouts Jamboree 2025",
      line2: "Jl. Mujahidin 2, Parigi Baru, Pondok Aren",
      line3: "Tangerang Selatan - INDONESIA 15228"
    },
    email: "sekretariat.wmsj@gmail.com",
    phone: "0819 1926 2025"
  },

  // Footer information
  footer: {
    description: "The WMSJ stands for World Muslim Scouts Jamboree is above all an educational event that aims to contribute to the development of young muslim people in achieving their full physical, intellectual, emotional, social and spiritual potentials as individuals, as responsible citizens and as member of their own local, national and international communities.",
    copyright: "© 2024-2025 World Muslim Scouts Jamboree 2025. All rights reserved.",
    poweredBy: "Powered by Heru Project"
  }
};