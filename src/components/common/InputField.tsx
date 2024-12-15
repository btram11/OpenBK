const InputField = ({
  label,
  id,
  register,
  error,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  register: any;
  error: any;
  placeholder: string;
  type?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor={id} className="font-semibold text-lg">
        {label}
      </label>
      <input
        {...register(id)}
        id={id}
        type={type}
        className={getInputClass(error)}
        placeholder={placeholder}
      />
      <span className="text-red-500 text-sm absolute -bottom-5">
        {error?.message}
      </span>
    </div>
  );
};

const getInputClass = (error: any) => {
  return `text-black text-base w-[30vw] px-5 py-3 rounded-lg border dark:border-stone-400 caret-dodger-blue-500 focus:outline-dodger-blue-500 ${
    error ? " border-2 border-red-500 focus:outline-red-500" : ""
  }`;
}
export default InputField;