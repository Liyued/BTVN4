import styles from "./Checkbox.module.css";

function Checkbox(props) {
  return (
    <div className={styles.container}>
      <input className={styles.input} id={props.text} type="checkbox" />
      <label className={styles.checkbox} htmlFor={props.text}>
        {props.text}
      </label>
    </div>
  );
}

export default Checkbox;
