const Input = ({ label, id, ...props }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
};

export default Input;