"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema_validator";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  className?: string;
}

const FormInput = ({
  name,
  type,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
  className,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <label className="label">{label ? label : ""}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "file" ? (
            <input
              type={type}
              {...field}
              value={field.value ? field.value : value}
              className={`border border-cBlack file-input focus:outline focus:outline-cOrange focus:border-none w-full ${className}`}
              required={required}
            />
          ) : (
            <input
              type={type}
              {...field}
              value={value ? value : field.value}
              className={`border border-cBlack input focus:outline focus:outline-cOrange focus:border-none w-full ${className}`}
              placeholder={placeholder}
              required={required}
            />
          )
        }
      />
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default FormInput;
