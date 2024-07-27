"use client";

import { RiLoginCircleFill } from "react-icons/ri";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as interfaces from "@/types/interfaces";
import { ContactSchema } from "@/components/Form/types/types";
import { FormFieldComponent } from "./FormField/FormFieldComponent";
import { TextAreaComponent } from "./TextArea/TextAreaComponent";

export function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<interfaces.ContactFormProps>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit: SubmitHandler<interfaces.ContactFormProps> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg flex flex-col gap-2">
      <FormFieldComponent
        type="text"
        name="name"
        placeholder="Your name"
        register={register}
        error={errors.name}
      />

      <FormFieldComponent
        type="email"
        placeholder="Your email"
        name="email"
        register={register}
        error={errors.email}
      />

      <TextAreaComponent
        name="message"
        placeholder="Your message"
        register={register}
        error={errors.message}
      />

      <button
        type="submit"
        className="ml-auto flex cursor-pointer items-center gap-2 rounded-lg bg-color-five  px-4 py-4 dark:bg-color-seven lg:mt-8 lg:bg-color-five"
      >
        <p className="font-alt">Send message</p>
        <RiLoginCircleFill size={24} />
      </button>
    </form>
  );
}
