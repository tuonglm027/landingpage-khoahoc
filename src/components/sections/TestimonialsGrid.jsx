import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../shared'
import { MessageCircle, Star } from 'lucide-react'

export const TestimonialsGrid = () => {
    // Generate 12 dummy testimonials
    const screenshots = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        name: `Học viên ${i + 1}`,
        role: "Nhà quảng cáo",
        msg: "Chỉ sau 2 tuần áp dụng GCC, ROI của mình đã cải thiện đáng kể. Không còn tình trạng đơn ảo tràn lan như trước.",
        rating: 5
    }))

    return (
        <section className="py-24 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
                        HÀNG TRĂM MARKETER ĐÃ <br />
                        <span className="text-glow-blue text-[#10B981] italic">THAY ĐỔI TƯ DUY</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                        Kết quả thực tế từ những người đã áp dụng quy trình này.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Floating Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-green-500/5 blur-[150px] -z-10" />

                    {screenshots.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (i % 4) * 0.1 }}
                            className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all hover:bg-white/[0.05] group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-green-500/10 rounded-xl text-green-500">
                                    <MessageCircle size={20} />
                                </div>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={10} className="fill-secondary text-secondary" />)}
                                </div>
                            </div>

                            <div className="mb-6 aspect-[4/3] bg-gray-900 rounded-xl flex items-center justify-center p-4 border border-white/5 overflow-hidden">
                                {/* Mock screenshot content */}
                                <div className="w-full space-y-2 opacity-20">
                                    <div className="h-4 w-3/4 bg-white/20 rounded" />
                                    <div className="h-4 w-full bg-white/20 rounded" />
                                    <div className="h-4 w-1/2 bg-white/20 rounded" />
                                    <div className="h-12 w-full bg-green-500/20 rounded-lg mt-4" />
                                </div>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Feedback Chat</span>
                                    <span className="text-[8px] text-gray-700 italic">Screenshot #{s.id + 1}</span>
                                </div>
                            </div>

                            <p className="text-gray-400 text-xs italic mb-4 leading-relaxed line-clamp-3">"{s.msg}"</p>

                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <div className="w-8 h-8 rounded-full bg-gray-800" />
                                <div>
                                    <p className="text-[11px] font-bold text-white">{s.name}</p>
                                    <p className="text-[9px] text-gray-600 uppercase tracking-tighter">{s.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="px-12 py-5 border-2 border-white/10 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Xem thêm 89+ phản hồi khác
                    </button>
                </div>
            </div>
        </section>
    )
}
