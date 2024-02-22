"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
  return (
    <h1 className="mb-6 hidden flex-wrap pb-10 lg:block xl:text-6xl 2xl:text-8xl">
      <Typewriter
        options={{
          strings: ["I'm Matheus Souza."],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
}
