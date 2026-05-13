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
      header: 'Professional Experience',
      projects: [
        {
          title: 'Amazon Web Services (AWS)',
          description:
            'Software Engineer\nFull-time: Jul 2025 - present\nIntern: May 2024 - Aug 2024\n\n• Built an end-to-end ML data pipeline integrating model inference with downstream AWS service APIs, automating reporting workflows and cutting analyst cycle time from days to minutes; designed for fault tolerance and observability across distributed infrastructure.\n\n• Extended a multi-region deployment pipeline with automated health checks, continuous integration, and CloudWatch observability, improving reliability for S3’s infrastructure serving global-scale traffic.\n\n• Independently identified an active data exposure vulnerability through open-source reconnaissance, scoped the attack surface, and led cross-functional remediation with the cybersecurity team: hardening bucket policies, enforcing IAM access controls, and fixing security gaps at scale.',
          imageUrl:
            'https://raw.githubusercontent.com/wstern1234/WillsPersonalWebsite/refs/heads/master/public/aws.png',
          link: 'https://aws.amazon.com/s3',
        },
        {
          title: 'Mendel.ai',
          description:
            'AI Research Engineer Intern\nJun 2023 - Aug 2023\n\n• Collaborated with Applied Scientists to engineer a high-performance proprietary query language for AI agent search tools, achieving 40% faster execution than SQL for large-scale clinical data retrieval.\n\n• Architected large-scale data transformation workflows for medical ontologies, streamlining the ingestion process for fault-tolerant NLP pipelines processing clinical research data.',
          imageUrl:
            'https://raw.githubusercontent.com/wstern1234/WillsPersonalWebsite/refs/heads/master/public/mendel_ai_logo.png',
          link: 'https://www.linkedin.com/company/mendel-ai/',
        },
        // {
        //   title: 'NASA',
        //   description:
        //     'NASA Student Researcher\nJan 2018 - Aug 2018\n\nAccepted into a highly selective NASA-sponsored rocket launch program to design and build a spaceflight experiment as a solo middle school student (typically reserved for high school class projects). Developed an experiment to detect phosphorescence from solar radiation in low Earth orbit, which launched into space June 21st, 2018.',
        //   imageUrl:
        //     'https://raw.githubusercontent.com/wstern1234/WillsPersonalWebsite/refs/heads/master/public/nasa.png',
        //   link: 'https://www.nasa.gov/wallops/',
        // },
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
    email: 'wills.stern@gmail.com',
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
      title: 'Brigade',
    //   conferenceName: 'Seattle, WA',
    //   journalName: 'Full-time: July 25 - Present',
    //   authors: 'Intern: May 24 - Aug 24',
      link: 'https://github.com/wstern1234/brigade',
      description:
        '\nA lightweight benchmarking framework that emulates multi-GPU training behavior on a single consumer GPU, enabling fast experimentation with parallelism strategies without expensive hardware.\n\n• Simulates data-parallel and pipeline-parallel workflows on a single GPU\n• Supports configurable batch partitioning, communication-delay modeling, and step-time profiling\n• Provides a unified CLI for running experiments and comparing parallelization strategies\n• Automatically logs performance traces and produces summarized reports\n• Designed for learning systems-level ML engineering without needing access to multi-node clusters',
    },
    {
      title: 'Yardstick',
      link: 'https://github.com/wstern1234/yardstick',
      description:
        '\nA modular AI performance benchmarking system built to evaluate TensorRT models like ResNet and BERT with dynamic precision, automated logging, and performance summarization.\n\n• GPU-accelerated inference using TensorRT (FP16 and FP32 support)\n• Unified CLI interface for running and comparing benchmarks across models\n• Automatic log parsing and summarization for reproducible performance tracking\n• Demonstrates deep learning systems optimization and software design for automation',
    },
    {
      title: 'Meltwater',
      link: 'https://github.com/wstern1234/meltwater',
      description:
        '\nA lightweight, self-hosted Python project that exposes a pretrained LLM via FastAPI REST API with JWT authentication and a Gradio interface.\n\n• Endpoints for /login, /generate, and /generate_stream (streaming ChatGPT-style outputs)\n• Fully Dockerized for one-container deployment (API + UI)\n• Supports JWT-secured access and optional hot-reload for development',
    },
    {
      title: 'ML Research',
      link: 'https://github.com/wstern1234/research',
      description:
        '\nAsthma Diagnosis:\n• Explores early-onset asthma prediction using social and socioeconomic indicators. Implements Logistic Regression, Decision Tree (CART), Random Forest, and XGBoost models with extensive data preprocessing (VIF, PCA, feature scaling, K-fold validation). Achieved high interpretability and addressed challenges of severe class imbalance in medical datasets.\n\nBERT for NLP Classification:\n• Fine-tuned a pretrained BERT model on a custom annotated dataset for text classification. Covers full preprocessing, tokenization, and evaluation pipelines, showcasing applied NLP model development and dataset curation.',
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
