import React from 'react'
import { ShieldCheck } from 'lucide-react'

export const Footer = () => (
    <footer className="py-20 border-t border-white/5 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="relative z-10">
            <div className="text-4xl md:text-[4.5rem] font-black text-secondary mb-10 italic tracking-tighter">Khoahocai<span className="text-white">.pro</span></div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10 text-base text-gray-400 font-bold uppercase tracking-widest px-4">
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-700 text-[10px] uppercase font-bold tracking-[0.3em]">
                <ShieldCheck size={12} />
                Secure Payments & Verified Content
            </div>
        </div>
    </footer>
)
