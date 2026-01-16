import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AlertTriangle, ArrowRight, TrendingDown, Users, Lock, CheckCircle2, BarChart3, TrendingUp } from 'lucide-react'
import { FloatingBadge } from '../shared'

export const Hero = () => {
    const { scrollY } = useScroll()

    // Different layers of speed for parallax
    const y1 = useTransform(scrollY, [0, 500], [0, -100])
    const y2 = useTransform(scrollY, [0, 500], [0, -200])
    const y3 = useTransform(scrollY, [0, 500], [0, -150])

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-32 pb-20 bg-[#020202]">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[150px] -z-10 animate-pulse" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto z-10"
            >
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-8">
                    <AlertTriangle size={16} />
                    Cảnh báo khẩn cấp cho dân chạy Ads tại Việt Nam
                </div>

                <h1 className="text-4xl md:text-8xl font-black mb-10 leading-tight">
                    FACEBOOK ADS ĐANG <br className="hidden md:block" />
                    <span className="text-secondary">KÉM HIỆU QUẢ!</span>
                </h1>

                <div className="relative inline-block mb-12">
                    <h2 className="text-2xl md:text-5xl font-black leading-tight">
                        50% NGÂN SÁCH CỦA BẠN ĐANG BỊ <br />
                        <span className="text-primary text-glow-red italic text-5xl md:text-7xl text-glow-red">NÉM VÀO SỌT RÁC!</span>
                    </h2>
                    <div className="absolute -top-6 -right-6 md:-right-12 text-primary animate-bounce">
                        <AlertTriangle size={48} />
                    </div>
                </div>

                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                    Ads đắt đỏ? Đơn ảo tràn lan? Hoàn hàng sấp mặt? <br className="hidden md:block" />
                    Do thuật toán máy học đã đổi, và bạn đang nạp "dữ liệu rác" vào Pixel mỗi ngày.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <button className="w-full md:w-auto bg-primary hover:bg-red-600 text-white font-black px-12 py-6 rounded-2xl text-xl transition-all shadow-[0_0_40px_rgba(239,68,68,0.5)] hover:shadow-[0_0_60px_rgba(239,68,68,0.7)] transform hover:-translate-y-2 active:scale-95 group">
                        ĐĂNG KÝ NGAY LÚC NÀY
                        <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
                    </button>

                    <div className="flex items-center gap-4 text-gray-400 font-medium bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#000] bg-gray-800 overflow-hidden ring-1 ring-white/10" />
                            ))}
                        </div>
                        <span className="text-sm md:text-base font-bold"><span className="text-secondary">991+</span> người đã đăng ký</span>
                    </div>
                </div>
            </motion.div>

            {/* Floating Badges with Parallax */}
            <div className="hidden lg:block">
                <FloatingBadge icon={<TrendingDown size={14} />} text="CTR giảm" top="15%" left="8%" style={{ y: y1 }} />
                <FloatingBadge icon={<AlertTriangle size={14} />} text="Gồng lỗ" top="35%" left="5%" style={{ y: y2 }} />
                <FloatingBadge icon={<Users size={14} />} text="Khách ảo" top="20%" right="8%" style={{ y: y1 }} />
                <FloatingBadge icon={<Lock size={14} />} text="Bế tắc" top="45%" right="4%" style={{ y: y3 }} />
                <FloatingBadge icon={<CheckCircle2 size={14} />} text="Hoàn hàng" bottom="25%" right="12%" style={{ y: y2 }} />
                <FloatingBadge icon={<BarChart3 size={14} />} text="CPM cao" bottom="20%" left="10%" style={{ y: y1 }} />
                <FloatingBadge icon={<TrendingUp size={14} />} text="Chi phí tăng" top="55%" left="6%" style={{ y: y3 }} />
                <FloatingBadge icon={<Users size={14} />} text="Dữ liệu rác" bottom="40%" left="15%" style={{ y: y2 }} />
            </div>
        </section>
    )
}
