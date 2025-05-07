import React from "react";
import FeatureItem from "./FeatureItemSection8";
import IconButton from "./IconButton";

const BusinessOperations: React.FC = () => {
  return (
    <section className="flex flex-col px-5 py-10 mx-auto w-full max-w-[1260px] max-md:px-4 max-sm:px-3">
      <header>
        <h3 className="mb-8 text-base font-medium text-sky-900 uppercase max-sm:mb-6">
          CENTRALIZED BUSINESS OPERATIONS
        </h3>
        <div className="flex justify-between items-end mb-16 max-md:flex-col max-md:gap-8 max-md:items-start max-sm:mb-10">
          <h2 className="max-w-2xl text-5xl tracking-tighter text-black leading-[56px] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-10">
            Streamline your back office
          </h2>
          <div className="flex flex-col">
            <button className="flex gap-5 items-center pb-4 border border-black min-w-96 max-md:min-w-0 max-sm:w-full">
              <span className="text-lg font-medium leading-7 text-black">
                Manage your business
              </span>
              <span className="ml-auto">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px]"
                >
                  <path
                    d="M21.2483 11.6717L15.2483 5.67173C15.1369 5.56032 15.0046 5.47194 14.8591 5.41164C14.7135 5.35135 14.5575 5.32031 14.3999 5.32031C14.0817 5.32031 13.7765 5.44672 13.5515 5.67173C13.4401 5.78314 13.3517 5.91541 13.2914 6.06098C13.2311 6.20655 13.2001 6.36257 13.2001 6.52013C13.2001 6.83834 13.3265 7.14352 13.5515 7.36853L17.5031 11.3201H3.5999C3.28164 11.3201 2.97642 11.4466 2.75137 11.6716C2.52633 11.8966 2.3999 12.2019 2.3999 12.5201C2.3999 12.8384 2.52633 13.1436 2.75137 13.3687C2.97642 13.5937 3.28164 13.7201 3.5999 13.7201H17.5031L13.5515 17.6717C13.3265 17.8967 13.2001 18.2019 13.2001 18.5201C13.2001 18.8383 13.3265 19.1435 13.5515 19.3685C13.7765 19.5935 14.0817 19.72 14.3999 19.72C14.7181 19.72 15.0233 19.5935 15.2483 19.3685L21.2483 13.3685C21.3598 13.2572 21.4483 13.1249 21.5087 12.9794C21.5691 12.8338 21.6001 12.6777 21.6001 12.5201C21.6001 12.3625 21.5691 12.2065 21.5087 12.0609C21.4483 11.9153 21.3598 11.7831 21.2483 11.6717Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex gap-16 justify-between items-start max-md:flex-col">
        <div className="relative flex-1">
          <figure className="overflow-hidden relative rounded-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dc65a94e4dcc4ace03f90f778c5eef99aea0f62"
              alt="Products interface"
              className="w-full h-auto"
            />
            <button className="absolute right-6 bottom-6">
              <IconButton
                backgroundColor="bg-black"
                size="w-11 h-11"
                icon={
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[24px] h-[24px]"
                  >
                    <path
                      d="M22.6667 12.0067C22.6667 12.56 22.38 13.0707 21.912 13.3534L6.35667 22.7827C6.12113 22.9264 5.85128 23.004 5.57541 23.0075C5.29953 23.0111 5.02779 22.9403 4.78867 22.8027C4.54874 22.6642 4.34952 22.465 4.21107 22.2251C4.07262 21.9852 3.99982 21.713 4 21.436V2.57869C4 2.01336 4.302 1.49202 4.78867 1.21202C5.02775 1.07428 5.29951 1.00344 5.57541 1.00696C5.85131 1.01048 6.12118 1.08822 6.35667 1.23202L21.912 10.66C22.1431 10.8005 22.334 10.9983 22.4662 11.2342C22.5984 11.4702 22.6675 11.7362 22.6667 12.0067Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </button>
          </figure>
        </div>

        <div className="flex-1 max-w-screen-md">
          <div className="flex flex-col gap-16 max-sm:gap-10">
            <FeatureItem
              icon={
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px]"
                >
                  <path
                    d="M4.75 7.27002C4.75 6.16545 5.64543 5.27002 6.75 5.27002H17.25C18.3546 5.27002 19.25 6.16545 19.25 7.27002V17.77C19.25 18.8746 18.3546 19.77 17.25 19.77H6.75C5.64543 19.77 4.75 18.8746 4.75 17.77V7.27002Z"
                    stroke="#6421F2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.75 15.77V10.27"
                    stroke="#6421F2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.25 15.77V10.27"
                    stroke="#6421F2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15.77V13.27"
                    stroke="#6421F2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              iconBgColor="bg-violet-100"
              title="Oversee your operations"
              description="Manage inventory, track payments, and view real-time business insights — all in one place, so you can focus on building your business."
              isActive={true}
            />

            <FeatureItem
              icon={
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px]"
                >
                  <path
                    d="M5.75 9.39002L12 12.77M5.75 9.39002V16.39L12 19.77M5.75 9.39002L8.875 7.83002M12 12.77V19.77M12 12.77L15.125 11.08M12 19.77L18.25 16.39V9.39002M8.875 7.83002L12 6.27002L18.25 9.39002M8.875 7.83002L15.125 11.08M18.25 9.39002L15.125 11.08"
                    stroke="#2168F2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              iconBgColor="bg-indigo-50"
              title="Fulfill every order"
              description="Get your products where they need to be with integrated inventory management, streamlined returns, and a dedicated shipping and fulfillment network."
              isActive={false}
            />

            <FeatureItem
              icon={
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px]"
                >
                  <path
                    d="M18.25 12.02V19.77M5.75 19.77V12.02M9.75 19.77V12.02M14.25 19.77V12.02"
                    stroke="#D73E3E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5.27002L19.25 11.77H4.75L12 5.27002Z"
                    stroke="#D73E3E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.75 19.77H19.25"
                    stroke="#D73E3E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              iconBgColor="bg-rose-100"
              title="Manage your money where you make it"
              description="Manage your business finances all from one place with money management and flexible funding designed with entrepreneurs in mind."
              isActive={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOperations;
