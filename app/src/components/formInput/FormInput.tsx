import React from "react";

interface FormInputProps {
  label?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value: string | number;
  placeholder?: string;
  className?: string;
}

export const FormInput = (props: FormInputProps) => {
  const { label, type, onChange, name, value, placeholder, className } = props;
  return (
    <div className="group">
      <label className="label">{label}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

