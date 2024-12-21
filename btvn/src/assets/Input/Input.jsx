import styles from "./Input.module.css";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.text}>{props.text}</label>
      <input
        id={props.text}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
