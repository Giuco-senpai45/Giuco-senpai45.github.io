export interface Project {
  name: string
  description: string
  link: string
  langs: string[]
  image?: string
}

export interface WorkExperience {
  title: string
  company: string
  link: string
  start: string
  end: string
  technologies: string[]
  description: string[]
}

export const projects: Project[] = [
  {
    name: 'Platforma CNE',
    description: 'AI-augmented exam evaluation platform for the Romanian Ministry of Education — replaces binary scoring with competency-aligned, step-by-step mathematical reasoning. Microservice architecture: Go workers (API, OCR, analysis), Python FastAPI ML service, Vue 3 frontend; LLM vision for handwriting OCR. Two-stage RAG pipeline (ChromaDB + BGE-reranker), Valkey queue, RBAC via Keycloak; deployed with Docker.',
    link: 'https://github.com/Giuco-senpai45/cluj-hackathon',
    langs: ['Go', 'Vue', 'TypeScript', 'Python', 'LLM agents', 'ChromaDB', 'Valkey', 'Keycloak', 'Docker', 'RAG'],
    image: '/images/projects/cne.png',
  },
  {
    name: 'Multipath variants 4 congestion control',
    description:
      'Multiple paths means multiple providers, which have separate hardware infrastructure, essentially improving points of failure and making use of horizontal scaling to avoid the congestion of the network. I used a network simulation language and created a virtual topology that implemented a multipath wrapper which used the NADA algorithm for congestion control. Overall improvements in almost every metric. Higher packet throughput, better experience quality for the users, avoided the known issue of buffer starvation.',
    link: 'https://github.com/Giuco-senpai45/multipath-variants-for-congestion-control',
    langs: ['C++', 'ns-3', 'Networking', 'Congestion control', 'WebRTC'],
    image: '/images/projects/mp.png',
  },
  {
    name: 'Distributed Database simulated bank',
    description:
      'Correctly implemented a Multiversion Concurrency Control (MVCC) algorithm in order to avoid the common pitfalls of distributed databases. The project simulates a bank with multiple branches, each branch being a node in the distributed database. Each branch can process transactions (withdraw, deposit, transfer) and the data is replicated across all nodes. The system is resilient to node failures and network partitions, ensuring that the database remains consistent and available.',
    link: 'https://github.com/Giuco-senpai45/distributed-transactions',
    langs: ['Go', 'Vue', 'Distributed transactions', 'Concurrency control', 'Process algebrae', 'Python', 'Locust', 'Postgres', 'Docker'],
    image: '/images/projects/mvcc.png',
  },
  {
    name: 'WiFi Analyzer',
    description:
      'Correctly understand the IEEE 802.11 architecture. Manually parse raw data captured by the network interface card. Developed a desktop app using Tauri for the low-level capabilities of Rust. Analyzed and correctly parsed and interpreted the incoming beacon packets from nearby WiFi networks. Implemented a packet sniffer to monitor existing traffic. App correctly scans nearby WiFi routers with signal strengths and possibility to connect to them and sniff existing traffic.',
    link: 'https://github.com/Giuco-senpai45/wifi-analyzer',
    langs: ['802.11', 'Networking', 'Rust', 'Tauri', 'Sveltekit', 'C++', 'Linux', 'Wireshark', 'Aircrack-ng', 'Packet analysis', 'Network security'],
  },
  {
    name: 'Task Tracker',
    description:
      'Correctly implement failover and load balancing mechanisms in distributed systems. Microservice architecture implying 3 services. An authentication service (protects routes with JWT\'s), a task tracking service and a notification service that checks periodically for deadlines using the Kafka Producer/Consumer pattern. Load-balancing and failover are managed by a Nginx reverse proxy.',
    link: 'https://github.com/Giuco-senpai45/task-tracker',
    langs: ['Go', 'Postgres', 'Kafka', 'Docker', 'Nginx', 'Microservices', 'Load balancing'],
    image: '/images/projects/tt-diagram.png',
  },
  {
    name: 'JamSpot',
    description:
      'JamSpot represents a platform that lets users explore their musical tastes by providing an interaction with a hybrid music recommender system which will react to their preferences. I developed this project fueled by my passion about music. I knew that recommender systems were an important part of the Internet and I wanted to learn more about them. This project got me into the world of recommender systems and in my research I chose to develop a hybrid ensemble of two recommender systems that complement each other by covering the particular caveats that each of them have individually',
    link: 'https://github.com/Giuco-senpai45/Jamspot',
    langs: ['Python', 'Pandas', 'Prisma', 'Svelte', 'SciKitLearn', 'TypeScript'],
    image: '/images/projects/jamspot.png',
  },
  {
    name: 'Microservices Cluster',
    description:
      'This project presents itself as 5 different services: Broker, Authenticator, Logger, Emailer and Listener. These services can communicate with each other by 3 distinct methods: HTTP calls with JSON payloads, RCP calls and gRCP calls. The "client" was simulated by requests realized in Postman. These services communicate with 2 different databases (Mongo and Postgres) and are containerized in Docker containers to be orchestrated using Kubernetes.',
    link: 'https://github.com/Giuco-senpai45/go-microservices',
    langs: ['Go', 'gRPC', 'RabbitMQ', 'Docker', 'Kubernetes', 'Mongo'],
    image: '/images/projects/micros.png',
  },
  {
    name: 'Lucene Search Engine',
    description:
      'This projects creates a search engine on a dataset consisting of various Wikipedia pages, which are parsed and built into an inverted index. This project was made in order to materialize techniques learned in my Data mining course, in particular this project creates an optimized inverted index through various processing steps (tokenization, lemmatization and compression). The resulted inverted index was then tested with various metrics to prove it\'s effectiveness.',
    link: 'https://github.com/Giuco-senpai45/DM_UBB-2023.git',
    langs: ['Java', 'Apache Lucene'],
    image: '/images/projects/invertedindex.png',
  },
  {
    name: 'Project Manager',
    description:
      'This project is a backend design for a project management system similar to a Kanban Board. It presents itself as a cluster managed by Kubernetes of 2 different API\'s one in ExpressJs and one in Go. These API\'s also implement a authentication system using JWT and cookies. Only registered and logged in user\'s can create, access and modify their projects.',
    link: 'https://github.com/Giuco-senpai45/project-management',
    langs: ['Go', 'ExpressJS', 'Docker', 'Kubernetes'],
    image: '/images/projects/pm.png',
  },
  {
    name: 'Library Manager',
    description:
      'This projects simulates a library management system letting it\'s user manage books and their authors. The project uses a Postgres database and it was developed using the MVC pattern.',
    link: 'https://github.com/Giuco-senpai45/Library-Management.git',
    langs: ['Java', 'SpringBoot', 'ThymeLeaf', 'Hibernate'],
    image: '/images/projects/lbm.png',
  },
  {
    name: 'Forkify',
    description:
      'A web application that lets you explore different cooking recipes. Being a static web page the project is hosted using Surge. The recipes data is extracted from an API and they will be modified dynamically based on the number of serving. Users can bookmark recipes (saved in local storage) and they can upload their own recipes (also stored on local storage)',
    link: 'https://github.com/Giuco-senpai45/Forkify-Recipe-Application.git',
    langs: ['JavaScript', 'Sass', 'Axios'],
    image: '/images/projects/forky.png',
  },
  {
    name: 'Mapty',
    description:
      'Show the users general area based on their current location using the Leaflet library. Users can pin 2 types of markers based on a sports activity they had (running or cycling). The marker will store some date (cadence, number of kilometers, elevation), markers are saved in local storage',
    link: 'https://github.com/Giuco-senpai45/Mapty',
    langs: ['JavaScript', 'Leaflet'],
    image: '/images/projects/mapty.png',
  },
]

