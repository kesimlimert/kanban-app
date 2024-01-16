"use client";
import React from 'react'
import styles from './board.module.css'
import Column from '@/components/column/column'
import { useState } from 'react'

type DataItem = {
        title: string;
        cards: []
}

type Props = {
        data: DataItem[];
}

export default function Board({data}: Props) {
    const [columns, setColumns] = useState(data);

    const drop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const sourceIndex = Number(event.dataTransfer.getData('text/plain'));
        const targetIndex = Number((event.target as HTMLDivElement).id);

        const sourceColumn = columns[sourceIndex];
        const targetColumn = columns[targetIndex];
        console.log(sourceColumn, targetColumn);

        const newColumns = [...columns];
        newColumns[sourceIndex] = targetColumn;
        newColumns[targetIndex] = sourceColumn;

        setColumns(newColumns);
    }
    return (
        <>
        <p className={styles.add}>Add Column</p>
        <div className={styles.board} onDrop={drop} onDragOver={(event) => event.preventDefault()}>
            {columns.map((item, index) => (
                <Column key={index} columnData={item} index={index} />
            ))}
        </div>
        </>
    )
}