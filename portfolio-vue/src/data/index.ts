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
    name: 'Multipath variants 4 congestion control',
    description:
      'Multiple paths means multiple providers, which have separate hardware infrastructure, essentially improving points of failure and making use of horizontal scaling to avoid the congestion of the network. I used a network simulation language and created a virtual topology that implemented a multipath wrapper which used the NADA algorithm for congestion control. Overall improvements in almost every metric. Higher packet throughput, better experience quality for the users, avoided the known issue of buffer starvation.',
    link: 'https://github.com/Giuco-senpai45/multipath-variants-for-congestion-control',
    langs: ['C++', 'ns-3', 'Networking', 'Congestion control', 'WebRTC'],
    image: 'images/projects/mp.png',
  },
  {
    name: 'Distributed Database simulated bank',
    description:
      'Correctly implemented a Multiversion Concurrency Control (MVCC) algorithm in order to avoid the common pitfalls of distributed databases. The project simulates a bank with multiple branches, each branch being a node in the distributed database. Each branch can process transactions (withdraw, deposit, transfer) and the data is replicated across all nodes. The system is resilient to node failures and network partitions, ensuring that the database remains consistent and available.',
    link: 'https://github.com/Giuco-senpai45/distributed-transactions',
    langs: ['Go', 'Vue', 'Distributed transactions', 'Concurrency control', 'Process algebrae', 'Python', 'Locust', 'Postgres', 'Docker'],
    image: 'images/projects/mvcc.png',
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
  },
  {
    name: 'JamSpot',
    description:
      'JamSpot represents a platform that lets users explore their musical tastes by providing an interaction with a hybrid music recommender system which will react to their preferences. I developed this project fueled by my passion about music. I knew that recommender systems were an important part of the Internet and I wanted to learn more about them. This project got me into the world of recommender systems and in my research I chose to develop a hybrid ensemble of two recommender systems that complement each other by covering the particular caveats that each of them have individually',
    link: 'https://github.com/Giuco-senpai45/Jamspot',
    langs: ['Python', 'Pandas', 'Prisma', 'Svelte', 'SciKitLearn', 'TypeScript'],
    image: 'images/projects/jamspot.png',
  },
  {
    name: 'Microservices Cluster',
    description:
      'This project presents itself as 5 different services: Broker, Authenticator, Logger, Emailer and Listener. These services can communicate with each other by 3 distinct methods: HTTP calls with JSON payloads, RCP calls and gRCP calls. The "client" was simulated by requests realized in Postman. These services communicate with 2 different databases (Mongo and Postgres) and are containerized in Docker containers to be orchestrated using Kubernetes.',
    link: 'https://github.com/Giuco-senpai45/go-microservices',
    langs: ['Go', 'gRPC', 'RabbitMQ', 'Docker', 'Kubernetes', 'Mongo'],
    image: 'images/projects/micros.png',
  },
  {
    name: 'Lucene Search Engine',
    description:
      'This projects creates a search engine on a dataset consisting of various Wikipedia pages, which are parsed and built into an inverted index. This project was made in order to materialize techniques learned in my Data mining course, in particular this project creates an optimized inverted index through various processing steps (tokenization, lemmatization and compression). The resulted inverted index was then tested with various metrics to prove it\'s effectiveness.',
    link: 'https://github.com/Giuco-senpai45/DM_UBB-2023.git',
    langs: ['Java', 'Apache Lucene'],
    image: 'images/projects/invertedindex.png',
  },
  {
    name: 'Project Manager',
    description:
      'This project is a backend design for a project management system similar to a Kanban Board. It presents itself as a cluster managed by Kubernetes of 2 different API\'s one in ExpressJs and one in Go. These API\'s also implement a authentication system using JWT and cookies. Only registered and logged in user\'s can create, access and modify their projects.',
    link: 'https://github.com/Giuco-senpai45/project-management',
    langs: ['Go', 'ExpressJS', 'Docker', 'Kubernetes'],
    image: 'images/projects/pm.png',
  },
  {
    name: 'Library Manager',
    description:
      'This projects simulates a library management system letting it\'s user manage books and their authors. The project uses a Postgres database and it was developed using the MVC pattern.',
    link: 'https://github.com/Giuco-senpai45/Library-Management.git',
    langs: ['Java', 'SpringBoot', 'ThymeLeaf', 'Hibernate'],
    image: 'images/projects/lbm.png',
  },
  {
    name: 'Forkify',
    description:
      'A web application that lets you explore different cooking recipes. Being a static web page the project is hosted using Surge. The recipes data is extracted from an API and they will be modified dynamically based on the number of serving. Users can bookmark recipes (saved in local storage) and they can upload their own recipes (also stored on local storage)',
    link: 'https://github.com/Giuco-senpai45/Forkify-Recipe-Application.git',
    langs: ['JavaScript', 'Sass', 'Axios'],
    image: 'images/projects/forky.png',
  },
  {
    name: 'Mapty',
    description:
      'Show the users general area based on their current location using the Leaflet library. Users can pin 2 types of markers based on a sports activity they had (running or cycling). The marker will store some date (cadence, number of kilometers, elevation), markers are saved in local storage',
    link: 'https://github.com/Giuco-senpai45/Mapty',
    langs: ['JavaScript', 'Leaflet'],
    image: 'images/projects/mapty.png',
  },
]

