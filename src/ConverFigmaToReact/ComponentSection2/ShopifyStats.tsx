import * as React from "react";
import StatCard from "./StatCard";
import FeatureCard from "./FeatureCard";

const ShopifyStats: React.FC = () => {
  return (
    <section className="px-24 py-0 mx-auto my-0 max-w-[1440px] max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <div className="flex relative gap-16 items-start mb-20 max-md:flex-col">
        <div className="relative flex-[0_0_735px] max-md:flex-none max-md:w-full max-md:text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc584b497716fa489ec0e43e2c143dff54538fda"
            className="relative -top-20 h-[809px] left-[-275px] w-[809px] max-md:static max-md:w-full max-md:h-auto max-md:max-w-[600px]"
            alt="Globe illustration"
          />
        </div>
        <div className="flex-1 pt-8">
          <header className="mb-12">
            <h1 className="mb-2 text-5xl text-black leading-[52px] max-w-[735px] max-sm:text-3xl max-sm:leading-10">
              Discover why millions of entrepreneurs chose Shopify to build
              their business —
            </h1>
            <div className="flex items-center">
              <div className="absolute h-[52px] w-[519px] z-[-1]" />
              <p className="relative text-5xl text-black leading-[52px] max-sm:text-3xl max-sm:leading-10">
                from hello world to IPO.
              </p>
            </div>
          </header>
          <div className="grid gap-20 grid-cols-[repeat(2,356px)] max-md:gap-10 max-md:grid-cols-[1fr] max-sm:gap-8">
            <StatCard value="Millions" description="of merchants worldwide" />
            <StatCard value="170+" description="countries represented" />
            <StatCard value="10%" description="of total US ecommerce" />
            <StatCard value="$444B" description="global economic activity" />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="mb-6 text-base font-medium leading-6 text-sky-900 uppercase">
          Explore the world's largest commerce community
        </h2>
        <div className="grid gap-6 grid-cols-[repeat(5,232.8px)] max-md:gap-5 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          <FeatureCard
            title="Enterprise"
            description="The modern, composable stack for enterprise retail"
            icon={
              <svg
                id="1:533"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="feature-icon"
                style={{ width: "56px", height: "56px" }}
              >
                <g clipPath="url(#clip0_1_533)">
                  <path
                    d="M27.9951 56C43.4591 56 55.9951 43.464 55.9951 28C55.9951 12.536 43.4591 0 27.9951 0C12.5311 0 -0.00488281 12.536 -0.00488281 28C-0.00488281 43.464 12.5311 56 27.9951 56Z"
                    fill="#E5FDF3"
                  ></path>
                  <path
                    d="M27.995 47.8333C38.9486 47.8333 47.8283 38.9536 47.8283 28C47.8283 17.0463 38.9486 8.16663 27.995 8.16663C17.0413 8.16663 8.16162 17.0463 8.16162 28C8.16162 38.9536 17.0413 47.8333 27.995 47.8333Z"
                    fill="#AEF2D7"
                  ></path>
                  <path
                    d="M27.995 19.5416L36.4533 24.5L27.995 29.4583L19.5366 24.5L27.995 19.5416Z"
                    stroke="#2D7156"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M24.7866 28L19.5366 31.5L27.995 36.4583L36.4533 31.5L31.1125 28"
                    stroke="#2D7156"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_533">
                    <rect
                      width="56"
                      height="56"
                      fill="white"
                      transform="translate(-0.00488281)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <FeatureCard
            title="Plus"
            description="A commerce solution for growing digital brands"
            icon={
              <svg
                id="1:545"
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="feature-icon"
                style={{ width: "56px", height: "56px" }}
              >
                <g clipPath="url(#clip0_1_545)">
                  <path
                    d="M28.7949 56C44.2589 56 56.7949 43.464 56.7949 28C56.7949 12.536 44.2589 0 28.7949 0C13.3309 0 0.794922 12.536 0.794922 28C0.794922 43.464 13.3309 56 28.7949 56Z"
                    fill="#FEF4F6"
                  ></path>
                  <path
                    d="M28.7948 47.8333C39.7484 47.8333 48.6281 38.9536 48.6281 28C48.6281 17.0463 39.7484 8.16663 28.7948 8.16663C17.8411 8.16663 8.96143 17.0463 8.96143 28C8.96143 38.9536 17.8411 47.8333 28.7948 47.8333Z"
                    fill="#FFE9F1"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.999 25.0374C24.9662 25.0035 24.9328 24.9701 24.899 24.9374C23.3198 23.4134 20.8041 23.4582 19.2801 25.0374L19.2005 25.1199C17.6052 26.773 17.6052 29.3922 19.2005 31.0453C19.2323 31.0782 19.2647 31.1106 19.2977 31.1425C20.8329 32.624 23.2785 32.5805 24.7601 31.0453L27.7785 27.9176L24.999 25.0374ZM32.8297 31.0453C34.3112 32.5805 36.7568 32.624 38.2921 31.1425C38.325 31.1106 38.3574 31.0782 38.3892 31.0453C39.9845 29.3922 39.9845 26.773 38.3892 25.1199L38.3096 25.0374C36.7856 23.4582 34.2699 23.4134 32.6907 24.9374C32.6569 24.9701 32.6235 25.0035 32.5907 25.0374L29.8114 27.9176L32.8297 31.0453ZM28.7949 26.6607L29.8698 25.5468H29.9492L29.9096 25.5057L31.4364 23.9235C31.4824 23.8758 31.5292 23.8291 31.5768 23.783C33.7936 21.6438 37.3247 21.7067 39.4639 23.9235L39.5436 24.006C41.7386 26.2805 41.7386 29.8847 39.5436 32.1592C39.4986 32.2059 39.4527 32.2517 39.406 32.2968C37.2332 34.3936 33.7721 34.332 31.6754 32.1592L29.9096 30.3294L29.9492 30.2884H29.8698L28.7949 29.1743L27.7199 30.2884H27.6406L27.6802 30.3294L25.9144 32.1592C23.8176 34.332 20.3565 34.3936 18.1838 32.2968C18.1371 32.2517 18.0912 32.2059 18.0461 32.1592C15.8512 29.8847 15.8512 26.2805 18.0461 24.006L18.1258 23.9235C20.265 21.7067 23.7963 21.6438 26.0129 23.783C26.0605 23.8291 26.1073 23.8758 26.1533 23.9235L27.6802 25.5057L27.6406 25.5468H27.7199L28.7949 26.6607Z"
                    fill="#F83062"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_545">
                    <rect
                      width="56"
                      height="56"
                      fill="white"
                      transform="translate(0.794922)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <FeatureCard
            title="Partners"
            description="Offer your expertise to Shopify merchants all over the world"
            icon={
              <svg
                id="1:556"
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="feature-icon"
                style={{ width: "56px", height: "56px" }}
              >
                <g clipPath="url(#clip0_1_556)">
                  <path
                    d="M28.595 56C44.0589 56 56.595 43.464 56.595 28C56.595 12.536 44.0589 0 28.595 0C13.131 0 0.594971 12.536 0.594971 28C0.594971 43.464 13.131 56 28.595 56Z"
                    fill="#F4FAFE"
                  ></path>
                  <path
                    d="M28.5951 47.8333C39.5487 47.8333 48.4284 38.9536 48.4284 28C48.4284 17.0463 39.5487 8.16663 28.5951 8.16663C17.6414 8.16663 8.76172 17.0463 8.76172 28C8.76172 38.9536 17.6414 47.8333 28.5951 47.8333Z"
                    fill="#E9F4FF"
                  ></path>
                  <path
                    d="M27.72 22.1666C27.72 23.6163 26.5447 24.7916 25.095 24.7916C23.6453 24.7916 22.47 23.6163 22.47 22.1666C22.47 20.7169 23.6453 19.5416 25.095 19.5416C26.5447 19.5416 27.72 20.7169 27.72 22.1666Z"
                    stroke="#2168F2"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M31.22 24.7916C32.6697 24.7916 34.1366 23.6163 34.1366 22.1666C34.1366 20.7169 32.6697 19.5416 31.22 19.5416"
                    stroke="#2168F2"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M25.0951 25.375C21.1284 25.375 20.1367 27.4167 20.1367 30.625H22.4701V34.125C22.4701 35.4137 23.5147 36.4583 24.8034 36.4583H25.3867C26.6754 36.4583 27.7201 35.4137 27.7201 34.125V30.625H30.0534C30.0534 27.4167 29.0617 25.375 25.0951 25.375Z"
                    stroke="#2168F2"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M31.22 24.7916C35.1866 24.7916 36.47 27.4166 36.47 30.625H34.1366V34.125C34.1366 35.4137 33.092 36.4583 31.8033 36.4583H31.22"
                    stroke="#2168F2"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_556">
                    <rect
                      width="56"
                      height="56"
                      fill="white"
                      transform="translate(0.594971)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <FeatureCard
            title="Developers"
            description="Build the future of commerce with Shopify's powerful API"
            icon={
              <svg
                id="1:570"
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="feature-icon"
                style={{ width: "56px", height: "56px" }}
              >
                <g clipPath="url(#clip0_1_570)">
                  <path
                    d="M28.395 56C43.859 56 56.395 43.464 56.395 28C56.395 12.536 43.859 0 28.395 0C12.931 0 0.39502 12.536 0.39502 28C0.39502 43.464 12.931 56 28.395 56Z"
                    fill="#FEF6F4"
                  ></path>
                  <path
                    d="M28.3951 47.8333C39.3488 47.8333 48.2284 38.9536 48.2284 28C48.2284 17.0463 39.3488 8.16663 28.3951 8.16663C17.4415 8.16663 8.56177 17.0463 8.56177 28C8.56177 38.9536 17.4415 47.8333 28.3951 47.8333Z"
                    fill="#FFE9E9"
                  ></path>
                  <path
                    d="M32.7701 24.2084L36.8534 28L32.7701 31.7917M24.0201 24.2084L19.9368 28L24.0201 31.7917M29.8534 20.7084L26.9368 35.2917"
                    stroke="#D73E3E"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_570">
                    <rect
                      width="56"
                      height="56"
                      fill="white"
                      transform="translate(0.39502)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <FeatureCard
            title="Retail stores"
            description="The complete system for selling in person"
            icon={
              <svg
                id="1:581"
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="feature-icon"
                style={{ width: "56px", height: "56px" }}
              >
                <g clipPath="url(#clip0_1_581)">
                  <path
                    d="M28.1948 56C43.6588 56 56.1948 43.464 56.1948 28C56.1948 12.536 43.6588 0 28.1948 0C12.7309 0 0.194824 12.536 0.194824 28C0.194824 43.464 12.7309 56 28.1948 56Z"
                    fill="#F7F4FE"
                  ></path>
                  <path
                    d="M28.1949 47.8333C39.1486 47.8333 48.0282 38.9536 48.0282 28C48.0282 17.0463 39.1486 8.16663 28.1949 8.16663C17.2413 8.16663 8.36157 17.0463 8.36157 28C8.36157 38.9536 17.2413 47.8333 28.1949 47.8333Z"
                    fill="#EFE9FF"
                  ></path>
                  <path
                    d="M22.0701 36.4586H34.3201C35.6088 36.4586 36.6535 35.414 36.6535 34.1253V23.5471C36.6535 23.214 36.5822 22.8848 36.4444 22.5816L35.817 21.2012C35.4383 20.3682 34.6077 19.8334 33.6927 19.8334H22.6977C21.7827 19.8334 20.9521 20.3682 20.5734 21.2012L19.946 22.5816C19.8082 22.8848 19.7368 23.214 19.7368 23.5471V34.1253C19.7368 35.414 20.7816 36.4586 22.0701 36.4586Z"
                    stroke="#6421F2"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M25.2782 23.0416C25.2782 24.4913 24.1116 25.9583 22.3616 25.9583C20.6116 25.9583 19.7366 24.4913 19.7366 23.0416"
                    stroke="#6421F2"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M36.6532 23.0416C36.6532 24.4913 35.7782 25.9583 34.0282 25.9583C32.2782 25.9583 31.1116 24.4913 31.1116 23.0416"
                    stroke="#6421F2"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M31.1114 23.0416C31.1114 24.4913 29.9447 25.9583 28.1947 25.9583C26.4447 25.9583 25.2781 24.4913 25.2781 23.0416"
                    stroke="#6421F2"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M25.5693 32.3739C25.5693 31.0852 26.6141 30.0405 27.9027 30.0405H28.486C29.7747 30.0405 30.8193 31.0852 30.8193 32.3739V36.4572H25.5693V32.3739Z"
                    stroke="#6421F2"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_581">
                    <rect
                      width="56"
                      height="56"
                      fill="white"
                      transform="translate(0.194824)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ShopifyStats;
