import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gift, ShieldCheck, Zap, Lock, ChevronRight } from 'lucide-react'

export const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState(3600 * 24 + 3600 * 5)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (!revealed) return
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [revealed])

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
  }

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[180px] -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 relative card-dark border-secondary/50 bg-secondary/[0.02] p-8 md:p-12 overflow-hidden h-[600px]"
          >

            {/* BADGE */}
            <div className="absolute top-0 right-0 p-6 z-40">
              <div className="bg-secondary text-black font-black px-4 py-1 rounded-full text-[10px] uppercase tracking-widest animate-pulse">
                Ưu đãi tốt nhất
              </div>
            </div>

            {/* LOCK OVERLAY */}
            {!revealed && (
              <div
                onClick={() => setRevealed(true)}
                className="absolute inset-0 z-30 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center text-center cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-6 animate-pulse">
                  <Lock size={36} className="text-secondary" />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  ƯU ĐÃI ĐANG BỊ ẨN
                </h3>

                <p className="text-gray-400 text-sm mb-6 max-w-sm">
                  Nhấn để mở khóa mức giá đặc biệt dành cho bạn
                </p>

                <button className="bg-secondary text-black font-black px-8 py-4 rounded-xl flex items-center gap-3 text-lg shadow-[0_0_40px_rgba(250,204,21,0.35)] hover:scale-105 transition">
                  XEM ƯU ĐÃI
                  <ChevronRight />
                </button>
              </div>
            )}

            {/* CONTENT AFTER REVEAL */}
            {revealed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-8"
              >
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Lock size={32} className="text-secondary" />
                </div>

                <div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                    CHỈ CÒN{' '}
                    <span className="text-secondary text-glow-yellow text-6xl md:text-8xl">
                      999.000đ
                    </span>
                  </h3>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-2">
                    Giá gốc <span className="line-through">3.999.000đ</span> – DUY NHẤT TRONG HÔM NAY
                  </p>
                </div>

                <a
                    href="/payment"
                    className="w-full max-w-md bg-secondary text-black font-black py-6 rounded-2xl text-xl md:text-2xl shadow-[0_0_50px_rgba(250,204,21,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-4"
                >
                    MUA NGAY
                    <ChevronRight />
                </a>

                <div className="flex flex-wrap justify-center gap-6 pt-4">
                  <Feature icon={<Gift />} text="Trọn bộ 3 Bonus" />
                  <Feature icon={<ShieldCheck />} text="Hỗ trợ trọn đời" />
                  <Feature icon={<Zap />} text={`Tăng giá sau: ${formatTime(timeLeft)}`} isRed />
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* FUTURE PRICE */}
          <div className="space-y-6">
            <PriceStep
              label="Sắp tới"
              status="Học viên 1000 – 1200"
              count="Giai đoạn tăng tốc"
              price="1.290.000đ"
              icon={<Zap />}
            />
            <PriceStep
              label="Tương lai"
              status="Từ học viên 1200+"
              count="Mức giá chính thức"
              price="1.890.000đ"
              icon={<Zap />}
              isDark
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================= SUB COMPONENTS ================= */

const Feature = ({ icon, text, isRed }) => (
  <div className={`flex items-center gap-2 ${isRed ? 'text-primary' : 'text-gray-400'} font-bold text-xs`}>
    <div className={isRed ? 'animate-pulse' : ''}>{icon}</div>
    <span>{text}</span>
  </div>
)

const PriceStep = ({ label, status, count, price, icon, isDark }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className={`p-6 rounded-3xl border ${
      isDark ? 'bg-black/40 border-white/5 opacity-50' : 'bg-white/5 border-white/10'
    }`}
  >
    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">
      {icon} {label}
    </div>
    <h4 className="font-black text-white mb-1">{status}</h4>
    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter mb-4">
      {count}
    </p>
    <div className="text-2xl font-black text-gray-400">{price}</div>
  </motion.div>
)
