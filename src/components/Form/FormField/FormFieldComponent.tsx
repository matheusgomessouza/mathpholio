import * as interfaces from "@/types/interfaces";

export function FormFieldComponent({
  name,
  register,
  type,
  error,
  placeholder,
}: interfaces.FormFieldProps) {
  return (
    <>
      <input
        type={type}
        {...register(name, { required: true })}
        className={
          error
            ? "focus-within::border-2 focus-within::border-rose-500 h-14 rounded-lg border-2 border-rose-500 bg-color-five p-4 font-sans text-color-eight placeholder:text-color-eight"
            : "h-14 rounded-lg bg-color-five p-4 font-sans text-color-eight placeholder:text-color-eight"
        }
        placeholder={placeholder}
      />
      {error && (
        <span className="font-sans font-bold text-red-500">
          {error.message}
        </span>
      )}
    </>
  );
}
