import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap } from 'lucide-react'
import { SectionTitle, ArrowDown } from '../shared'

export const SecretWeaponSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[200px]" />
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle subtitle="Công nghệ lõi" title="Sơ đồ khối" highlight="Vũ Khí Bí Mật" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        {[
                            { step: 1, title: "Tư duy hệ thống AI Automation", desc: "Nắm vững cốt lõi để xây dựng bất kỳ quy trình tự động hóa phức tạp nào một cách logic." },
                            { step: 2, title: "Ngừng đốt tiền cho AI và API", desc: "Tối ưu hóa cách sử dụng token và server để đạt hiệu quả cao nhất với chi phí thấp nhất." },
                            { step: 3, title: "Tự thiết kế workflow chuẩn", desc: "Không còn phụ thuộc vào template có sẵn. Bạn tự tay thiết kế quy trình riêng cho mình." },
                            { step: 4, title: "Scale công việc không cần scale người", desc: "Tăng gấp 10 lần hiệu suất làm việc mà không cần tuyển thêm nhân sự vận hành." },
                            { step: 5, title: "Làm chủ công nghệ No-code", desc: "Sử dụng thành thạo n8n và các công cụ AI để dẫn đầu xu thế chuyển đổi số." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="flex gap-6 items-start group"
                            >
                                <div className="shrink-0 w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center font-black group-hover:bg-secondary group-hover:text-black transition-all">
                                    {item.step}
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform">
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative p-8 card-dark bg-secondary/[0.01] border-secondary/10 overflow-hidden">
                        {/* Animated background particles */}
                        <div className="absolute inset-0 opacity-10">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [-20, 400],
                                        x: Math.random() * 400,
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2
                                    }}
                                    className="absolute w-1 h-1 bg-secondary rounded-full"
                                />
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-6 relative z-10">
                            <FlowCard text="Yêu cầu/Quy trình (Hỗn Loạn)" />

                            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity }} className="text-secondary/50">
                                <ArrowDown size={24} />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-full p-6 bg-secondary/20 border-2 border-secondary/40 rounded-2xl text-center text-secondary font-black shadow-[0_0_30px_rgba(250,204,21,0.2)] relative"
                            >
                                <div className="absolute inset-0 bg-secondary/10 animate-pulse rounded-2xl" />
                                <span className="relative">TƯ DUY THIẾT KẾ (DESIGN THINKING)</span>
                                <Zap className="absolute top-2 right-2 text-secondary animate-bounce" size={16} />
                            </motion.div>

                            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, delay: 0.2 }} className="text-secondary/50">
                                <ArrowDown size={24} />
                            </motion.div>

                            <FlowCard text="WORKFLOW CHUẨN 100%" icon={<ShieldCheck size={18} className="text-green-500" />} highlight />

                            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, delay: 0.4 }} className="text-blue-500/50">
                                <ArrowDown size={24} />
                            </motion.div>

                            <motion.div
                                className="w-full p-4 bg-blue-500/20 border border-blue-500/40 rounded-xl text-center text-blue-400 font-bold uppercase tracking-widest"
                            >
                                HỆ THỐNG AI TỰ ĐỘNG (n8n)
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FlowCard = ({ text, icon, highlight }) => (
    <div className={`w-full p-4 ${highlight ? 'bg-gray-800' : 'bg-gray-900'} border border-white/5 rounded-xl text-center flex items-center justify-center gap-3`}>
        {icon}
        <span className={highlight ? 'text-white font-black' : 'text-gray-400'}>{text}</span>
    </div>
)
