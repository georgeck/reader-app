'use client'

import * as React from "react"
import { Command } from "cmdk"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useHotkeys } from "react-hotkeys-hook"

interface CommandItem {
    name: string
    shortcut: string
    onSelect: () => void
}

const commands: CommandItem[] = [
    {
        name: "Open command palette",
        shortcut: "Cmd K",
        onSelect: () => {},
    },
    {
        name: "Add / Edit note on current highlight",
        shortcut: "N",
        onSelect: () => {},
    },
    {
        name: "Add / Edit tags for document",
        shortcut: "T",
        onSelect: () => {},
    },
    {
        name: "Add / Edit tags on current highlight",
        shortcut: "T",
        onSelect: () => {},
    },
    {
        name: "Add a document note",
        shortcut: "Shift N",
        onSelect: () => {},
    },
    {
        name: "Add to favorites",
        shortcut: "F",
        onSelect: () => {},
    },
    {
        name: "Add to shortlist",
        shortcut: "S",
        onSelect: () => {},
    },
    {
        name: "Add/remove RSS subscriptions",
        shortcut: "Shift A",
        onSelect: () => {},
    },
    {
        name: "Apply bulk actions",
        shortcut: "Shift B",
        onSelect: () => {},
    },
    {
        name: "Bump document to top",
        shortcut: "B",
        onSelect: () => {},
    },
    {
        name: "Copy Reader URL",
        shortcut: "Shift L",
        onSelect: () => {},
    },
    {
        name: "Copy URL",
        shortcut: "Shift C",
        onSelect: () => {},
    },
]

export default function CommandPalette() {
    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState("")

    useHotkeys('?', (e) => {
        e.preventDefault()
        setOpen(true)
    })

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen(true)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const filteredCommands = commands.filter(command =>
        command.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0 gap-0">
                <DialogTitle asChild>
                    <DialogTitle>Command Palette</DialogTitle>
                </DialogTitle>
                <Command className="rounded-lg border shadow-md">
                    <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
                        <Command.Input
                            value={search}
                            onValueChange={setSearch}
                            placeholder="Search a command"
                            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                        <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
                        {filteredCommands.map((command) => (
                            <Command.Item
                                key={command.name}
                                onSelect={() => {
                                    command.onSelect()
                                    setOpen(false)
                                }}
                                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground"
                            >
                                <span>{command.name}</span>
                                <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                                    {command.shortcut}
                                </kbd>
                            </Command.Item>
                        ))}
                    </Command.List>
                </Command>
            </DialogContent>
        </Dialog>
    )
}