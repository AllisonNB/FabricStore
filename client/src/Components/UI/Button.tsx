import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  textOnly?: true;
}

const Button = ({ children, className, textOnly, ...props }: ButtonProps) => {
  const cssClasses = textOnly ? `${classes.textButton}` : `${classes.button}`;

  return (
    <button className={`${cssClasses} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
