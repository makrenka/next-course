"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./navigation.module.css";
import classNames from "classnames";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={classNames(style.link, isActive && style.active)}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };
