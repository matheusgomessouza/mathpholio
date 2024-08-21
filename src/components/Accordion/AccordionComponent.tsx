import * as interfaces from "@/types/interfaces";
import { questions } from "@/variables/data";

export function AccordionComponent() {
  return (
    <article className="mt-20">
      {questions &&
        questions.map((item: interfaces.QuestionsProps) => (
          <details key={item.title} className="mb-10">
            <summary className="relative mt-4 cursor-pointer font-alt after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:content-[''] dark:after:bg-white">
              {item.title}
            </summary>
            <p className="py-16">{item.information}</p>
          </details>
        ))}
    </article>
  );
}
