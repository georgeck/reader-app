'use client'

import * as React from "react"
import { Archive, ChevronLeft, ChevronRight, Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import ArticleCard from "./ArticleCard"

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

interface MainContentProps {
    articles: Article[]
    selectedArticle: Article
    setSelectedArticle: React.Dispatch<React.SetStateAction<Article>>
    leftSidebarOpen: boolean
    rightSidebarOpen: boolean
    setLeftSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
    setRightSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MainContent({
                                        articles,
                                        selectedArticle,
                                        setSelectedArticle,
                                        leftSidebarOpen,
                                        rightSidebarOpen,
                                        setLeftSidebarOpen,
                                        setRightSidebarOpen,
                                    }: MainContentProps) {
    return (
        <div className="flex-1 overflow-hidden bg-background">
            <header className="flex h-14 items-center justify-between border-b px-4">
                <div className="flex items-center gap-2">
                    {!leftSidebarOpen && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setLeftSidebarOpen(true)}
                                        className="h-8 w-8"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                        <span className="sr-only">Show left sidebar</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Show left sidebar</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                    <Button variant="ghost" size="sm" className="h-8">
                        <Archive className="mr-2 h-4 w-4" />
                        Archive
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    {!rightSidebarOpen && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setRightSidebarOpen(true)}
                                        className="h-8 w-8"
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                        <span className="sr-only">Show right panel</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Show right panel</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Settings2 className="h-4 w-4" />
                        <span className="sr-only">Settings</span>
                    </Button>
                </div>
            </header>
            <ScrollArea className="h-[calc(100vh-3.5rem)]">
                <div className="p-4 space-y-4">
                    {articles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                            isSelected={selectedArticle.id === article.id}
                            onClick={() => setSelectedArticle(article)}
                        />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}