import classes from "./Button.module.css";

interface ButtonProps {
  textOnly: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, textOnly, ...props }: ButtonProps) => {
  const cssClasses = textOnly ? `${classes.textButton}` : `${classes.button}`;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
