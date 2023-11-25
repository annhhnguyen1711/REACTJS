import ErrorIcon from "./react-icon/Error";
import Vaild from "./react-icon/Valid";

export default function Input(props) {
  return (
    <div
      className={`input-group ${
        !props.isValid && props.isTouch
          ? "invalid"
          : `${props.isValid && props.isTouch ? "valid" : ""}`
      }`}
    >
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className="input"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
      <span className="input-error">
        {`${!props.isValid && props.isTouch ? props.errorMsg : ""}`}
      </span>
      <div className="input__icon">
        {props.isTouch && !props.isValid && <ErrorIcon />}
        {props.isTouch && props.isValid && <Vaild />}
      </div>
    </div>
  );
}
