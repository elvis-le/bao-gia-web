import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">NASANI</span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Giải pháp báo giá thiết kế website tự động, nhanh chóng và minh bạch. 
            Chúng tôi cam kết mang lại giá trị thực cho doanh nghiệp của bạn.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Liên kết nhanh</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-blue-500 transition-colors">Trang chủ</Link></li>
            <li><Link to="/bao-gia" className="hover:text-blue-500 transition-colors">Báo giá tự động</Link></li>
            <li><Link to="/profile" className="hover:text-blue-500 transition-colors">Về chúng tôi</Link></li>
            <li><Link to="/portfolio" className="hover:text-blue-500 transition-colors">Dự án đã làm</Link></li>
            <li><Link to="/hosting" className="hover:text-blue-500 transition-colors">Dịch vụ Hosting</Link></li>
            <li><Link to="/ten-mien" className="hover:text-blue-500 transition-colors">Bảng giá Tên miền</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Dịch vụ</h3>
          <ul className="space-y-4 text-sm">
            <li>Thiết kế Landing Page</li>
            <li>Website Bán hàng (E-commerce)</li>
            <li>Website Doanh nghiệp</li>
            <li>Hệ thống Booking / Tour</li>
            <li>Quản trị & Chăm sóc Website</li>
            <li>Tối ưu hóa SEO</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Liên hệ</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>Công viên phần mềm, Tòa nhà Saigon ICT, Lô 46 Quang Trung, Trung Mỹ Tây, Thành phố Hồ Chí Minh, Hồ Chí Minh 70000, Việt Nam</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>0764389365</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span>khanhle03.nasani@gmail.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Globe size={18} className="text-blue-500 shrink-0" />
              <span>www.nasani.vn</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>© 2026 WebQuoter. All rights reserved. Designed with ❤️ for Vietnamese businesses.</p>
      </div>
    </footer>
  );
};

export default Footer;
