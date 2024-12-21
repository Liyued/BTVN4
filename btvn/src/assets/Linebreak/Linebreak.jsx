import styles from "./Linebreak.module.css";

function Linebreak(props) {
  return (
    <div className={styles.container}>
      <div className={styles.linebreak}></div>
      <div className={styles.text}>Or</div>
    </div>
  );
}

export default Linebreak;
