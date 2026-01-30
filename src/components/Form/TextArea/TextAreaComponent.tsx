import * as interfaces from "@/types/interfaces";

export function TextAreaComponent({
  name,
  register,
  error,
  placeholder,
}: interfaces.FormFieldProps) {
  return (
    <>
      <textarea
        {...register(name, { required: true })}
        className={
          error
            ? "min-h-[220px] rounded-lg border border-danger bg-color-five p-3 text-color-eight shadow-sm placeholder:text-color-one focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            : "min-h-[220px] rounded-lg border border-color-two bg-color-five p-3 text-color-eight shadow-sm placeholder:text-color-one focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        }
        placeholder={placeholder}
      ></textarea>
      {error && (
        <span className="font-sans font-bold text-red-500">
          {error.message}
        </span>
      )}
    </>
  );
}
