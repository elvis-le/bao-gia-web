import { Feature, HostingPlan, DomainPrice, Project } from "./types";

export const FEATURES: Feature[] = [
  { name: "Responsive", price: 3000000 },
  { name: "SSL", price: 3000000 },
  { name: "Giỏ hàng", price: 3000000 },
  { name: "Giỏ hàng 2 thuộc tính", price: 5500000 },
  { name: "Đặt phòng / Tour", price: 1500000 },
  { name: "Kiểm tra chỗ trống", price: 4000000 },
  { name: "Giá theo ngày", price: 4000000 },
  { name: "Google dịch", price: 1000000 },
  { name: "Tìm kiếm nâng cao", price: 2000000 },
  { name: "Tìm kiếm gợi ý", price: 2000000 },
  { name: "AMP Trang chủ", price: 2000000 },
  { name: "AMP Trang sản phẩm", price: 2000000 },
  { name: "AMP Trang dịch vụ", price: 2000000 },
  { name: "AMP Blog", price: 2000000 },
  { name: "Đánh giá sao", price: 2500000 },
  { name: "Thông báo đơn hàng", price: 1000000 },
  { name: "Xuất RSS", price: 2000000 },
  { name: "Đăng ký & đăng nhập", price: 2000000 },
  { name: "Đăng nhập SMS", price: 2000000 },
  { name: "Đăng nhập Google", price: 2000000 },
  { name: "Phân quyền quản trị", price: 8000000 },
  { name: "Bảo hành", price: 3000000 },
  { name: "Hiệu ứng PDF", price: 2000000 },
  { name: "Tính chi phí xe", price: 2000000 },
  { name: "Tính trả góp", price: 2000000 },
  { name: "So sánh sản phẩm", price: 2000000 },
  { name: "Đặt lịch / Đặt bàn", price: 2000000 },
  { name: "Dự toán xây dựng", price: 4000000 },
  { name: "Phong thủy", price: 2000000 },
  { name: "Import Excel", price: 2000000 },
  { name: "Export Excel", price: 2000000 },
  { name: "Push Notification", price: 2000000 },
  { name: "Mã giảm giá", price: 3000000 },
  { name: "Thanh toán (mỗi phương thức)", price: 4000000 },
  { name: "Vận chuyển (mỗi đơn vị)", price: 4000000 }
];

export const HOSTING_PLANS: HostingPlan[] = [
  // Doanh Nghiệp
  { name: "Gói 350GB", storage: "350 GB", subdomain: "KGH", mysql: 350, monthlyPrice: 9540000, yearlyPrice: 114480000, group: "Doanh Nghiệp" },
  { name: "Gói 200GB", storage: "200 GB", subdomain: "KGH", mysql: 200, monthlyPrice: 6480000, yearlyPrice: 77760000, group: "Doanh Nghiệp" },
  { name: "Gói 150GB", storage: "150 GB", subdomain: "KGH", mysql: 150, monthlyPrice: 5400000, yearlyPrice: 64800000, group: "Doanh Nghiệp" },
  // Chuyên Nghiệp
  { name: "Gói 100GB", storage: "100 GB", subdomain: "KGH", mysql: 100, monthlyPrice: 3888000, yearlyPrice: 46656000, group: "Chuyên Nghiệp" },
  { name: "Gói 90GB", storage: "90 GB", subdomain: "KGH", mysql: 90, monthlyPrice: 3596400, yearlyPrice: 43156800, group: "Chuyên Nghiệp" },
  { name: "Gói 80GB", storage: "80 GB", subdomain: "KGH", mysql: 80, monthlyPrice: 3240000, yearlyPrice: 38880000, group: "Chuyên Nghiệp" },
  { name: "Gói 70GB", storage: "70 GB", subdomain: "KGH", mysql: 70, monthlyPrice: 2883600, yearlyPrice: 34603200, group: "Chuyên Nghiệp" },
  { name: "Gói 60GB", storage: "60 GB", subdomain: "KGH", mysql: 60, monthlyPrice: 2520720, yearlyPrice: 30248640, group: "Chuyên Nghiệp" },
  { name: "Gói 50GB", storage: "50 GB", subdomain: "KGH", mysql: 50, monthlyPrice: 2160000, yearlyPrice: 25920000, group: "Chuyên Nghiệp" },
  // Phổ Thông
  { name: "Gói 40GB", storage: "40 GB", subdomain: "KGH", mysql: 40, monthlyPrice: 1807200, yearlyPrice: 21686400, group: "Phổ Thông" },
  { name: "Gói 35GB", storage: "35 GB", subdomain: "KGH", mysql: 35, monthlyPrice: 1674000, yearlyPrice: 20088000, group: "Phổ Thông" },
  { name: "Gói 30GB", storage: "30 GB", subdomain: "KGH", mysql: 30, monthlyPrice: 1447200, yearlyPrice: 17366400, group: "Phổ Thông" },
  { name: "Gói 25GB", storage: "25 GB", subdomain: "KGH", mysql: 25, monthlyPrice: 1296000, yearlyPrice: 15552000, group: "Phổ Thông" },
  { name: "Gói 20GB", storage: "20 GB", subdomain: "KGH", mysql: 20, monthlyPrice: 1080000, yearlyPrice: 12960000, group: "Phổ Thông" },
  // Duy Trì
  { name: "Gói 10GB", storage: "10 GB", subdomain: "300", mysql: 10, monthlyPrice: 648000, yearlyPrice: 7776000, group: "Duy Trì" },
];

