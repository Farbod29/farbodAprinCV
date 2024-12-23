// app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { CVSection } from '../components/CVSection';
import SocialButtons from '../components/SocialButtons';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { TranslatedText } from '@/components/TranslatedText';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import GalaxyBackground from '../components/GalaxyBackground';

function ExperienceItem({
  company,
  role,
  duration,
  location,
  description,
  technologies,
}: {
  company: string;
  role: React.ReactNode;
  duration: React.ReactNode;
  location: React.ReactNode;
  description: React.ReactNode;
  technologies?: string[];
}) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 mb-8 dark:text-gray-100">
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
  degree: React.ReactNode;
  grade?: React.ReactNode;
  institution: React.ReactNode;
  duration: React.ReactNode;
  thesis?: React.ReactNode;
  courses?: { name: React.ReactNode; grade: React.ReactNode }[];
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
            {courses.map((course, index) => (
              <li
                key={typeof course.name === 'string' ? course.name : index}
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
  const [mounted, setMounted] = useState(false);

  // Use useEffect to handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted
  if (!mounted) {
    return null; // or a loading placeholder
  }

  return (
    <div className="min-h-screen relative ">
      <GalaxyBackground />
      <div className="relative z-10 ">
        <LanguageSwitch />
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="fixed top-4 right-20 px-4 py-2 bg-gray-200 dark:bg-gray-700 mr-10
                    text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 
                    transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {mounted && theme === 'dark' ? (
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
          <CVSection title="Berufserfahrung" defaultExpanded={false}>
            <ExperienceItem
              company="Digimenue"
              role={<TranslatedText textKey="digimenueRole" />}
              duration={<TranslatedText textKey="currentDate" />}
              location={<TranslatedText textKey="essen" />}
              description={
                <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
                  <li>
                    <TranslatedText textKey="productManagement" />
                  </li>
                  <li>
                    <TranslatedText textKey="restaurantModeling" />
                  </li>
                  <li>
                    <TranslatedText textKey="fullStackDev" />
                  </li>
                  <li>
                    <TranslatedText textKey="uxOptimization" />
                  </li>
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
              role={<TranslatedText textKey="riasRole" />}
              duration={<TranslatedText textKey="riasDate" />}
              location={<TranslatedText textKey="duisburg" />}
              description={
                <ul className="list-disc list-inside">
                  <li>
                    <TranslatedText textKey="fullStackCourage" />
                  </li>
                  <li>
                    <TranslatedText textKey="chatbotDev" />
                  </li>
                  <li>
                    <TranslatedText textKey="scientificStaff" />
                  </li>
                </ul>
              }
              technologies={['React', 'Node.js', 'MongoDB', 'AI', 'Express']}
            />
            <ExperienceItem
              company="Digital Solution GmbH (DSG)"
              role={<TranslatedText textKey="dsgRole" />}
              duration={<TranslatedText textKey="dsgDate" />}
              location={<TranslatedText textKey="munich" />}
              description={
                <ul className="list-disc list-inside">
                  <li>
                    <TranslatedText textKey="reactIntegration" />
                  </li>
                  <li>
                    <TranslatedText textKey="aditoSoftware" />
                  </li>
                  <li>
                    <TranslatedText textKey="chatbotDemo" />
                  </li>
                </ul>
              }
              technologies={['React', 'JavaScript', 'API', 'Chatbot']}
            />

            <ExperienceItem
              company="COLLIDE-GROUPE"
              role={<TranslatedText textKey="collideRole" />}
              duration={<TranslatedText textKey="collideDate" />}
              location={<TranslatedText textKey="duisburgUni" />}
              description={
                <ul className="list-disc list-inside">
                  <li>
                    <TranslatedText textKey="softwareDev" />
                  </li>
                  <li>
                    <TranslatedText textKey="fullStackAW" />
                  </li>
                  <li>
                    <TranslatedText textKey="uxArchitecture" />
                  </li>
                </ul>
              }
              technologies={[
                'React',
                'Java',
                'CSS',
                'HTML',
                'Travis',
                'GitHub',
              ]}
            />

            <ExperienceItem
              company="MOBILABSOLUTION GmbH"
              role={<TranslatedText textKey="mobilabRole" />}
              duration={<TranslatedText textKey="mobilabDate" />}
              location={<TranslatedText textKey="cologne" />}
              description={
                <ul className="list-disc list-inside">
                  <li>
                    <TranslatedText textKey="frontEndEatbu" />
                  </li>
                  <li>
                    <TranslatedText textKey="uxDesign" />
                  </li>
                  <li>
                    <TranslatedText textKey="softwareDesign" />
                  </li>
                </ul>
              }
              technologies={[
                'React',
                'CSS',
                'HTML',
                'Travis',
                'GitHub',
                'Jira',
              ]}
            />

            <ExperienceItem
              company="METRO AG"
              role={<TranslatedText textKey="metroRole" />}
              duration={<TranslatedText textKey="metroDate" />}
              location={<TranslatedText textKey="dusseldorf" />}
              description={
                <div>
                  <ul className="list-disc list-inside mb-4">
                    <li>
                      <TranslatedText textKey="frontEndSAM" />
                    </li>
                    <li>
                      <TranslatedText textKey="dmvAnalyst" />
                    </li>
                    <li>
                      <TranslatedText textKey="webviewDev" />
                    </li>
                    <li>
                      <TranslatedText textKey="backendSupport" />
                    </li>
                  </ul>
                  <div className="pl-4">
                    <h4 className="font-semibold mb-2">
                      <TranslatedText textKey="mainProjects" />
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <TranslatedText textKey="samFrontend" />
                      </li>
                      <li>
                        <TranslatedText textKey="businessAnalysis" />
                      </li>
                      <li>
                        <TranslatedText textKey="mobileDev" />
                      </li>
                      <li>
                        <TranslatedText textKey="backendServices" />
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
              role={<TranslatedText textKey="syntechRole" />}
              duration={<TranslatedText textKey="syntechDate" />}
              location={<TranslatedText textKey="qazvin" />}
              description={
                <div>
                  <ul className="list-disc list-inside mb-4">
                    <li>
                      <TranslatedText textKey="softwareDevelopment" />
                    </li>
                    <li>
                      <TranslatedText textKey="teamLeadership" />
                    </li>
                  </ul>
                  <div className="pl-4">
                    <h4 className="font-semibold mb-2">
                      <TranslatedText textKey="coreProjects" />
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <TranslatedText textKey="robotMapping" />
                      </li>
                      <li>
                        <TranslatedText textKey="robotNavigation" />
                      </li>
                      <li>
                        <TranslatedText textKey="objectSegmentation" />
                      </li>
                    </ul>
                  </div>
                </div>
              }
              technologies={['C++', 'ROS', 'Linux', 'Robotics']}
            />

            <ExperienceItem
              company="Imen-Ara Co"
              role={<TranslatedText textKey="imenAraRole" />}
              duration={<TranslatedText textKey="imenAraDate" />}
              location={<TranslatedText textKey="tehran" />}
              description={
                <ul className="list-disc list-inside">
                  <li>
                    <TranslatedText textKey="translation" />
                  </li>
                  <li>
                    <TranslatedText textKey="technicalDoc" />
                  </li>
                </ul>
              }
              technologies={['Technical Writing', 'Translation']}
            />
          </CVSection>

          {/* Education */}
          <CVSection
            title={<TranslatedText textKey="Bildung" />}
            defaultExpanded={false}
          >
            <EducationItem
              degree={<TranslatedText textKey="phdDegree" />}
              grade={<TranslatedText textKey="phdGrade" />}
              institution={<TranslatedText textKey="duisburgUni" />}
              duration={<TranslatedText textKey="phdDuration" />}
              thesis={<TranslatedText textKey="phdThesis" />}
            />

            <EducationItem
              degree={<TranslatedText textKey="masterDegree" />}
              grade={<TranslatedText textKey="masterGrade" />}
              institution={<TranslatedText textKey="duisburgUni" />}
              duration={<TranslatedText textKey="masterDuration" />}
              thesis={<TranslatedText textKey="masterThesis" />}
              courses={[
                {
                  name: <TranslatedText textKey="courseInteractiveSystems" />,
                  grade: (
                    <TranslatedText textKey="courseInteractiveSystemsGrade" />
                  ),
                },
                {
                  name: <TranslatedText textKey="courseInformationRetrieval" />,
                  grade: (
                    <TranslatedText textKey="courseInformationRetrievalGrade" />
                  ),
                },
                {
                  name: <TranslatedText textKey="courseInteractiveLearning" />,
                  grade: (
                    <TranslatedText textKey="courseInteractiveLearningGrade" />
                  ),
                },
              ]}
            />
          </CVSection>

          {/* Skills section remains the same */}
          <CVSection
            title={<TranslatedText textKey="skillsTitle" />}
            defaultExpanded={false}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  <TranslatedText textKey="currentSkillsTitle" />
                </h3>
                <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
                  <li>
                    <TranslatedText textKey="algorithmSkill" />
                  </li>
                  <li>
                    <TranslatedText textKey="productOwnerSkill" />
                  </li>
                  <li>
                    <TranslatedText textKey="frontEndSkill" />
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  <TranslatedText textKey="previousSkillsTitle" />
                </h3>
                <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
                  <li>
                    <TranslatedText textKey="javaSkill" />
                  </li>
                  <li>
                    <TranslatedText textKey="computerVisionSkill" />
                  </li>
                </ul>
              </div>
            </div>
          </CVSection>

          {/* Awards section */}
          <CVSection
            title={<TranslatedText textKey="awardsTitle" />}
            defaultExpanded={true}
          >
            <ul className="space-y-2 text-gray-900 dark:text-gray-100">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">🏆</span>
                <TranslatedText textKey="bestPaperAward" />
                <a
                  className="text-blue-500"
                  href="https://iachounta.com/website/2022/07/06/best-full-paper-award-its-2022/"
                >
                  {' '}
                  (L1)
                </a>
                <a
                  className="text-blue-500"
                  href="https://stackoverflow.com/users/4752258/farbod-aprin"
                >
                  {' '}
                  (L2)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">🏅</span>
                <TranslatedText textKey="stackOverflowAward" />
                <a
                  className="text-blue-500"
                  href="     https://stackoverflow.com/users/4752258/farbod-aprin"
                >
                  {' '}
                  (L)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="">
                  <TranslatedText textKey="HakakhonAward" />
                  <a
                    className="text-blue-500"
                    href="https://www.dropbox.com/scl/fi/tqm0m1ddi9g7uq03idksx/hackathon_192.jpg?rlkey=cuy75bbatvy0ql2ssocjgslef&st=5dikole1&dl=0"
                  >
                    {' '}
                    (L1)
                  </a>
                  <a
                    className="text-blue-500"
                    href="https://www.dropbox.com/scl/fi/lshqsvyzvg8gnte57jofb/WhatsApp-Image-2017-12-12-at-12.09.58.jpeg?rlkey=9oulwg107tivfu6zvdfz6kg50&st=6h8svzbh&dl=0"
                  >
                    {' '}
                    (L2)
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <span className="">
                  <TranslatedText textKey="roboticCompetion" />
                  <a
                    className="text-blue-500"
                    href="https://www.dropbox.com/scl/fi/q7vzin6zuw3g39alvfxwn/Robotic-certificates.pdf?rlkey=nrk3up213ijhphiksfu3xddv5&st=nzdzq3wz&dl=0"
                  >
                    {' '}
                    (L)
                  </a>
                </span>
              </li>
            </ul>
          </CVSection>

          {/* Languages section */}
          <CVSection
            title={<TranslatedText textKey="languagesTitle" />}
            defaultExpanded={true}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  <TranslatedText textKey="german" />
                </h3>
                <p className="text-gray-900 dark:text-gray-100">
                  <TranslatedText textKey="germanLevel" />
                </p>
              </div>
              <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  <TranslatedText textKey="english" />
                </h3>
                <p className="text-gray-900 dark:text-gray-100">
                  <TranslatedText textKey="englishLevel" />
                </p>
              </div>
              <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  <TranslatedText textKey="persian" />
                </h3>
                <p className="text-gray-900 dark:text-gray-100">
                  <TranslatedText textKey="persianLevel" />
                </p>
              </div>
            </div>
          </CVSection>
        </div>
        <SocialButtons />
      </div>
    </div>
  );
}