export const work_experiences: WorkExperience[] = [
  {
    title: 'Software Engineer',
    technologies: ['Ruby on Rails', 'OAuth 2.0', 'OIDC', 'Docker', 'Kubernetes'],
    start: 'November 2025',
    end: 'Ongoing',
    company: 'GolfGenius',
    description: [
      'Core member of the architecture team — distributed microservices and platform security',
      'Led end-to-end implementation of the OAuth 2.0 / OIDC authorization service, enabling SSO across ~4 products for the first time',
      'Own the machine-to-machine (M2M) module, enabling trusted backend-to-backend communication via the OAuth 2.0 client credentials flow',
      'Designed and implemented distributed microservices improving modularity and deployment independence across the platform',
    ],
    link: 'https://www.golfgenius.com',
  },
  {
    title: 'Co-Founder & CTO',
    technologies: ['Go', 'Python', 'C++', 'Flutter', 'VueJS', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
    start: 'July 2024',
    end: 'Ongoing',
    company: 'NeuroRevive',
    description: [
      'Co-founded a medical-grade prosthetics software company; sole technical lead across a team of 3 engineers',
      'Architected an intelligent software ecosystem for edge-deployed medical prosthetics, integrating on-device inference with cloud-based monitoring pipelines',
      'Researching applied AI in healthcare, real-time signal processing, and regulatory-compliant deployment on embedded medical devices',
    ],
    link: 'https://www.neurorevive.eu',
  },
  {
    title: 'Full-Stack Developer',
    technologies: ['.NET', 'C++', 'VueJS'],
    start: 'October 2024',
    end: 'November 2025',
    company: 'OpenText',
    description: [
      'Led the full migration of the Virtual User Generator frontend from Vue 2 to Vue 3, modernising the codebase and unblocking ecosystem adoption',
      'Maintained and extended the Virtual User Generator, a 27-year-old enterprise IDE written in .NET and C++, one of the most widely deployed load-testing tools globally',
      'Acted as AI champion for the department, leading the team\'s transition to AI-assisted development workflows and tooling',
    ],
    link: 'https://www.opentext.com',
  },
  {
    title: 'Backend Developer',
    technologies: ['Golang', 'ExpressJS', 'Docker', 'Kubernetes', 'AWS EKS'],
    start: 'August 2023',
    end: 'December 2023',
    company: 'Lasting Dynamics',
    description: [
      'Designed and built two REST APIs (Go and Express) serving authenticated, session-protected routes',
      'Containerized and deployed services to Kubernetes on AWS EKS',
      'Worked in a weekly Agile/Scrum cycle with cross-functional teams',
    ],
    link: 'https://www.lastingdynamics.com',
  },
  {
    title: 'Junior Full-Stack Developer',
    technologies: ['Rails', 'React', 'Figma', 'Redux', 'Tailwind'],
    start: 'June 2022',
    end: 'November 2022',
    company: 'Appssemble',
    description: [
      'Delivered 2 production-grade MVPs end-to-end within 8 months, from architecture through client handoff',
      'Designed full-stack architecture using Rails, REST APIs, PostgreSQL schemas, and background jobs (Sidekiq, Cron)',
      'Built and shipped a React + Redux + Tailwind frontend with auth (Devise) and transactional email (SendGrid)',
    ],
    link: 'https://appssemble.com',
  },
  {
    title: 'Intern Backend Developer',
    technologies: ['Ruby on Rails', 'AWS', 'PostgreSQL', 'Bash'],
    start: 'March 2022',
    end: 'June 2022',
    company: 'Appssemble',
    description: [
      'Built and deployed REST APIs to production using Ruby on Rails',
      'Automated scheduled server-side tasks with Sidekiq and Cronjobs',
      'Managed AWS S3 bucket storage for blob assets',
      'Designed relational database schemas using Active Record',
    ],
    link: 'https://appssemble.com',
  },
]
