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
            ? "h-12 rounded-lg border border-danger bg-color-five p-3 text-color-eight shadow-sm placeholder:text-color-one focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            : "h-12 rounded-lg border border-color-two bg-color-five p-3 text-color-eight shadow-sm placeholder:text-color-one focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
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
