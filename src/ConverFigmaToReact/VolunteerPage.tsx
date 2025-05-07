import React from "react";

const VolunteerPage = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden font-['Inter']">
      {/* Header */}
      <header className="fixed flex left-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap">
          <div className="flex items-center space-x-4">
            <img
              src="https://placehold.co/50x50"
              alt="SGU Charity Logo"
              className="w-12 h-12"
            />
            <span className="text-xs font-bold text-black hidden sm:block">
              SGU charity
            </span>
          </div>

          <nav className="hidden md:flex space-x-6 text-base text-black">
            <a href="#" className="hover:text-sky-500">
              Trang chủ
            </a>
            <a href="#" className="hover:text-sky-400">
              Chương trình
            </a>
            <a href="#" className="hover:text-sky-400">
              Về chúng tôi
            </a>
            <a href="#" className="hover:text-sky-400">
              Liên hệ
            </a>
            <a href="#" className="hover:text-sky-400">
              Cơ hội trở thành CTV
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-sky-500 text-white px-6 py-2 rounded-full font-bold text-base hover:bg-sky-600 hidden sm:block">
              Ủng hộ ngay
            </button>
            <button className="bg-sky-500 bg-opacity-80 p-2 rounded-md shadow-md">
              <div className="w-5 h-6 bg-white" />
            </button>
            <a
              href="#"
              className="flex items-center space-x-2 text-black hover:text-sky-500"
            >
              <div className="w-4 h-4 bg-black" />
              <span className="text-base">Đăng nhập</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Campaign Info */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://placehold.co/58x58"
                alt="Organization Logo"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className="text-black text-opacity-40 text-[10px] font-['Inria_Serif']">
                  Tình nguyện cho chiến dịch của tổ chức
                </p>
                <p className="text-sky-500 text-base font-['Inria_Serif']">
                  Hội chữ thập đỏ Việt Nam
                </p>
              </div>
            </div>
            <hr className="border-zinc-300 border-opacity-50 mb-4" />
            <p className="text-black text-opacity-60 text-sm font-['Inria_Serif'] mb-6">
              Bạn đang tham gia tình nguyện cho chiến dịch
            </p>

            {/* Campaign Card */}
            <div className="relative">
              <img
                src="https://placehold.co/534x425"
                alt="Campaign"
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-30 rounded-full p-4 backdrop-blur-sm">
                <p className="text-white text-xs font-bold mb-2">
                  80.567.900 đ / 322.271.600 đ
                </p>
                <div className="relative w-full h-1 bg-white rounded-full">
                  <div className="absolute left-0 h-1 w-1/4 bg-sky-500 rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-12 right-4 bg-white rounded-full p-2 border border-neutral-50 border-opacity-30">
                <div className="w-6 h-6 bg-black"></div>
              </div>
            </div>

            <h3 className="text-black text-base font-bold mt-4">
              “Những mùa xuân nguyên vẹn” - Tết vì nạn nhân chất độc da cam
            </h3>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 border border-stone-500 p-1">
                  <div className="w-2 h-2 border border-stone-500"></div>
                </div>
                <p className="text-neutral-700 text-base">
                  500 lượt ủng hộ tiền
                  <br />
                  20 lượt đăng ký tình nguyện
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 border border-stone-500 p-1">
                  <div className="w-6 h-6 border border-stone-500"></div>
                </div>
                <p className="text-stone-500 text-base">Còn 29 ngày</p>
              </div>
            </div>
          </div>

          {/* Right Section: Volunteer Form */}
          <div className="bg-white p-6">
            <h2 className="text-black text-base font-bold font-['Inria_Serif'] mb-6">
              Thông tin tham gia tình nguyện
            </h2>
            <form className="space-y-6">
              <div>
                <label className="text-black text-opacity-80 text-xs font-['Inria_Serif']">
                  Họ và tên{" "}
                  <span className="text-red-600 text-opacity-80">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên"
                  className="w-full mt-2 p-4 bg-white rounded-2xl shadow-md text-black text-opacity-70 text-xs font-['Inria_Serif'] focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-black text-opacity-80 text-xs font-['Inria_Serif']">
                    Email{" "}
                    <span className="text-red-600 text-opacity-80">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Nhập email"
                    className="w-full mt-2 p-4 bg-white rounded-2xl shadow-md text-black text-opacity-70 text-xs font-['Inria_Serif'] focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="text-black text-opacity-80 text-xs font-['Inria_Serif']">
                    Số điện thoại{" "}
                    <span className="text-red-600 text-opacity-80">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="w-full mt-2 p-4 bg-white rounded-2xl shadow-md text-black text-opacity-70 text-xs font-['Inria_Serif'] focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <p className="text-black text-sm font-['Inria_Serif'] mb-2">
                  Nếu bạn là sinh viên của trường đại học Sài Gòn
                </p>
                <label className="text-black text-opacity-80 text-xs font-['Inria_Serif']">
                  Mã số sinh viên
                </label>
                <input
                  type="text"
                  placeholder="Nhập MSSV"
                  className="w-full mt-2 p-4 bg-white rounded-2xl shadow-md text-black text-opacity-70 text-xs font-['Inria_Serif'] focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-black text-opacity-80 text-xs font-['Inria_Serif']">
                    Lớp
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập lớp"
                    className="w-full mt-2 p-4 bg-white rounded-2xl shadow-md text-black text-opacity-70 text-xs font-['Inria_Serif'] focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="text-black text-opacity-80 text-xs font-['Inria_Serif']">
                    Khoa
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập khoa"
                    className="w-full mt-2 p-4 bg-white rounded-2xl shadow-md text-black text-opacity-70 text-xs font-['Inria_Serif'] focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded-md shadow-md"
                />
                <label className="text-black text-xs font-['Inria_Serif']">
                  Ủng hộ ẩn danh
                </label>
              </div>

              <button className="w-full bg-sky-500 text-white py-3 rounded-2xl font-bold text-lg font-['Nunito_Sans'] hover:bg-sky-600">
                Tham gia
              </button>
            </form>
            <p className="text-center text-sm font-['Nunito_Sans'] mt-4">
              Bằng việc ủng hộ, bạn đã đồng ý với{" "}
              <a href="#" className="font-bold underline">
                Điều khoản & chính sách bảo mật
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://placehold.co/60x60"
                alt="Footer Logo"
                className="w-14 h-14 mb-4"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-black mb-2">
                Chương trình
              </h3>
              <ul className="text-base text-black space-y-2">
                <li>Quyên góp tiền</li>
                <li>Đăng ký tình nguyện viên</li>
                <li>Quyên góp & đăng ký TN</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-black mb-2">
                Về chúng tôi
              </h3>
              <ul className="text-base text-black space-y-2">
                <li>Chính sách bảo mật</li>
                <li>Hướng dẫn quyên góp</li>
                <li>Thống kê quyên góp</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-black mb-2">Liên hệ</h3>
              <ul className="text-base text-black space-y-2">
                <li>Gửi yêu cầu liên hệ</li>
                <li>Gửi yêu cầu đk chương trình</li>
              </ul>
            </div>
          </div>
          <hr className="my-8 border-zinc-300 border-opacity-80" />
          <p className="text-center text-black text-opacity-70 text-base">
            Giải pháp thuộc Đề án Hệ tri thức Việt số hóa (iTrithuc), cấu phần
            Nền tảng nhân đạo số quốc gia do MBBank xây dựng và vận hành theo
            Quyết định số 3068/QĐ-BKHCN
            <br />
            Powered by SGU charity
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VolunteerPage;
