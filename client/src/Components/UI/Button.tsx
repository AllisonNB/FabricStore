import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`${classes.button} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
