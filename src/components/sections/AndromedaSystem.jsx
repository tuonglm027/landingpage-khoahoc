import React from 'react'
import { motion } from 'framer-motion'

export const AndromedaSystem = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-widest"
                >
                    BẠN KHÔNG <span className="text-primary italic">CÔ ĐƠN.</span>
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed"
                >
                    Tôi làm việc trực tiếp với hơn <span className="text-white font-bold">20 đối tác doanh nghiệp</span>, từ Shop thời trang, Thực phẩm chức năng cho đến Nội thất. Trong 2 tháng qua, tất cả chúng tôi đều nhận thấy một sự sụt giảm hiệu quả <span className="text-primary font-bold">NGHIÊM TRỌNG.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-[#0A0A0A] border border-white/5 p-12 rounded-[40px] relative mb-24 max-w-4xl mx-auto"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] px-6 py-2 border-x border-t border-white/5 rounded-t-xl text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                        Nhưng sự thật là:
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
                        FACEBOOK ĐÃ HOÀN TẤT CẬP NHẬT <br />
                        THUẬT TOÁN PHÂN PHỐI MỚI
                    </h2>

                    <div className="inline-block bg-primary text-white font-black px-12 py-4 rounded-xl text-2xl md:text-4xl shadow-[0_0_50px_rgba(239,68,68,0.3)] mb-10 skew-x-[-10deg]">
                        ANDROMEDA
                    </div>

                    <p className="text-gray-500 text-sm md:text-base italic max-w-2xl mx-auto font-medium">
                        Và tin buồn là: <span className="text-gray-300 font-bold">Cách đo lường cũ kỹ tại Việt Nam</span> đang khiến thuật toán này "GIẾT CHẾT" ngân sách của bạn.
                    </p>
                </motion.div>

                <div className="pt-12">
                    <h2 className="text-3xl md:text-5xl font-black mb-12">
                        TẠI SAO THUẬT TOÁN MỚI <br /> LẠI KHIẾN BẠN <span className="text-primary text-glow-red">LAO ĐAO?</span>
                    </h2>

                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl max-w-3xl mx-auto relative group">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">💡</div>
                        <p className="text-gray-300 italic font-medium leading-relaxed">
                            "Hãy tưởng tượng AI của Facebook như một <span className="text-primary font-bold text-glow-red">đứa trẻ thiên tài</span> nhưng cần được dạy dỗ."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
