"use client";
import React from 'react'
import styles from './column.module.css'
import { useState } from 'react'
import Card from '@/components/card/card'

type ColumnProps = {
    columnData: {
        title: string;
        cards: {
            title: string;
            content: string;
        }[]
    };
    index: number;
}

export default function Column({ columnData, index }: ColumnProps) {
    const dragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text/plain', String(index));
        event.currentTarget.id = String(index);
    }

    return (
        <div className={styles.column} draggable onDragStart={dragStart}>
            <div className={styles.title}>
                {columnData.title}
            </div>
            {columnData.cards.map((item, index) => (
                <Card key={index} index={index} columnIndex={index} cardData={item} />
            ))}
        </div>
    )
}