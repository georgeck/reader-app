import * as React from "react"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface SidebarToggleButtonProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    icon: LucideIcon
}

export default function SidebarToggleButton({ isOpen, setIsOpen, icon: Icon }: SidebarToggleButtonProps) {
    return (
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Icon className="h-4 w-4" />
        </Button>
    )
}