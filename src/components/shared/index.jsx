import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const FloatingBadge = ({ icon, text, top, left, right, bottom, style }) => (
    <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bg-gray-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-gray-300 z-50 whitespace-nowrap"
        style={{ top, left, right, bottom, ...style }}
    >
        <span className="text-primary">{icon}</span>
        {text}
    </motion.div>
)

export const SectionTitle = ({ subtitle, title, highlight }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
        }}
        className="text-center mb-16 px-4"
    >
        {subtitle && (
            <motion.span
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block"
            >
                {subtitle}
            </motion.span>
        )}
        <motion.h2
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            className="text-3xl md:text-6xl font-black leading-tight text-white uppercase"
        >
            {title} <br className="md:hidden" /> <span className="text-secondary text-glow-yellow italic">{highlight}</span>
        </motion.h2>
        <motion.div
            variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 }
            }}
            className="h-1 w-24 bg-primary mx-auto mt-6 rounded-full"
        />
    </motion.div>
)

export const StatBox = ({ label, value, sub, isRed }) => (
    <div className={`p-6 rounded-2xl bg-[#1A1A1A] border ${isRed ? 'border-primary/30 shadow-[inset_0_0_20px_rgba(239,68,68,0.05)]' : 'border-white/5'} overflow-hidden relative group`}>
        {isRed && <div className="absolute top-0 left-0 w-full h-1 bg-primary" />}
        <p className="text-xs text-gray-500 uppercase tracking-widest font-black mb-3 group-hover:text-gray-400 transition-colors">{label}</p>
        <p className={`text-2xl md:text-3xl font-black mb-2 text-white`}>{value}</p>
        <span className={`text-[11px] font-black italic ${isRed ? 'text-primary' : 'text-green-500'}`}>{sub}</span>
    </div>
)

export const ArrowDown = ({ size, className }) => (
    <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className={className}>
        <ChevronDown size={size} />
    </motion.div>
)
