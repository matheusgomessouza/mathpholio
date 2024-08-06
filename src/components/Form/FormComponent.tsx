"use client";

import { useRef } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

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

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e?: React.FormEvent<HTMLFormElement>) => {
    e!.preventDefault();

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current!,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
  };

  const onSubmit: SubmitHandler<interfaces.ContactFormProps> = (data) =>
    sendEmail();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg flex flex-col gap-2"
      ref={form}
    >
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
