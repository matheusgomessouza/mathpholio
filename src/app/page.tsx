import Image from "next/image";
import { lazy, Suspense } from "react";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdHome } from "react-icons/md";
import { BsChatFill } from "react-icons/bs";

import { isLastTechsItem } from "@/utils/utils";
import * as interfaces from "@/types/interfaces";
import { techs, services } from "@/variables/data";
import myPicture from "../../public/assets/main-circle.png";

import HeaderComponent from "@/components/Header/HeaderComponent";
import TypewriterComponent from "@/components/Header/Typewriter/TypewriterComponent";
import ButtonComponent from "@/components/Button/ButtonComponent";
import { Loading } from "@/components/Loading/LoadingComponent";

const CarouselComponent = lazy(() =>
  import("@/components/Carousel/CarouselComponent").then((module) => ({
    default: module.CarouselComponent,
  }))
);

const AccordionComponent = lazy(() =>
  import("@/components/Accordion/AccordionComponent").then((module) => ({
    default: module.AccordionComponent,
  }))
);

const FormComponent = lazy(() =>
  import("@/components/Form/FormComponent").then((module) => ({
    default: module.FormComponent,
  }))
);

const ExperienceDescriptionComponent = lazy(() =>
  import(
    "@/components/ExperienceDescription/ExperienceDescriptionComponent"
  ).then((module) => ({
    default: module.ExperienceDescriptionComponent,
  }))
);

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <HeaderComponent />
      <main>
        <div className="m-auto flex flex-col lg:mt-8">
          <section className="hero-section relative flex flex-col-reverse items-center px-wrapper xl:h-screen xl:flex-row">
            <article className="flex w-1/2 flex-col items-center">
              <div className="sm:w-full">
                <TypewriterComponent />
                <p className="text-center text-base leading-6 lg:text-left 2xl:w-9/12 2xl:text-left 2xl:text-xl">
                  I am a highly skilled professional with a specialization in
                  front-end technologies, primarily working with the dynamic
                  Javascript stack, including <strong>React</strong>,{" "}
                  <strong>Node.js</strong>, <strong>Next.js</strong>, and{" "}
                  <strong>React Native</strong>. Currently, in the exciting
                  phase of transitioning into a full-stack engineering role.
                </p>
                <div className="flex gap-4 pt-6">
                  <ButtonComponent
                    label="LinkedIn"
                    link="https://www.linkedin.com/in/matheus-gomes-de-souza"
                    ariaLabel="Check out my LinkedIn profile"
                  >
                    <FaLinkedin />
                  </ButtonComponent>
                  <ButtonComponent
                    label="Github"
                    link="https://www.github.com/matheusgomessouza"
                    ariaLabel="Check out my Github page"
                  >
                    <ImGithub />
                  </ButtonComponent>
                </div>
              </div>
            </article>
            <aside className="flex items-center justify-center lg:w-1/2">
              <div className="relative flex h-auto w-screen items-center justify-center xl:h-auto xl:w-auto">
                <Image
                  priority={true}
                  src={myPicture}
                  width={900}
                  height={700}
                  alt="A person with a long beard, serious expression"
                  className="relative z-[2] brightness-100 invert dark:invert-0 lg:w-[35vw] xl:w-[45vw]"
                  placeholder="blur" // Add this
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBAp6FZpQAAAAASUVORK5CYII=" // 1x1 transparent PNG
                />
              </div>
            </aside>
          </section>

          <section className="mt-12">
            <div id="skills" className="h-8" />
            <section className="mobile relative px-wrapper">
              <h2 className="mb-6 text-center text-2xl leading-tight lg:hidden lg:text-2xl">
                Revolutionizing Development
              </h2>
              <p className="text-center lg:hidden">
                Unleashing the power of ReactJS, React Native, Node.js, Next.js,
                Expo, Jest, Git, and TypeScript for efficiency, scalability, and
                innovation in software development.
              </p>
              {techs.map((item: interfaces.TechSkillsProps, index) => {
                if (index % 2 === 0) {
                  return (
                    <div
                      key={item.title}
                      className="absolute left-0 mt-8 flex h-52 w-[90vw] items-center rounded-r-[30px] bg-black p-4 dark:bg-color-four lg:hidden"
                    >
                      <article className="flex gap-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <h2 className="pb-4 text-white dark:text-white">
                            {item.title}
                          </h2>
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={300}
                            height={300}
                            className=" dark:invert-1 grayscale invert"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="w-[90%] text-sm text-white dark:text-white">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={item.title}
                      className="-mb-4 mt-64 flex h-52 w-[90vw] items-center rounded-l-[30px] bg-black p-4 dark:bg-color-four lg:hidden"
                    >
                      <article className="flex flex-row-reverse gap-2">
                        <div className="flex flex-col items-center justify-center text-center">
                          <h2 className="pb-4 text-white dark:text-white">
                            {item.title}
                          </h2>
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={300}
                            height={300}
                            className={
                              isLastTechsItem(index, techs.length)
                                ? undefined
                                : "invert dark:invert"
                            }
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <p className="w-[90%] text-right text-sm text-white dark:text-white">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    </div>
                  );
                }
              })}
            </section>
            <section className="my-10 hidden items-center justify-between gap-8 bg-color-seven px-wrapper py-12 dark:bg-color-four lg:flex lg:w-full lg:items-center 2xl:gap-20">
              <article className="z-20 text-white">
                <h2 className="mb-6 w-4 text-4xl leading-tight lg:text-2xl">
                  Revolutionizing Development
                </h2>
                <p className="w-72">
                  Unleashing the power of ReactJS, React Native, Node.js,
                  Next.js, Expo, Jest, Git, and TypeScript for efficiency,
                  scalability, and innovation in software development.
                </p>
              </article>
              {techs.map((item: interfaces.TechSkillsProps, index) => (
                <aside
                  key={item.title}
                  className="z-20 flex flex-col items-center justify-center gap-4 text-center"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={100}
                    height={100}
                    className={
                      isLastTechsItem(index, techs.length)
                        ? undefined
                        : "invert dark:invert"
                    }
                  />
                  <h3 className="pb-4 text-white lg:text-sm">{item.title}</h3>
                </aside>
              ))}
            </section>

            <section className="my-10 flex w-full flex-col gap-10 px-wrapper lg:flex lg:flex-row lg:items-center xl:mt-20">
              <article className="flex flex-col justify-center">
                <h2
                  id="services"
                  className="mx-auto mb-8 mt-12 w-4/5 text-center text-2xl lg:mx-0 lg:text-left 2xl:text-4xl 2xl:leading-tight"
                >
                  Software Solutions for Every Challenge
                </h2>
                <p className="text-center lg:flex lg:w-80 lg:text-left 2xl:w-11/12 2xl:text-2xl">
                  Full-stack developer with expertise in web, mobile, and
                  backend development. I create user-friendly websites and
                  intuitive mobile apps while ensuring scalable and robust
                  backend systems.
                </p>
              </article>
              <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-end lg:gap-4 2xl:gap-10">
                {services.map((item: interfaces.ServicesProps) => (
                  <aside
                    key={item.id}
                    className="flex flex-col items-center justify-center gap-8 rounded-3xl bg-black p-10 dark:bg-color-four lg:h-auto lg:w-auto lg:text-center 2xl:h-[425px] 2xl:w-[350px]"
                  >
                    <Image
                      fetchPriority="low"
                      alt={item.title}
                      src={item.icon}
                      width={108}
                      height={108}
                      className="lg:w-16 2xl:h-28 2xl:w-28"
                    />
                    <h3 className="text-white lg:text-base 2xl:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-center text-white lg:text-xs 2xl:text-base">
                      {item.description}
                    </p>
                  </aside>
                ))}
              </div>
            </section>

            <div id="work-experience" className="h-2" />
            <section className="work-section my-10 flex w-auto flex-col justify-center bg-color-seven px-wrapper py-12 text-white dark:bg-color-four lg:text-white">
              <article className="relative z-20 text-center xl:mt-8 xl:text-left 2xl:mb-20 2xl:mt-16">
                <h2 className="mb-6 text-2xl leading-tight 2xl:text-4xl">
                  Building Solutions Across Technologies and Industries
                </h2>
                <p className="2xl:text-2xl">
                  With over 5 years of experience in developing interactive and
                  scalable web applications, I have a strong foundation in both
                  front-end and full-stack development. I have a proven track
                  record of delivering projects across various technologies,
                  including HTML, CSS, Javascript, React/React Native,
                  Typescript, and more. My experience spans across different
                  industries.
                </p>
              </article>
              <ExperienceDescriptionComponent
                jobTitle="Capstone Advisor"
                company="Crimson Education"
                locality="Auckland, New Zealand"
                period="12/2024 - Present"
              >
                <li className="xl:w-3/4">
                  Guided students through their capstone projects, enhancing
                  their research and analytical skills.
                </li>
                <li>
                  Collaborated with a diverse team to develop innovative
                  educational products, impacting over 100,000 students
                  globally.
                </li>
                <li>Provided personalized mentorship in student projects.</li>
              </ExperienceDescriptionComponent>
              <ExperienceDescriptionComponent
                jobTitle="Mobile Developer"
                company="Linx"
                locality="Blumenau, SC, Brazil"
                period="12/2024 - 03/2025"
              >
                <li className="xl:w-3/4">
                  Built and executed unit and functional test suites using Jest
                  and Testing Library for a React Native application.
                </li>
                <li>
                  Developed and maintained API integrations using Axios and
                  Redux-saga, optimizing context state persistence.
                </li>
                <li>
                  Enhanced codebase quality through active code reviews and
                  adherence to best practices.
                </li>
                <li>
                  Streamlined deployment cycles using Azure DevOps and Git for
                  version control and CI/CD.
                </li>
                <li>
                  Implemented styling solutions with Styled-Components for
                  modular, maintainable UI components.
                </li>
              </ExperienceDescriptionComponent>
              <ExperienceDescriptionComponent
                jobTitle="Software Developer"
                company="Cognizant"
                locality="São Paulo, SP, Brazil"
                period="04/2022 - 06/2024"
              >
                <li className="xl:w-3/4">
                  Engineered mobile and web features by translating Figma
                  designs into React and React Native interfaces using Expo.
                </li>
                <li>
                  Applied Redux and ContextAPI for scalable state management in
                  TypeScript-based applications.
                </li>
                <li>
                  Developed a private crop science web application using React,
                  Typescript, and Redux, enhancing crop management efficiency.
                </li>
                <li>
                  Diagnosed and resolved system incidents through in-depth
                  analysis of AWS and SAP reports.
                </li>
                <li>
                  Boosted application observability by implementing custom
                  Datadog alerts and dashboards.
                </li>
                <li>
                  Collaborated with international teams through code reviews and
                  technical interviews, fostering a culture of knowledge
                  sharing.
                </li>
                <li>
                  Conducted functional testing with Jest and Testing Library,
                  ensuring high-quality code and application reliability.
                </li>
              </ExperienceDescriptionComponent>
              <ExperienceDescriptionComponent
                jobTitle="Frontend Developer"
                company="Serasa"
                locality="Blumenau, SC, Brazil"
                period="07/2021 - 02/2022"
              >
                <li className="xl:w-3/4">
                  Developed a micro-frontend application using Angular and
                  React, enhancing user experience in financial services.
                </li>
                <li>
                  Developed payload-preserving API calls via Axios and
                  Redux-saga within Next.js and Angular applications.
                </li>
                <li>
                  Automated deployment workflows via Jenkins and Bitbucket,
                  accelerating release cycles.
                </li>
                <li>
                  Collaborated in BDD sessions to align business expectations
                  with technical delivery.
                </li>
                <li>
                  Designed email templates using Mjml, tailored for marketing
                  campaigns.
                </li>
                <li>
                  Integrated Google Analytics tracking triggers in collaboration
                  with the Data Analysis team.
                </li>
                <li>
                  Implemented functional testing with Jest and Testing Library,
                  improving application reliability and performance.
                </li>
                <li>
                  Translated Figma layouts into TypeScript-based React
                  components, ensuring robust code quality, component
                  reusability and scalability.
                </li>
                <li>
                  Collaborated with cross-functional teams to create a
                  Lock&Unlock feature, empowering millions of users to manage
                  their credit scores effectively.
                </li>
              </ExperienceDescriptionComponent>
              <ExperienceDescriptionComponent
                jobTitle="Frontend Developer"
                company="Prospecta Digital"
                locality="SJRP, SP, Brazil"
                period="08/2020 - 05/2021"
              >
                <li className="xl:w-3/4">
                  Developed and optimized Wordpress and Tray Ecommerce websites,
                  ensuring adherence to SEO best practices.
                </li>
                <li>
                  Translated Adobe Photoshop designs into responsive web
                  interfaces using HTML, CSS, and JavaScript, maintaining high
                  standards of visual accuracy and front-end performance.
                </li>
                <li>
                  Collaborated with the Customer Success team to implement
                  features using HTML, CSS, and JavaScript.
                </li>
                <li>
                  Boosted traffic via SEO-optimized WordPress/Tray Ecommerce
                  page.
                </li>
                <li>
                  Optimized frontend performance through clean HTML/CSS/JS
                  implementation.
                </li>
              </ExperienceDescriptionComponent>
              <ExperienceDescriptionComponent
                jobTitle="Frontend Developer"
                company="W3midia"
                locality="SJRP, SP, Brazil"
                period="06/2020 - 07/2020"
              >
                <li className="xl:w-3/4">
                  Developed and implemented features for CMS-based and MVC PHP
                  websites using HTML, CSS, JavaScript, and PHP.
                </li>
                <li>
                  Resolved bugs and optimized website performance, enhancing
                  user experience for clients.
                </li>
                <li>
                  Deployed code changes efficiently via Filezilla, ensuring
                  seamless updates to production environments.
                </li>
                <li>
                  Created new layouts in a proprietary CMS, improving client
                  satisfaction and engagement.
                </li>
              </ExperienceDescriptionComponent>
            </section>

            <div id="projects" className="h-2" />
            <section className="projects-section my-10 px-wrapper py-12">
              <article className="flex flex-col justify-center">
                <h2
                  id="services"
                  className="mx-auto mb-8 w-4/5 text-center text-2xl lg:mx-0 lg:text-left 2xl:text-4xl 2xl:leading-tight"
                >
                  Expertise in Software Development with Diverse Projects and
                  Cutting-Edge Solutions
                </h2>
                <p className="text-center lg:flex lg:text-left 2xl:text-2xl">
                  Harnessing years of experience in software engineering, I
                  specialize in crafting robust and scalable applications
                  tailored to meet dynamic business needs. My Github portfolio
                  demonstrates my proficiency across a wide range of
                  technologies, including HTML, CSS, Javascript, Typescript,
                  React, Redux, Next.js, React Native, Expo, Node.js,
                  Express.js, Jest, Docker, SQL, Prisma ORM, and more. Each
                  project underscores my ability to innovate and deliver
                  effective solutions in various domains, showcasing my
                  commitment to excellence and continuous learning.
                </p>
              </article>
              <Suspense fallback={<Loading />}>
                <CarouselComponent />
              </Suspense>
            </section>

            <div id="contact" />
            <section className="contact-section mt-10 flex flex-col justify-center gap-20 bg-color-seven px-wrapper py-12 text-color-eight dark:bg-color-four dark:text-white lg:flex-row lg:text-white">
              <article className="relative z-20 flex flex-col gap-16 text-center lg:w-1/2 xl:mt-8 xl:text-left 2xl:mb-20 2xl:mt-16">
                <section>
                  <h2 className="mb-6 text-2xl leading-tight 2xl:text-4xl">
                    Contact
                  </h2>
                  <p className="2xl:w-[660px] 2xl:text-2xl">
                    Looking to enhance your team with top-notch talent or
                    discuss exciting new opportunities? Reach out via email.
                    I&apos;d love to connect and explore how we can collaborate!
                  </p>
                </section>
                <section className="flex flex-col gap-10">
                  <div className="flex items-center gap-4">
                    <div className="max-w-fit rounded-xl bg-color-five p-4 dark:bg-black">
                      <MdEmail size={32} fill="white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="flex justify-start">Email address</h3>
                      <p className="flex justify-start">
                        matheuscoworking@outlook.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="max-w-fit rounded-xl bg-color-five p-4 dark:bg-black">
                      <MdHome size={32} fill="white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="flex justify-start">Country</h3>
                      <p className="flex justify-start">Brazil</p>
                    </div>
                  </div>
                </section>
              </article>
              <aside className="z-10 rounded-3xl lg:mt-12 lg:w-1/2 lg:bg-black lg:p-10">
                <Suspense fallback={<Loading />}>
                  <FormComponent />
                </Suspense>
              </aside>
            </section>

            <section className="faq-section mt-10 items-center px-wrapper py-12">
              <h2 className="mb-6 flex gap-2 text-4xl leading-tight xl:gap-4 xl:text-3xl 2xl:text-4xl">
                Frequently Asked Questions{" "}
                <BsChatFill className="h-16 w-16 xl:h-8 xl:w-8" />
              </h2>
              <Suspense fallback={<Loading />}>
                <AccordionComponent />
              </Suspense>
            </section>
          </section>
        </div>
      </main>
      <footer className="fixed bottom-0 z-50 w-full bg-color-seven px-4 py-1 text-center text-color-seven dark:bg-color-four lg:relative">
        <p className="text-color-eight dark:text-color-eight">
          Mathpholio™️, Copyright © {year} by Matheus Souza
        </p>
      </footer>
    </>
  );
}