export const work_experiences: WorkExperience[] = [
  {
    title: 'Co-Founder & CTO',
    technologies: ['Golang', 'VueJS', 'C++', 'Docker', 'Deep Learning', 'Embedded Systems', 'Arduino'],
    start: 'July 2024',
    end: 'Ongoing',
    company: 'NeuroRevive',
    description: [
      'Principal software engineer, currently maintaining the whole software ecosystem',
      'Architect and actively develop intelligent software solutions',
      'Research current landscape of healthcare applied artificial intelligence',
      'Create a modern infrastructure and seamless deployment',
    ],
    link: 'https://www.neurorevive.eu',
  },
  {
    title: 'Full-Stack Engineer',
    technologies: ['Golang', 'VueJS', '.NET', 'C++', 'Jenkins'],
    start: 'October 2024',
    end: 'Ongoing',
    company: 'OpenText',
    description: [
      'Member of the Load Runner Performance team.',
      'Maintaining and actively developing new features on enterprise grade software (Virtual User Generator)',
      'Work with and modernize existing legacy code',
      'Active member in the company wide AI first transistion',
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
      'Worked in an agile environment with weekly scrums',
      'Architected and developed two different API\'s (Go and Express)',
      'Implemented sessions in the form of cookies with JWT for some protected routes',
      'Embedded the API\'s in a Kubernetes cluster deployed on AWS using EKS',
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
      'Continued developing my abilities of creating quality production software in the form of MVP\'s (Minimum Viable Products)',
      'Send and confirm e-mails using Devise and Sendgrid',
      'Create and run scripts (different languages bash, python, java) or executables from the Rails server',
      'Analyse and take architectural decisions in implementing the API\'s and the database (schema of the database and the endpoints offered by the API)',
      'Create the actual frontend for the product using React with Redux and Tailwind from Figma designs',
    ],
    link: 'https://appssemble.com',
  },
  {
    title: 'Intern Backend Developer',
    technologies: ['Rails', 'AWS', 'Postman', 'Bash'],
    start: 'March 2022',
    end: 'June 2022',
    company: 'Appssemble',
    description: [
      'Create custom API\'s and deployed them to production',
      'Automate server-side functions to run at a set time using Cronjobs and Sidekiq',
      'Create and administrate blob storages in the form of AWS S3 buckets',
      'Worked in an Agile environment',
      'Create complex relational databases using Rails Active Records',
    ],
    link: 'https://appssemble.com',
  },
]
