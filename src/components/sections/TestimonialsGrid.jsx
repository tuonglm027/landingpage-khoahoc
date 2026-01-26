import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../shared'
import { MessageCircle, Star } from 'lucide-react'

export const TestimonialsGrid = () => {
    const [showAll, setShowAll] = React.useState(false)
    
    const feedbacks = [
        { name: "Học viên Xuân Trường", role: "Manager tại Techhub", msg: "Khóa học rất thực chiến, mình đã áp dụng n8n để tự động hóa quy trình chăm sóc khách hàng giúp tiết kiệm 70% thời gian." },
        { name: "Chị Minh Anh", role: "Marketing Agency Owner", msg: "Tư duy hệ thống mà anh Đạt chia sẻ thực sự là chìa khóa. Trước đây mình toàn copy template mà không hiểu tại sao lại chạy như vậy." },
        { name: "Anh Hoàng Nam", role: "Solopreneur", msg: "Ban đầu mình nghĩ automation rất khó nhưng sau khóa học mình đã tự xây được workflow xử lý báo cáo hàng ngày." },
        { name: "Học viên Minh Tuấn", role: "E-commerce Specialist", msg: "Tiết kiệm được khối tiền API nhờ các kỹ thuật tối ưu n8n. Cảm ơn anh Đạt rất nhiều vì những 'mẹo' thực chiến." },
        { name: "Chị Thu Thảo", role: "Digital Marketer", msg: "Hỗ trợ nhiệt tình từ chuyên gia, bài giảng dễ hiểu và cực kỳ nhiều ví dụ thực tế. Học đến đâu hiểu đến đó." },
        { name: "Anh Quốc Bảo", role: "Business Owner", msg: "Mọi thứ được giải thích rất chi tiết từ con số 0. Một người không rành tech như mình cũng có thể làm được và làm tốt." },
        { name: "Anh Đức Hải", role: "Account Manager", msg: "Hệ thống AI Agent giúp mình quản lý hàng trăm fanpage một cách tự động, quá tuyệt vời cho các chiến dịch scale lớn." },
        { name: "Chị Lan Hương", role: "Sales Manager", msg: "ROI cải thiện rõ rệt, đơn hàng về đều hơn và không còn bị sót như trước nhờ bot nhắc nhở tự động." },
        { name: "Học viên Gia Bách", role: "Freelancer", msg: "Cách tiếp cận khác biệt hoàn toàn so với các khóa học AI khác trên thị trường. Tập trung sâu vào tư duy gốc." },
        { name: "Anh Tấn Phát", role: "Growth Hacker", msg: "Nội dung thực tế, học xong có thể áp dụng ngay vào dự án của công ty. Quy trình n8n quá mạnh mẽ." },
        { name: "Chị Phương Linh", role: "COO tại Startup", msg: "Mình đã giải phóng được sức lao động cho 3 nhân sự nhờ hệ thống automation này. Sự đầu tư cực kỳ xứng đáng." },
        { name: "Anh Minh Quang", role: "Content Creator", msg: "Đáng đồng tiền bát gạo, một trong những khóa học AI chất lượng nhất mình từng học. Giờ mình đã làm chủ được AI." },
    ]

    const displayFeedbacks = showAll ? feedbacks : feedbacks.slice(0, 3)

    return (
        <section className="py-24 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-[3.75rem] font-black leading-tight mb-6 uppercase">
                        HÀNG TRĂM MARKETER ĐÃ <br />
                        <span className="text-glow-blue text-[#10B981] italic">THAY ĐỔI TƯ DUY</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                        Kết quả thực tế từ những người đã áp dụng quy trình này.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-green-500/5 blur-[150px] -z-10" />

                    {feedbacks.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (i % 3) * 0.1 }}
                            className={`bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-all hover:bg-white/[0.05] group flex flex-col justify-between ${i >= 3 && !showAll ? 'hidden md:block' : ''}`}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-green-500/10 rounded-xl text-green-500 group-hover:scale-110 transition-transform">
                                        <MessageCircle size={20} />
                                    </div>
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="fill-secondary text-secondary" />)}
                                    </div>
                                </div>

                                <p className="text-gray-300 text-lg italic mb-8 leading-relaxed font-medium">
                                    "{s.msg}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center text-secondary font-black">
                                    {s.name.charAt(s.name.lastIndexOf(' ') + 1)}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">{s.name}</p>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">{s.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button - Only show on mobile */}
                {!showAll && (
                    <div className="md:hidden mt-8 flex justify-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="bg-white/[0.05] border border-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/[0.1] transition-all"
                        >
                            Xem thêm {feedbacks.length - 3} feedback
                        </button>
                    </div>
                )}

                <div className="mt-20 flex justify-center text-center">
                    <a
                        href="/payment"
                        className="w-full max-w-md bg-secondary text-black font-black py-6 rounded-2xl text-xl md:text-2xl shadow-[0_0_50px_rgba(250,204,21,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-4"
                    >
                        ĐĂNG KÝ NGAY
                    </a>
                </div>
            </div>
        </section>
    )
}
