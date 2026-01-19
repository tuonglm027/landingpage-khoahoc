import React from 'react'
import { Lock, MessageCircle, RefreshCcw } from 'lucide-react'

export const MODULES = [
    { id: '01', title: 'Gen AI Mastery', desc: 'Phân biệt GenAI và AI truyền thống. Làm chủ 5 kỹ thuật Prompting cốt lõi.' },
    { id: '02', title: 'Workflow Foundations', desc: 'Xây dựng những Workflow đầu tiên trên nền tảng n8n từ con số 0.' },
    { id: '03', title: 'Service Integration', desc: 'Kết nối n8n với hàng trăm dịch vụ bên thứ 3 qua các Nodes tích hợp.' },
    { id: '04', title: 'AI Specific Nodes', desc: 'Sâu thảo về bộ Nodes chuyên dụng cho AI trong hệ sinh thái n8n.' },
    { id: '05', title: 'AI Agent Construction', desc: 'Tự tay xây dựng các Agent tự động hóa nội dung, mạng xã hội và báo cáo.' },
    { id: '06', title: 'Scaling Agents', desc: 'Mở rộng khả năng xử lý và tư duy logic cho các AI Agent đa nhiệm.' },
    { id: '07', title: 'Advanced n8n Nodes', desc: 'Xử lý dữ liệu phức tạp với Function Nodes, JavaScript và HTML.' },
    { id: '08', title: 'Optimization & Debug', desc: 'Tối ưu hiệu suất, kiểm soát lỗi và quản lý tài nguyên hệ thống n8n.' },
    { id: '09', title: 'Self-Hosting n8n', desc: 'Tự triển khai n8n trên Server riêng để bảo mật dữ liệu và không giới hạn tác vụ.' }
]

export const BONUSES = [
    { title: 'Thư viện Mẫu AI dựng sẵn', val: '2.500.000đ', icon: <RefreshCcw /> },
    { title: 'Support trọn đời từ chuyên gia', val: 'Miễn phí', icon: <MessageCircle /> },
    { title: 'Bộ tài liệu Prompt Master', val: '999.000đ', icon: <Lock /> }
]
