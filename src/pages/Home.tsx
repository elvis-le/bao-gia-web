import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Star, Users, Briefcase, Award, Quote } from 'lucide-react';
import { motion } from 'motion/react';

import { cn } from '../lib/utils';

const Home = () => {
  const packages = [
    { name: 'Cơ bản', price: 7000000, features: ['Giao diện chuẩn SEO', 'Quản trị nội dung', 'Bảo trì 1 năm'] },
    { name: 'Cơ bản + Responsive', price: 9000000, features: ['Giao diện chuẩn SEO', 'Tương thích di động', 'Quản trị nội dung', 'Bảo trì 1 năm'], highlighted: true },
    { name: 'Cơ bản + Responsive + SSL', price: 12000000, features: ['Giao diện chuẩn SEO', 'Tương thích di động', 'Chứng chỉ bảo mật SSL', 'Quản trị nội dung', 'Bảo trì 2 năm'] },
  ];

  const stats = [
    { label: 'Năm kinh nghiệm', value: '8+', icon: Award },
    { label: 'Dự án hoàn thành', value: '250+', icon: Briefcase },
    { label: 'Khách hàng hài lòng', value: '180+', icon: Users },
  ];

  const testimonials = [
    { name: 'Nguyễn Văn A', role: 'CEO TechCorp', text: 'Dịch vụ chuyên nghiệp, báo giá minh bạch và hỗ trợ rất nhiệt tình. Website chạy rất mượt.' },
    { name: 'Trần Thị B', role: 'Founder FashionHub', text: 'Tôi rất hài lòng với giao diện mobile mà team thiết kế. Doanh thu tăng đáng kể từ khi có web mới.' },
    { name: 'Lê Văn C', role: 'Manager TravelVN', text: 'Hệ thống booking hoạt động hoàn hảo. Cảm ơn các bạn đã tư vấn giải pháp tối ưu nhất.' },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold"
            >
              <Star size={16} className="fill-blue-700" />
              <span>Giải pháp thiết kế web hàng đầu Việt Nam</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight"
            >
              Báo giá thiết kế <br />
              <span className="text-blue-600">Website tự động</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl leading-relaxed"
            >
              Nhận báo giá chi tiết chỉ trong 30 giây. Minh bạch, nhanh chóng và chuyên nghiệp. 
              Chúng tôi giúp bạn hiện thực hóa ý tưởng kinh doanh trên nền tảng số.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Link
                to="/bao-gia"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-xl hover:bg-blue-700 hover:shadow-blue-200 transition-all flex items-center justify-center space-x-2"
              >
                <span>Báo giá ngay</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all"
              >
                Xem dự án
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse" />
            <img
              src="https://picsum.photos/seed/webdesign/800/600"
              alt="Web Design Illustration"
              className="relative rounded-3xl shadow-2xl border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Profile Intro */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src="https://picsum.photos/seed/profile/600/800"
              alt="Developer Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-2/3 p-12 space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Chào bạn, tôi là chuyên gia thiết kế Web</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Với hơn 8 năm kinh nghiệm trong lĩnh vực phát triển phần mềm và thiết kế website, 
              tôi đã giúp hàng trăm doanh nghiệp chuyển đổi số thành công. Phương châm của tôi là 
              "Chất lượng tạo nên uy tín".
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Link to="/profile" className="text-blue-600 font-bold flex items-center space-x-2 hover:underline">
                <span>Xem Profile chi tiết</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Combo Packages */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-blue-900">Các gói Combo phổ biến</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lựa chọn gói phù hợp nhất với nhu cầu và ngân sách của bạn. 
            Mọi gói đều bao gồm hỗ trợ kỹ thuật tận tâm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={cn(
                "p-8 rounded-3xl border-2 transition-all relative",
                pkg.highlighted 
                  ? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200" 
                  : "bg-white border-gray-100 text-gray-900 shadow-lg"
              )}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-blue-900 text-xs font-bold rounded-full uppercase tracking-widest">
                  Phổ biến nhất
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">{pkg.price.toLocaleString('vi-VN')}</span>
                <span className="text-sm opacity-80 ml-1">VNĐ</span>
              </div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className={pkg.highlighted ? "text-blue-200" : "text-blue-600"} />
                    <span className="text-sm font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/bao-gia"
                className={cn(
                  "block w-full py-4 rounded-xl text-center font-bold transition-all",
                  pkg.highlighted 
                    ? "bg-white text-blue-600 hover:bg-blue-50" 
                    : "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                Chọn gói này
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-blue-900">Hình ảnh & Dự án</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Những khoảnh khắc làm việc cùng khách hàng và các sản phẩm tiêu biểu.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={`https://picsum.photos/seed/gallery-${i}/400/400`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-blue-900">Khách hàng nói gì?</h2>
          <p className="text-gray-500">Sự hài lòng của khách hàng là thước đo thành công của chúng tôi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl shadow-lg border border-gray-50 space-y-6 relative">
              <Quote className="absolute top-6 right-8 text-blue-100" size={48} />
              <div className="flex space-x-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-blue-900">{t.name}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 shadow-2xl shadow-blue-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32 opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full -ml-32 -mb-32 opacity-50" />
          
          <h2 className="text-4xl md:text-6xl font-bold relative z-10">Sẵn sàng bắt đầu dự án?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto relative z-10">
            Đừng để ý tưởng của bạn chỉ nằm trên giấy. Hãy để chúng tôi giúp bạn xây dựng 
            một website chuyên nghiệp ngay hôm nay.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              to="/bao-gia"
              className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl"
            >
              Báo giá ngay
            </Link>
            <Link
              to="/profile"
              className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
