import * as React from "react"
import { ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
} from "@/components/ui/sidebar"
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

interface RightSidebarProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    selectedArticle: Article
}

export default function RightSidebar({ isOpen, setIsOpen, selectedArticle }: RightSidebarProps) {
    return (
        <Sidebar side="right" className={`${isOpen ? 'w-80' : 'w-0'} transition-all duration-300 border-l`}>
            <SidebarHeader className="p-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Details</h2>
                    <SidebarToggleButton isOpen={isOpen} setIsOpen={setIsOpen} icon={ChevronRight} />
                </div>
            </SidebarHeader>
            <SidebarContent>
                {selectedArticle && (
                    <div className="p-4 space-y-4">
                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground">Source</h3>
                            <p>{selectedArticle.source}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground">Author</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <Avatar>
                                    <AvatarImage src={selectedArticle.author.avatar} />
                                    <AvatarFallback>{selectedArticle.author.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium">{selectedArticle.author.name}</p>
                                    <p className="text-sm text-muted-foreground">{selectedArticle.author.username}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground">Tags</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {selectedArticle.tags.map((tag) => (
                                    <Button key={tag} variant="secondary" size="sm">
                                        {tag}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </SidebarContent>
        </Sidebar>
    )
}