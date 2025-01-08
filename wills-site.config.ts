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
            'Chief Technology Officer\nSep 2023 - May 2024\n\nLeading technical projects and affairs in the student government senate for UC Berkeley’s student body.',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4D0BAQFymoWf0GCpkg/company-logo_200_200/company-logo_200_200/0/1631325482780?e=1743033600&v=beta&t=L_lQxF25gjPXvGr6mvz-VAFVJ4xB8fvWlkEaPZhS_Gs',
          link: 'https://studentunion.berkeley.edu/',
        },
        {
          title: 'Lawrence Berkeley National Lab',
          description:
            'Researcher, Programmer\nJun 2021 - Aug 2021\n\nResearched with an LBNL biophysicist to study pentapeptide structures using AI/ML, serialization, and protein data bank APIs to process large amounts of protein structure data.',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4E0BAQFfc1NOEp9DgA/company-logo_200_200/company-logo_200_200/0/1640018826417/lawrence_berkeley_national_laboratory_logo?e=1743033600&v=beta&t=Vgr0jymbn6urIrR2c8qxGNrg7Z4dKPxw-_IyxGC86ks',
          link: 'https://www.lbl.gov/',
        },
        {
          title: 'NASA',
          description:
            'Astrophysics Researcher\nJan 2019 - Aug 2019\n\nCreated a rocket experiment, sponsored by NASA, to detect phosphorescence caused by solar radiation in low Earth orbit.',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4D0BAQGRBHWCcaAqGg/company-logo_200_200/company-logo_200_200/0/1630507197379/nasa_logo?e=1743033600&v=beta&t=mOJQvDuGGDFDqq-LFb28oYHMzkbwq8_iwRcRqUtL3nE',
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
    fileUrl: './William_Stern_Jan7_25.pdf', // 'https://wills-stern.netlify.app/static/media/William_Stern_Jan7_25.184fcff4.pdf', Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Leadership',
    'Communication',
    'Public Speaking',
    'Python',
    'JS/HTML/CSS',
    'C/C++',
    'Java',
    'SQL',
    'Bash/Powershell',
    'AWS',
    'Snowflake',
    'Numpy/Pandas',
    'GCP',
    'React',
    'Gradle',
    'Automation',
    'Cybersecurity',
    'Network Engineering',
    'AI/ML',
    'Algorithms',
    'Data Structures',
    'APIs',
    'System Design',
    'Cloud Computing',
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
      degree: 'Computer Science',
      from: '2022',
      to: '2025',
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'Data Science (Business and Industrial Analytics)',
      from: '2022',
      to: '2025',
    },
  ],
  // Work
  publications: [
    {
      title: 'Software Development Engineer Intern @ AWS',
      conferenceName: 'Seattle, WA',
      journalName: 'May 2024 - Aug 2024',
      authors: '',
      link: 'https://aws.amazon.com/',
      description:
        'Highlights from working on the S3 API team at the Seattle HQ:\n• Designed a new configuration management system with dynamic storage. Used Java, Gradle, Amazon’s internal software tools, and Amazon’s build production pipeline.\n• Worked alongside cybersecurity engineers to protect against potential abuse of S3 buckets and ensure their scope of accessibility was maintained.',
    },
    {
      title: 'AI Research Engineer Intern @ Mendel AI',
      conferenceName: 'San Jose, CA',
      journalName: 'Jun 2023 - Aug 2023',
      authors: '',
      link: 'https://www.mendel.ai/',
      description:
        'Highlights:\n• Researched/developed new proprietary technologies. Used Snowflake, Google Cloud, NumPy, Parallel Processing, NLP, Algorithms, and Cloud Computing/Storage.\n• Worked on the data pipeline for our AI system as Tech Lead. Used Selenium, Automation, Web Scraping, NLP, Cybersecurity, Algorithms, and System Design.',
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
