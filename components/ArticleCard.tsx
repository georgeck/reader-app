import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

interface Article {
    id: number
    title: string
    description: string
    author: {
        name: string
        avatar: string
        username: string
    }
    date: string
    tags: string[]
    readingTime: string
    source: string
}

interface ArticleCardProps {
    article: Article
    isSelected: boolean
    onClick: () => void
}

export default function ArticleCard({ article, isSelected, onClick }: ArticleCardProps) {
    return (
        <Card
            className={`p-4 cursor-pointer transition-colors hover:bg-accent ${
                isSelected ? 'bg-accent' : ''
            }`}
            onClick={onClick}
        >
            <div className="flex gap-4">
                <div className="flex-1">
                    <h2 className="text-lg font-semibold">{article.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{article.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src={article.author.avatar} />
                            <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{article.author.name}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm  text-muted-foreground">{article.readingTime}</span>
                    </div>
                </div>
                <div className="text-sm text-muted-foreground">{article.date}</div>
            </div>
        </Card>
    )
}