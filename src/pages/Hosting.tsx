import React, { useState } from 'react';
import { HOSTING_PLANS, CARE_CONTENT } from '../constants';
import { CheckCircle2, Server, ShieldCheck, Zap, Globe, Info, ArrowRight } from 'lucide-react';
import Modal from '../components/Modal';
import { motion } from 'motion/react';

import { cn } from '../lib/utils';

const Hosting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const groups = Array.from(new Set(HOSTING_PLANS.map(p => p.group)));

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black text-blue-900 tracking-tight">Dịch vụ Hosting</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Hệ thống máy chủ tốc độ cao, bảo mật tối đa và hỗ trợ kỹ thuật 24/7. 
          Lựa chọn hoàn hảo cho mọi quy mô website.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: Zap, title: "Tốc độ cao", desc: "Sử dụng ổ cứng SSD NVMe cho tốc độ truy xuất dữ liệu cực nhanh." },
          { icon: ShieldCheck, title: "Bảo mật", desc: "Hệ thống tường lửa thông minh và quét mã độc tự động hàng ngày." },
          { icon: Server, title: "Uptime 99.9%", desc: "Cam kết sự ổn định tối đa cho hoạt động kinh doanh của bạn." },
          { icon: Globe, title: "Băng thông KGH", desc: "Không giới hạn lưu lượng truy cập, thoải mái phát triển website." }
        ].map((f, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all space-y-4">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <f.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-blue-900">{f.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Hosting Groups */}
      {groups.map((group) => (
        <section key={group} className="space-y-10">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-2 bg-blue-600 rounded-full" />
            <h2 className="text-3xl font-bold text-blue-900">Hosting {group}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOSTING_PLANS.filter(p => p.group === group).map((plan, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col"
              >
                <div className="p-8 bg-blue-50 border-b border-blue-100">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-black text-blue-600">{plan.monthlyPrice.toLocaleString('vi-VN')}</span>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">VNĐ / Tháng</span>
                  </div>
                </div>
                <div className="p-8 space-y-6 flex-grow">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Dung lượng:</span>
                      <span className="font-bold text-blue-900">{plan.storage}</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Subdomain:</span>
                      <span className="font-bold text-blue-900">{plan.subdomain}</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">MySQL:</span>
                      <span className="font-bold text-blue-900">{plan.mysql}</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Giá năm:</span>
                      <span className="font-bold text-blue-600">{plan.yearlyPrice.toLocaleString('vi-VN')} VNĐ</span>
                    </li>
                  </ul>
                  <div className="pt-6 border-t border-gray-50 space-y-3">
                    <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-all">
                      Đăng ký ngay
                    </button>
                    {plan.name !== "Gói 10GB" && (
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full py-4 bg-white text-blue-600 border-2 border-blue-100 rounded-2xl font-bold hover:border-blue-600 transition-all flex items-center justify-center space-x-2"
                      >
                        <Info size={18} />
                        <span>Xem chăm sóc</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* Care Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Dịch vụ Chăm sóc Website"
      >
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Khi đăng ký các gói hosting chuyên nghiệp, bạn sẽ nhận được gói chăm sóc website toàn diện bao gồm:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {CARE_CONTENT.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {idx + 1}
                </div>
                <p className="text-blue-900 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100 flex items-start space-x-4">
            <Info className="text-yellow-600 shrink-0 mt-1" size={24} />
            <p className="text-sm text-yellow-800 leading-relaxed">
              <strong>Lưu ý:</strong> Gói chăm sóc website được áp dụng miễn phí trong 3 tháng đầu tiên cho khách hàng đăng ký mới. Sau đó sẽ áp dụng phí duy trì ưu đãi.
            </p>
          </div>
        </div>
      </Modal>

      {/* Final CTA */}
      <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 shadow-2xl shadow-blue-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <h2 className="text-4xl md:text-5xl font-bold relative z-10">Cần tư vấn gói Hosting phù hợp?</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto relative z-10 leading-relaxed">
          Đừng ngần ngại liên hệ với chúng tôi để được tư vấn giải pháp lưu trữ tối ưu nhất cho website của bạn.
        </p>
        <div className="relative z-10">
          <button className="px-12 py-5 bg-white text-blue-600 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl">
            Liên hệ ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
