const ProfilePage = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-100 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
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

          <nav className="hidden md:flex space-x-8 text-base text-black">
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
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative">
          <img
            src="https://placehold.co/1920x614"
            alt="Hero"
            className="w-full h-[200px] md:h-[400px] lg:h-[614px] object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl lg:text-6xl font-bold">
            Trang cá nhân
          </h1>
        </div>

        {/* Profile Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center">
            <img
              src="https://placehold.co/200x200"
              alt="Profile"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4"
            />
            <h2 className="text-xl md:text-2xl font-bold text-black">
              Nguyễn Trí Dũng
            </h2>
            <p className="text-xl text-black mb-6">@dungtringuyen</p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className="bg-sky-500 text-white px-4 py-2 rounded-2xl">
                Người tham gia
              </button>
              <button className="bg-zinc-300 text-black px-4 py-2 rounded-2xl">
                Người ủng hộ
              </button>
              <button className="bg-zinc-300 text-black px-4 py-2 rounded-2xl">
                Câu chuyện
              </button>
              <button className="bg-zinc-300 text-black px-4 py-2 rounded-2xl">
                Chiến dịch
              </button>
              <button className="bg-zinc-300 text-black px-4 py-2 rounded-2xl">
                Sao kê
              </button>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
              {/* Campaigns Table */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-md">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Nhập thông tin tìm kiếm"
                    className="w-full p-3 rounded-2xl border border-zinc-400 shadow-md text-xs text-black text-opacity-50"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs font-bold text-black">
                        <th className="py-2 px-4 text-left">Họ và tên</th>
                        <th className="py-2 px-4 text-left">Email</th>
                        <th className="py-2 px-4 text-left">Số điện thoại</th>
                        <th className="py-2 px-4 text-left">Chiến dịch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Nguyễn Trí Dũng",
                          "dungtringuyen@gmail.com",
                          "0965193758",
                          "Tình nguyện hè",
                        ],
                        [
                          "Lê Tiến Hải",
                          "dungtringuyen@gmail.com",
                          "0923324491",
                          "Hy vọng xanh",
                        ],
                        [
                          "Đỗ Tiến Đạt",
                          "dungtringuyen@gmail.com",
                          "0986407990",
                          "Hỗ trợ người nghèo",
                        ],
                        [
                          "Đặng Anh Đạt",
                          "dungtringuyen@gmail.com",
                          "0986407990",
                          "Thắp sáng ước mơ",
                        ],
                      ].map((row, index) => (
                        <tr key={index} className="text-base">
                          <td className="py-2 px-4">{row[0]}</td>
                          <td className="py-2 px-4">{row[1]}</td>
                          <td className="py-2 px-4">{row[2]}</td>
                          <td className="py-2 px-4">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-center text-2xl">
                  <span className="font-normal">&lt;&lt; </span>
                  <span className="font-bold underline">1</span>
                  <span className="font-normal"> 2 3 4 5 6 7...&gt;&gt;</span>
                </div>
              </div>

              {/* Stats Section */}
              <div className="bg-white bg-opacity-60 rounded-2xl p-6 shadow-md">
                <div className="bg-sky-500 bg-opacity-80 rounded-xl p-6 mb-6">
                  <p className="text-white text-xl font-bold">
                    Tổng số tiền đã vận động
                  </p>
                  <p className="text-white text-3xl font-bold mt-4">
                    100.000.000
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-4xl font-bold text-black">50</p>
                    <p className="text-xl font-bold text-black mt-2">
                      Số lượt ủng hộ
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-4xl font-bold text-black">20</p>
                    <p className="text-xl font-bold text-black mt-2">
                      Số lượt tham gia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-8">
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

export default ProfilePage;
