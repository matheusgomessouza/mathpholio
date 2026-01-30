import Image from "next/image";
import { lazy, Suspense } from "react";
import { MdEmail, MdHome } from "react-icons/md";
import { BsChatFill } from "react-icons/bs";

import { isLastTechsItem } from "@/utils/utils";
import * as interfaces from "@/types/interfaces";
import { techs, services } from "@/variables/data";
import HeaderComponent from "@/components/Header/HeaderComponent";
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
      <main className="bg-[radial-gradient(900px_420px_at_50%_0%,_rgba(91,140,255,0.28),_rgba(11,15,20,0)_70%)] bg-no-repeat pt-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-16 pt-4">
          <div id="about" className="h-2" />
          <section className="hero-section relative z-10 flex flex-col items-center gap-4 rounded-3xl bg-transparent px-6 py-8 text-center">
            <div className="flex max-w-2xl flex-col gap-3">
              <h1 className="bg-gradient-to-b from-[#dbe8ff] to-[#7aa2ff] bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-6xl">
                Transforming ideas into robust software.
              </h1>
              <p className="text-sm text-color-one md:text-base">
                I&apos;m Matheus Souza, a Fullstack Developer crafting scalable
                web and mobile applications...
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-color-two bg-color-four/60 px-3 py-1 text-xs font-medium text-color-one">
              <span className="h-2 w-2 rounded-full bg-success" />
              Available for new projects
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-xs font-semibold text-white shadow-[0_0_20px_rgba(91,140,255,0.45)] transition hover:bg-primary-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-9 items-center justify-center rounded-full border border-color-two bg-color-four px-4 text-xs font-semibold text-color-eight transition hover:bg-color-five focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                Contact Me
              </a>
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <div id="skills" className="h-8" />
            <section className="rounded-3xl border border-color-two bg-color-five/60 p-8 shadow-md">
              <div className="mb-8 flex flex-col gap-3 text-center lg:text-left">
                <h2 className="text-2xl font-semibold tracking-tight lg:text-3xl">
                  Revolutionizing Development
                </h2>
                <p className="text-color-one">
                  Unleashing the power of ReactJS, React Native, Node.js,
                  Next.js, Expo, Jest, Git, and TypeScript for efficiency,
                  scalability, and innovation in software development.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {techs.map((item: interfaces.TechSkillsProps, index) => (
                  <aside
                    key={item.title}
                    className="flex flex-col gap-3 rounded-2xl border border-color-two bg-color-four p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={48}
                        height={48}
                        className={
                          isLastTechsItem(index, techs.length)
                            ? "h-10 w-10"
                            : "h-10 w-10 invert"
                        }
                      />
                      <h3 className="text-base font-semibold text-color-eight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-color-one">{item.description}</p>
                  </aside>
                ))}
              </div>
            </section>

            <div id="services" className="h-2" />
            <section className="flex w-full flex-col gap-6">
              <article className="flex flex-col gap-2 text-left">
                <h2 className="text-2xl font-semibold tracking-tight lg:text-3xl">
                  Technical Expertise
                </h2>
                <p className="text-sm text-color-one">
                  Focused on building modern, resilient products with clean UI
                  patterns and scalable architecture.
                </p>
              </article>
              <div className="grid w-full gap-4 md:grid-cols-3">
                {services.map((item: interfaces.ServicesProps) => (
                  <aside
                    key={item.id}
                    className="flex flex-col gap-4 rounded-xl border border-color-two bg-color-four/80 p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-color-two bg-color-five">
                      <Image
                        fetchPriority="low"
                        alt={item.title}
                        src={item.icon}
                        width={24}
                        height={24}
                        className="h-5 w-5"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-color-eight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-color-one">
                        {item.description}
                      </p>
                    </div>
                  </aside>
                ))}
              </div>
            </section>

            <div id="work-experience" className="h-2" />
            <section className="work-section flex w-auto flex-col justify-center rounded-3xl border border-color-two bg-color-five/60 p-8 shadow-md">
              <article className="relative z-20 text-center lg:text-left">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight lg:text-3xl">
                  Building Solutions Across Technologies and Industries
                </h2>
                <p className="text-color-one">
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
            <section className="projects-section flex flex-col gap-8 rounded-3xl border border-color-two bg-color-five/60 p-8 shadow-md">
              <article className="flex flex-col gap-3 text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wide text-color-one">
                  Featured Projects
                </span>
                <h2 className="text-2xl font-semibold tracking-tight lg:text-3xl">
                  Building products that balance performance and polish
                </h2>
                <p className="text-color-one">
                  Explore selected work from my GitHub portfolio, focused on
                  pragmatic solutions, thoughtful UX, and clean architecture.
                </p>
              </article>
              <Suspense fallback={<Loading />}>
                <CarouselComponent />
              </Suspense>
            </section>

            <div id="contact" />
            <section className="contact-section flex flex-col gap-10 rounded-3xl border border-color-two bg-color-five/60 p-8 shadow-md lg:flex-row">
              <article className="relative z-20 flex flex-col gap-10 text-center lg:w-1/2 lg:text-left">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold tracking-tight lg:text-3xl">
                    Contact
                  </h2>
                  <p className="text-color-one">
                    Looking to enhance your team with top-notch talent or
                    discuss exciting new opportunities? Reach out via email.
                    I&apos;d love to connect and explore how we can collaborate!
                  </p>
                </section>
                <section className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="max-w-fit rounded-xl border border-color-two bg-color-four p-3">
                      <MdEmail size={32} fill="white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="flex justify-start">Email address</h3>
                      <p className="flex justify-start text-color-one">
                        matheuscoworking@outlook.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="max-w-fit rounded-xl border border-color-two bg-color-four p-3">
                      <MdHome size={32} fill="white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="flex justify-start">Country</h3>
                      <p className="flex justify-start text-color-one">
                        Brazil
                      </p>
                    </div>
                  </div>
                </section>
              </article>
              <aside className="z-10 rounded-2xl border border-color-two bg-color-four p-6 lg:w-1/2">
                <Suspense fallback={<Loading />}>
                  <FormComponent />
                </Suspense>
              </aside>
            </section>

            <section className="faq-section items-center rounded-3xl border border-color-two bg-color-five/60 p-8 shadow-md">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold tracking-tight lg:text-3xl">
                Frequently Asked Questions <BsChatFill className="h-8 w-8" />
              </h2>
              <Suspense fallback={<Loading />}>
                <AccordionComponent />
              </Suspense>
            </section>
          </section>
        </div>
      </main>
      <footer className="border-t border-color-two bg-color-seven px-4 py-4 text-center">
        <p className="text-sm text-color-one">
          Mathpholio™️, Copyright © {year} by Matheus Souza
        </p>
      </footer>
    </>
  );
}
