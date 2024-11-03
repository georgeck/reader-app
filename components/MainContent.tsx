import * as React from "react"
import { Archive, ChevronRight, Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import ArticleCard from "./ArticleCard"
import SidebarToggleButton from "./SidebarToggleButton"

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
    setLeftSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MainContent({
                                        articles,
                                        selectedArticle,
                                        setSelectedArticle,
                                        leftSidebarOpen,
                                        setLeftSidebarOpen,
                                    }: MainContentProps) {
    return (
        <div className="flex-1 overflow-auto">
            <header className="flex items-center justify-between border-b px-4 py-2">
                <div className="flex items-center gap-2">
                    {!leftSidebarOpen && (
                        <SidebarToggleButton isOpen={leftSidebarOpen} setIsOpen={setLeftSidebarOpen} icon={ChevronRight} />
                    )}
                    <Button variant="ghost" size="sm">
                        <Archive className="mr-2 h-4 w-4" />
                        Archive
                    </Button>
                </div>
                <Button variant="ghost" size="icon">
                    <Settings2 className="h-4 w-4" />
                </Button>
            </header>
            <ScrollArea className="h-[calc(100vh-57px)]">
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