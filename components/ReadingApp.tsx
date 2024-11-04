'use client'

import * as React from "react"
import {useHotkeys} from "react-hotkeys-hook"
import {SidebarProvider} from "@/components/ui/sidebar"
import LeftSidebar from "./LeftSidebar"
import MainContent from "./MainContent"
import RightSidebar from "./RightSidebar"
import CommandPalette from "./CommandPalette"
import {articles} from "@/components/Articles";

export default function ReadingApp() {
    const [leftSidebarOpen, setLeftSidebarOpen] = React.useState(true)
    const [rightSidebarOpen, setRightSidebarOpen] = React.useState(true)
    const [selectedArticle, setSelectedArticle] = React.useState(articles[0])

    // Keyboard shortcuts
    useHotkeys('ctrl+\\', () => setLeftSidebarOpen(prev => !prev))
    useHotkeys('ctrl+]', () => setRightSidebarOpen(prev => !prev))
    useHotkeys('ctrl+k', (e) => {
        e.preventDefault()
        document.getElementById('search')?.focus()
    })

    return (
        <SidebarProvider>
            <div className="flex h-screen bg-background">
                {leftSidebarOpen && (
                    <LeftSidebar isOpen={leftSidebarOpen} setIsOpen={setLeftSidebarOpen} />
                )}
                <MainContent
                    articles={articles}
                    selectedArticle={selectedArticle}
                    setSelectedArticle={setSelectedArticle}
                    leftSidebarOpen={leftSidebarOpen}
                    rightSidebarOpen={rightSidebarOpen}
                    setLeftSidebarOpen={setLeftSidebarOpen}
                    setRightSidebarOpen={setRightSidebarOpen}
                />
                {rightSidebarOpen && (
                    <RightSidebar
                        isOpen={rightSidebarOpen}
                        setIsOpen={setRightSidebarOpen}
                        selectedArticle={selectedArticle}
                    />
                )}
                <CommandPalette />
            </div>
        </SidebarProvider>
    )
}