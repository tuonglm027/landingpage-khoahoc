import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, ArrowRight, CheckCircle2, Rocket } from 'lucide-react'
import { SectionTitle } from '../shared'

export const ComparisonSection = () => {
    return (
        <section className="py-24 bg-[#080808]">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle title="Sự khác biệt của" highlight="AI Automation" newLine={true} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Cách cũ */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="card-dark border-red-500/20 bg-red-500/[0.02] p-8 md:p-12"
                    >
                        <h4 className="text-2xl font-black mb-8 text-red-500 flex items-center gap-3">
                            <AlertTriangle /> CÁCH CŨ
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start text-gray-400">
                                <ArrowRight className="text-red-500 mt-1 shrink-0" size={18} />
                                Dùng AI như tool rời rạc, mạnh ai nấy xài.
                            </li>
                            <li className="flex gap-4 items-start text-gray-400">
                                <ArrowRight className="text-red-500 mt-1 shrink-0" size={18} />
                                Thấy gì hay là copy workflow, không hiểu bản chất.
                            </li>
                            <li className="flex gap-4 items-start text-gray-400">
                                <ArrowRight className="text-red-500 mt-1 shrink-0" size={18} />
                                Automation chỉ để tiết kiệm vài phút, không tạo hệ thống.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Cách mới */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="card-dark border-secondary/20 bg-secondary/[0.02] p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4">
                            <span className="bg-secondary text-black text-[10px] font-black px-2 py-1 rounded-full uppercase">Hiệu quả nhất</span>
                        </div>
                        <h4 className="text-2xl font-black mb-8 text-secondary flex items-center gap-3 underline decoration-secondary/30 underline-offset-8">
                            <Rocket /> CÔNG NGHỆ AI Automation
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start text-white">
                                <CheckCircle2 className="text-secondary mt-1 shrink-0" size={18} />
                                Nhìn AI Automation như một hệ thống vận hành, không phải tool.
                            </li>
                            <li className="flex gap-4 items-start text-white">
                                <CheckCircle2 className="text-secondary mt-1 shrink-0" size={18} />
                                Thiết kế workflow dựa trên mục tiêu kinh doanh & hành vi người dùng.
                            </li>
                            <li className="flex gap-4 items-start text-white">
                                <CheckCircle2 className="text-secondary mt-1 shrink-0" size={18} />
                                AI phối hợp với nhau theo kịch bản, logic, điều kiện rõ ràng.
                            </li>
                            <li className="flex gap-4 items-start text-white">
                                <CheckCircle2 className="text-secondary mt-1 shrink-0" size={18} />
                                Mọi quy trình đều đo lường, tối ưu, tự học theo dữ liệu.
                            </li>
                            <li className="flex gap-4 items-start text-white">
                                <CheckCircle2 className="text-secondary mt-1 shrink-0" size={18} />
                                Mở rộng gấp nhiều lần nhưng không tăng người, không tăng áp lực.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
