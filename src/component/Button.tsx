interface ButtonProps {
  title: string;
  disabled: boolean;
}

const Button = ({ title, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${disabled ? "btn disabled" : "btn"}`}
    >
      {title}
    </button>
  );
};
export default Button;
