"use client"
import { useState } from "react"

export default function LayoutHeader() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 backdrop-blur-sm supports-[backdrop-filter]:bg-[#f9fafb] border-b border-[#ebeef1]">
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight">
                    <span className="inline-flex h-7 w-7 rounded-lg bg-red-500 text-white items-center justify-center">S</span>
                    <span>setyaraka</span>
                </a>

                <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg border border-border border-[#ebeef1] focus-ring" aria-label="Open menu">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </button>
                
                <ul id="navLinks" className="hidden md:flex items-center gap-6 text-sm">
                    <li><a className="hover:text-accent focus-ring rounded" href="#about">About</a></li>
                    <li><a className="hover:text-accent focus-ring rounded" href="#projects">Projects</a></li>
                    <li><a className="hover:text-accent focus-ring rounded" href="#skills">Skills</a></li>
                    <li><a className="hover:text-accent focus-ring rounded" href="#experience">Experience</a></li>
                    <li><a className="hover:text-accent focus-ring rounded" href="#contact">Contact</a></li>
                    <li>
                        <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-red-500 text-white hover:bg-[#991B1B] transition focus-ring">
                        Download CV
                        </a>
                    </li>
                    <li>
                        <button id="themeToggle" className="rounded-xl px-3 py-2 border border-border border-[#ebeef1] cursor-pointer focus-ring" aria-label="Toggle theme">Dark</button>
                    </li>
                </ul>
            </nav>
            
            {/* Mobile Drawer */}
            { open && (
                <div id="drawer" className="md:hidden border-t border-border border-[#ebeef1] bg-[#f9fafb]">
                    <div className="max-w-6xl mx-auto px-6 py-4">
                        <a href="#about" className="block py-2 hover:text-accent">About</a>
                        <a href="#projects" className="block py-2 hover:text-accent">Projects</a>
                        <a href="#skills" className="block py-2 hover:text-accent">Skills</a>
                        <a href="#experience" className="block py-2 hover:text-accent">Experience</a>
                        <a href="#contact" className="block py-2 hover:text-accent">Contact</a>
                    </div>
                </div>        
            )}
        </header>
    )
}