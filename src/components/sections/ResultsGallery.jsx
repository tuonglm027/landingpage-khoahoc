import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Shirt, Heart, Home, GraduationCap } from 'lucide-react'
import { SectionTitle } from '../shared'

export const ResultsGallery = () => {
    const categories = ["Fashion", "TPCN / Sức Khỏe", "Nội Thất", "Đào Tạo / Elearning"]
    const [active, setActive] = useState(0)

    return (
        <section className="py-24 bg-[#080808]">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle
                    subtitle="Kết quả thực tế"
                    title="Sau khi áp dụng"
                    highlight="Công Nghệ "
                    highlight2="AI Automation"
                />

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((c, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`px-6 py-3 rounded-xl font-bold transition-all border ${active === i ? 'bg-secondary text-black border-secondary' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="card-dark border-red-500/20">
                            <h4 className="text-red-500 font-black mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">TRƯỚC KHI TỰ ĐỘNG HÓA</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div><p className="text-xs text-gray-500 mb-1 uppercase font-bold">Thời gian xử lý</p><p className="text-2xl font-black">15-30 Phút</p></div>
                                <div><p className="text-xs text-gray-500 mb-1 uppercase font-bold">Nhân sự vận hành</p><p className="text-2xl font-black">3-5 Người</p></div>
                            </div>
                        </div>
                        <div className="card-dark border-green-500/20 bg-green-500/[0.02]">
                            <h4 className="text-green-500 font-black mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">SAU KHI CÓ AI Automation AI</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div><p className="text-xs text-gray-500 mb-1 uppercase font-bold">Thời gian xử lý</p><p className="text-2xl font-black text-green-500">2-5 Giây</p></div>
                                <div><p className="text-xs text-gray-500 mb-1 uppercase font-bold">Hiệu suất</p><p className="text-2xl font-black text-green-500">TỰ ĐỘNG 100%</p></div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-secondary/10 blur-[100px] group-hover:bg-secondary/20 transition-all" />
                        <div className="relative bg-gray-900 aspect-video rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
                            <div className="text-center group-hover:scale-110 transition-transform">
                                <Rocket className="text-secondary mx-auto mb-4" size={48} />
                                <p className="font-black text-xl">SCREENSHOT KẾ THẬT</p>
                                <p className="text-gray-500 text-sm italic">Ngành: {categories[active]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
