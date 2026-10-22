export const workExperiences = [
  {
    organization: 'Universitas Logistik dan Bisnis Internasional',
    role: 'Full-Stack Developer',
    period: 'Jun 2024 – Sept 2024',
    description:
      'Membangun arsitektur fullstack aplikasi web helpdesk untuk mendukung komunikasi harian dan penyelesaian tiket antarpengguna, mengembangkan fitur secara end-to-end mulai dari antarmuka hingga layanan API dan penyimpanan data, serta mengoptimalkan dan memelihara performa sistem, kecepatan pemuatan halaman, dan pengalaman pengguna secara menyeluruh.',
    logo: '/images/ULBI_Logo.png',
    logoAlt: 'Logo Universitas Logistik dan Bisnis Internasional',
  },
  {
    organization: 'Dinas Komunikasi dan Informatika Kab Purwakarta',
    role: 'Intern Full-Stack Developer',
    period: 'Oct 2025 – Jan 2026',
    description:
      'Merancang dan mengembangkan situs web company profile secara end-to-end mulai dari pembuatan wireframe UI/UX hingga implementasi antarmuka yang responsif, membangun platform pemantauan CCTV regional berbasis web yang mencakup desain antarmuka, integrasi API, hingga pengoperasian pada server VPS, serta mengintegrasikan sistem pengoperasian berbasis web ke sistem operasi untuk aplikasi keuangan.',
    logo: '/images/Diskominfo_Logo.png',
    logoAlt: 'Logo Dinas Komunikasi dan Informatika Kabupaten Purwakarta',
  },
]

export const projectExperiences = [
  {
    name: 'Elfume',
    type: 'Android',
    period: 'Feb 2025',
    description:
      'Engineered a mobile perfume e-commerce application using Flutter (Kotlin) for cross-platform frontend, integrated with a high-performance Go Fiber backend and MongoDB database.',
    technologies: ['Flutter', 'Kotlin', 'Go Fiber', 'MongoDB'],
  },
  {
    name: 'Idbiz',
    type: 'Web',
    period: 'Sept 2024 – Feb 2025',
    description:
      'Developed a service marketplace platform utilizing JSCroot JavaScript framework for frontend, Go Fiber for backend API, and MongoDB NoSQL for persistent data management.',
    technologies: ['JSCroot', 'JavaScript', 'Go Fiber', 'MongoDB'],
  },
  {
    name: 'Bukuin',
    type: 'Web',
    period: 'Aug 2024 – Sept 2024',
    description:
      'Created a web-based interactive book catalog platform featuring modern Vanilla JavaScript frontend, Go Fiber REST API, and MongoDB database.',
    technologies: ['Vanilla JavaScript', 'Go Fiber', 'REST API', 'MongoDB'],
  },
  {
    name: 'GoDeez',
    type: 'Web',
    period: 'May 2023 – Jul 2023',
    description:
      'Built an online music catalog integrating Deezer API using Go (Gin Framework) and MySQL database. Technical implementation was documented and published as an official e-book on Google Playbook (Sept 2023).',
    technologies: ['Go', 'Gin Framework', 'Deezer API', 'MySQL'],
  },
  {
    name: 'Authentic Store',
    type: 'Freelance',
    period: 'Jul 2023',
    description:
      'Designed and delivered a functional e-commerce website using PHP and JavaScript to support student business operations.',
    technologies: ['PHP', 'JavaScript'],
  },
]

export const researchPublications = [
  {
    title: 'CCTV-Based Road Weather Condition Classification Using Vision Transformer',
    institution: 'STMIK Catur Sakti Kendari',
    date: 'Apr 2026',
    description:
      'Developed a Deep Learning Vision Transformer (ViT) model utilizing CCTV camera images to classify road weather conditions (rainy/clear) with an 88% accuracy rate, providing real-time weather information for transport safety.',
    highlight: '88%',
    highlightLabel: 'reported accuracy',
  },
  {
    title: 'Systematic Literature Review of Image-Based Weather Classification Using Deep Learning Methods',
    institution: 'INTI Nusa Mandiri Journal',
    date: 'Aug 2026',
    description:
      'Conducted a Systematic Literature Review (SLR) analyzing 73 research papers on deep learning trends in image-based weather recognition, comparing CNN vs. Transformer architectures on public datasets like DAWN and WeatherNet.',
    highlight: '73',
    highlightLabel: 'papers reviewed',
  },
]

// Editorial validation notes: retain these until the author confirms the stated details.
export const contentValidationNotes = [
  { state: 'Needs confirmation', item: 'Elfume', question: 'Clarify how Flutter and Kotlin were used together in the implementation.' },
  { state: 'Needs confirmation', item: 'GoDeez', question: 'Verify the exact e-book platform name currently supplied as Google Playbook.' },
  { state: 'Needs confirmation', item: 'CCTV-Based Road Weather Condition Classification Using Vision Transformer', question: 'Confirm publication or presentation status and whether a paper URL, DOI, or repository link is available.' },
  { state: 'Needs confirmation', item: 'Systematic Literature Review of Image-Based Weather Classification Using Deep Learning Methods', question: 'Confirm publication details and whether a DOI or article URL is available.' },
]
