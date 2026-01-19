import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionTitle } from '../shared'

export const FAQ = () => {
    const [openIdx, setOpenIdx] = useState(null)
    const questions = [
        { q: "Tôi là newbie chưa chạy Ads bao giờ có học được không?", a: "Khóa học đi từ tư duy cơ bản đến kỹ thuật chuyên sâu. Tuy nhiên, nếu bạn đã có kinh nghiệm chạy Ads cơ bản sẽ tiếp thu nhanh hơn." },
        { q: "Nếu Facebook update thuật toán thì sao?", a: "Đây là phương pháp huấn luyện AI dựa trên dữ liệu chuẩn, nó bền vững theo thời gian. Chúng tôi update nội dung mỗi 2 tuần nếu có thay đổi." },
        { q: "Tôi có được hoàn tiền không?", a: "Có! Chúng tôi cam kết hoàn tiền 100% trong vòng 7 ngày đầu tiên nếu bạn áp dụng mà không thấy hiệu quả hoặc cảm thấy không phù hợp." },
        { q: "Có cần biết Code để cài đặt CAPI không?", a: "Không cần! Chúng tôi hướng dẫn sử dụng các công cụ No-code chuyên dụng (như n8n), chỉ cần copy-paste theo đúng quy trình." },
        { q: "Chính sách Affiliate khi giới thiệu học viên mới như thế nào?", a: "Chúng tôi có cơ chế hoa hồng cực kỳ hấp dẫn cho các học viên cũ khi chia sẻ giá trị cho người mới. Chi tiết sẽ được hướng dẫn cụ thể trong nhóm SUPPORT 1:1." }
    ]

    return (
        <section className="py-24 bg-[#050505]">
            <div className="max-w-3xl mx-auto px-4">
                <SectionTitle title="Giải đáp" highlight="Thắc Mắc" />
                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div key={i} className="card-dark p-0 overflow-hidden">
                            <button
                                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                className="w-full p-6 flex justify-between items-center text-left transition-colors hover:bg-white/[0.02]"
                            >
                                <span className={`font-bold transition-colors ${openIdx === i ? 'text-secondary' : 'text-gray-300'}`}>{item.q}</span>
                                <Plus className={`text-gray-600 transition-transform duration-300 ${openIdx === i ? 'rotate-45 text-secondary' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIdx === i && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 italic">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
