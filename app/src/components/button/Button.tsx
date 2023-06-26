interface ButtonProps {
  disabled: boolean;
  buttonText: string;
}

export const Button: React.FC<ButtonProps> = ({ disabled, buttonText }) => {
  return (
    <button type="submit" disabled={disabled}>
      {buttonText}
    </button>
  );
};
