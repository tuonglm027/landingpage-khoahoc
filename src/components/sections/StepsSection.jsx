import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, Lock, Zap } from 'lucide-react'
import { SectionTitle } from '../shared'

export const StepsSection = () => {
    const steps = [
        { title: "Dọn dẹp Data", desc: "Loại bỏ 100% rác khỏi Pixel và Conversions API.", icon: <Rocket /> },
        { title: "Huấn luyện AI", desc: "Hướng dẫn Facebook AI tìm đúng người sẵn sàng chi tiền.", icon: <ShieldCheck /> },
        { title: "Vũ khí bí mật", desc: "Cài đặt hệ thống lọc đơn ảo tự động 24/7.", icon: <Lock /> },
        { title: "Bùng nổ doanh số", desc: "Giữ ổn định CPA và scale ngân sách không giới hạn.", icon: <Zap /> }
    ]

    return (
        <section className="py-24 bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle
                    subtitle="Quy trình GCC"
                    title="4 Bước sở hữu"
                    highlight="Vũ Khí Bí Mật"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="card-dark group border-white/5 hover:border-secondary/20 transition-all"
                        >
                            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-black mb-3 text-glow-yellow text-white">Bước {i + 1}: {step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
