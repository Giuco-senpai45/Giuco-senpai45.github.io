// place files you want to import through the `$lib` alias in this folder.
const projects = [
  {
    name: "JamSpot",
    description:
      "JamSpot represents a platform that lets users explore their musical tastes by providing an interaction with a hybrid music recommender system which will react to their preferences. I developed this project fueled by my passion about music. I knew that recommender systems were an important part of the Internet and I wanted to learn more about them. This project got me into the world of recommender systems and inmy research I chose to develop a hybrid ensemble of two recommender systems that complement each other by cover-ing the particular caveats that each of them have individually",
    link: "https://github.com/Giuco-senpai45/Jamspot",
    langs: [
      "Python",
      "Pandas",
      "Prisma",
      "Svelte",
      "SciKitLearn",
      "TypeScript",
    ],
    image: "images/projects/jamspot.png",
  },
  {
    name: "Microservices Cluster",
    description:
      "This project presents itself as 5 different services: Broker, Authenticator, Logger, Emailer and Listener. These services can communicate with each other by 3 distinct methods: HTTP calls with JSON payloads, RCP calls and gRCP calls. The \"client\" was simulated by requests realized in Postman. These services communicate with 2 different databases (Mongo and Postgres) and are containerized in Docker containers to be orchestrated using Kubernetes.",
    link: "https://github.com/Giuco-senpai45/go-microservices",
    langs: ["Go", "gRPC", "RabbitMQ", "Docker", "Kubernetes", "Mongo"],
    image: "images/projects/micros.png",
  },
  {
    name: "Lucene Search Engine",
    description:
      "This projects creates a search engine on a dataset consisting of various Wikipedia pages, which are parsed and built into an inverted index. This project was made in order to materialize techniques learned in my Data mining course, in particular this project creates an optimized inverted index through various processing steps (tokenization, lemmatization and compression). The resulted inverted index was then tested with various metrics to prove it's effectiveness.",
    link: "https://github.com/Giuco-senpai45/DM_UBB-2023.git",
    langs: ["Java", "Apache Lucene"],
    image: "images/projects/invertedindex.png",
  },
  {
    name: "Project Manager",
    description:
      "This project is a backend design for a project management system similar to a Kanban Board. It presents itself as a cluster managed by Kubernetes of 2 different API's one in ExpressJs and one in Go. These API's also implement a authentication system using JWT and cookies. Only registered and logged in user's can create, access and modify their projects.",
    link: "https://github.com/Giuco-senpai45/project-management",
    langs: ["Go", "ExpressJS", "Docker", "Kubernetes"],
    image: "images/projects/pm.png",
  },
  {
    name: "Library Manager",
    description: "This projects simulates a library management system letting it's user manage books and their authors . The project uses a Postgres database and it was developed using the MVC pattern.",
    link: "https://github.com/Giuco-senpai45/Library-Management.git",
    langs: ["Java", "SpringBoot", "ThymeLeaf", "Hibernate"],
    image: "images/projects/lbm.png",
  },
  {
    name: "Forkify",
    description:
      "A web application that lets you explore different cooking recipes. Being a static web page the project is hosted using Surge. The recipes data is extracted from an API and they will be modified dynamically based on the number of serving. Users can bookmark recipes (saved in local storage) and they can upload their own recipes (also stored on local storage)",
    link: "https://github.com/Giuco-senpai45/Forkify-Recipe-Application.git",
    langs: ["JavaScript", "Sass", "Axios"],
    image: "images/projects/forky.png",
  },
  {
    name: "Mapty",
    description:
      "Show the users general area based on their current location using the Leaflet library. Users can pin 2 types of markers based on a sports activity they had (running or cycling). The marker will store some date (cadence, number of kilometers, elevation), markers are saved in local storage",
    link: "https://github.com/Giuco-senpai45/Mapty",
    langs: ["JavaScript", "Leaflet"],
    image: "images/projects/mapty.png",
  },
];

export const work_experiences = [
  {
    title: "Backend Developer",
    technologies: ["Golang", "ExpressJS", "Docker", "Kubernetes", "AWS EKS"],
    start: "August 2023",
    end: "December 2023",
    company: "Lasting Dynamics",
    description: [
      "Worked in an agile environment with weekly scrums",
      "Architected and developed two different API's (Go and Express)",
      "Implemented sessions in the form of cookies with JWT for some protected routes",
      "Embedded the API's in a Kubernetes cluster deployed on AWS using EKS",
    ],
    link: "https://www.lastingdynamics.com",
  },
  {
    title: "Junior Full-Stack Developer",
    technologies: ["Rails", "React", "Figma", "Redux", "Tailwind"],
    start: "June 2022",
    end: "November 2022",
    company: "Appssemble",
    description: [
      "Continued developing my abilities of creating quality production software in the form of MVP's (Minimum Viable Products)",
      "Send and confirm e-mails using Devise and Sendgrid",
      "Create and run scripts (different languages bash, python, java) or executables from the Rails server",
      "Analyse and take architectural decisions in implementing the API's and the database (schema of the database and the endpoints offered by the API)",
      "Create the actual frontend for the product using React with Redux and Tailwind from Figma designs",
    ],
    link: "https://appssemble.com",
  },
  {
    title: "Intern Backend Developer",
    technologies: ["Rails", "AWS", "Postman", "Bash"],
    start: "March 2022",
    end: "June 2022",
    company: "Appssemble",
    description: [
      "Create custom API's and deployed them to production",
      "Automate server-side functions to run at a set time using Cronjobs and Sidekiq",
      "Create and administrate blob storages in the form of AWS S3 buckets",
      "Worked in an Agile environment",
      "Create complex relational databases using Rails Active Records",
    ],
    link: "https://appssemble.com",
  },
];

export default projects;
