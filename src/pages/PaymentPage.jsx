import React, { useState, useEffect } from 'react'
import { ArrowLeft, QrCode } from 'lucide-react'
import TagManager from 'react-gtm-module'
import { trackPageView, trackBeginCheckout, trackButtonClick, trackLead } from '../utils/gtm'

const PaymentPage = () => {
  // Track page view on mount
  useEffect(() => {
    trackPageView('Trang thanh toán khóa học')
  }, [])

  const [showQR, setShowQR] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes in seconds
  const [paymentStatus, setPaymentStatus] = useState('pending') // pending, success, failed
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  })

  // Validate form fields
  const validateField = (name, value) => {
    let error = ''
    
    if (!value || value.trim() === '') {
      switch(name) {
        case 'name':
          error = 'Vui lòng nhập họ và tên'
          break
        case 'email':
          error = 'Vui lòng nhập email'
          break
        case 'phone':
          error = 'Vui lòng nhập số điện thoại'
          break
      }
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Email không hợp lệ'
    } else if (name === 'phone' && !/(0[3-9][0-9]{8}|84[3-9][0-9]{8})/.test(value.replace(/[^0-9+]/g, ''))) {
      error = 'Số điện thoại không hợp lệ'
    }
    
    setErrors(prev => ({ ...prev, [name]: error }))
    return error === ''
  }

  // Check if form is valid
  const isFormValid = () => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.phone.trim() !== '' &&
           errors.name === '' &&
           errors.email === '' &&
           errors.phone === ''
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  // Send payment confirmation email
  const sendPaymentConfirmation = async (status) => {
    if (!formData.email || !formData.name) {
      alert('Vui lòng điền đầy đủ thông tin trước khi xác nhận thanh toán')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/send-payment-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          amount: '999.000đ',
          transactionId: 'AIA_0213543245',
          status: status,
          courseName: 'Tự động hóa công việc bằng AI'
        })
      })

      if (response.ok) {
        setPaymentStatus(status)
        
        // Track lead generation
        trackLead({
          type: 'payment_confirmation',
          email: formData.email,
          phone: formData.phone,
          name: formData.name,
          course: 'Tự động hóa công việc bằng AI',
          status: status
        })

        if (status === 'success') {
          // Track purchase event
          TagManager.dataLayer({
            dataLayer: {
              event: 'purchase',
              ecommerce: {
                transaction_id: 'AIA_0213543245',
                value: 999000,
                currency: 'VND',
                items: [{
                  item_name: 'Tự động hóa công việc bằng AI',
                  category: 'Khóa học',
                  price: 999000,
                  quantity: 1
                }]
              }
            }
          })
          
          alert('Thanh toán thành công! Email xác nhận đã được gửi.')
          setTimeout(() => {
            window.location.href = '/payment-success'
          }, 2000)
        } else {
          alert('Đã ghi nhận thanh toán thất bại. Vui lòng thử lại.')
        }
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending confirmation:', error)
      alert('Có lỗi xảy ra. Vui lòng thử lại.')
    } finally {
      setIsProcessing(false)
    }
  }

  useEffect(() => {
    if (!showQR) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowQR(false)
          return 15 * 60 // Reset to 15 minutes
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [showQR])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  return (
    <div className="min-h-screen bg-background text-white p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại
        </button>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
          <h1 className="text-4xl font-black mb-6">Thanh toán khóa học</h1>
          
          <div className="space-y-6">
            <div className="border border-white/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Tự động hóa công việc bằng AI</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-300">Giá gốc:</span>
                <span className="line-through text-gray-400">3.999.000đ</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-300">Giá ưu đãi:</span>
                <span className="text-3xl font-black text-yellow-400">999.000đ</span>
              </div>
              <div className="text-red-400 text-sm font-bold">
                ⚠️ Ưu đãi chỉ còn 09 suất cuối cùng
              </div>
            </div>

            <div className="border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Thông tin thanh toán</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Họ và tên</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Nhập họ và tên của bạn"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Nhập email của bạn"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 ${
                      errors.phone ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Nhập số điện thoại của bạn"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </form>
            </div>

            {!showQR ? (
              <button 
                onClick={() => {
                  if (!isFormValid()) {
                    return
                  }
                  // Track checkout initiation
                  trackBeginCheckout(999000, [{
                    item_name: 'Tự động hóa công việc bằng AI',
                    category: 'Khóa học',
                    price: 999000,
                    quantity: 1
                  }])
                  setShowQR(true)
                }}
                disabled={!isFormValid()}
                className={`w-full font-black py-6 rounded-2xl text-xl transition-all ${
                  isFormValid() 
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }`}
              >
                TIẾN HÀNH THANH TOÁN
              </button>
            ) : (
              <div className="border border-white/20 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <QrCode className="w-32 h-32 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quét mã QR để thanh toán</h3>
                <p className="text-gray-300 mb-4">Số tiền: <span className="text-yellow-400 font-black text-2xl">999.000đ</span></p>
                <div className="bg-white p-4 rounded-xl inline-block">
                  <img src="/qrtk.png" alt="QR Code Thanh toán" className="w-64 h-64" />
                </div>
                <div className="border border-white/20 rounded-xl p-6 mt-6 text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Ngân hàng:</span>
                    <span className="font-bold">TPBANK</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Số tài khoản:</span>
                    <span className="font-bold">05261994118</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Chủ tài khoản:</span>
                    <span className="font-bold">PHAM QUANG DAT</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Số tiền:</span>
                    <span className="font-bold text-yellow-400">999.000 đ</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Nội dung CK:</span>
                    <span className="font-bold">AIA 0213543245</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button 
                    onClick={() => sendPaymentConfirmation('success')}
                    disabled={isProcessing}
                    className="flex-1 bg-green-500 text-white font-black py-4 rounded-xl hover:bg-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Đang xử lý...' : 'XÁC NHẬN ĐÃ THANH TOÁN'}
                  </button>
                 
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Vui lòng thanh toán trong vòng: <span className="text-red-400 font-bold">{formatTime(timeLeft)}</span>
                </p>
                <button 
                  onClick={() => setShowQR(false)}
                  className="mt-4 text-white/70 hover:text-white underline"
                >
                  Quay lại thông tin thanh toán
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
