"use client";
import React, { useEffect } from "react";
import styles from "./board.module.css";
import Column from "@/components/column/column";
import { useState } from "react";

type DataItem = {
  title: string;
  cards: [];
};

type Props = {
  data: DataItem[];
};

export default function Board({ data }: Props) {
  const [columns, setColumns] = useState<DataItem[]>(data);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setColumns(parsedData);
      } catch (error) {
        console.error('Error parsing data from localStorage:', error);
      }
    }
  }, [localStorage.getItem("data")]);

  const saveChanges = () => {
    localStorage.setItem("data", JSON.stringify(columns));
  };

  const drop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const sourceIndex = Number(event.dataTransfer.getData("text/plain"));
    const targetIndex = Number((event.target as HTMLDivElement).id);

    const sourceColumn = columns[sourceIndex];
    const targetColumn = columns[targetIndex];

    const newColumns = [...columns];
    newColumns[sourceIndex] = targetColumn;
    newColumns[targetIndex] = sourceColumn;

    setColumns(newColumns);
    console.log(newColumns);
  };
  return (
    <>
      <div
        className={styles.board}
        onDrop={drop}
        onDragOver={(event) => event.preventDefault()}
      >
        {columns.map((item: DataItem, index: number) => (
          <Column key={index} columnData={item} index={index} />
        ))}
      </div>
      <button className={styles.button} onClick={saveChanges}>Save Changes</button>
    </>
  );
}
