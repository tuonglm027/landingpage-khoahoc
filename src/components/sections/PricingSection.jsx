import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gift, ShieldCheck, Zap, Lock, ChevronRight } from 'lucide-react'
import { API_BASE_URL } from '../../constants/api'

export const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState(3600 * 24 + 3600 * 5)
  const [revealed, setRevealed] = useState(true)
  const [course, setCourse] = useState(null)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/landing/courses`)
        const result = await response.json()
        if (result.success && result.data.length > 0) {
          setCourse(result.data[0])
        }
      } catch (e) {
        console.error('Failed to fetch course data:', e)
      }
    }
    fetchCourse()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ'
  }

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
  }

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Enhanced Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/30 rounded-full blur-[200px] -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 relative card-dark border-secondary bg-secondary/[0.12] p-8 md:p-12 overflow-hidden h-auto min-h-[550px] flex flex-col justify-center shadow-[0_0_80px_rgba(250,204,21,0.15)]"
          >

            {/* BADGE */}
            <div className="absolute top-0 right-0 p-6 z-40">
              <div className="bg-secondary text-black font-black px-4 py-1 rounded-full text-[10px] uppercase tracking-widest animate-pulse shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                Ưu đãi tốt nhất
              </div>
            </div>

            {/* CONTENT (Always Revealed) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center h-full text-center space-y-8 py-8"
            >
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.2)]">
                <Zap size={40} className="text-secondary fill-secondary" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                  CHỈ CÒN{' '}
                  <span className="text-secondary text-glow-yellow text-5xl md:text-9xl block mt-2">
                    {course ? formatPrice(course.current_price) : '...'}
                  </span>
                </h3>
                <div className="bg-white/5 py-2 px-6 rounded-full inline-block">
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                    Giá gốc <span className="line-through">3.999.000đ</span> – <span className="text-secondary">DUY NHẤT TRONG HÔM NAY</span>
                  </p>
                </div>
              </div>

              <a
                href="/payment"
                className="w-full max-w-md bg-secondary text-black font-black py-6 rounded-2xl text-xl md:text-2xl shadow-[0_0_50px_rgba(250,204,21,0.4)] hover:scale-105 hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] transition-all flex items-center justify-center gap-4"
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
    className={`p-6 rounded-3xl border relative overflow-hidden group transition-all duration-500 ${isDark
      ? 'bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.1)] hover:border-purple-500/50'
      : 'bg-gradient-to-br from-secondary/20 to-orange-500/10 border-secondary/40 shadow-[0_0_30px_rgba(250,204,21,0.15)] hover:border-secondary hover:from-secondary/30'
      }`}
  >
    {/* Animated background glow */}
    <div className={`absolute -inset-1 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 -z-10 ${isDark ? 'bg-purple-600' : 'bg-secondary'}`} />

    <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-4 ${!isDark ? 'text-secondary' : 'text-purple-400'}`}>
      {icon} {label}
    </div>

    <h4 className="font-black text-white mb-1 text-lg group-hover:translate-x-1 transition-transform">{status}</h4>

    <p className={`text-[10px] font-bold uppercase tracking-tighter mb-4 ${!isDark ? 'text-gray-400' : 'text-purple-300/60'}`}>
      {count}
    </p>

    <div className={`text-3xl font-black ${!isDark ? 'text-white text-glow-yellow' : 'text-white/90 text-glow-purple'}`}>
      {price}
    </div>
  </motion.div>
)
