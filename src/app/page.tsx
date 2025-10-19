"use client";

import styles from "./page.module.css";
import "../components/wc";

export default function Home() {
  return (
    <div className={styles.page}>
      <spk-container name="World"></spk-container>
    </div>
  );
}
