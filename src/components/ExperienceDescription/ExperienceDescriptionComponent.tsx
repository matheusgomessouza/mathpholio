import * as interfaces from "@/types/interfaces";

export default function ExperienceDescriptionComponent({
  jobTitle,
  company,
  locality,
  period,
  children,
}: interfaces.ExperienceDescriptionComponentProps) {
  return (
    <article className="relative z-20 w-full py-8">
      <section className="flex flex-col items-center justify-between md:flex-row xl:justify-start xl:gap-8">
        <div className="flex w-full items-center justify-between md:hidden">
          <h3>{jobTitle}</h3>
          <h3 className="underline md:hidden">{company}</h3>
        </div>
        <h3 className="hidden lg:flex">{jobTitle}</h3>
        <h3 className="hidden underline lg:flex">{company}</h3>
        <section className="flex w-full items-center justify-between gap-8 md:w-auto md:justify-end">
          <i>{locality}</i>
          <h3>{period}</h3>
        </section>
      </section>
      <ul className="mt-4 list-disc pl-8">{children}</ul>
    </article>
  );
}
