'use client'

import * as React from "react"
import {useHotkeys} from "react-hotkeys-hook"
import {SidebarProvider} from "@/components/ui/sidebar"
import LeftSidebar from "./LeftSidebar"
import MainContent from "./MainContent"
import RightSidebar from "./RightSidebar"
import CommandPalette from "./CommandPalette"

// Sample data
const articles = [
    {
        id: 1,
        title: "The 3 Laws of Locality",
        description: "The 3 Laws of Locality explain where certain controls should be placed in a user interface based on users' expectations.",
        author: {
            name: "Erik D. Kennedy",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "@Erik_D"
        },
        date: "Oct 17th",
        tags: ["design", "tutorial", "ui"],
        readingTime: "7 mins",
        source: "learnui.design"
    },
    {
        id: 2,
        title: "Large language models, explained",
        description: "Large language models (LLMs) learn to predict the next word in a sentence by using word vectors.",
        author: {
            name: "Timothy B Lee",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "@tblee"
        },
        date: "Sep 10th",
        tags: ["LLM", "tutorial", "AI"],
        readingTime: "25 mins",
        source: "understandingai.org"
    },
    {
        id: 3,
        title: "How to design a dark mode",
        description: "Designing a dark mode involves more than just changing the background color to black.",
        author: {
            name: "Erik D. Kennedy",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "@Erik_D"
        },
        date: "Oct 17th",
        tags: ["design", "tutorial", "ui"],
        readingTime: "7 mins",
        source: "learnui.design"
    },
    {
        id: 4,
        title: "How to design a dark mode",
        description: "Designing a dark mode involves more than just changing the background color to black.",
        author: {
            name: "Erik D. Kennedy",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "@Erik_D"
        },
        date: "Oct 17th",
        tags: ["design", "tutorial", "ui"],
        readingTime: "7 mins",
        source: "learnui.design"
    },
    {
        id: 5,
        title: "How to design a dark mode",
        description: "Designing a dark mode involves more than just changing the background color to black.",
        author: {
            name: "Erik D. Kennedy",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "@Erik_D"
        },
        date: "Oct 17th",
        tags: ["design", "tutorial", "ui"],
        readingTime: "7 mins",
        source: "learnui.design"
    },
    {
        id: 6,
        title: "How to design a dark mode",
        description: "Designing a dark mode involves more than just changing the background color to black.",
        author: {
            name: "Erik D. Kennedy",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "@Erik_D"
        },
        date: "Oct 17th",
        tags: ["design", "tutorial", "ui"],
        readingTime: "7 mins",
        source: "learnui.design"
    },
    {
        id: 7,
        title: "How to design a dark mode",
        description: "Designing a dark mode involves more than just changing the background color to black.",
        author: {
            name: "Erik D. Kennedy",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "@Erik_D"
        },
        date: "Oct 17th",
        tags: ["design", "tutorial", "ui"],
        readingTime: "7 mins",
        source: "learnui.design"
    }, {
        id: 8,
        title: "How to design a dark mode",
        description: "Designing a dark mode involves more than just changing the background color to black.",
        author: {
            name: "Erik D. Kennedy",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "@Erik_D"
        },
        date: "Oct 17th",
        tags: ["design", "tutorial", "ui"],
        readingTime: "7 mins",
        source: "learnui.design"
    }, {
        id: 9,
        title: "How to design a dark mode",
        description: "Designing a dark mode involves more than just changing the background color to black.",
        author: {
            name: "Erik D. Kennedy",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "@Erik_D"
        },
        date: "Oct 17th",
        tags: ["design", "tutorial", "ui"],
        readingTime: "7 mins",
        source: "learnui.design"
    }, {
        id: 10,
        title: "How to design a dark mode",
        description: "Designing a dark mode involves more than just changing the background color to black.",
        author: {
            name: "Erik D. Kennedy",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "@Erik_D"
        },
        date: "Oct 17th",
        tags: ["design", "tutorial", "ui"],
        readingTime: "7 mins",
        source: "learnui.design"
    },
    // Add more articles as needed
]

export function ReadingAppComponent() {
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
                <LeftSidebar isOpen={leftSidebarOpen} setIsOpen={setLeftSidebarOpen}/>
                <MainContent
                    articles={articles}
                    selectedArticle={selectedArticle}
                    setSelectedArticle={setSelectedArticle}
                    leftSidebarOpen={leftSidebarOpen}
                    setLeftSidebarOpen={setLeftSidebarOpen}
                />
                <RightSidebar
                    isOpen={rightSidebarOpen}
                    setIsOpen={setRightSidebarOpen}
                    selectedArticle={selectedArticle}
                />
                <CommandPalette/>
            </div>
        </SidebarProvider>
    )
}