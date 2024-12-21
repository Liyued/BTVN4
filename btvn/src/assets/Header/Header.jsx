import styles from "./Header.module.css";

function Header(props) {
  return <h1 className={styles.header}>{props.text}</h1>;
}

export default Header;
