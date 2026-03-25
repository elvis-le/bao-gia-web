import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Search, Filter, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { cn } from '../lib/utils';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-16">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black text-blue-900 tracking-tight">Dự án tiêu biểu</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Khám phá những sản phẩm website chuyên nghiệp chúng tôi đã thực hiện cho khách hàng đa lĩnh vực.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all border-2",
              filter === cat 
                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100" 
                : "bg-white border-gray-100 text-gray-500 hover:border-blue-200 hover:text-blue-600"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <button className="w-full py-4 bg-white text-blue-900 rounded-2xl font-bold flex items-center justify-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span>Xem chi tiết</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
                <div className="absolute top-6 left-6 px-4 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{project.description}</p>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-gray-50">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                        {i}
                      </div>
                    ))}
                  </div>
                  <button className="text-blue-600 font-bold text-sm flex items-center space-x-1 group/btn">
                    <span>Live Demo</span>
                    <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <h2 className="text-4xl md:text-5xl font-bold relative z-10">Bạn muốn sở hữu website như thế này?</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto relative z-10 leading-relaxed">
          Hãy để chúng tôi tư vấn giải pháp tối ưu nhất cho doanh nghiệp của bạn. 
          Bắt đầu ngay với công cụ báo giá tự động.
        </p>
        <div className="relative z-10">
          <a
            href="/bao-gia"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
          >
            <span>Báo giá ngay</span>
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};


export default Portfolio;
