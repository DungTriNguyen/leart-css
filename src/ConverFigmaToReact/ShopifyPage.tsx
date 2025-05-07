import React from "react";

const ShopifyPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-['Lao_Sans_Pro'] overflow-x-hidden">
      {/* Skip to Content hahaha */}
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-50 40-3434 bg-white text-black text-sm px-6 py-4 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        Skip to Content
      </a>

      {/* Header hahaha */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <div className="w-32 h-9 bg-lime-400 relative">
              <div className="w-2.5 h-8 absolute left-5 top-1 bg-lime-700" />
              <div className="w-2.5 h-4 absolute left-1.5 top-2.5 bg-white" />
              <div className="w-24 h-7 absolute left-9 top-1.5 bg-white" />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 text-base">
            <a href="#" className="hover:text-gray-300">
              Solutions
            </a>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-300">
              Resources
            </a>
            <a href="#" className="hover:text-gray-300">
              What's new
            </a>
          </nav>

          <div className="flex items-center space-x-8">
            <a href="#" className="text-base hover:text-gray-300">
              Log in
            </a>
            <button className="bg-white text-black px-5 py-2.5 rounded-full text-base hover:bg-gray-100">
              Start free trial
            </button>
          </div>
        </div>
      </header>

      {/* Main Content  hahaha*/}
      <main id="main-content" className="pt-16">
        {/* Hero Section hahah */}
        <section className="relative bg-black bg-opacity-50 text-white min-h-[729px] flex items-center">
          <img
            src="https://placehold.co/1440x759"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container mx-auto px-6 py-16 flex flex-col items-start gap-10">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-6xl font-normal leading-tight">
                Making Commerce Better for Everyone
              </h1>
              <p className="text-xl mt-4 leading-loose">
                Shopify is supporting the next generation of entrepreneurs, the
                world’s biggest brands, and everyone in between
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <button className="bg-white text-black px-6 py-3.5 rounded-full text-lg hover:bg-gray-100">
                Start free trial
              </button>
              <div className="text-sm max-w-52">
                Start for free, then get your first 3 months for $1/mo.
              </div>
              <button className="bg-white bg-opacity-20 text-white px-6 py-3.5 rounded-full text-lg flex items-center gap-4 outline outline-1 outline-white outline-opacity-40 hover:bg-opacity-30">
                <div className="w-3 h-3 bg-white rounded-full" />
                Watch the Shopify story
              </button>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-sky-900 text-base font-medium uppercase mb-4">
            Explore the world's largest commerce community
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal leading-tight">
                Discover why millions of entrepreneurs chose Shopify to build
                their business — from hello world to IPO.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-2">
                <div className="w-1 h-20 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-sm" />
                <div>
                  <div className="text-4xl font-medium font-['Shopify_Sans_Web']">
                    Millions
                  </div>
                  <p className="text-zinc-600 text-lg">
                    of merchants worldwide
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-20 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-sm" />
                <div>
                  <div className="text-4xl font-medium font-['Shopify_Sans_Web']">
                    170+
                  </div>
                  <p className="text-zinc-600 text-lg">countries represented</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-20 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-sm" />
                <div>
                  <div className="text-4xl font-medium font-['Shopify_Sans_Web']">
                    10%
                  </div>
                  <p className="text-zinc-600 text-lg">of total US ecommerce</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-20 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-sm" />
                <div>
                  <div className="text-4xl font-medium font-['Shopify_Sans_Web']">
                    $444B
                  </div>
                  <p className="text-zinc-600 text-lg">
                    global economic activity
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
            {[
              {
                title: "Enterprise",
                desc: "The modern, composable stack for enterprise retail",
                bg: "bg-emerald-50",
                iconBg: "bg-emerald-200",
                outline: "outline-teal-800",
              },
              {
                title: "Plus",
                desc: "A commerce solution for growing digital brands",
                bg: "bg-pink-50",
                iconBg: "bg-pink-100",
                outline: "outline-rose-500",
              },
              {
                title: "Partners",
                desc: "Offer your expertise to Shopify merchants all over the world",
                bg: "bg-sky-50",
                iconBg: "bg-indigo-50",
                outline: "outline-blue-600",
              },
              {
                title: "Developers",
                desc: "Build the future of commerce with Shopify’s powerful API",
                bg: "bg-red-50",
                iconBg: "bg-rose-100",
                outline: "outline-red-500",
              },
              {
                title: "Retail stores",
                desc: "The complete system for selling in person",
                bg: "bg-violet-50",
                iconBg: "bg-violet-100",
                outline: "outline-violet-700",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start"
              >
                <div
                  className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center`}
                >
                  <div
                    className={`w-10 h-10 ${item.iconBg} rounded-full flex items-center justify-center`}
                  >
                    <div
                      className={`w-4 h-4 outline outline-2 ${item.outline}`}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-medium font-['Shopify_Sans_Web'] mt-6">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-base mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Online Store Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-sky-900 text-base uppercase">
                Build an online store
              </p>
              <h2 className="text-4xl md:text-5xl font-normal leading-tight mt-2">
                Your store, your way
              </h2>
            </div>
            <div className="mt-16">
              <img
                src="https://placehold.co/1260x543"
                alt="Storefront"
                className="w-full rounded-xl shadow-md"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {[
                  {
                    title: "Build an online storefront",
                    desc: "Bring your vision to life with our drag-and-drop store creator. No coding expertise required — just your next big idea.",
                    link: "Online Store Builder",
                  },
                  {
                    title: "Craft the brand you want",
                    desc: "Select from customizable templates created by a community of world-class designers.",
                    link: "Theme Store",
                  },
                  {
                    title: "Level up with apps",
                    desc: "Add more features and functionality to your online store with apps built by trusted Shopify developers.",
                    link: "Shopify App Store",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <h3 className="text-xl text-zinc-600">{item.title}</h3>
                    <p className="text-lg text-zinc-600 mt-3">{item.desc}</p>
                    <a
                      href="#"
                      className="text-zinc-600 text-base underline mt-4"
                    >
                      {item.link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sales Channels Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-black text-base uppercase">Sales channels</p>
              <h2 className="text-4xl md:text-5xl font-normal leading-tight mt-2">
                Sell to every buyer, everywhere
              </h2>
              <p className="text-zinc-700 text-base mt-4">
                Sell online, in person, and around the world with the marketing
                tools, social integrations, and sales channels you need to get
                your products in front of customers.
              </p>
              <a
                href="#"
                className="text-black text-lg font-medium font-['Shopify_Sans_Web'] border-b border-black flex items-center gap-5 mt-4"
              >
                Start selling
                <div className="w-6 h-6">
                  <div className="w-5 h-3.5 bg-black" />
                </div>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://placehold.co/404x404"
                alt="Sales Channel 1"
                className="w-full"
              />
              <img
                src="https://placehold.co/404x404"
                alt="Sales Channel 2"
                className="w-full"
              />
              <img
                src="https://placehold.co/404x404"
                alt="Sales Channel 3"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Checkout Section */}
        <section className="container mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
            <img
              src="https://placehold.co/618x618"
              alt="Checkout"
              className="w-full"
            />
            <div className="absolute bottom-4 left-4 bg-black rounded-full p-2.5">
              <div className="w-6 h-6 bg-white" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-black text-base uppercase">
              Fast, reliable checkout
            </p>
            <h2 className="text-3xl md:text-4xl font-normal leading-tight mt-2">
              The best-converting checkout on the planet
            </h2>
            <p className="text-black text-lg mt-4">
              Back your business with Shop Pay—the one-click checkout that's
              built to convert.
            </p>
            <a
              href="#"
              className="text-black text-lg font-medium font-['Shopify_Sans_Web'] border-b border-black flex items-center gap-5 mt-4"
            >
              Seize every sale
              <div className="w-6 h-6">
                <div className="w-5 h-3.5 bg-black" />
              </div>
            </a>
          </div>
        </section>

        {/* POS Section */}
        <section className="container mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-black text-base uppercase">Point of sale</p>
            <h2 className="text-3xl md:text-4xl font-normal leading-tight mt-2">
              Flexible point of sale to power your retail store
            </h2>
            <p className="text-black text-lg mt-4">
              A POS system that allows customers to shop their way, from online
              to checkout line.
            </p>
            <a
              href="#"
              className="text-black text-lg font-medium font-['Shopify_Sans_Web'] border-b border-black flex items-center gap-5 mt-4"
            >
              Meet Shopify POS
              <div className="w-6 h-6">
                <div className="w-5 h-3.5 bg-black" />
              </div>
            </a>
          </div>
          <div>
            <img
              src="https://placehold.co/618x553"
              alt="POS"
              className="w-full"
            />
          </div>
        </section>

        {/* Marketing Tools Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <p className="text-sky-900 text-base font-medium font-['Shopify_Sans_Web'] uppercase">
              Built-in marketing tools
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-normal leading-tight">
                  From first touch to full funnel
                </h2>
                <a
                  href="#"
                  className="text-black text-lg font-medium font-['Shopify_Sans_Web'] border-b border-black flex items-center gap-5 mt-4"
                >
                  Leverage our full marketing suite
                  <div className="w-6 h-6">
                    <div className="w-5 h-3.5 bg-black" />
                  </div>
                </a>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
              <div className="space-y-16">
                {[
                  {
                    iconBg: "bg-violet-100",
                    outline: "outline-violet-700",
                    title: "Reach new leads",
                    desc: "Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.",
                  },
                  {
                    iconBg: "bg-indigo-50",
                    outline: "outline-blue-600",
                    title: "Engage with customers",
                    desc: "Build custom email campaigns, set automations to serve every segment, and connect with customers on the go with integrated messaging tools.",
                  },
                  {
                    iconBg: "bg-rose-100",
                    outline: "outline-red-500",
                    title: "Data you can build on",
                    desc: "Take control of your customer data to build custom audiences and explore the customer insights that drive ongoing growth.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-8">
                    <div
                      className={`w-8 h-8 ${item.iconBg} rounded-full p-1 flex items-center justify-center shadow-[0_0_0_7px_rgba(239,233,255,0.47)]`}
                    >
                      <div
                        className={`w-6 h-6 outline outline-[1.5px] ${item.outline}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl text-black">{item.title}</h3>
                      <p className="text-lg text-zinc-600 mt-2">{item.desc}</p>
                      <div className="h-4 bg-zinc-300 mt-4">
                        {index === 0 && <div className="h-full bg-black" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <img
                  src="https://placehold.co/598x613"
                  alt="Marketing"
                  className="w-full"
                />
                <div className="absolute bottom-4 right-4 bg-black rounded-full p-2.5">
                  <div className="w-6 h-6 bg-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Operations Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <p className="text-sky-900 text-base font-medium font-['Shopify_Sans_Web'] uppercase">
              Centralized business operations
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-normal leading-tight">
                  Streamline your back office
                </h2>
                <a
                  href="#"
                  className="text-black text-lg font-medium font-['Shopify_Sans_Web'] border-b border-black flex items-center gap-5 mt-4"
                >
                  Manage your business
                  <div className="w-6 h-6">
                    <div className="w-5 h-3.5 bg-black" />
                  </div>
                </a>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
              <div className="relative">
                <img
                  src="https://placehold.co/598x613"
                  alt="Operations"
                  className="w-full"
                />
                <div className="absolute bottom-4 right-4 bg-black rounded-full p-2.5">
                  <div className="w-6 h-6 bg-white" />
                </div>
              </div>
              <div className="space-y-16">
                {[
                  {
                    iconBg: "bg-violet-100",
                    outline: "outline-violet-700",
                    title: "Oversee your operations",
                    desc: "Manage inventory, track payments, and view real-time business insights — all in one place, so you can focus on building your business.",
                  },
                  {
                    iconBg: "bg-indigo-50",
                    outline: "outline-blue-600",
                    title: "Fulfill every order",
                    desc: "Get your products where they need to be with integrated inventory management, streamlined returns, and a dedicated shipping and fulfillment network.",
                  },
                  {
                    iconBg: "bg-rose-100",
                    outline: "outline-red-500",
                    title: "Manage your money where you make it",
                    desc: "Manage your business finances all from one place with money management and flexible funding designed with entrepreneurs in mind.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-8">
                    <div
                      className={`w-8 h-8 ${item.iconBg} rounded-full p-1 flex items-center justify-center shadow-[0_0_0_7px_rgba(239,233,255,0.47)]`}
                    >
                      <div
                        className={`w-6 h-6 outline outline-[1.5px] ${item.outline}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl text-black">{item.title}</h3>
                      <p className="text-lg text-zinc-600 mt-2">{item.desc}</p>
                      <div className="h-4 bg-zinc-300 mt-4">
                        {index === 0 && <div className="h-full bg-black" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Free Trial Banner */}
        <section className="bg-gradient-to-l from-green-300 via-lime-300 to-indigo-300 py-5 overflow-hidden">
          <div className="container mx-auto px-6 flex items-center gap-10 animate-marquee whitespace-nowrap">
            <div className="text-black text-3xl font-semibold font-['IBM_Plex_Mono']">
              START YOUR FREE TRIAL
            </div>
            <div className="w-8 h-8">
              <div className="w-6 h-4 outline outline-4 outline-black" />
            </div>
          </div>
        </section>

        {/* Merchant Stories Section */}
        <section className="container mx-auto px-6 py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_50%,_rgba(233,249,244,0.8)_11%,_rgba(207,235,254,0.8)_32%,_rgba(242,238,254,0.8)_57%,_rgba(0,0,0,0)_80%)] blur-[50px]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <img
                src="https://placehold.co/112x175"
                alt="Story 1"
                className="w-28 rounded-xl blur-sm"
              />
              <img
                src="https://placehold.co/208x325"
                alt="Story 2"
                className="w-52 rounded-xl blur-sm"
              />
              <img
                src="https://placehold.co/160x248"
                alt="Story 3"
                className="w-40 rounded-xl"
              />
            </div>
            <div className="text-center">
              <p className="text-black text-base uppercase">
                Merchant obsessed
              </p>
              <h2 className="text-6xl md:text-8xl font-normal leading-tight mt-2">
                Meet the people who chose{" "}
                <span className="text-green-500">Shopify</span>
              </h2>
            </div>
            <div className="space-y-6">
              <img
                src="https://placehold.co/112x173"
                alt="Story 4"
                className="w-28 rounded-xl"
              />
              <img
                src="https://placehold.co/208x321"
                alt="Story 5"
                className="w-52 rounded-xl"
              />
              <img
                src="https://placehold.co/160x250"
                alt="Story 6"
                className="w-40 rounded-xl blur-sm"
              />
            </div>
          </div>
        </section>

        {/* Featured Story */}
        <section className="container mx-auto px-6">
          <div className="relative">
            <img
              src="https://placehold.co/1260x709"
              alt="Muck N Brass"
              className="w-full rounded-xl blur-sm"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-12">
              <h3 className="text-white text-3xl">Muck N Brass</h3>
              <p className="text-white text-lg mt-2">Zoey, Founder</p>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-normal leading-tight">
                We went from burning beans in our garage to needing a 10,000 sq.
                ft facility to meet customer demand.
              </h3>
              <div className="mt-6">
                <h4 className="text-3xl">BLK & Bold</h4>
                <p className="text-base mt-2">Rod Johnson — Owner</p>
                <div className="flex gap-3 mt-4">
                  <div className="w-12 h-12 rounded-full outline outline-2 outline-black flex items-center justify-center">
                    <div className="w-4 h-4 bg-black" />
                  </div>
                  <div className="w-12 h-12 rounded-full outline outline-2 outline-black flex items-center justify-center">
                    <div className="w-4 h-4 bg-black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/413x516"
                alt="BLK & Bold 1"
                className="absolute top-0 left-1/4 w-96 opacity-50 rotate-6 rounded-md"
              />
              <img
                src="https://placehold.co/413x516"
                alt="BLK & Bold 2"
                className="w-96 rounded-md"
              />
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-black text-white py-32">
          <div className="container mx-auto px-6 text-center">
            <p className="text-base uppercase">Shopify support</p>
            <h2 className="text-4xl md:text-5xl font-normal leading-tight mt-2">
              The help you need, when you need it
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {[
                {
                  iconBg: "bg-gradient-to-br from-purple-400 to-blue-500",
                  title: "Community",
                  desc: "Connect with a community of brands, partners, and fellow merchants who understand Shopify.",
                  link: "Discuss",
                },
                {
                  iconBg: "bg-gradient-to-br from-green-400 to-blue-500",
                  title: "Help Center",
                  desc: "Find answers with a dedicated helpdesk resource full of articles and videos from our Support team.",
                  link: "Get help",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-neutral-950 to-zinc-950/60 rounded-2xl outline outline-1 outline-zinc-900 p-px"
                >
                  <div className="p-12 flex flex-col items-start">
                    <div
                      className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center`}
                    >
                      <div className="w-6 h-6 outline outline-[1.5px] outline-black" />
                    </div>
                    <h3 className="text-4xl mt-6">{item.title}</h3>
                    <p className="text-lg mt-4">{item.desc}</p>
                    <a
                      href="#"
                      className="bg-zinc-900 text-white px-3 py-1.5 rounded-3xl outline outline-1 outline-gray-800 flex items-center gap-3 mt-6"
                    >
                      {item.link}
                      <div className="w-3 h-3 bg-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-emerald-300 to-green-400 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-normal leading-tight">
              Grow your business here
            </h2>
            <p className="text-xl mt-4 leading-loose">
              Whether you want to sell products down the street or around the
              world, we have all the tools you need.
            </p>
            <button className="bg-black text-white px-6 py-3.5 rounded-full text-lg mt-6 hover:bg-gray-800">
              Start free trial
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-black border-opacity-20">
        <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-5 gap-12">
          <div>
            <div className="w-10 h-11 bg-black relative">
              <div className="w-3.5 h-6 absolute left-2 top-3 bg-white" />
            </div>
          </div>
          {[
            {
              title: "Shopify",
              items: [
                "About",
                "Careers",
                "Investors",
                "Press and Media",
                "Partners",
                "Affiliates",
                "Legal",
                "Service status",
              ],
            },
            {
              title: "Support",
              items: [
                "Merchant support",
                "Help center",
                "Hire a Partner",
                "Shopify Community",
                "Shopify Events",
              ],
            },
            {
              title: "Developers",
              items: ["Shopify.dev", "API documentation", "Dev Degree"],
            },
            {
              title: "Products",
              items: [
                "Shop",
                "Shop Pay",
                "Shopify Plus",
                "Shopify Fulfillment Network",
                "Linkpop",
                "Shopify for enterprise",
              ],
            },
            {
              title: "Global impact",
              items: [
                "Sustainability",
                "Social impact",
                "Build Black",
                "Build Native",
                "Research",
              ],
            },
            {
              title: "Solutions",
              items: [
                "Online store builder",
                "Website builder",
                "Ecommerce website",
              ],
            },
          ]
            .slice(0, 5)
            .map((section, index) => (
              <div key={index}>
                <h3 className="text-base font-normal">{section.title}</h3>
                <ul className="mt-6 space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-zinc-900 text-base hover:text-gray-700"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center border-t border-black border-opacity-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="w-5 h-4 bg-black" />
              <span className="text-zinc-900 text-base">USA</span>
              <div className="w-3 h-1.5 bg-black" />
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Sitemap",
                "Privacy Choices",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-zinc-900 text-base hover:text-gray-700"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-6 mt-6 md:mt-0">
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="w-8 h-8 bg-black" />
              ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopifyPage;
