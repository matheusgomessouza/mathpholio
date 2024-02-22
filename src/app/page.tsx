import HeaderComponent from "@/components/Header/Header";
import ParallaxComponent from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="p-8 pb-16">
        <div className="m-auto mt-8 flex flex-col">
          <ParallaxComponent />
        </div>
      </main>
      <footer className="fixed bottom-0 w-full bg-black px-4 py-1 text-center text-color-six lg:relative lg:text-end">
        <p>Mathpholio™️, Copyright © 2024 by Matheus Souza</p>
      </footer>
    </>
  );
}
