import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    ouidou,
    refactor,
    bhb18,
    giroscoutellier,
    CV,
    todolist,
    ouidou_webpage,
    portfolio,
    portfolio3d,
    customtshirt,
    dashboard,
    appmeteo,
    threejs,
    deployed,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

    
  export const navLinkResume = [
    {
      id: "resume",
      title: "Resume",
      link: CV,
    },
 
  ];
  
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.js Beginner Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "UX/UI Design Touch",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "School Trainee",
      company_name: "Giros & Coutellier, Paris, France",
      icon: giroscoutellier,
      iconBg: "#383E56",
      date: "March 2018",
      points: [
        "Immersion in the activity of the agency.",
        "Software application: design of a modern lamp model.",
        "Help on 3D software for a hotel project to renovate.",
      ],
    },
    {
      title: "Civic Service",
      company_name: "Bourges Handball 18, Bourges, France",
      icon: bhb18,
      iconBg: "#E6DEDD",
      date: "Sept 2021 - June 2022",
      points: [
        "Coach of a team -15 years old evolving in Departmental.",
        "Coach -9 years old and BabyHand (3-8 years old) with training based on the child's imagination.",
        "Participation in the life of the club and events.",
        "Maintaining the Bourges handball 18 website.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company_name: "Ouidou, Paris, France",
      icon: ouidou,
      iconBg: "#2962ff",
      date: "June 2022 - Oct 2022",
      points: [
        "Redesign of the Ouidou website with Wordpress and custom code.",
        "Collaboration for the responsive version of the game YesOuiJump with React.js.",
        "Help on the digital version of their monthly internal newsletter.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Refactor, Bengaluru, India",
      icon: refactor,
      iconBg: "#E6DEDD",
      date: "April 2023",
      points: [
        "Creation of a ToDoList web application in React.js for training.",
        "Complete handling of Git, with repository put on github and uploading of the ToDoList web application.",
        "Creation of a login/registration page in react in localStorage.",
        "Creation of a custom t-shirt web application in React.js for training.",
      ],
    },
    {
      title: "Frontend Developer & Integrator Alternately",
      company_name: "Ouidou, Paris, France",
      icon: ouidou,
      iconBg: "#2962ff",
      date: "July 2023 - Oct 2024",
      points: [
        "Frontend collaboration on 5 sites under development using Angular, Java & React.",
        "Redesign of the Ouidou website with Wordpress and custom code.",
        "Registration part with requests for a new client site.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My Personal Portfolio",
      description:
        "This is my personal portfolio website. I used React.js, Three.js, Tailwind CSS and Figma for this project. You will find my project and my background.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_deploy: "https://mathieulalande.netlify.app/",
      source_code_link: "https://github.com/Thimanrgy/Portfolio",
    },
    {
      name: "My Second Portfolio",
      description:
      "This is my second personal portfolio site because I really like to show what I'm passionate about in different ways. I used React.js, Three.js & Tailwind CSS.",      
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio3d,
      source_deploy: "https://mathieulalandeportfolio.netlify.app/",
      source_code_link: "https://github.com/Mathieu-Lalande/Portfolio3D",
    },
    {
      name: "ToDo List",
      description:
        "Web application that allows users to create, edit, and delete tasks, and provides a convenient and efficient solution for managing tasks.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "localStorage",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: todolist,
      source_deploy: "https://mathieu-todolist.netlify.app/",
      source_code_link: "https://github.com/Thimanrgy/ToDo-List",
    },
    {
      name: "3D T-shirt Customization",
      description:
        "Create your unique and exclusive T-shirt with our brand new 3D customization tool. Unleash your imagination and define your own style 👋!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: customtshirt,
      source_deploy: "https://custom-t-shirt.netlify.app/",
      source_code_link: "https://github.com/Thimanrgy/CustomT-shirt",
    },
    {
      name: "Dashboard",
      description:
        "A dashboard for a company with powerful tools to use. There is Kanban, a Calendar, a Color Picker ansd a lot of other features. There is also a dark mode.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "entreprise",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_deploy: "https://mathieu-dashboard.netlify.app/",
      source_code_link: "https://github.com/Thimanrgy/dashboard",
    },
    {
      name: "App Meteo",
      description:
        "Discover our weather application containing all the information in real time. Stay ahead of the weather with our comprehensive, user-friendly interface.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "API request",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: appmeteo,
      source_deploy: "https://app-meteo-math.netlify.app/#/current-location",
      source_code_link: "https://github.com/Thimanrgy/App-meteo",
    },
  ];

  const footers = [
    {
      icon: "github",
      company_name: github,
    },
    {
      icon: "Web Developer",
      company_name: web,
    },
    {
      icon: "Web Developer",
      company_name: web,
    },
    {
      icon: "Web Developer",
      company_name: web,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, footers };