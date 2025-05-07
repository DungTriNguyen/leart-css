import React from "react";
import SectionHeader from "./SectionHeader";
import MediaSection from "./MediaSection";
import FeatureItem from "./FeatureItemSection9";

const BusinessOperations: React.FC = () => {
  return (
    <div className="px-5 py-0 mx-auto my-0 max-w-[1260px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <SectionHeader
        title="CENTRALIZED BUSINESS OPERATIONS"
        heading="Streamline your back office"
        actionText="Manage your business"
      />

      <div className="flex gap-16 justify-between max-md:flex-col">
        <MediaSection
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/0dc65a94e4dcc4ace03f90f778c5eef99aea0f62"
          altText="Products showcase"
        />

        <div className="flex-1 max-w-screen-md">
          <FeatureItem
            icon={
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 7.27002C4.75 6.16545 5.64543 5.27002 6.75 5.27002H17.25C18.3546 5.27002 19.25 6.16545 19.25 7.27002V17.77C19.25 18.8746 18.3546 19.77 17.25 19.77H6.75C5.64543 19.77 4.75 18.8746 4.75 17.77V7.27002Z"
                  stroke="#6421F2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.75 15.77V10.27"
                  stroke="#6421F2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15.25 15.77V10.27"
                  stroke="#6421F2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 15.77V13.27"
                  stroke="#6421F2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            }
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
              >
                <path
                  d="M5.75 9.39002L12 12.77M5.75 9.39002V16.39L12 19.77M5.75 9.39002L8.875 7.83002M12 12.77V19.77M12 12.77L15.125 11.08M12 19.77L18.25 16.39V9.39002M8.875 7.83002L12 6.27002L18.25 9.39002M8.875 7.83002L15.125 11.08M18.25 9.39002L15.125 11.08"
                  stroke="#2168F2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            }
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
              >
                <path
                  d="M18.25 12.02V19.77M5.75 19.77V12.02M9.75 19.77V12.02M14.25 19.77V12.02"
                  stroke="#D73E3E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 5.27002L19.25 11.77H4.75L12 5.27002Z"
                  stroke="#D73E3E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.75 19.77H19.25"
                  stroke="#D73E3E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            }
            title="Manage your money where you make it"
            description="Manage your business finances all from one place with money management and flexible funding designed with entrepreneurs in mind."
            isActive={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessOperations;
