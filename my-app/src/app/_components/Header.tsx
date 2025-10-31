"use client";

import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__inner"]}>
        <div className={styles["header__logo"]}>Brand</div>
        <nav className={styles["header__nav"]}>
          <Link href="/signup" className={styles["header__link"]}>
            Signup
          </Link>
          <Link href="/login" className={styles["header__link"]}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
