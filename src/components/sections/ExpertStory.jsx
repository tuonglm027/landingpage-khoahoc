import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, TrendingUp, Users, BookOpen, Star } from 'lucide-react'

export const ExpertStory = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.05),transparent_50%)]" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* 20 Billion Story */}
                <div className="text-center mb-32">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-[4.5rem] font-black mb-12 uppercase leading-tight"
                    >
                        TÔI ĐÃ MẤT <span className="text-primary text-glow-red italic">100 TRIỆU</span> TIỀN TOKEN <br />
                        ĐỂ NHẬN RA BÀI HỌC NÀY...
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                        <div className="bg-green-500/5 border border-primary/20 p-8 rounded-[32px] text-left gradient-border-animated">
                            <span className="text-primary font-black text-2xl mb-4 block">THỰC TRẠNG</span>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">DẠY THEO TEMPLATE</p>
                            <p className="text-white text-sm leading-relaxed">Họ chỉ dạy cách xây workflow theo mẫu có sẵn, nhưng không ai dạy bạn tư duy hệ thống đúng.</p>
                        </div>
                        <div className="bg-primary/5 border border-green-500/20 p-8 rounded-[32px] text-left gradient-border-animated">
                            <span className="text-green-500 font-black text-2xl mb-4 block">GIẢI PHÁP</span>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">TƯ DUY THIẾT KẾ (DESIGN THINKING)</p>
                            <p className="text-white text-sm leading-relaxed">Khi có tư duy đúng, bạn có thể tự thiết kế và làm chủ mọi hệ thống automation phức tạp nhất.</p>
                        </div>
                    </div>
                </div>

                {/* About Pham Quang Dat */}
                <div className="pt-24 border-t border-white/5">
                    <div className="text-center mb-20">
                        <p className="text-secondary font-black uppercase tracking-[0.4em] text-sm mb-4">The Expert</p>
                        <h2 className="text-4xl md:text-6xl font-black text-white">VỀ PHẠM QUẢNG ĐẠT</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
                            <div className="relative z-10 p-4 border border-white/10 rounded-[40px] bg-gray-900/50 backdrop-blur-sm">
                                <div className="aspect-[4/5] relative">
                                    {/* Image Wrapper with Clipping */}
                                    <div className="absolute inset-0 bg-gray-800 rounded-[32px] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                        <img
                                            src="/sepdat.png"
                                            alt="Pham Quang Dat"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Stats Badges - Now outside overflow-hidden but inside aspect container */}
                                    <StatBadge text="Ex PM Lead One Mount" top="10%" right="-8%" />
                                    <StatBadge text="Ex Tech Lead Viettel" top="40%" right="-12%" />
                                    <StatBadge text="Founder KhoahocAI.pro" bottom="20%" right="-8%" />
                                    <StatBadge text="Founder XCEL BOT" top="20%" left="-8%" />
                                    <StatBadge text="x10 Traffic Growth" bottom="30%" left="-12%" />
                                    <StatBadge text="HUST & NEU Background" bottom="10%" left="2%" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex flex-wrap gap-3">
                                <RoleTag text="PRODUCT MANAGER LEAD" />
                                <RoleTag text="AI AUTOMATION EXPERT" />
                                <RoleTag text="FOUNDER @ SUPERB AI" />
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                Với nền tảng kỹ thuật từ <span className="text-white font-bold">Bách Khoa (HUST)</span> và tư duy quản trị từ <span className="text-white font-bold">Kinh tế Quốc dân (NEU)</span>.
                                <br />
                                <br />
                                Từng giữ vị trí quan trọng tại các tập đoàn công nghệ lớn: <span className="text-white font-bold">Viettel &rarr; One Mount &rarr; Superb Al</span>.
                            </p>

                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4 text-secondary">
                                    <BookOpen size={20} />
                                    <span className="font-black uppercase tracking-widest text-xs">Chứng chỉ & Đào tạo chuyên sâu</span>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                        <span>CS101 @ Stanford Online</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                        <span>IBM RAG & Agentic AI</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                        <span>IBM Building AI Agents & Agentic workflows</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4 text-secondary">
                                    <TrendingUp size={20} />
                                    <span className="font-black uppercase tracking-widest text-xs">Kinh nghiệm thực chiến</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['AI Workforce Platform', 'Recommendation Systems', 'Product Management', 'Market Growth'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-500 font-bold">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-secondary/5 border-l-4 border-secondary rounded-r-2xl italic">
                                <p className="text-gray-300">
                                    "Mục tiêu của tôi là giúp bạn biến AI từ một công cụ xa lạ thành một <span className="text-secondary font-black underline">CỘNG SỰ ĐẮC LỰC NHẤT</span> trong mọi công việc."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const StatBadge = ({ text, top, left, right, bottom }) => (
    <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] font-black text-secondary whitespace-nowrap z-20 shadow-2xl"
        style={{ top, left, right, bottom }}
    >
        {text}
    </motion.div>
)

const RoleTag = ({ text }) => (
    <div className="px-4 py-1.5 bg-secondary/10 border border-secondary/30 rounded-full flex items-center gap-2">
        <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
            <CheckCircle2 size={10} className="text-black" />
        </div>
        <span className="text-[10px] font-black text-secondary uppercase tracking-widest">{text}</span>
    </div>
)

const BookCard = ({ title, desc, icon }) => (
    <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors cursor-default">
        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center p-2 border border-white/5">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-sm text-white">{title}</h4>
            <p className="text-[11px] text-gray-500 italic">{desc}</p>
        </div>
    </div>
)
