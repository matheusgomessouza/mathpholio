"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
  return (
    <h1 className="mb-6 hidden flex-wrap pb-10 text-8xl lg:block">
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
