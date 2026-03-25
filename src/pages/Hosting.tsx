import React, { useState } from 'react';
import { HOSTING_PLANS, getCareContent } from '../constants';
import { CheckCircle2, Server, ShieldCheck, Zap, Globe, Info } from 'lucide-react';
import Modal from '../components/Modal';
import { motion } from 'motion/react';
import { HostingPlan } from '../types';

import { cn } from '../lib/utils';

const Hosting = () => {
  const [selectedPlan, setSelectedPlan] = useState<HostingPlan | null>(null);
  const groups = ["Doanh Nghiệp", "Chuyên Nghiệp", "Phổ Thông", "Duy Trì"];
  const [activeGroup, setActiveGroup] = useState(groups[0]);

  const careContent = selectedPlan ? getCareContent(selectedPlan.name) : null;

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

      {/* Hosting Tabs */}
      <div className="space-y-12">
        <div className="flex flex-wrap justify-center gap-4">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={cn(
                "px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-md",
                activeGroup === group 
                  ? "bg-blue-600 text-white shadow-blue-200 scale-105" 
                  : "bg-white text-blue-900 hover:bg-blue-50 border border-gray-100"
              )}
            >
              {group}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {HOSTING_PLANS.filter(p => p.group === activeGroup).map((plan, idx) => (
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
                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className="w-full py-4 bg-white text-blue-600 border-2 border-blue-100 rounded-2xl font-bold hover:border-blue-600 transition-all flex items-center justify-center space-x-2"
                  >
                    <Info size={18} />
                    <span>Xem chăm sóc</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Care Modal */}
      <Modal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        title={selectedPlan ? `CHĂM SÓC WEBSITE – ${selectedPlan.name.toUpperCase()}` : "Dịch vụ Chăm sóc Website"}
      >
        {careContent && (
          <div className="space-y-8">
            {/* Section 1: Support Items */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
                CÁC HẠNG MỤC HỖ TRỢ
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {careContent.supportItems.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-blue-900 text-sm font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Conditions */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">2</span>
                ĐIỀU KIỆN ÁP DỤNG
              </h4>
              <ul className="space-y-2 pl-10">
                {careContent.conditions.map((item, idx) => (
                  <li key={idx} className="text-gray-600 text-sm list-disc leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Execution */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">3</span>
                THỰC HIỆN
              </h4>
              <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100 flex items-start space-x-3">
                <Info className="text-yellow-600 shrink-0 mt-1" size={20} />
                <p className="text-sm text-yellow-800 leading-relaxed font-medium">
                  {careContent.execution}
                </p>
              </div>
            </div>
          </div>
        )}
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
