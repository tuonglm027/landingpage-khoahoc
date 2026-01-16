import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Heart } from 'lucide-react'

export const GuaranteeSection = () => {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="border-2 border-green-500/30 bg-green-500/[0.02] p-10 md:p-20 rounded-[48px] relative overflow-hidden text-center"
                >
                    {/* Floating Shield Icon */}
                    <div className="absolute -top-10 -right-10 opacity-10">
                        <ShieldCheck size={200} className="text-green-500" />
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                            <ShieldCheck size={40} />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-widest leading-tight">
                        CAM KẾT <span className="text-[#10B981] text-glow-green">RỦI RO BẰNG 0</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl font-bold italic mb-12">
                        "Sơn không muốn giữ tiền của bạn nếu bạn không thấy giá trị."
                    </p>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 text-left max-w-2xl mx-auto group hover:border-green-500/30 transition-all">
                        <div className="shrink-0 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                            100%
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            <span className="text-white font-black underline decoration-green-500/50 underline-offset-4">Hoàn tiền 100%</span> trong vòng 7 ngày nếu bạn áp dụng đúng hướng dẫn mà không thấy tư duy thay đổi hoặc hiệu quả không như mong đợi.
                        </p>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
                        <Heart size={14} className="text-primary" />
                        Chân thành & Trách nhiệm từ Sơn Marketing
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
