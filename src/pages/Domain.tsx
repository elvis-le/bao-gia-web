import React from 'react';
import { VN_DOMAINS, INT_DOMAINS } from '../constants';
import { Globe, ShieldCheck, Search, ArrowRight, CheckCircle2, Info } from 'lucide-react';

const Domain = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black text-blue-900 tracking-tight">Bảng giá Tên miền</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Đăng ký tên miền của bạn ngay hôm nay để bảo vệ thương hiệu trực tuyến. 
          Hỗ trợ đầy đủ các đuôi tên miền phổ biến nhất.
        </p>
      </div>

      {/* Search Domain Mockup */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-4 items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
        <div className="relative flex-grow w-full">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Nhập tên miền bạn muốn đăng ký..."
            className="w-full pl-16 pr-6 py-5 bg-gray-50 rounded-2xl border border-gray-100 focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all text-lg font-medium"
          />
        </div>
        <button className="w-full md:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 shrink-0">
          Kiểm tra ngay
        </button>
      </div>

      {/* Domain Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Vietnam Domains */}
        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
              <Globe size={28} />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Tên miền Việt Nam (.VN)</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-widest">Tên miền</th>
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-widest text-right">Đăng ký mới</th>
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-widest text-right">Gia hạn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {VN_DOMAINS.map((domain) => (
                  <tr key={domain.extension} className="hover:bg-blue-50/50 transition-colors group">
                    <td className="px-6 py-5">
                      <span className="font-black text-blue-900 text-lg">{domain.extension}</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="font-bold text-blue-600">{domain.newPrice.toLocaleString('vi-VN')}đ</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Đã bao gồm VAT</div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="font-bold text-gray-600">{domain.renewalPrice.toLocaleString('vi-VN')}đ</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Đã bao gồm VAT</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* International Domains */}
        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Globe size={28} />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Tên miền Quốc tế</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-widest">Tên miền</th>
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-widest text-right">Đăng ký mới</th>
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-widest text-right">Gia hạn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {INT_DOMAINS.map((domain) => (
                  <tr key={domain.extension} className="hover:bg-blue-50/50 transition-colors group">
                    <td className="px-6 py-5">
                      <span className="font-black text-blue-900 text-lg">{domain.extension}</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="font-bold text-blue-600">{domain.newPrice.toLocaleString('vi-VN')}đ</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Đã bao gồm VAT</div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="font-bold text-gray-600">{domain.renewalPrice.toLocaleString('vi-VN')}đ</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Đã bao gồm VAT</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Why Register With Us */}
      <section className="bg-blue-50 rounded-[3rem] p-12 md:p-20 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-blue-900">Tại sao nên đăng ký tên miền tại NASANI?</h2>
          <p className="text-gray-500">Chúng tôi cung cấp dịch vụ đăng ký tên miền nhanh chóng, an toàn và hỗ trợ tận tâm.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Kích hoạt ngay lập tức", desc: "Tên miền của bạn sẽ được kích hoạt ngay sau khi thanh toán thành công." },
            { title: "Bảo mật thông tin", desc: "Hỗ trợ dịch vụ ẩn thông tin chủ sở hữu (Whois Privacy) để tránh spam." },
            { title: "Quản lý dễ dàng", desc: "Trình quản lý tên miền hiện đại, cho phép bạn thay đổi DNS chỉ với vài cú click." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Info Alert */}
      <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100 flex items-start space-x-4 max-w-4xl mx-auto">
        <Info className="text-yellow-600 shrink-0 mt-1" size={24} />
        <div className="space-y-2">
          <h4 className="font-bold text-yellow-900">Lưu ý quan trọng về Tên miền Việt Nam</h4>
          <p className="text-sm text-yellow-800 leading-relaxed">
            Theo quy định của Bộ Thông tin và Truyền thông, chủ thể đăng ký tên miền .VN phải hoàn thiện hồ sơ đăng ký 
            (bản khai đăng ký, CMND/CCCD/Hộ chiếu) trong vòng 15 ngày kể từ ngày đăng ký thành công. 
            Chúng tôi sẽ hỗ trợ bạn hoàn thiện hồ sơ này một cách nhanh chóng nhất.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Domain;
