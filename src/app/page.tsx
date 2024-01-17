import Image from "next/image";
import styles from "./page.module.css";
import Board from "@/components/board/board";

export default async function Home() {
  const data = await fetch(process.env.URL + '/api/content').then((res) => res.json());
  return (
    <main className={styles.main}>
      <Board data={data} />
    </main>
  );
}
