import React from 'react';
import { Mail, Phone, MapPin, Globe, Award, Briefcase, GraduationCap, Star, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';

const Profile = () => {
  const skills = [
    "React / Next.js", "TypeScript", "Tailwind CSS", "Node.js / Express",
    "Firebase / MongoDB", "UI/UX Design", "SEO Optimization", "Digital Marketing"
  ];

  const experiences = [
    { year: "2022 - Hiện tại", title: "Senior Web Developer", company: "WebQuoter Agency", desc: "Dẫn dắt team phát triển các giải pháp báo giá tự động và hệ thống quản trị doanh nghiệp." },
    { year: "2019 - 2022", title: "Fullstack Developer", company: "TechSolutions VN", desc: "Phát triển các nền tảng E-commerce quy mô lớn cho khách hàng quốc tế." },
    { year: "2017 - 2019", title: "Frontend Developer", company: "Creative Studio", desc: "Thiết kế và lập trình giao diện người dùng cho các ứng dụng web hiện đại." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
      {/* Header Profile */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white shrink-0">
          <img
            src="https://picsum.photos/seed/profile-large/800/800"
            alt="Profile Avatar"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tight">Nguyễn Văn A</h1>
            <p className="text-xl text-blue-600 font-bold uppercase tracking-widest">Senior Web Developer & UI Designer</p>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Tôi là một nhà phát triển web đầy nhiệt huyết với hơn 8 năm kinh nghiệm. 
            Tôi chuyên tạo ra các giải pháp web hiện đại, tập trung vào trải nghiệm người dùng 
            và hiệu quả kinh doanh cho khách hàng.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600">
              <Mail size={16} className="text-blue-600" />
              <span>contact@webquoter.vn</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600">
              <Phone size={16} className="text-blue-600" />
              <span>090 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600">
              <MapPin size={16} className="text-blue-600" />
              <span>TP. Hồ Chí Minh, Việt Nam</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Experience */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-blue-900 flex items-center space-x-3">
            <Briefcase className="text-blue-600" size={32} />
            <span>Kinh nghiệm làm việc</span>
          </h2>
          <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-12 group">
                <div className="absolute left-0 top-1.5 w-8 h-8 bg-white border-4 border-blue-600 rounded-full group-hover:bg-blue-600 transition-colors z-10" />
                <div className="text-sm font-bold text-blue-600 mb-1">{exp.year}</div>
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <div className="text-sm font-medium text-gray-500 mb-3">{exp.company}</div>
                <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-blue-900 flex items-center space-x-3">
            <Star className="text-blue-600" size={32} />
            <span>Kỹ năng chuyên môn</span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-3 hover:border-blue-200 hover:shadow-md transition-all">
                <CheckCircle2 size={20} className="text-blue-600 shrink-0" />
                <span className="font-bold text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
          <div className="p-8 bg-blue-600 rounded-3xl text-white space-y-4 shadow-xl shadow-blue-100">
            <h3 className="text-xl font-bold">Chứng chỉ & Giải thưởng</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center space-x-2">
                <Award size={18} className="text-yellow-400" />
                <span>Google Certified Professional Cloud Architect</span>
              </li>
              <li className="flex items-center space-x-2">
                <Award size={18} className="text-yellow-400" />
                <span>AWS Certified Solutions Architect</span>
              </li>
              <li className="flex items-center space-x-2">
                <Award size={18} className="text-yellow-400" />
                <span>Top Web Developer of the Year 2024</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-blue-900">Dự án tiêu biểu</h2>
          <a href="/portfolio" className="text-blue-600 font-bold hover:underline">Xem tất cả</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project) => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest">
                  {project.category}
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
