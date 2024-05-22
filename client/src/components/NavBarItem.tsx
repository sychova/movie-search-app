import styles from "./NavBar.module.css";

interface NavBarItemProps {
  label: string;
  link: string;
  active: string;
  setActive: (e: string) => void;
}

export default function NavBarItem(props: NavBarItemProps) {
  return (
    <a
      className={styles.link}
      data-active={props.label === props.active || undefined}
      href={props.link}
      key={props.label}
      onClick={(event) => {
        event.preventDefault();
        props.setActive(props.label);
      }}
    >
      <span>{props.label}</span>
    </a>
  );
}
