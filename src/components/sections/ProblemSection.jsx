import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, AlertTriangle } from 'lucide-react'
import { StatBox } from '../shared'

const PulsingDot = ({ cx, cy, delay = 0 }) => (
    <motion.circle
        cx={cx} cy={cy} r="6" fill="#EF4444"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, delay }}
        className="drop-shadow-[0_0_10px_#EF4444]"
    />
)

export const ProblemSection = () => {
    return (
        <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px] -z-10" />
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-20 right-[10%] opacity-5 text-primary"
            >
                <AlertTriangle size={120} />
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">
                        Bạn không <span className="text-primary text-glow-red uppercase italic mr-4">Cô Đơn</span>!
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
                        Tôi đã cố vấn hơn <span className="text-white font-bold">500 học viên</span> là chủ doanh nghiệp, chuyên gia và marketer. <br className="hidden md:block" />
                        Nhiều người đổ lỗi cho AI "kém thông minh", quy trình "phức tạp", hay mẫu workflow nhiều "rác"... <br />
                        Nhưng sự thật là yếu tố then chốt làm cho hệ thống automation hiệu quả là <span className="text-secondary font-bold">"TƯ DUY THIẾT KẾ"</span>.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#1A1A1A]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center p-1.5 shadow-lg">
                                <BarChart3 className="text-white" />
                            </div>
                            <h4 className="font-bold text-gray-200">n8n Dashboard - Hiệu suất vận hành</h4>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-500 text-xs font-medium">{new Date().toLocaleDateString('vi-VN')}</span>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-gray-700" />
                                <div className="w-2 h-2 rounded-full bg-gray-700" />
                                <div className="w-2 h-2 rounded-full bg-gray-700" />
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="p-4 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-[#0F0F0F]">
                        <StatBox label="Tác vụ/tháng" value="12,500" sub="↑ Tải nặng" isRed />
                        <StatBox label="Thời gian chạy" value="482 giờ" sub="↑ 124%" isRed />
                        <StatBox label="Lỗi Workflow" value="45%" sub="↑ Nghiêm trọng" isRed />
                        <StatBox label="Hiệu suất" value="3.2x" sub="↓ Thấp hơn kỳ vọng" isRed />
                    </div>

                    {/* Graph Section */}
                    <div className="p-6 md:p-10 bg-[#0A0A0A]">
                        <div className="flex justify-between items-center mb-8">
                            <h5 className="text-sm font-bold text-gray-400">Thời gian xử lý thủ công (Giờ/Ngày)</h5>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Lãng phí thời gian</span>
                            </div>
                        </div>

                        <div className="h-48 md:h-64 relative">
                            {/* Grid lines */}
                            <div className="absolute inset-0 flex flex-col justify-between">
                                {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-px bg-white/[0.03]" />)}
                            </div>

                            {/* The Line */}
                            <svg className="w-full h-full relative z-10 overflow-visible">
                                <motion.path
                                    d="M 10 180 C 150 170, 350 140, 500 130 S 750 90, 900 80 S 1100 50, 1200 40"
                                    fill="none"
                                    stroke="#EF4444"
                                    strokeWidth="4"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                                />
                                <PulsingDot cx="250" cy="155" delay={0.5} />
                                <PulsingDot cx="500" cy="130" delay={1} />
                                <PulsingDot cx="900" cy="80" delay={1.5} />
                            </svg>

                            <div className="absolute bottom-[-20px] left-0 text-[10px] text-gray-600 font-bold">30 ngày trước</div>
                            <div className="absolute bottom-[-20px] right-0 text-[10px] text-gray-600 font-bold">Hôm nay</div>
                        </div>
                    </div>

                    {/* Warning Alert */}
                    <div className="mx-6 md:mx-10 mb-8 p-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center gap-4">
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <AlertTriangle size={20} className="text-primary shrink-0" />
                        </motion.div>
                        <p className="text-primary text-xs md:text-sm font-black italic">
                            Cảnh báo: Thời gian xử lý thủ công tăng 156%. Hệ thống vận hành đang quá tải và thiếu tư duy tự động hóa!
                        </p>
                    </div>

                    {/* Footer Info */}
                    <div className="p-6 md:p-8 bg-[#151515] border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-2">Giờ lãng phí/tháng</p>
                            <p className="text-xl font-black text-gray-200">180 Giờ</p>
                        </div>
                        <div className="border-x border-white/5">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-2">Số lỗi vận hành</p>
                            <p className="text-xl font-black text-primary">127 <span className="text-sm font-medium opacity-60">(Gây thất thoát lớn)</span></p>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-2">Nhân sự thủ công</p>
                            <p className="text-xl font-black text-primary">5-7 Người</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
