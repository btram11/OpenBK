import * as React from 'react';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange
}) => {
  return (
    <>
      <label className="text-sm font-semibold text-black" htmlFor={`input-${label}`}>
        {label}
      </label>
      <input
        id={`input-${label}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="overflow-hidden px-5 py-1.5 mt-1.5 w-full text-sm text-black bg-white rounded-md border border-solid border-zinc-400"
      />
    </>
  );
};