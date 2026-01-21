import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const PaymentSuccessPage = () => {
    return (
        <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center p-8 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full -z-10" />

            <div className="max-w-md w-full bg-white/[0.03] backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 relative shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-400" />

                <div className="mb-8 relative inline-block">
                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                    <CheckCircle2 className="w-24 h-24 text-green-500 relative z-10" />
                </div>

                <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Thanh toán <br /> thành công!</h1>

                <div className="space-y-4 mb-8">
                    <p className="text-gray-400 leading-relaxed">
                        Cảm ơn bạn đã đăng ký khóa học. Chúng tôi rất hào hứng được đồng hành cùng bạn.
                    </p>
                </div>

                <div className="p-4 bg-green-500/5 rounded-xl mb-8 border border-green-500/20">
                    <p className="text-[10px] text-green-500 font-black uppercase tracking-widest mb-1">TRẠNG THÁI GIAO DỊCH</p>
                    <p className="text-white font-black text-xl tracking-tight">ĐÃ HOÀN TẤT</p>
                </div>

                <div className="space-y-3 text-sm text-gray-500 mb-10">
                    <p>Thông tin truy cập đã được gửi qua Email.</p>
                    <p className="italic">Vui lòng kiểm tra cả hộp thư Spam.</p>
                </div>

                <a href="/" className="w-full bg-white text-black font-black py-4 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    QUAY VỀ TRANG CHỦ
                </a>
            </div>
        </div>
    )
}

export default PaymentSuccessPage
