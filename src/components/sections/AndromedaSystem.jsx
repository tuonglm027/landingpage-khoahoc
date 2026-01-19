import React from 'react'
import { motion } from 'framer-motion'

export const AndromedaSystem = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-widest text-[#555]"
                >
                    SỰ THẬT PHŨ PHÀNG
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed text-lg"
                >
                    Có phải bạn đang tải hàng chục mẫu <span className="text-white font-bold">n8n workflow</span> từ trên mạng, copy và paste nhưng kết quả nhận lại chỉ là sự <span className="text-primary font-bold">RẮC RỐI & SAI LỖI?</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-[#0A0A0A] border border-white/5 p-12 rounded-[40px] relative mb-24 max-w-4xl mx-auto"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] px-6 py-2 border-x border-t border-white/5 rounded-t-xl text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                        Vấn đề lớn nhất là:
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight uppercase">
                        BẠN ĐANG RƠI VÀO <br />
                        CẠM BẪY SAO CHÉP
                    </h2>

                    <div className="inline-block bg-primary text-white font-black px-12 py-4 rounded-xl text-2xl md:text-4xl shadow-[0_0_50px_rgba(239,68,68,0.3)] mb-10 skew-x-[-10deg]">
                        TEMPLATE TRAP
                    </div>

                    <p className="text-gray-500 text-sm md:text-lg italic max-w-2xl mx-auto font-medium">
                        Khi bạn dùng template mà không hiểu <span className="text-gray-300 font-bold">TƯ DUY GỐC</span>, bạn chỉ đang xây lâu đài trên cát. Chỉ cần AI thay đổi 1 bước, hệ thống của bạn sẽ <span className="text-primary font-bold">SỤP ĐỔ</span> ngay lập tức.
                    </p>
                </motion.div>

                <div className="pt-12">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase">
                        TẠI SAO CÁCH HỌC CŨ <br /> LẠI KHIẾN BẠN <span className="text-primary text-glow-red">THẤT BẠI?</span>
                    </h2>

                    <div className="bg-primary/5 border border-primary/20 p-10 rounded-3xl max-w-3xl mx-auto relative group">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-[0_0_20px_#EF444466]">💡</div>
                        <p className="text-gray-300 italic font-medium leading-relaxed text-lg">
                            "Học template giống như dùng <span className="text-primary font-bold text-glow-red">mì ăn liền</span>. Nó giúp bạn no ngay lúc đó, nhưng không thể giúp bạn trưởng thành và làm chủ cuộc chơi dài hạn."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
