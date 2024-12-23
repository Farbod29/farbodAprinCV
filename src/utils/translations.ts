type Language = 'de' | 'en';

// Define the structure of individual courses
type Course = {
  name: {
    [language in Language]: string;
  };
  grade: {
    [language in Language]: string;
  };
};

// Define the shape of general translations
type GeneralTranslation = {
  de: string;
  en: string;
};

// Define the shape of translations with courses
type CourseTranslation = {
  courses: {
    [key: string]: Course;
  };
};

// Use a discriminated union for the translations
type Translations = {
  [key: string]: GeneralTranslation | CourseTranslation;
};

// Create the translations object
export const translations: Translations = {
  Berufsziel: {
    // Capitalized to match usage
    de: 'Berufsziel',
    en: 'Career Objective',
  },
  berufszielContent: {
    de: 'Erfahrener Softwareentwickler und Projektleiter mit einem starken Hintergrund in der IT-Beratung und der Entwicklung innovativer Anwendungen. Ziel ist es, meine technischen Fähigkeiten und mein Wissen in einem dynamischen und professionellen Umfeld einzusetzen und weiterzuentwickeln.',
    en: 'Experienced software developer and project manager with a strong background in IT consulting and innovative application development. My goal is to apply and further develop my technical skills and knowledge in a dynamic and professional environment.',
  },
  Berufserfahrung: {
    // Capitalized to match usage
    de: 'Berufserfahrung',
    en: 'Work Experience',
  },
  Bildung: {
    // Capitalized to match usage
    de: 'Bildung',
    en: 'Education',
  },
  'Kenntnisse und Fähigkeiten': {
    // Match exact usage
    de: 'Kenntnisse und Fähigkeiten',
    en: 'Skills and Expertise',
  },
  Auszeichnungen: {
    // Capitalized to match usage
    de: 'Auszeichnungen',
    en: 'Awards',
  },
  Sprachen: {
    // Capitalized to match usage
    de: 'Sprachen',
    en: 'Languages',
  },
  StayConnent: {
    de: 'Bleib in Verbindung:',
    en: 'Stay Connected:',
  },
  // Digimenue experience
  productManagement: {
    de: 'Produktmanagement App Team von 3 Entwickler',
    en: 'Product management of app team with 3 developers',
  },
  restaurantModeling: {
    de: '3D-Modellierung von Restaurantumgebungen',
    en: '3D modeling of restaurant environments',
  },
  fullStackDev: {
    de: 'Full Stack Entwicklung mit React/NodeJs/NestJS',
    en: 'Full Stack development with React/NodeJs/NestJS',
  },
  uxOptimization: {
    de: 'UX optimization',
    en: 'UX optimization',
  },

  // RIAS-Institute experience
  fullStackCourage: {
    de: 'Full-Stack-Entwickler für COURAGE Projekt',
    en: 'Full Stack Developer for COURAGE Project',
  },
  chatbotDev: {
    de: 'KI-basierter Chatbot Entwicklung',
    en: 'AI-based chatbot development',
  },
  scientificStaff: {
    de: 'Wissenschaftlicher Mitarbeiter',
    en: 'Scientific Staff Member',
  },

  // DSG experience
  reactIntegration: {
    de: 'Integration der ReactJS-Bibliothek in die Chatbot-Architektur',
    en: 'Integration of ReactJS library into chatbot architecture',
  },
  aditoSoftware: {
    de: 'Entwicklung ADITO Software xRM solution',
    en: 'Development of ADITO Software xRM solution',
  },
  chatbotDemo: {
    de: 'Chatbot-Demo Implementierung',
    en: 'Chatbot demo implementation',
  },

  // COLLIDE-GROUPE experience
  softwareDev: {
    de: 'Software-Entwickler und -Analytiker',
    en: 'Software Developer and Analyst',
  },
  fullStackAW: {
    de: 'FullStack Programmierung für AnalyticsWorkbench',
    en: 'FullStack programming for AnalyticsWorkbench',
  },
  uxArchitecture: {
    de: 'UX-Architektur Entwicklung',
    en: 'UX Architecture Development',
  },

  // MOBILABSOLUTION experience
  frontEndEatbu: {
    de: 'Front-end Programmierung für Eatbu',
    en: 'Front-end programming for Eatbu',
  },
  uxDesign: {
    de: 'UX und CSS Design',
    en: 'UX and CSS Design',
  },
  softwareDesign: {
    de: 'Software Entwicklung und Design',
    en: 'Software Development and Design',
  },

  // METRO AG experience
  frontEndSAM: {
    de: 'Front-end Entwicklung für SAM-Applikation',
    en: 'Front-end development for SAM Application',
  },
  dmvAnalyst: {
    de: 'DMV Business Analyst Framework Projekt',
    en: 'DMV Business Analyst Framework Project',
  },
  webviewDev: {
    de: 'IOS/Windows Webview Entwicklung',
    en: 'IOS/Windows Webview Development',
  },
  backendSupport: {
    de: 'Backend Support und Datenverarbeitung',
    en: 'Backend Support and Data Processing',
  },

  // SYNTECH experience
  softwareDevelopment: {
    de: 'Software-Entwicklung (2011-2014)',
    en: 'Software Development (2011-2014)',
  },
  teamLeadership: {
    de: 'Software Team Leadership (2012)',
    en: 'Software Team Leadership (2012)',
  },
  robotMapping: {
    de: 'Mapping und Localization in Mobile Robots (Quadratur robots)',
    en: 'Mapping and Localization in Mobile Robots (Quadrature robots)',
  },
  robotNavigation: {
    de: 'Zweidimensionale Roboternavigation (quadrotors robots)',
    en: 'Two-dimensional Robot Navigation (quadrotors robots)',
  },
  objectSegmentation: {
    de: 'Objekt Segmentation für @home Robot',
    en: 'Object Segmentation for @home Robot',
  },

  // Imen-Ara experience
  translation: {
    de: 'Übersetzung von Geschäftsdokumenten aus dem Persischen ins Englische',
    en: 'Translation of business documents from Persian to English',
  },
  technicalDoc: {
    de: 'Technische Dokumentation und Kommunikation',
    en: 'Technical Documentation and Communication',
  },

  // Company Names and Roles
  digimenueRole: {
    de: 'Projektleiter | Product Owner',
    en: 'Project Leader | Product Owner',
  },
  riasRole: {
    de: 'Teamleiter des Softwarearchitekten',
    en: 'Software Architecture Team Leader',
  },
  dsgRole: {
    de: 'JavaScript Entwickler – API-Solution',
    en: 'JavaScript Developer – API-Solution',
  },
  collideRole: {
    de: 'Studentische Hilfskraft',
    en: 'Student Assistant',
  },
  mobilabRole: {
    de: 'Softwareentwickler – Praktikum',
    en: 'Software Developer – Internship',
  },
  metroRole: {
    de: 'Software Entwickler - ThoughWorks Team',
    en: 'Software Developer - ThoughWorks Team',
  },
  syntechRole: {
    de: 'Software Team Lead - Robotik Team',
    en: 'Software Team Lead - Robotics Team',
  },
  imenAraRole: {
    de: 'Technical Translator',
    en: 'Technical Translator',
  },

  // Dates and Locations
  currentDate: {
    de: 'Seit Januar 2024',
    en: 'Since January 2024',
  },
  riasDate: {
    de: 'Juni 2019 – Dezember 2023',
    en: 'June 2019 – December 2023',
  },
  dsgDate: {
    de: 'Juni 2022 - Oktober 2022',
    en: 'June 2022 - October 2022',
  },
  collideDate: {
    de: 'Juni 2018 – Feb 2019',
    en: 'June 2018 – Feb 2019',
  },
  mobilabDate: {
    de: 'September-Oktober 2017',
    en: 'September-October 2017',
  },
  metroDate: {
    de: 'Juni 2016 - April 2017',
    en: 'June 2016 - April 2017',
  },
  syntechDate: {
    de: 'Feb 2011 – Aug 2014',
    en: 'Feb 2011 – Aug 2014',
  },
  imenAraDate: {
    de: 'Jan 2008 - Feb 2010',
    en: 'Jan 2008 - Feb 2010',
  },

  // Metro AG Project Details
  mainProjects: {
    de: 'Hauptprojekte:',
    en: 'Main Projects:',
  },
  samFrontend: {
    de: 'SAM Frontend: Salesforce Web-Anwendung mit React',
    en: 'SAM Frontend: Salesforce Web Application with React',
  },
  businessAnalysis: {
    de: 'Business Analysis: Funktionale Tests und Design',
    en: 'Business Analysis: Functional Tests and Design',
  },
  mobileDev: {
    de: 'Mobile Development: IOS/Windows Webview Integration',
    en: 'Mobile Development: IOS/Windows Webview Integration',
  },
  backendServices: {
    de: 'Backend Services: Java-basierte Datenverarbeitung',
    en: 'Backend Services: Java-based Data Processing',
  },

  // SYNTECH Core Projects
  coreProjects: {
    de: 'Kernprojekte:',
    en: 'Core Projects:',
  },

  // Locations
  essen: {
    de: 'Essen',
    en: 'Essen, Germany',
  },
  duisburg: {
    de: 'Duisburg',
    en: 'Duisburg, Germany',
  },
  munich: {
    de: 'München',
    en: 'Munich, Germany',
  },
  duisburgUni: {
    de: 'Duisburg-Essen Universität',
    en: 'University of Duisburg-Essen',
  },
  cologne: {
    de: 'Köln',
    en: 'Cologne, Germany',
  },
  dusseldorf: {
    de: 'Düsseldorf',
    en: 'Düsseldorf, Germany',
  },
  qazvin: {
    de: 'Qazvīn, Iran',
    en: 'Qazvin, Iran',
  },
  tehran: {
    de: 'Teheran, Iran',
    en: 'Tehran, Iran',
  },

  // Education Degrees and Details
  phdDegree: {
    de: 'Dr. Ing. - Informatik',
    en: 'Ph.D. in Computer Science',
  },
  phdGrade: {
    de: 'Note 1.0, Sehr Gut, Magna cum laude',
    en: 'Grade 1.0, Excellent, Magna cum laude',
  },
  phdThesis: {
    de: 'Ein intelligenter Lernbegleiter für Risikobewusstsein in sozialen Medien',
    en: 'An intelligent learning companion for risk-aware of social media',
  },

  masterDegree: {
    de: 'Master of Science in Technischer Informatik',
    en: 'Master of Science in Computer Engineering',
  },
  masterGrade: {
    de: 'Note 2.3',
    en: 'Grade 2.3',
  },
  masterThesis: {
    de: 'SALMON APP Sharing und Learning Material Online (Note: 1.3)',
    en: 'SALMON APP Sharing and Learning Material Online (Grade: 1.3)',
  },

  // Course Names and Grades
  thesisLabel: {
    de: 'Thesis:',
    en: 'Thesis:',
  },
  keyCourses: {
    de: 'Hauptkurse:',
    en: 'Key Courses:',
  },
  educationCourses: {
    courses: {
      interactiveSystems: {
        name: {
          de: 'Interaktive Systeme',
          en: 'Interactive Systems',
        },
        grade: {
          de: 'Note: 2.0',
          en: 'Grade: 2.0',
        },
      },
      informationRetrieval: {
        name: {
          de: 'Information Retrieval',
          en: 'Information Retrieval',
        },
        grade: {
          de: 'Note: 1.0',
          en: 'Grade: 1.0',
        },
      },
      interactiveLearning: {
        name: {
          de: 'Gestaltung interaktiver Lehr-/Lernsysteme',
          en: 'Design of Interactive Teaching/Learning Systems',
        },
        grade: {
          de: 'Note: 1.7',
          en: 'Grade: 1.7',
        },
      },
    },
  },

  // Education Dates
  phdDuration: {
    de: '2019 - 2023',
    en: '2019 - 2023',
  },
  masterDuration: {
    de: '2015 - 2019',
    en: '2015 - 2019',
  },

  // Skills Section
  skillsTitle: {
    de: 'Kenntnisse und Fähigkeiten',
    en: 'Skills and Expertise',
  },
  currentSkillsTitle: {
    de: 'Aktuellste Kenntnisse:',
    en: 'Current Skills:',
  },
  previousSkillsTitle: {
    de: 'Vorherige Felder:',
    en: 'Previous Fields:',
  },
  algorithmSkill: {
    de: 'Algorithmus und Softwarearchitektur (9/10)',
    en: 'Algorithm and Software Architecture (9/10)',
  },
  productOwnerSkill: {
    de: 'Product Owner Agile/Scrum-System (6/10)',
    en: 'Product Owner Agile/Scrum System (6/10)',
  },
  frontEndSkill: {
    de: 'Front-End-Programmierung (ReactJs/Next) (7/10)',
    en: 'Front-End Programming (ReactJs/Next) (7/10)',
  },
  javaSkill: {
    de: 'Anwendungsprogrammierung in JAVA (mittel)',
    en: 'JAVA Application Programming (intermediate)',
  },
  computerVisionSkill: {
    de: 'Computervisionsysteme (mittel)',
    en: 'Computer Vision Systems (intermediate)',
  },

  // Awards Section
  awardsTitle: {
    de: 'Auszeichnungen',
    en: 'Awards',
  },
  bestPaperAward: {
    de: 'Beste Paper-Auszeichnung ITS 2022 (Chrome-basierte Chatbot-Implementierung und Datenanalyse)',
    en: 'Best Paper Award ITS 2022 (Chrome based Chatbot Implementation and Data Analysis)',
  },
  HakakhonAward: {
    de: '🥇 1. Platz 2016 (Metro AG und flic) und 2. 🥈 Platz 2017 Metro AG Hackathon Java-Wettbewerb',
    en: '🥇 1st Place 2016 (Metro AG and flic) und 2rd 🥈 2017 Metro AG Hakahthon Java competition ',
  },
  stackOverflowAward: {
    de: 'Goldabzeichen auf Stack Overflow',
    en: 'Stack Overflow Gold Badge',
  },
  roboticCompetion: {
    de: '🥇 1. Platz 2012, 🥇 1.Platz 2014 Iran Open @Home Roboter-Team',
    en: '🥇 1st Place 2012,🥇1st Place 2014 Iran open @home Robotic team',
  },

  // Languages Section
  languagesTitle: {
    de: 'Sprachen',
    en: 'Languages',
  },
  german: {
    de: 'Deutsch',
    en: 'German',
  },
  english: {
    de: 'Englisch',
    en: 'English',
  },
  persian: {
    de: 'Persisch',
    en: 'Persian',
  },
  germanLevel: {
    de: 'C1 verhandlungssicher',
    en: 'C1 Business Fluent',
  },
  englishLevel: {
    de: 'C2 Fortgeschritten',
    en: 'C2 Advanced',
  },
  persianLevel: {
    de: 'Muttersprache',
    en: 'Native Language',
  },

  // Course Names and Grades
  courseInteractiveSystems: {
    de: 'Interaktive Systeme',
    en: 'Interactive Systems',
  },
  courseInteractiveSystemsGrade: {
    de: 'Note: 2.0',
    en: 'Grade: 2.0',
  },
  courseInformationRetrieval: {
    de: 'Information Retrieval',
    en: 'Information Retrieval',
  },
  courseInformationRetrievalGrade: {
    de: 'Note: 1.0',
    en: 'Grade: 1.0',
  },
  courseInteractiveLearning: {
    de: 'Gestaltung interaktiver Lehr-/Lernsysteme',
    en: 'Design of Interactive Teaching/Learning Systems',
  },
  courseInteractiveLearningGrade: {
    de: 'Note: 1.7',
    en: 'Grade: 1.7',
  },
};
