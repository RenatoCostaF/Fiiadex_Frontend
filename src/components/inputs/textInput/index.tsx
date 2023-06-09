import { InputControl, Label } from "./style";
import { useCallback, useEffect, useState } from "react";

import { useFormContext } from "react-hook-form";

type Types = "text" | "email" | "number" | "date" | "time";

interface InputProps {
  name: string;
  label?: string;
  type: Types;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  required?: boolean;
}

function InputText({
  name,
  label,
  type,
  placeholder,
  style,
  className,
  required,
}: InputProps) {
  const { register } = useFormContext();

  const handleValue = useCallback(
    (value: string) => {
      const input = document.getElementById(name) as HTMLInputElement;
      if (input) {
        input.value = value;
      }
    },

    [name]
  );
  return (
    <>
      {label && <Label>{label}</Label>}
      <InputControl
        type={type}
        id={name}
        placeholder={placeholder}
        style={style}
        className={className}
        onChangeCapture={(e: React.FormEvent<HTMLInputElement>) =>
          handleValue(e.currentTarget.value)
        }
        {...register(name, {
          required: { value: required ? true : false, message: "Teste" },
        })}
      />
    </>
  );
}

export default InputText;
