import { NextResponse } from "next/server";

const data = [
    {
        title: "Column 1",
        cards: [
            {
                title: "Card 1",
                content: "Content 1"
            },
            {
                title: "Card 2",
                content: "Content 2"
            },
            {
                title: "Card 3",
                content: "Content 3"
            }
        ]
    },
    {
        title: "Column 2",
        cards: [
            {
                title: "Card 4",
                content: "Content 4"
            },
            {
                title: "Card 5",
                content: "Content 5"
            },
            {
                title: "Card 6",
                content: "Content 6"
            }
        ]
    },
    {
        title: "Column 3",
        cards: [
            {
                title: "Card 7",
                content: "Content 7"
            },
            {
                title: "Card 8",
                content: "Content 8"
            },
            {
                title: "Card 9",
                content: "Content 9"
            }
        ]
    },
    {
        title: "Column 4",
        cards: [
            {
                title: "Card 10",
                content: "Content 10"
            },
            {
                title: "Card 11",
                content: "Content 11"
            },
            {
                title: "Card 12",
                content: "Content 12"
            }
        ]
    }
];

export async function GET() {
    return NextResponse.json(data);
}
