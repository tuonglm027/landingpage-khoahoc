import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Target, Users, TrendingUp, Zap } from 'lucide-react'

export const WhoIsThisFor = () => {
    const groups = [
        {
            title: "Chủ Shop Thời Trang / Phụ Kiện",
            problems: ["Đơn ảo quá nhiều (40-50%)", "Tỉ lệ hoàn hàng cao kỷ lục", "Giá đơn (CPA) tăng gấp đôi so với 2023"],
            icon: <Target className="text-primary" />
        },
        {
            title: "Nhà Bán TPCN / Mỹ Phẩm",
            problems: ["Vi phạm chính sách liên tục", "Tệp khách hàng bị loãng", "Không scale được ngân sách lớn"],
            icon: <Zap className="text-secondary" />
        },
        {
            title: "Dân Làm Dropshipping VN",
            problems: ["iOS 14.5+ bóp nghẹt pixel", "Trùng lặp tệp khách hàng", "Chi phí CPA ăn hết lợi nhuận"],
            icon: <TrendingUp className="text-blue-500" />
        },
        {
            title: "Inhouse Marketing Team",
            problems: ["AI của Meta phân phối sai hướng", "Mất phương hướng khi camp vỡ", "Data nạp vào pixel bị 'ngộ độc'"],
            icon: <Users className="text-purple-500" />
        }
    ]

    return (
        <section className="py-24 bg-[#080808] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
                        ĐỪNG ĐỌC TIẾP NẾU BẠN <br />
                        <span className="text-primary italic">KHÔNG THUỘC</span> NHÓM NÀY
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                        GCC chỉ dành cho những người kinh doanh thực sự muốn làm chủ dữ liệu.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {groups.map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white/[0.02] border border-white/5 p-10 rounded-[40px] hover:bg-white/[0.04] transition-all group"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                    {group.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-black group-hover:text-glow-yellow transition-all">{group.title}</h3>
                            </div>

                            <ul className="space-y-4">
                                {group.problems.map((p, idx) => (
                                    <li key={idx} className="flex gap-4 items-start text-gray-400 text-sm md:text-base">
                                        <ChevronRight className="text-primary mt-1 shrink-0" size={18} />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Warning box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 p-8 bg-primary/10 border-2 border-primary/20 rounded-[40px] text-center max-w-4xl mx-auto"
                >
                    <p className="text-primary font-black text-lg md:text-2xl uppercase italic tracking-widest">
                        "Mọi tối ưu về Content, Target đều vô nghĩa nếu AI của Facebook bị nạp dữ liệu rác ngay từ đầu."
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
