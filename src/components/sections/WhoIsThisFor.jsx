import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Target, Users, TrendingUp, Zap } from 'lucide-react'

export const WhoIsThisFor = () => {
    const groups = [
        {
            title: "Chủ Shop Thời Trang / Phụ Kiện",
            problems: ["Dữ liệu đơn hàng không được làm sạch & phân loại tự động", "Khách mua, khách xem, khách hoàn đổ chung một luồng", "Không có workflow phát hiện & chặn đơn ảo từ sớm"],
            icon: <Target className="text-primary" />
        },
        {
            title: "Nhà Bán TPCN / Mỹ Phẩm",
            problems: ["Nội dung & hành vi khách không được kiểm duyệt bằng automation", "Dữ liệu phân tán, AI học sai chân dung người mua thật", "Không có hệ thống nuôi data dài hạn, tái sử dụng dữ liệu"],
            icon: <Zap className="text-secondary" />
        },
        {
            title: "Dân Làm Dropshipping VN",
            problems: ["Hành trình khách hàng không được theo dõi end-to-end", "Trùng lặp data do thiếu luồng tự động khử trùng & gộp dữ liệu", "AI tối ưu theo hành vi bề mặt vì không định nghĩa “sự kiện giá trị”"],
            icon: <TrendingUp className="text-blue-500" />
        },
        {
            title: "Inhouse Marketing Team",
            problems: ["Mỗi tool chạy một kiểu, không có workflow trung tâm", "Camp gãy là hệ thống “mù” vì không có luồng giữ dữ liệu sống", "Data đầu vào không kiểm soát khiến AI học lệch ngay từ đầu"],
            icon: <Users className="text-purple-500" />
        }
    ]

    return (
        <section className="py-24 bg-[#080808] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-[4.5rem] font-black leading-tight mb-6 uppercase">
                        ĐỪNG ĐỌC TIẾP NẾU BẠN <br />
                        <span className="text-primary italic">KHÔNG THUỘC</span> NHÓM NÀY
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                        AI Automation chỉ dành cho những người kinh doanh thực sự muốn làm chủ dữ liệu.
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
                    <p className="text-primary font-black text-lg md:text-2xl italic tracking-widest">
                        "AI không thất bại vì thuật toán. AI thất bại vì hệ thống Automation của bạn không có tư duy"
                    </p>
                </motion.div>
            </div>
        </section> 
    )
}
