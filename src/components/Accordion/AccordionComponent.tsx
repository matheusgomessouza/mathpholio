import * as interfaces from "@/types/interfaces";
import { questions } from "@/variables/data";

export function AccordionComponent() {
  return (
    <article className="mt-6">
      {questions &&
        questions.length !== 0 &&
        questions.map((item: interfaces.QuestionsProps, index) => (
          <details
            key={item.title}
            className="mb-6 rounded-2xl border border-color-two bg-color-four p-4"
            role="group"
          >
            <summary className="cursor-pointer list-none font-alt text-base font-semibold text-color-eight transition duration-300 ease-in">
              {item.title}
            </summary>
            <p className="pt-4 text-sm text-color-one md:text-base">
              {item.information}
            </p>
          </details>
        ))}
    </article>
  );
}
