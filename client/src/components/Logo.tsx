import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img
        src="/ArrowFlicksLogo.png"
        alt="Arrow Flicks Logo"
        className="logo-img"
      />
    </div>
  );
}
