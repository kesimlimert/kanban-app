import React from 'react'
import styles from './card.module.css'

type CardProps = {
    cardData: {
        title: string;
        content: string;
    };
    index: number;
    columnIndex: number;
}

export default function Card({cardData, index, columnIndex}: CardProps) {
   
    return (
        <div className={styles.card}>
            {cardData.title}
        </div>
    )
}