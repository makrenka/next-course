import Link from "next/link";
import React from "react";
import style from "./about.module.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>About us</h1>
      <ul className={style.list}>
        <li>
          <Link href={"/about/contacts"} className={style.link}>
            Contacts
          </Link>
        </li>
        <li>
          <Link href={"/about/team"} className={style.link}>
            Team
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
