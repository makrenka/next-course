import Link from "next/link";
import style from "./header.module.css";
import { Navigation } from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <header className={style.header}>
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { Header };
