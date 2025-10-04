// wills-site.config.ts

const CONFIG = {
  github: {
    username: 'wstern1234', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/USER/USER.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/USER/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['USER/my-project1', 'USER/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['USER/wills-site'], // List of repository names to display. example: ['USER/my-project1', 'USER/my-project2']
      },
    },
    external: {
      header: 'Research & Volunteering',
      projects: [
        {
          title: 'Associated Students of the University of California',
          description:
            'Chief Technology Officer\nSep 2023 - May 2024\n\nDirected technical projects within the student senate, improving digital infrastructure and leading cross-functional engineering efforts for UC Berkeley’s 40k+ student body.',
          imageUrl:
            'https://raw.githubusercontent.com/wstern1234/WillsPersonalWebsite/refs/heads/master/public/asuc.png',
          link: 'https://studentunion.berkeley.edu/',
        },
        {
          title: 'Lawrence Berkeley National Lab',
          description:
            'Machine Learning Research Assistant\nJun 2021 - Aug 2021\n\nConducted AI/ML research on pentapeptide structures, using protein data APIs, serialization methods, and custom algorithms to process large biological datasets.',
          imageUrl:
            'https://raw.githubusercontent.com/wstern1234/WillsPersonalWebsite/refs/heads/master/public/lbnl.png',
          link: 'https://www.lbl.gov/',
        },
        {
          title: 'NASA',
          description:
            'NASA Student Researcher\nJan 2018 - Aug 2018\n\nAccepted into a highly selective NASA-sponsored rocket launch program to design and build a spaceflight experiment as a solo middle school student (typically reserved for high school class projects). Developed an experiment to detect phosphorescence from solar radiation in low Earth orbit, which launched into space June 21st, 2018.',
          imageUrl:
            'https://raw.githubusercontent.com/wstern1234/WillsPersonalWebsite/refs/heads/master/public/nasa.png',
          link: 'https://www.nasa.gov/wallops/',
        },
      ],
    },
  },
  seo: {
    title: 'Wills Stern',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'wills-stern',
    website: 'wills-stern.netlify.app',
    email: 'willsstern@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1yw6xD6txUe7JdoQv27hB30JCN4zmrobY/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'C/C++',
    'PyTorch',
    'TensorRT',
    'CUDA',
    'Hugging Face',
    'LangChain',
    'Transformers',
    'NLP',
    'Computer Vision',
    'AWS (S3, EC2, Athena)',
    'Google Cloud',
    'Docker',
    'REST APIs',
    'CI/CD',
    'Linux',
    'ETL pipelines',
    'Vector DBs',
    'RAG (retrieval-augmented generation)',
    'Testing & Validation',
    'Error Handling & Fault Tolerance',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'University of California, Berkeley',
      degree: 'B.A. Computer Science',
      from: 'Aug 2022',
      to: 'May 2025',
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'B.A. Data Science (Business & Industrial Analytics)',
      from: 'Aug 2022',
      to: 'May 2025',
    },
    {
      institution: 'San Ramon Valley HS / Diablo Valley College',
      degree: 'A.S. Computer Science (earned while in high school)',
      from: 'Aug 2018',
      to: 'June 2022',
    },
  ],
  // Work
  publications: [
    {
      title: 'Software Development Engineer @ AWS',
      conferenceName: 'Seattle, WA',
      journalName: 'Full-time: July 25 - Present',
      authors: 'Intern: May 24 - Aug 24',
      link: 'https://aws.amazon.com/',
      description:
        '• Built an AI-powered visualization pipeline, automating executive reporting and reducing analysis time from days to minutes.\n• Developed behavior-driven test coverage across S3 APIs, validating conditional logic and HTTP response handling to ensure reliability and backward compatibility.\n• Strengthened S3 bucket security with the cybersecurity team, mitigating misconfiguration risks and improving security compliance.',
    },
    {
      title: 'AI Research Engineer @ Mendel AI',
      conferenceName: 'San Jose, CA',
      journalName: 'Intern: Jun 23 - Aug 23',
      authors: '',
      link: 'https://www.mendel.ai/',
      description:
        '\n• Prototyped proprietary methods for knowledge extraction and parallelized processing using cloud computing, NLP, and Selenium.\n• Improved pipeline reliability through automation, system design, and cybersecurity practices, accelerating development of AI-powered clinical research tools.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'USER', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a class="text-primary" href="https://github.com/wstern1234/wills-site"
  //     target="_blank"
  //     rel="noreferrer"
  //   >wills-site</a>`,

  enablePWA: true,
};

export default CONFIG;
