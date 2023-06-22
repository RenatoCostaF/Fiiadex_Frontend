import * as S from "./style";

import { useCallback, useEffect, useState } from "react";

import { Form } from "react-bootstrap";
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
  error?: boolean;
}

function Input({
  name,
  label,
  type,
  placeholder,
  style,
  className,
  required,
  error = false,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
      <Form.Group>
        {label && <S.Label>{label}</S.Label>}
        <S.InputControl
          type={type}
          id={name}
          placeholder={placeholder}
          style={style}
          className={className}
          error={error}
          onChangeCapture={(e: React.FormEvent<HTMLInputElement>) =>
            handleValue(e.currentTarget.value)
          }
          {...register(name, { required })}
        />
        {errors[name] && (
          <S.LabelError className="text-danger">
            Campo obrigatório!
          </S.LabelError>
        )}
      </Form.Group>
    </>
  );
}

export default Input;
