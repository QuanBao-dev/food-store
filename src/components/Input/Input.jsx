import "./Input.css";
const Input = ({ label, inputRef, type }) => {
  return (
    <div className="container-input-component-wrapper">
      <div className="container-input-component">
        <input className="input-text" type={type} required ref={inputRef} />
        <label className="label">{label}</label>
      </div>
    </div>
  );
};

export default Input;
