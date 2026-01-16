import React from 'react'
import { Lock, MessageCircle, RefreshCcw } from 'lucide-react'

export const MODULES = [
    { id: '01', title: 'Tư duy Andromeda', desc: 'Hiểu về thuật toán máy học thế hệ mới của Facebook.' },
    { id: '02', title: 'Clean Pixel', desc: 'Cách lọc bỏ 100% dữ liệu rác khỏi Pixel.' },
    { id: '03', title: 'CAPI Standard', desc: 'Cài đặt Conversion API chuẩn quốc tế.' },
    { id: '04', title: 'Secret Filter', desc: 'Hệ thống lọc đơn ảo tự động cho COD.' },
    { id: '05', title: 'Scaling Strategy', desc: 'Chiến thuật vít ngân sách không nát camp.' },
    { id: '06', title: 'Optimization 2nd', desc: 'Tối ưu hóa lần 2 dựa trên tệp khách mua thật.' }
]

export const BONUSES = [
    { title: 'Tool Lọc Đơn Ảo', val: '2.500.000đ', icon: <Lock /> },
    { title: 'Support Group 1:1', val: 'Phí duy trì 500k/th', icon: <MessageCircle /> },
    { title: 'Cập nhật trọn đời', val: 'Vô giá', icon: <RefreshCcw /> }
]
