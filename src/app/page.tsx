// app/page.tsx
'use client';

import React from 'react';
import { CVSection } from '../components/CVSection';
import SocialButtons from '../components/SocialButtons';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { TranslatedText } from '@/components/TranslatedText';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

function ExperienceItem({
  company,
  role,
  duration,
  location,
  description,
  technologies,
}: {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: React.ReactNode;
  technologies?: string[];
}) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 mb-8">
      <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">
        {company}
      </h3>
      <p className="font-semibold text-gray-900 dark:text-gray-100">{role}</p>
      <p className="text-gray-900 dark:text-gray-100">{duration}</p>
      <p className="text-gray-900 dark:text-gray-100 mb-2">{location}</p>
      <div className="text-gray-900 dark:text-gray-100">{description}</div>
      {technologies && (
        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function EducationItem({
  degree,
  grade,
  institution,
  duration,
  thesis,
  courses,
}: {
  degree: string;
  grade?: string;
  institution: string;
  duration: string;
  thesis?: string;
  courses?: { name: string; grade: string }[];
}) {
  return (
    <div className="border-l-4 border-green-500 pl-4 mb-8">
      <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">
        {degree}
      </h3>
      {grade && (
        <p className="text-gray-900 dark:text-gray-100 font-semibold">
          {grade}
        </p>
      )}
      <p className="text-gray-900 dark:text-gray-100">{institution}</p>
      <p className="text-gray-900 dark:text-gray-100">{duration}</p>
      {thesis && (
        <div className="mt-2">
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Thesis:
          </p>
          <p className="text-gray-900 dark:text-gray-100 italic">{thesis}</p>
        </div>
      )}
      {courses && (
        <div className="mt-2">
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Key Courses:
          </p>
          <ul className="list-disc list-inside">
            {courses.map((course) => (
              <li
                key={course.name}
                className="text-gray-900 dark:text-gray-100"
              >
                {course.name} (Note: {course.grade})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function CVPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <LanguageSwitch />
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-4 right-20 px-4 py-2 bg-gray-200 dark:bg-gray-700 mr-10
                  text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 
                  transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
      <div className="max-w-4xl mx-auto p-2">
        {/* Header */}
        <div className="text-center mb-3 flex flex-col items-center">
          <div className="relative w-[150px] h-[150px] mb-4 flex justify-center overflow-hidden mt-[30px]">
            <div className="absolute inset-0 rounded-full mt-12" />
            <Image
              src="/cvImage.png"
              alt="CV Header Image"
              width={30}
              height={30}
              layout="responsive"
              className="rounded-full relative z-10"
            />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Dr.-Ing. Farbod Aprin
          </h3>
          <div className="text-gray-900 dark:text-gray-100">
            <p>Essen Deutschland</p>
            <p>Tel: +49 176 833 25 633</p>
            <p>Email: aprin.farbod@gmail.com</p>
          </div>
        </div>

        {/* Career Objective */}
        <CVSection title="Berufsziel" defaultExpanded={true}>
          <p className="text-gray-900 dark:text-gray-100">
            <TranslatedText textKey="berufszielContent" />
          </p>
        </CVSection>

        {/* Work Experience */}
        <CVSection title="Berufserfahrung">
          <ExperienceItem
            company="Digimenue"
            role="Projektleiter – Product Owner"
            duration="Seit Januar 2024"
            location="Essen"
            description={
              <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
                <li>Produktmanagement App Team von 3 Entwickler</li>
                <li>3D-Modellierung von Restaurantumgebungen</li>
                <li>Full Stack Entwicklung mit React/NodeJs/NestJS</li>
                <li>UX optimization</li>
              </ul>
            }
            technologies={[
              'React',
              'NodeJs',
              'NestJS',
              '3D Modeling',
              'UX Design',
            ]}
          />

          <ExperienceItem
            company="RIAS-Institute"
            role="Teamleiter des Softwarearchitekten"
            duration="Juni 2019 – Dezember 2023"
            location="Duisburg"
            description={
              <ul className="list-disc list-inside">
                <li>Full-Stack-Entwickler für COURAGE Projekt</li>
                <li>KI-basierter Chatbot Entwicklung</li>
                <li>Wissenschaftlicher Mitarbeiter</li>
              </ul>
            }
            technologies={['React', 'Node.js', 'MongoDB', 'AI', 'Express']}
          />
          <ExperienceItem
            company="Digital Solution GmbH (DSG)"
            role="JavaScript Entwickler – API-Solution"
            duration="Juni 2022 - Oktober 2022"
            location="München"
            description={
              <ul className="list-disc list-inside">
                <li>
                  Integration der ReactJS-Bibliothek in die Chatbot-Architektur
                </li>
                <li>Entwicklung ADITO Software xRM solution</li>
                <li>Chatbot-Demo Implementierung</li>
              </ul>
            }
            technologies={['React', 'JavaScript', 'API', 'Chatbot']}
          />

          <ExperienceItem
            company="COLLIDE-GROUPE"
            role="Studentische Hilfskraft"
            duration="Juni 2018 – Feb 2019"
            location="Duisburg-Essen Universität"
            description={
              <ul className="list-disc list-inside">
                <li>Software-Entwickler und -Analytiker</li>
                <li>FullStack Programmierung für AnalyticsWorkbench</li>
                <li>UX-Architektur Entwicklung</li>
              </ul>
            }
            technologies={['React', 'Java', 'CSS', 'HTML', 'Travis', 'GitHub']}
          />

          <ExperienceItem
            company="MOBILABSOLUTION GmbH"
            role="Softwareentwickler – Praktikum"
            duration="September-Oktober 2017"
            location="Köln"
            description={
              <ul className="list-disc list-inside">
                <li>Front-end Programmierung für Eatbu</li>
                <li>UX und CSS Design</li>
                <li>Software Entwicklung und Design</li>
              </ul>
            }
            technologies={['React', 'CSS', 'HTML', 'Travis', 'GitHub', 'Jira']}
          />

          <ExperienceItem
            company="METRO AG"
            role="Software Entwickler - ThoughWorks Team"
            duration="Juni 2016 - April 2017"
            location="Düsseldorf"
            description={
              <div>
                <ul className="list-disc list-inside mb-4">
                  <li>Front-end Entwicklung für SAM-Applikation</li>
                  <li>DMV Business Analyst Framework Projekt</li>
                  <li>IOS/Windows Webview Entwicklung</li>
                  <li>Backend Support und Datenverarbeitung</li>
                </ul>
                <div className="pl-4">
                  <h4 className="font-semibold mb-2">Hauptprojekte:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <span className="font-semibold">SAM Frontend:</span>{' '}
                      Salesforce Web-Anwendung mit React
                    </li>
                    <li>
                      <span className="font-semibold">Business Analysis:</span>{' '}
                      Funktionale Tests und Design
                    </li>
                    <li>
                      <span className="font-semibold">Mobile Development:</span>{' '}
                      IOS/Windows Webview Integration
                    </li>
                    <li>
                      <span className="font-semibold">Backend Services:</span>{' '}
                      Java-basierte Datenverarbeitung
                    </li>
                  </ul>
                </div>
              </div>
            }
            technologies={[
              'React',
              'Java',
              'Swift',
              'C#',
              'CSS',
              'HTML',
              'Solr',
              'Kibana',
              'SFTP',
            ]}
          />

          <ExperienceItem
            company="SYNTECH (MRL) Technologie- und Innovationszentrum"
            role="Software Team Lead - Robotik Team"
            duration="Feb 2011 – Aug 2014"
            location="Qazvīn, Iran"
            description={
              <div>
                <ul className="list-disc list-inside mb-4">
                  <li>Software-Entwicklung (2011-2014)</li>
                  <li>Software Team Leadership (2012)</li>
                </ul>
                <div className="pl-4">
                  <h4 className="font-semibold mb-2">Kernprojekte:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Mapping und Localization in Mobile Robots (Quadratur
                      robots)
                    </li>
                    <li>
                      Zweidimensionale Roboternavigation (quadrotors robots)
                    </li>
                    <li>Objekt Segmentation für @home Robot</li>
                  </ul>
                </div>
              </div>
            }
            technologies={['C++', 'ROS', 'Linux', 'Robotics']}
          />

          <ExperienceItem
            company="Imen-Ara Co"
            role="Technical Translator"
            duration="Jan 2008 - Feb 2010"
            location="Teheran, Iran"
            description={
              <ul className="list-disc list-inside">
                <li>
                  Übersetzung von Geschäftsdokumenten aus dem Persischen ins
                  Englische
                </li>
                <li>Technische Dokumentation und Kommunikation</li>
              </ul>
            }
            technologies={['Technical Writing', 'Translation']}
          />
        </CVSection>

        {/* Education */}
        <CVSection title="Bildung">
          <EducationItem
            degree="Dr. Ing. - Informatik"
            grade="Note 1.0, Sehr Gut, Magna cum laude"
            institution="Universität Duisburg-Essen"
            duration="2019 - 2023"
            thesis="An intelligent learning companion for risk-aware of social media"
          />

          <EducationItem
            degree="Master of Science in Technischer Informatik"
            grade="Note 2.3"
            institution="Universität Duisburg-Essen"
            duration="2015 - 2019"
            thesis="SALMON APP Sharing und Learning Material Online (Note: 1.3)"
            courses={[
              { name: 'Interactive Systems', grade: '2.0' },
              { name: 'Information Retrieval', grade: '1.0' },
              {
                name: 'Gestaltung interaktiver Lehr-/Lernsysteme',
                grade: '1.7',
              },
            ]}
          />
        </CVSection>

        {/* Skills section remains the same */}
        <CVSection title="Kenntnisse und Fähigkeiten">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Aktuellste Kenntnisse:
              </h3>
              <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
                <li>Algorithmus und Softwarearchitektur (9/10)</li>
                <li>Product Owner Agile/Scrum-System (6/10)</li>
                <li>Front-End-Programmierung (ReactJs/Next) (7/10)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Vorherige Felder:
              </h3>
              <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
                <li>Anwendungsprogrammierung in JAVA (mittel)</li>
                <li>Computervisionsysteme (mittel)</li>
              </ul>
            </div>
          </div>
        </CVSection>

        {/* Awards and Languages sections remain the same */}
        <CVSection title="Auszeichnungen">
          <ul className="space-y-2 text-gray-900 dark:text-gray-100">
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">🏆</span>
              Preis für das beste Papier ITS 2022
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">🏅</span>
              Goldabzeichen auf Stack Overflow
            </li>
          </ul>
        </CVSection>

        <CVSection title="Sprachen">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Deutsch
              </h3>
              <p className="text-gray-900 dark:text-gray-100">
                C1 verhandlungssicher
              </p>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                English
              </h3>
              <p className="text-gray-900 dark:text-gray-100">
                C2 Fortgeschritten
              </p>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Persisch
              </h3>
              <p className="text-gray-900 dark:text-gray-100">Muttersprache</p>
            </div>
          </div>
        </CVSection>
      </div>
      <SocialButtons />
    </div>
  );
}
