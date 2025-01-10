const Input = ({ type, name, id, helperText }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={helperText}
      className="signInputs"
      required
    />
  );
};

export default Input;
