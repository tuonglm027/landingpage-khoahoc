import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gift, ShieldCheck, Zap, Lock, ChevronRight } from 'lucide-react'
import { SectionTitle } from '../shared'

export const PricingSection = () => {
    const [timeLeft, setTimeLeft] = useState(3600 * 24 + 3600 * 5)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[180px] -z-10" />

            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-12 text-center max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-2 text-secondary mb-4">
                        <Gift size={20} />
                        <span className="font-black uppercase tracking-widest text-xs">Học phí ưu đãi cho người tiên phong</span>
                    </div>
                    <p className="text-gray-400 text-sm italic">
                        Chúng tôi áp dụng mô hình tăng giá theo số lượng học viên. Khi cộng đồng đủ lớn, AI của các nền tảng quảng cáo sẽ học được tệp này, việc tìm khách dễ hơn nên giá sẽ tăng.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Current Price (Main Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-2 card-dark border-secondary/50 bg-secondary/[0.02] p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6">
                            <div className="bg-secondary text-black font-black px-4 py-1 rounded-full text-[10px] uppercase tracking-widest animate-pulse">
                                Ưu đãi tốt nhất
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
                            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                                <Lock size={32} className="text-secondary" />
                            </div>

                            <h3 className="text-3xl md:text-5xl font-black uppercase">MỨC GIÁ ĐANG BỊ <span className="text-secondary text-glow-yellow">ẨN</span></h3>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Giá tăng tự động theo số lượng học viên</p>

                            <button className="w-full max-w-md bg-secondary text-black font-black py-6 rounded-2xl text-xl md:text-2xl shadow-[0_0_50px_rgba(250,204,21,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-4">
                                BẤM ĐỂ XEM GIÁ HIỆN TẠI
                                <ChevronRight />
                            </button>

                            <div className="flex flex-wrap justify-center gap-6 pt-4">
                                <Feature icon={<Gift />} text="Trọn bộ 3 Bonus" />
                                <Feature icon={<ShieldCheck />} text="Hỗ trợ trọn đời" />
                                <Feature icon={<Zap />} text={`Tăng giá sau: ${formatTime(timeLeft)}`} isRed />
                            </div>
                        </div>
                    </motion.div>

                    {/* Future Steps */}
                    <div className="space-y-6">
                        <PriceStep
                            label="Sắp tới"
                            status="Giai đoạn Tăng tốc"
                            count="Học viên 1200 - 1499"
                            price="1.890.000đ"
                            icon={<Zap />}
                        />
                        <PriceStep
                            label="Tương lai"
                            status="Giai đoạn ổn định"
                            count="Từ 1500 trở đi"
                            price="2.490.000đ"
                            icon={<Zap />}
                            isDark
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Feature = ({ icon, text, isRed }) => (
    <div className={`flex items-center gap-2 ${isRed ? 'text-primary' : 'text-gray-400'} font-bold text-xs`}>
        <div className={isRed ? 'animate-pulse' : ''}>{icon}</div>
        <span>{text}</span>
    </div>
)

const PriceStep = ({ label, status, count, price, icon, isDark }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`p-6 rounded-3xl border ${isDark ? 'bg-black/40 border-white/5 opacity-50' : 'bg-white/5 border-white/10'}`}
    >
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">
            {icon} {label}
        </div>
        <h4 className="font-black text-white mb-1">{status}</h4>
        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter mb-4">{count}</p>
        <div className="text-2xl font-black text-gray-400">{price}</div>
    </motion.div>
)
