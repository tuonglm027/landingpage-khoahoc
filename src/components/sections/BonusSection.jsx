import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../shared'
import { BONUSES } from '../../constants'

export const BonusSection = () => {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-4xl mx-auto px-4">
                <SectionTitle subtitle="Quà tặng đặc biệt" title="Bonus dành cho" highlight="Người Tiên Phong" />

                <div className="space-y-4">
                    {BONUSES.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex flex-col md:flex-row items-center justify-between p-8 card-dark bg-secondary/[0.02] border-secondary/10 group"
                        >
                            <div className="flex items-center gap-6 mb-4 md:mb-0">
                                <div className="p-4 bg-secondary/10 text-secondary rounded-2xl group-hover:scale-110 transition-transform">
                                    {b.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-white">{b.title}</h4>
                                    <p className="text-gray-500 text-sm italic">Quà tặng đi kèm miễn phí</p>
                                </div>
                            </div>
                            <div className="text-secondary font-black text-xl bg-secondary/10 px-6 py-2 rounded-full">
                                {b.val}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
