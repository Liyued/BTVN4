import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <p className={styles.footer}>
      {props.text}{" "}
      <span className={styles.highlight} onClick={props.onClick}>
        {props.highlight}
      </span>
    </p>
  );
}

export default Footer;
