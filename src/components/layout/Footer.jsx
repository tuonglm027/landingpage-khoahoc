import React from 'react'
import { ShieldCheck } from 'lucide-react'

export const Footer = () => (
    <footer className="py-20 border-t border-white/5 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="relative z-10">
            <div className="text-4xl font-black text-secondary mb-10 italic tracking-tighter">GCC<span className="text-white">.PRO</span></div>
            <div className="flex justify-center gap-12 mb-10 text-sm text-gray-400 font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-white">Điều khoản</a>
                <a href="#" className="hover:text-white">Bảo mật</a>
                <a href="#" className="hover:text-white">Liên hệ</a>
            </div>
            <p className="text-gray-600 max-w-md mx-auto px-4 text-xs leading-relaxed mb-6">
                Hệ thống tối ưu hóa chuyển đổi Facebook Ads toàn diện. Bản quyền thuộc về Sơn Marketing.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-700 text-[10px] uppercase font-bold tracking-[0.3em]">
                <ShieldCheck size={12} />
                Secure Payments & Verified Content
            </div>
        </div>
    </footer>
)
