import { InputControlSwitch, Label } from "./style";

import { useCallback } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  label?: string;
  style?: React.CSSProperties;
  className?: string;
  required?: boolean;
}

function Switch({ name, label, style, className, required }: InputProps) {
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
      <InputControlSwitch
        type="switch"
        id={name}
        style={style}
        className={className}
        {...register(name, { required })}
      />
    </>
  );
}

export default Switch;
