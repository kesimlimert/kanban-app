"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Board from "@/components/board/board";

export default function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/content`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
      console.log(fetchedData);
    });
  }, []);

  return (
    <main className={styles.main}>
      {data ? <Board data={data} /> : <h1>Loading...</h1> }
    </main>
  );
}
