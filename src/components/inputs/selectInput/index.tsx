import { useFormContext } from "react-hook-form";
import { Group, Label, SelectControl } from "./style";
import { useEffect, useMemo } from "react";
import { CSSObject } from "styled-components";

export interface SingleOptionData {
  id?: string | number;
  value?: string | number;
  name?: string | number;
  disabled?: boolean;
}

interface SelectProps {
  name: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  options: SingleOptionData[];
  defaultValue?: string | number;
}

function Select({
  name,
  label,
  options,
  disabled = false,
  required = true,
  error = false,
  defaultValue,
}: SelectProps) {
  const { register, setValue, watch } = useFormContext();

  const value = watch(name);

  const defaultValueOption = useMemo(() => {
    if (defaultValue) {
      return options.find((option) => option?.id === defaultValue);
    }
    return options[0]?.id;
  }, [options, defaultValue]);

  useEffect(() => {
    if (options.length > 1 && defaultValue) {
      setValue(name, defaultValue);
    }
  }, [options.length, defaultValue]);

  useEffect(() => {
    if (value === "") {
      setValue(name, undefined);
    }
  }, [value, name]);

  return (
    <Group>
      {label && <Label>{label}</Label>}
      <SelectControl
        isInvalid={error}
        disabled={disabled}
        style={{
          menu: (provided: CSSObject) => ({ ...provided, zIndex: 99 }),
        }}
        defaultValue={defaultValue ? defaultValueOption : options[0]?.id}
        {...register(name, { required: required && !disabled })}
      >
        {options.map((option) => (
          <option
            key={option?.id}
            value={option.disabled ? "" : option?.id ?? option?.value}
          >
            {option.name ?? option.value}
          </option>
        ))}
      </SelectControl>
    </Group>
  );
}

export default Select;
