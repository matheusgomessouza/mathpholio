"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
  return (
    <h1 className="w- mb-6 flex-wrap pb-10 text-9xl">
      <Typewriter
        options={{
          strings: ["What's up? I am Matheus Souza."],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
}
