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
                        className="text-4xl md:text-7xl font-black mb-12 uppercase leading-tight"
                    >
                        TÔI ĐÃ MẤT <span className="text-primary text-glow-red italic">20 TỶ</span> TIỀN ADS <br />
                        ĐỂ NHẬN RA BÀI HỌC NÀY...
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                        <div className="bg-green-500/5 border border-green-500/20 p-8 rounded-[32px] text-left">
                            <span className="text-green-500 font-black text-2xl mb-4 block">US</span>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">DROPSHIP MỸ & CHÂU ÂU</p>
                            <p className="text-white text-sm leading-relaxed">Dữ liệu sạch, khách hàng có thói quen thanh toán trước, AI học cực nhanh.</p>
                        </div>
                        <div className="bg-primary/5 border border-primary/20 p-8 rounded-[32px] text-left">
                            <span className="text-primary font-black text-2xl mb-4 block">VN</span>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">COD VIỆT NAM</p>
                            <p className="text-white text-sm leading-relaxed">Đơn ảo, bom hàng, click tặc... AI bị "ngộ độc" dữ liệu và bắt đầu phân phối sai.</p>
                        </div>
                    </div>
                </div>

                {/* About Son Marketing */}
                <div className="pt-24 border-t border-white/5">
                    <div className="text-center mb-20">
                        <p className="text-secondary font-black uppercase tracking-[0.4em] text-sm mb-4">The Founder</p>
                        <h2 className="text-4xl md:text-6xl font-black text-white">VỀ SƠN MARKETING</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
                            <div className="relative z-10 p-4 border border-white/10 rounded-[40px] bg-gray-900/50 backdrop-blur-sm">
                                <div className="aspect-[4/5] bg-gray-800 rounded-[32px] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    {/* Placeholder for image */}
                                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                                        <Users size={80} className="text-secondary/20 mb-6" />
                                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Instructor Image</p>
                                    </div>

                                    {/* Stats Badges */}
                                    <StatBadge text="+20 Tỷ Chi Tiêu Ads" top="10%" right="-5%" />
                                    <StatBadge text="12 Năm Kinh Nghiệm" top="40%" right="-10%" />
                                    <StatBadge text="+20.000 Học Viên" bottom="20%" right="-5%" />
                                    <StatBadge text="10 Khóa Học" top="20%" left="-5%" />
                                    <StatBadge text="+50 Nhãn Hàng" bottom="30%" left="-10%" />
                                    <StatBadge text="2 Đầu Sách" bottom="10%" left="5%" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex flex-wrap gap-3">
                                <RoleTag text="CEO TienToi" />
                                <RoleTag text="CEO Evergreen English Center" />
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                Người dạy online marketing chuyên sâu với hơn <span className="text-white font-bold">10 khóa học</span> và <span className="text-white font-bold">+20.000 học viên</span> tính đến nay.
                            </p>

                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4 text-secondary">
                                    <TrendingUp size={20} />
                                    <span className="font-black uppercase tracking-widest text-xs">Quản lý chiến dịch cho +50 nhãn hàng</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Thời trang', 'TPCN', 'Đào tạo', 'SaaS'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-500 font-bold">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-secondary font-black uppercase tracking-widest text-xs">Tác giả sách:</p>
                                <BookCard title="CPM Meta Hack" desc="Tối ưu chi phí quảng cáo Meta" icon={<Users className="text-blue-500" />} />
                                <BookCard title="Inside Google Ads" desc="Nhắm mục tiêu Google chuyên sâu" icon={<Star className="text-red-500" />} />
                            </div>

                            <div className="p-8 bg-secondary/5 border-l-4 border-secondary rounded-r-2xl italic">
                                <p className="text-gray-300">
                                    "Tôi không dạy bạn chạy quảng cáo. Tôi dạy bạn <span className="text-secondary font-black underline">TƯ DUY DỮ LIỆU</span> để bạn tự làm chủ mọi chiến dịch."
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
