import Link from "next/link";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <Link href={"/"} className={style.link}>
        Home
      </Link>
      <Link href={"/blog"} className={style.link}>
        Blog
      </Link>
      <Link href={"/about"} className={style.link}>
        About
      </Link>
    </header>
  );
};

export { Header };
