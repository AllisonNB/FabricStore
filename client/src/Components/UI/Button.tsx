import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
