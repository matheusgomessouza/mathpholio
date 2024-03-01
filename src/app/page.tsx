import HeaderComponent from "@/components/Header/Header";
import ParallaxComponent from "@/components/Parallax";
import { techs } from "@/variables/data";
import * as interfaces from "@/types/interfaces";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="p-8 pb-16">
        <div className="m-auto mt-8 flex flex-col">
          <ParallaxComponent />
          <section className="mt-12">
            <p id="skills">Tech Skills</p>
            <h2>
              Building the highest quality application with the following
              technologies
            </h2>
            {techs.map((item: interfaces.TechSkills, index) => {
              if (index % 2 === 0) {
                return (
                  <div
                    key={item.title}
                    className="-ml-8 mt-8 flex h-52 w-[90vw] items-center rounded-r-[70px] bg-black p-4 lg:hidden"
                  >
                    <article className="flex gap-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="pb-4 text-white">{item.title}</h2>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={300}
                          height={300}
                          className=" grayscale invert"
                        />
                      </div>
                      <div className="flex items-center">
                        <p className="w-[90%] text-sm text-white">
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
                    className="ml-[0.7rem] mt-8 flex h-52 w-[90vw] items-center rounded-l-[70px] bg-black p-4 lg:hidden"
                  >
                    <article className="flex flex-row-reverse gap-2">
                      <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="pb-4 text-white">{item.title}</h2>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={300}
                          height={300}
                          className="invert"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <p className="w-[90%] text-right text-sm text-white">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </div>
                );
              }
            })}
          </section>
        </div>
      </main>
      <footer className="fixed bottom-0 w-full bg-black px-4 py-1 text-center text-color-six lg:relative lg:text-end">
        <p>Mathpholio™️, Copyright © 2024 by Matheus Souza</p>
      </footer>
    </>
  );
}
