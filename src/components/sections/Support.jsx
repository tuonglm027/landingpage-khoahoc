import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  AlertTriangle,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Headphones,
  ArrowRight,
} from 'lucide-react'
import { FloatingBadge } from '../shared'

export const Support = () => {
  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 500], [0, -80])
  const yMedium = useTransform(scrollY, [0, 500], [0, -140])
  const yFast = useTransform(scrollY, [0, 500], [0, -200])

  return (
    <section className="relative min-h-screen bg-[#020202] overflow-hidden pt-36 pb-24 px-4 text-center">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-blue-500/20 blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[520px] h-[520px] bg-cyan-400/10 blur-[160px] rounded-full -z-10" />

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto z-10"
      >
        {/* BADGE */}
        <div className="inline-flex items-center gap-3 bg-blue-500/10 border-2 border-blue-500/40 text-blue-400 px-6 py-2.5 rounded-2xl text-xs md:text-sm font-black uppercase tracking-wider mb-10">
          <ShieldCheck size={20} />
          CAM KẾT HỖ TRỢ ĐẾN KHI LÀM ĐƯỢC
        </div>

        {/* HEADLINE */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-white uppercase">
          Bạn không phải
          <span className="text-blue-500 text-glow-blue italic block mt-2">
            tự mò một mình
          </span>
        </h1>


        {/* SUPPORT CARD */}
        <div className="relative max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-left shadow-[0_0_60px_rgba(59,130,246,0.15)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <img src="/logos/Logo Zalo Arc.png" alt="zalo" className="w-14 h-14 object-contain" />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white">
              HỖ TRỢ TRỰC TIẾP QUA ZALO
            </h3>
          </div>

          <p className="text-gray-400 leading-relaxed mb-6">
            Khi bạn gặp vấn đề trong lúc học hoặc triển khai automation thực tế:
            lỗi workflow, AI trả kết quả sai, không kết nối được API, không tối ưu
            chi phí…
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <a
            href="https://zalo.me/g/tvrdrk774"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md bg-blue-500 text-black font-black py-6 rounded-2xl text-xl md:text-2xl shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-4"
          >
            CHAT ZALO NGAY
            <ArrowRight />
          </a>

          <p className="text-xs text-gray-600 uppercase tracking-wider">
            *Chỉ hỗ trợ học viên đã đăng ký
          </p>
        </div>
      </motion.div>

      {/* FLOATING BADGES */}
      <div className="hidden lg:block">
        <FloatingBadge icon={<AlertTriangle size={14} />} text="Không ai trả lời" top="18%" left="5%" style={{ y: yFast }} />
        <FloatingBadge icon={<MessageCircle size={14} />} text="Chat trực tiếp" top="50%" right="5%" style={{ y: yMedium }} />
        <FloatingBadge icon={<ShieldCheck size={14} />} text="Không bỏ rơi" bottom="30%" left="10%" style={{ y: ySlow }} />
        <FloatingBadge icon={<Headphones size={14} />} text="1:1 Support" bottom="25%" right="15%" style={{ y: yFast }} />
      </div>
    </section>
  )
}
