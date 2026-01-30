import * as interfaces from "@/types/interfaces";
import React from "react";

export const ExperienceDescriptionComponent = React.memo(
  function ExperienceDescriptionComponent({
    jobTitle,
    company,
    locality,
    period,
    children,
  }: interfaces.ExperienceDescriptionComponentProps) {
    return (
      <article className="relative z-20 w-full border-b border-color-two py-6">
        <section className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center xl:justify-start xl:gap-8 2xl:justify-between">
          <div className="flex w-full items-center justify-between md:hidden">
            <h3>{jobTitle}</h3>
            <h3 className="underline md:hidden">{company}</h3>
          </div>
          <h3 className="hidden font-medium text-color-eight lg:flex 2xl:text-lg">
            {jobTitle}
          </h3>
          <h3 className="hidden font-medium text-color-six underline lg:flex 2xl:text-lg">
            {company}
          </h3>
          <section className="flex w-full items-center justify-between gap-4 text-sm text-color-one md:w-auto md:justify-end">
            <p>{locality}</p>
            <h3 className="font-medium text-color-six">{period}</h3>
          </section>
        </section>
        <ul className="mt-4 list-disc pl-6 text-sm text-color-six md:text-base">
          {children}
        </ul>
      </article>
    );
  }
);
