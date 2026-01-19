import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionTitle } from '../shared'
import { MODULES } from '../../constants'

export const CurriculumSection = () => {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle subtitle="Lộ trình học" title="Nội dung" highlight="Công Nghệ GCC" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MODULES.map((m, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="card-dark group border-white/5 hover:border-secondary/20 transition-all"
                        >
                            <span className="text-4xl font-black text-white/5 group-hover:text-secondary/10 transition-colors block mb-4">{m.id}</span>
                            <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                                {m.title}
                                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary" size={18} />
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {m.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 p-8 rounded-3xl border border-white/5">
                    <div className="text-center md:text-left">
                        <p className="text-secondary font-black text-2xl mb-1">48+ VIDEO HƯỚNG DẪN</p>
                        <p className="text-gray-500 text-sm">Xem đi xem lại trọn đời bất cứ lúc nào</p>
                    </div>
                    <div className="h-10 w-px bg-white/10 hidden md:block" />
                    <div className="text-center md:text-left">
                        <p className="text-secondary font-black text-2xl mb-1">6+ GIỜ NỘI DUNG</p>
                        <p className="text-gray-500 text-sm">Đi thẳng vào thực chiến, không lý thuyết suông</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
