import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Notification = () => {
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({ name: 'Hoàng Long', time: '2 phút trước' })

    useEffect(() => {
        const interval = setInterval(() => {
            const names = ['Nguyễn Tâm', 'Vũ Thiện Nhân', 'Minh Trần', 'Anh Tú', 'Lê Hùng']
            setData({ name: names[Math.floor(Math.random() * names.length)], time: Math.floor(Math.random() * 10 + 1) + ' phút trước' })
            setVisible(true)
            setTimeout(() => setVisible(false), 5000)
        }, 15000)
        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 20, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    className="fixed bottom-20 left-0 z-[100] bg-gray-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
                >
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-black font-black">AI</div>
                    <div>
                        <p className="text-sm font-bold text-white"><span className="text-secondary">{data.name}</span> vừa đăng ký</p>
                        <p className="text-[10px] text-gray-500">{data.time}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
