import * as S from "./style";

import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from "react-icons/md";

import { useFormContext } from "react-hook-form";
import { useState } from "react";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
  removeAutocomplete?: boolean;
}

function Password({
  name,
  label,
  placeholder,
  error = false,
  required,
  removeAutocomplete = false,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Group>
        <S.InputControl
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          isInvalid={error}
          {...(removeAutocomplete && { autoComplete: "new-password" })}
          {...register(name, { required })}
        />
        <S.InputEye
          error={error}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <MdOutlineVisibilityOff />
          ) : (
            <MdOutlineRemoveRedEye />
          )}
        </S.InputEye>
      </S.Group>
      {errors[name] && (
        <S.LabelError className="text-danger">Campo obrigatório!</S.LabelError>
      )}
    </>
  );
}

export default Password;