export const VN_DOMAINS: DomainPrice[] = [
  { extension: ".VN", newPrice: 820000, renewalPrice: 479000 },
  { extension: ".COM.VN", newPrice: 691000, renewalPrice: 349000 },
  { extension: ".EDU.VN", newPrice: 397000, renewalPrice: 199000 },
  { extension: ".GOV.VN", newPrice: 397000, renewalPrice: 199000 },
  { extension: ".NET.VN", newPrice: 691000, renewalPrice: 349000 },
  { extension: ".INFO.VN", newPrice: 397000, renewalPrice: 199000 },
];

export const INT_DOMAINS: DomainPrice[] = [
  { extension: ".COM", newPrice: 366120, renewalPrice: 366120 },
  { extension: ".NET", newPrice: 415800, renewalPrice: 415800 },
  { extension: ".INFO", newPrice: 783000, renewalPrice: 783000 },
  { extension: ".ORG", newPrice: 405000, renewalPrice: 405000 },
  { extension: ".BIZ", newPrice: 583200, renewalPrice: 583200 },
  { extension: ".ME", newPrice: 691200, renewalPrice: 691200 },
];

export const PROJECTS: Project[] = [
  { id: 1, title: "E-commerce Fashion", description: "Website bán hàng thời trang cao cấp", image: "https://picsum.photos/seed/fashion/600/400", category: "E-commerce" },
  { id: 2, title: "Real Estate Portal", description: "Cổng thông tin bất động sản chuyên nghiệp", image: "https://picsum.photos/seed/realestate/600/400", category: "Real Estate" },
  { id: 3, title: "Corporate Website", description: "Website giới thiệu doanh nghiệp đa quốc gia", image: "https://picsum.photos/seed/corporate/600/400", category: "Corporate" },
  { id: 4, title: "Travel Booking", description: "Hệ thống đặt tour du lịch trực tuyến", image: "https://picsum.photos/seed/travel/600/400", category: "Travel" },
  { id: 5, title: "Restaurant Menu", description: "Website giới thiệu nhà hàng và đặt bàn", image: "https://picsum.photos/seed/food/600/400", category: "Food" },
  { id: 6, title: "Personal Portfolio", description: "Trang cá nhân cho nhiếp ảnh gia", image: "https://picsum.photos/seed/photo/600/400", category: "Portfolio" },
];

export const CARE_CONTENT = [
  "Tối ưu hóa SEO On-page: Đảm bảo website thân thiện với Google.",
  "Quản trị nội dung: Cập nhật bài viết, tin tức hàng tuần.",
  "Thiết kế hình ảnh: Banner, ảnh sản phẩm chuyên nghiệp.",
  "Bảo trì hệ thống: Kiểm tra lỗi, cập nhật plugin, bảo mật.",
  "Hỗ trợ kỹ thuật 24/7: Giải đáp thắc mắc và xử lý sự cố nhanh chóng.",
  "Báo cáo hiệu quả: Theo dõi lưu lượng truy cập và hành vi người dùng.",
  "Tư vấn marketing: Chiến lược tăng trưởng doanh thu từ website."
];
