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
            ? "max-h-[330px] min-h-[330px] rounded-lg border-2 border-rose-500 bg-color-five p-4 font-sans text-color-eight placeholder:text-color-eight"
            : "max-h-[330px] min-h-[330px] rounded-lg bg-color-five p-4 font-sans text-color-eight placeholder:text-color-eight"
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
