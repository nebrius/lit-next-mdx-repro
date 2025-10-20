"use client";

import styles from "./page.module.css";
import { Container } from "@/components/container/container";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>React content</h1>
      <Container name="World" />
    </div>
  );
}
