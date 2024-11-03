import * as React from "react"
import { ChevronRight, Home, Book, FileText, Mail, Video, MessageSquare, Tags, Pin, Star } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import SearchInput from "./SearchInput"
import SidebarToggleButton from "./SidebarToggleButton"

interface LeftSidebarProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LeftSidebar({ isOpen, setIsOpen }: LeftSidebarProps) {
    return (
        <Sidebar className={`${isOpen ? 'w-64' : 'w-0'} transition-all duration-300`}>
            <SidebarHeader className="p-4">
                <div className="flex items-center gap-2">
                    <SidebarToggleButton isOpen={isOpen} setIsOpen={setIsOpen} icon={ChevronRight} />
                    <h1 className="text-xl font-bold">Readwise</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Home className="h-4 w-4" />
                                <span>Home</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Book className="h-4 w-4" />
                                <span>Library</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="pl-8">
                            <SidebarMenuButton>
                                <FileText className="h-4 w-4" />
                                <span>Articles</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="pl-8">
                            <SidebarMenuButton>
                                <Book className="h-4 w-4" />
                                <span>Books</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="pl-8">
                            <SidebarMenuButton>
                                <Mail className="h-4 w-4" />
                                <span>Emails</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="pl-8">
                            <SidebarMenuButton>
                                <Video className="h-4 w-4" />
                                <span>Videos</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="pl-8">
                            <SidebarMenuButton>
                                <MessageSquare className="h-4 w-4" />
                                <span>Tweets</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="pl-8">
                            <SidebarMenuButton>
                                <Tags className="h-4 w-4" />
                                <span>Tags</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Pin className="h-4 w-4" />
                                <span>Pinned</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Star className="h-4 w-4" />
                                <span>Shortlist</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <div className="mt-auto p-4">
                <SearchInput />
            </div>
        </Sidebar>
    )
}