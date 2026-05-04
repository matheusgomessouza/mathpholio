import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";

export const useSendEmail = (onSuccessCallback?: () => void) => {
  return useMutation({
    mutationFn: async (formElement: HTMLFormElement | null) => {
      if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
        !formElement
      ) {
        throw new Error(
          "Missing EmailJS environment variables or form reference"
        );
      }

      return emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formElement,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );
    },
    onSuccess: () => {
      onSuccessCallback?.();
    },
  });
};
