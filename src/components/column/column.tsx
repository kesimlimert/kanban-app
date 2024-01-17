"use client";
import React, { useEffect, useState } from "react";
import styles from "./column.module.css";
import Card from "@/components/card/card";
import { IconEdit } from "@tabler/icons-react";

type ColumnProps = {
  columnData: {
    title: string;
    cards: {
      title: string;
      content: string;
    }[];
  };
  index: number;
};

export default function Column({ columnData, index }: ColumnProps) {
  const [cards, setCards] = useState(columnData.cards);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    setCards(columnData.cards);
  }, [columnData]);

  const dragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", String(index));
    event.currentTarget.id = String(index);
  };

  return (
    <div className={styles.column} draggable onDragStart={dragStart}>
      <div
        className={styles.modal}
        style={{ display: displayModal ? "flex" : "none" }}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h3>Edit Column</h3>
            <button className={styles.closeButton} onClick={() => setDisplayModal(false)}>X</button>
          </div>
          <div className={styles.modalBody}>
            {cards.map((item, cardIndex) => (
              <div key={cardIndex}>
                <label htmlFor={`card-title-${cardIndex}`}>Card Title</label>
                <input
                  type="text"
                  id={`card-title-${cardIndex}`}
                  value={item.title}
                  onChange={(event) => {
                    const newCards = [...cards];
                    newCards[cardIndex].title = event.target.value;
                    setCards(newCards);
                  }}
                />
                <label htmlFor={`card-content-${cardIndex}`}>
                  Card Content
                </label>
                <input
                  type="text"
                  id={`card-content-${cardIndex}`}
                  value={item.content}
                  onChange={(event) => {
                    const newCards = [...cards];
                    newCards[cardIndex].content = event.target.value;
                    setCards(newCards);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.title}>
        {columnData.title}
        <IconEdit onClick={() => setDisplayModal(true)} size={20} />
      </div>
      {columnData.cards.map((item, cardIndex) => (
        <Card
          key={cardIndex}
          index={cardIndex}
          columnIndex={index}
          cardData={item}
        />
      ))}
    </div>
  );
}
