import React, { useState, useEffect, useMemo } from 'react';
import { FEATURES } from '../constants';
import { Feature } from '../types';
import { Check, Download, Send, Info, Globe, Calculator, Plus, Minus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { cn } from '../lib/utils';

const Quotation = () => {
  const [basePrice, setBasePrice] = useState(7000000); // Default Basic
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [languages, setLanguages] = useState(1);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('web-quotation');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setBasePrice(data.basePrice || 7000000);
        setSelectedFeatures(data.selectedFeatures || []);
        setLanguages(data.languages || 1);
      } catch (e) {
        console.error('Failed to load saved quotation', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('web-quotation', JSON.stringify({ basePrice, selectedFeatures, languages }));
  }, [basePrice, selectedFeatures, languages]);

  const totalPrice = useMemo(() => {
    const featuresTotal = selectedFeatures.reduce((sum, f) => sum + f.price, 0);
    const languagesTotal = (languages - 1) * 1500000;
    return basePrice + featuresTotal + languagesTotal;
  }, [basePrice, selectedFeatures, languages]);

  const toggleFeature = (feature: Feature) => {
    if (selectedFeatures.find(f => f.name === feature.name)) {
      setSelectedFeatures(selectedFeatures.filter(f => f.name !== feature.name));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(22);
    doc.text('BAO GIA THIET KE WEBSITE', 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text(`Ngay: ${new Date().toLocaleDateString('vi-VN')}`, 20, 30);
    doc.text(`Khach hang: ${contactForm.name || 'Quý khách'}`, 20, 37);

    // Table data
    const tableData = [
      ['Loai website', basePrice === 5000000 ? 'Landing Page' : 'Website Co ban', basePrice.toLocaleString('vi-VN') + ' VND'],
      ...selectedFeatures.map(f => [f.name, 'Tinh nang', f.price.toLocaleString('vi-VN') + ' VND']),
      ['Ngon ngu', `${languages} ngon ngu`, ((languages - 1) * 1500000).toLocaleString('vi-VN') + ' VND'],
    ];

    autoTable(doc, {
      startY: 45,
      head: [['Hang muc', 'Chi tiet', 'Don gia']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [37, 99, 235] },
    });

    const finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(16);
    doc.text(`TONG CONG: ${totalPrice.toLocaleString('vi-VN')} VND`, 20, finalY);

    doc.setFontSize(10);
    doc.text('Luu y: Bao gia co gia tri trong 30 ngay.', 20, finalY + 15);
    doc.text('Lien he: 090 123 4567 | contact@webquoter.vn', 20, finalY + 22);

    doc.save(`Bao-Gia-Web-${Date.now()}.pdf`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setContactForm({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Configuration */}
        <div className="flex-grow space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-blue-900">Báo giá thiết kế Website</h1>
            <p className="text-gray-500">Tùy chỉnh các tính năng để nhận báo giá chính xác nhất cho dự án của bạn.</p>
          </div>

          {/* Website Type */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <Calculator className="text-blue-600" size={24} />
              <span>1. Chọn loại Website</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Landing Page', price: 5000000, desc: 'Trang đơn giới thiệu sản phẩm/dịch vụ' },
                { name: 'Website Cơ bản', price: 7000000, desc: 'Website giới thiệu doanh nghiệp đầy đủ' }
              ].map((type) => (
                <button
                  key={type.name}
                  onClick={() => setBasePrice(type.price)}
                  className={cn(
                    "p-6 rounded-2xl border-2 text-left transition-all",
                    basePrice === type.price 
                      ? "border-blue-600 bg-blue-50 ring-4 ring-blue-50" 
                      : "border-gray-100 hover:border-blue-200"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-lg">{type.name}</span>
                    {basePrice === type.price && <Check className="text-blue-600" size={20} />}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{type.desc}</p>
                  <div className="text-blue-600 font-bold">{type.price.toLocaleString('vi-VN')} VNĐ</div>
                </button>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <Plus className="text-blue-600" size={24} />
              <span>2. Chọn tính năng bổ sung</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {FEATURES.map((feature) => {
                const isSelected = selectedFeatures.find(f => f.name === feature.name);
                return (
                  <button
                    key={feature.name}
                    onClick={() => toggleFeature(feature)}
                    className={cn(
                      "p-4 rounded-xl border text-left transition-all flex items-center justify-between group",
                      isSelected 
                        ? "border-blue-600 bg-blue-600 text-white shadow-md" 
                        : "border-gray-100 hover:border-blue-300 bg-white"
                    )}
                  >
                    <div className="space-y-1">
                      <div className="text-sm font-bold leading-tight">{feature.name}</div>
                      <div className={cn("text-xs", isSelected ? "text-blue-100" : "text-gray-400")}>
                        +{feature.price.toLocaleString('vi-VN')}
                      </div>
                    </div>
                    {isSelected ? (
                      <Check size={16} />
                    ) : (
                      <Plus size={16} className="text-gray-300 group-hover:text-blue-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Languages */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <Globe className="text-blue-600" size={24} />
              <span>3. Số lượng ngôn ngữ</span>
            </h2>
            <div className="flex items-center space-x-6 bg-white p-6 rounded-2xl border border-gray-100 w-fit">
              <button
                onClick={() => setLanguages(Math.max(1, languages - 1))}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Minus size={20} />
              </button>
              <div className="text-3xl font-bold text-blue-900 w-8 text-center">{languages}</div>
              <button
                onClick={() => setLanguages(languages + 1)}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Plus size={20} />
              </button>
              <div className="text-sm text-gray-500 font-medium">
                (Mỗi ngôn ngữ thêm: +1.500.000 VNĐ)
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="space-y-6 bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-900">Gửi yêu cầu tư vấn</h2>
              <p className="text-blue-700/70">Để lại thông tin, chúng tôi sẽ liên hệ lại ngay để tư vấn chi tiết.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-blue-900">Họ và tên</label>
                <input
                  required
                  type="text"
                  value={contactForm.name}
                  onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="Nguyễn Văn A"
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-blue-900">Số điện thoại</label>
                <input
                  required
                  type="tel"
                  value={contactForm.phone}
                  onChange={e => setContactForm({ ...contactForm, phone: e.target.value })}
                  placeholder="090 123 4567"
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-blue-900">Email</label>
                <input
                  required
                  type="email"
                  value={contactForm.email}
                  onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-blue-900">Nội dung ghi chú</label>
                <textarea
                  rows={4}
                  value={contactForm.message}
                  onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Mô tả thêm về dự án của bạn..."
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Gửi yêu cầu báo giá</span>
                    </>
                  )}
                </button>
              </div>
            </form>
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-green-100 text-green-700 rounded-xl text-center font-bold"
                >
                  Yêu cầu của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ sớm nhất.
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>

        {/* Right Side: Sticky Summary */}
        <div className="lg:w-96 shrink-0">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-blue-600 p-6 text-white">
                <h3 className="text-xl font-bold">Tổng quan báo giá</h3>
                <p className="text-blue-100 text-sm">Cập nhật thời gian thực</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Loại website:</span>
                    <span className="font-bold text-blue-900">{basePrice === 5000000 ? 'Landing Page' : 'Cơ bản'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Ngôn ngữ ({languages}):</span>
                    <span className="font-bold text-blue-900">+{( (languages - 1) * 1500000 ).toLocaleString('vi-VN')}</span>
                  </div>
                  {selectedFeatures.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-gray-50">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tính năng đã chọn:</div>
                      {selectedFeatures.map(f => (
                        <div key={f.name} className="flex justify-between items-center text-sm group">
                          <span className="text-gray-600 truncate mr-2">{f.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-blue-900 text-xs">+{f.price.toLocaleString('vi-VN')}</span>
                            <button 
                              onClick={() => toggleFeature(f)}
                              className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-gray-100 space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-gray-500 font-medium">Tổng cộng:</span>
                    <div className="text-right">
                      <div className="text-3xl font-black text-blue-600">{totalPrice.toLocaleString('vi-VN')}</div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">VNĐ</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleExportPDF}
                      className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all group"
                    >
                      <Download size={20} className="text-gray-400 group-hover:text-blue-600 mb-1" />
                      <span className="text-xs font-bold text-gray-500 group-hover:text-blue-600">Xuất PDF</span>
                    </button>
                    <button
                      onClick={() => setSelectedFeatures([])}
                      className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 hover:border-red-600 hover:bg-red-50 transition-all group"
                    >
                      <Trash2 size={20} className="text-gray-400 group-hover:text-red-600 mb-1" />
                      <span className="text-xs font-bold text-gray-500 group-hover:text-red-600">Xóa hết</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 flex items-start space-x-3">
              <Info size={20} className="text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-xs text-yellow-800 leading-relaxed">
                <strong>Gợi ý:</strong> Website bán hàng nên chọn thêm "Giỏ hàng", "SSL" và "Thanh toán trực tuyến" để tối ưu trải nghiệm khách hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Quotation;
