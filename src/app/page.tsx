import { techs } from "@/variables/data";
import { ReorderComponent } from "@/components/Reorder/Reorder";
import HeaderComponent from "@/components/Header/Header";
import ParallaxComponent from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="p-8">
        <div className="m-auto mt-8 flex flex-col">
          <ParallaxComponent />
          {/* <section id="skills" className="my-20 block w-full gap-8">
            <h2>
              Building the highest quality applications with the following
              technologies
            </h2>
            <ReorderComponent data={techs} />
          </section> */}
        </div>
      </main>
      <footer className="bottom-0 w-full bg-zinc-900 px-4 py-1 text-center text-color-six lg:text-end">
        <p>Mathpholio™️, Copyright © 2024 by Matheus Souza</p>
      </footer>
    </>
  );
}
