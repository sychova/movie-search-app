// import { useState } from "react";
import { Group } from "@mantine/core";
import styles from "./NavBar.module.css";
import Logo from "./Logo";

// const data = [
//   { link: "", label: "Movies" },
//   { link: "", label: "Rated movies" },
// ];

export default function NavBar() {
  // const [active, setActive] = useState("");

  // const links = data.map((item) => (
  //   <a
  //     className={styles.link}
  //     data-active={item.label === active || undefined}
  //     href={item.link}
  //     key={item.label}
  //     onClick={(event) => {
  //       event.preventDefault();
  //       setActive(item.label);
  //     }}
  //   >
  //     <span>{item.label}</span>
  //   </a>
  // ));

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarMain}>
        <Group className={styles.header} justify="space-between">
          <Logo />
        </Group>
        {/* {links} */}
      </div>
    </nav>
  );
}
