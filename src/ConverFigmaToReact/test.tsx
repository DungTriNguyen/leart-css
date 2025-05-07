import React, { useState } from "react";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="w-full bg-white font-sans">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <img
              src="/api/placeholder/50/50"
              alt="SGU Charity Logo"
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <span className="ml-2 text-xs font-bold">SGU charity</span>
          </div>

          <button className="md:hidden flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="hover:text-sky-500">
              Trang chủ
            </a>
            <a href="#" className="hover:text-sky-500">
              Chương trình
            </a>
            <a href="#" className="hover:text-sky-500">
              Về chúng tôi
            </a>
            <a href="#" className="hover:text-sky-500">
              Liên hệ
            </a>
            <a href="#" className="hover:text-sky-500">
              Cơ hội trở thành CTV
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              Ủng hộ ngay
            </button>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.352-.035-.696-.1-1.028A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1 text-sm">Đăng nhập</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Campaign Info */}
          <div className="w-full lg:w-5/12 bg-white rounded-xl shadow-md p-4">
            <div className="mb-5 border-b border-zinc-300 pb-4">
              <div className="flex items-center">
                <img
                  src="/api/placeholder/58/58"
                  alt="Organization logo"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <div className="text-xs text-black/40">
                    Tiền ủng hộ được chuyển đến
                  </div>
                  <div className="text-sky-500">Hội chữ thập đỏ Việt Nam</div>
                </div>
              </div>
            </div>

            <div className="text-sm text-black/60 mb-4">
              bạn đang ủng hộ cho chiến dịch
            </div>

            <div className="relative rounded-xl overflow-hidden mb-4">
              <img
                src="/api/placeholder/534/425"
                alt="Campaign image"
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />

              {/* Progress overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-4 rounded-full mx-4 mb-4">
                <div className="text-white text-xs font-bold">
                  80.567.900 đ / 322.271.600 đ{" "}
                  <span className="float-right">24 %</span>
                </div>
                <div className="w-full bg-white h-1 rounded-xl mt-2">
                  <div className="bg-sky-500 h-1 rounded-xl w-1/4"></div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-base font-bold mb-4">
                "Những mùa xuân nguyên vẹn" - Tết vì nạn nhân chất độc da cam
              </h2>

              <div className="flex justify-between items-center text-sm text-neutral-700">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-stone-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  500 lượt ủng hộ tiền &nbsp;&nbsp; 20 lượt đăng ký tình nguyện
                </div>
                <div className="flex items-center text-stone-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Còn 29 ngày
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="w-full lg:w-7/12 bg-white p-4">
            <h2 className="text-base font-bold mb-6">Thông tin ủng hộ</h2>

            {/* Donation amount */}
            <div className="mb-6">
              <label className="block text-xs text-black/80 mb-2">
                Nhập số tiền ủng hộ <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full h-14 px-4 rounded-2xl shadow-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-500 text-2xl font-bold">
                  {donationAmount || 0}
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sky-500 text-2xl font-bold">
                  VND
                </div>
              </div>
            </div>

            <h2 className="text-base font-bold mb-6">Thông tin của bạn</h2>

            {/* Name field */}
            <div className="mb-6">
              <label className="block text-xs text-black/80 mb-2">
                Họ và tên <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                className="w-full h-14 px-4 rounded-2xl shadow-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full">
                <label className="block text-xs text-black/80 mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Nhập email"
                  className="w-full h-14 px-4 rounded-2xl shadow-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
              <div className="w-full">
                <label className="block text-xs text-black/80 mb-2">
                  Số điện thoại <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="w-full h-14 px-4 rounded-2xl shadow-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="text-sm mb-6">
              Nếu bạn là sinh viên của trường đại học Sài Gòn
            </div>

            {/* Student ID */}
            <div className="mb-6">
              <label className="block text-xs text-black/80 mb-2">
                Mã số sinh viên
              </label>
              <input
                type="text"
                placeholder="Nhập MSSV"
                className="w-full h-14 px-4 rounded-2xl shadow-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>

            {/* Class & Department */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full">
                <label className="block text-xs text-black/80 mb-2">Lớp</label>
                <input
                  type="text"
                  placeholder="Nhập lớp"
                  className="w-full h-14 px-4 rounded-2xl shadow-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
              <div className="w-full">
                <label className="block text-xs text-black/80 mb-2">Khoa</label>
                <input
                  type="text"
                  placeholder="Nhập khoa"
                  className="w-full h-14 px-4 rounded-2xl shadow-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Anonymous checkbox */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="anonymous"
                className="w-6 h-6 rounded bg-white shadow-md"
                checked={isAnonymous}
                onChange={() => setIsAnonymous(!isAnonymous)}
              />
              <label htmlFor="anonymous" className="ml-4 text-xs">
                Ủng hộ ẩn danh
              </label>
            </div>

            {/* Submit button */}
            <button className="w-full bg-sky-500 rounded-2xl text-white font-bold py-3 mb-4">
              Ủng hộ
            </button>

            <div className="text-center text-sm">
              Bằng việc ủng hộ, bạn đã đồng ý với{" "}
              <span className="font-bold">Điều khoản & chính sách bảo mật</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-10 border-t border-zinc-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="/api/placeholder/60/60"
                  alt="SGU Charity Logo"
                  className="w-14 h-14"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-base font-bold mb-4">Chương trình</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-sky-500">
                      Quyên góp tiền
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-sky-500">
                      Đăng ký tình nguyện viên
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-sky-500">
                      Quyên góp & đăng ký TN
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold mb-4">Về chúng tôi</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-sky-500">
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-sky-500">
                      Hướng dẫn quyên góp
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-sky-500">
                      Thống kê quyên góp
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold mb-4">Liên hệ</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-sky-500">
                    Gửi yêu cầu liên hệ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-500">
                    Gửi yêu cầu đk chương trình
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-300 pt-6 text-center text-sm text-black/70">
            Giải pháp thuộc Đề án Hệ tri thức Việt số hóa (iTrithuc), cấu phần
            Nền tảng nhân đạo số quốc gia do MBBank xây dựng và vận hành thèo
            Quyết định số 3068/QĐ-BKHCN
            <br />
            Powered by SGU charity
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonationPage;
