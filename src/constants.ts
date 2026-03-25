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

export const getCareContent = (planName: string) => {
  const is350or200 = planName.includes("350GB") || planName.includes("200GB");
  const is150or100 = planName.includes("150GB") || planName.includes("100GB");
  const is90to70 = planName.includes("90GB") || planName.includes("80GB") || planName.includes("70GB");
  const is60or50 = planName.includes("60GB") || planName.includes("50GB");
  const is40to30 = planName.includes("40GB") || planName.includes("35GB") || planName.includes("30GB");
  const is25or20 = planName.includes("25GB") || planName.includes("20GB");
  const is10 = planName.includes("10GB");

  const posts = is350or200 ? 50 : is150or100 ? 40 : is90to70 ? 35 : is60or50 ? 30 : is40to30 ? 25 : is25or20 ? 20 : 15;
  const images = (is350or200 || is150or100 || is90to70 || is60or50) ? 5 : (is40to30 || is25or20) ? 3 : 2;
  const seoArticles = is350or200 ? 15 : is150or100 ? 10 : is90to70 ? 6 : is60or50 ? 5 : is40to30 ? 4 : is25or20 ? 3 : 1;
  const fanpageArticles = is350or200 ? 10 : is150or100 ? 6 : is90to70 ? 4 : is60or50 ? 2 : is40to30 ? 1 : 0;

  const items = [
    `Hỗ trợ đăng sản phẩm/bài viết lên website (khách hàng cung cấp nội dung, thông tin, hình ảnh...) (Tối đa ${posts} bài)`,
    "Hỗ trợ cập nhật đầy đủ thông tin công ty trên website: Tên công ty, địa chỉ, sđt, email...",
    `Thiết kế HÌNH ẢNH chuyên nghiệp, cập nhật vào các vị trí quan trọng trên web (slideshow, banner, popup...) (Tối đa ${images} hình)`,
    "Cài đặt/tích hợp các tiện ích chat online (Script code bên thứ 3, Messenger, Zalo...)",
    "Cài đặt các công cụ quản lý SEO website cần thiết (Google Analytics, Search Console...)",
    "Tạo file robots.txt, sitemap.xml...",
    "Hỗ trợ hướng dẫn khai báo website với BỘ CÔNG THƯƠNG (áp dụng với các trường hợp cần thiết)",
    `Viết bài chuẩn SEO (>1000 từ) (${seoArticles} bài/tháng)`,
    "TẠO LINK NỘI BỘ giữa các bài viết trên website, giúp web có cấu trúc bền vững, tăng thời gian Onsite",
  ];

  if (!is10) {
    items.push(
      "Kiểm tra và đánh giá SEO On-Page của website. Hỗ trợ tối ưu và điều chỉnh website đáp ứng SEO tốt nhất (2 tháng sau bàn giao)",
      "Kiểm tra và đánh giá hiệu suất tìm kiếm trang web trên Google Search Console (2 tháng sau bàn giao)",
      "Hỗ trợ tạo địa chỉ mới của công ty trên Google Maps",
      "Hỗ trợ đăng ký Google Business, liên kết quản lý địa điểm trên Google Maps",
      "Hỗ trợ đăng ký các tài khoản mạng xã hội Pinterest, Instagram, X (Twitter), Tiktok...",
      "Hướng dẫn tạo liên kết, chia sẻ trên các MXH để tăng lưu lượng truy cập cho website",
      "Hỗ trợ tạo Fanpage Facebook"
    );
  }

  if (fanpageArticles > 0) {
    items.push(`Viết bài đăng trên Fanpage (có hình ảnh) (${fanpageArticles} bài/tháng)`);
  }

  if (!is10 && !is25or20) {
    items.push("Hỗ trợ đăng ký DMCA");
  }

  return {
    supportItems: items,
    conditions: [
      "Khách hàng có hợp đồng thiết kế web tại NASANI",
      "Đăng ký gói host tối thiểu một năm trở lên",
      "Khách hàng cung cấp thông tin dữ liệu cho NASANI",
      "Hỗ trợ năm đầu tiên sau khi bàn giao website"
    ],
    execution: "Sau khi hợp đồng website đã hoàn thành bàn giao xong, kỹ thuật sẽ tiến hành thực hiện các hạng mục bên trên."
  };
};
