"use client";

import styles from "./page.module.css";
import { Container } from "@/components/container/container";

export default function Home() {
  return (
    <div className={styles.page}>
      <Container name="World" />
    </div>
  );
}
