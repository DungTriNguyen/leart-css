"use client";
import * as React from "react";
import SupportCard from "./SupportCard";

/**
 * ShopifySupport component displays a section with support resources
 */
const ShopifySupport: React.FC = () => {
  const supportResources = [
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.25 20.1299H5.75C5.19772 20.1299 4.75 19.6822 4.75 19.1299V6.62988C4.75 6.07759 5.19772 5.62988 5.75 5.62988H14.25C14.8023 5.62988 15.25 6.0776 15.25 6.62988V10.8799"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17.5227 10.6299H15.25V18.1299C15.25 19.2345 16.1454 20.1299 17.25 20.1299C18.3546 20.1299 19.25 19.2345 19.25 18.1299V12.3572C19.25 11.4032 18.4767 10.6299 17.5227 10.6299Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.75 9.62988C7.75 9.0776 8.19772 8.62988 8.75 8.62988H11.25C11.8023 8.62988 12.25 9.0776 12.25 9.62988V11.1299C12.25 11.6822 11.8023 12.1299 11.25 12.1299H8.75C8.19772 12.1299 7.75 11.6822 7.75 11.1299V9.62988Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8 14.6299H12"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8 17.1299H12"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Blog",
      description:
        "Get all the marketing and business strategy tips you need to help you run an online business.",
      ctaText: "Read",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.25 6.62988C19.25 6.0776 18.8023 5.62988 18.25 5.62988H14C12.8954 5.62988 12 6.52531 12 7.62988V20.1299L12.8284 19.3015C13.5786 18.5513 14.596 18.1299 15.6569 18.1299H18.25C18.8023 18.1299 19.25 17.6822 19.25 17.1299V6.62988Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4.75 6.62988C4.75 6.0776 5.19772 5.62988 5.75 5.62988H10C11.1046 5.62988 12 6.52531 12 7.62988V20.1299L11.1716 19.3015C10.4214 18.5513 9.40401 18.1299 8.34315 18.1299H5.75C5.19772 18.1299 4.75 17.6822 4.75 17.1299V6.62988Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Online Courses",
      description:
        "Learn tried-and-tested business tips with instant access to lessons from successful entrepreneurs.",
      ctaText: "Learn",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 16.1299C7.69036 16.1299 8.25 15.5703 8.25 14.8799C8.25 14.1895 7.69036 13.6299 7 13.6299C6.30964 13.6299 5.75 14.1895 5.75 14.8799C5.75 15.5703 6.30964 16.1299 7 16.1299Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 16.1299C12.6904 16.1299 13.25 15.5703 13.25 14.8799C13.25 14.1895 12.6904 13.6299 12 13.6299C11.3096 13.6299 10.75 14.1895 10.75 14.8799C10.75 15.5703 11.3096 16.1299 12 16.1299Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9 12.1299C9.69036 12.1299 10.25 11.5703 10.25 10.8799C10.25 10.1895 9.69036 9.62988 9 9.62988C8.30964 9.62988 7.75 10.1895 7.75 10.8799C7.75 11.5703 8.30964 12.1299 9 12.1299Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M15 12.1299C15.6904 12.1299 16.25 11.5703 16.25 10.8799C16.25 10.1895 15.6904 9.62988 15 9.62988C14.3096 9.62988 13.75 10.1895 13.75 10.8799C13.75 11.5703 14.3096 12.1299 15 12.1299Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 8.12988C12.6904 8.12988 13.25 7.57024 13.25 6.87988C13.25 6.18952 12.6904 5.62988 12 5.62988C11.3096 5.62988 10.75 6.18952 10.75 6.87988C10.75 7.57024 11.3096 8.12988 12 8.12988Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17 16.1299C17.6904 16.1299 18.25 15.5703 18.25 14.8799C18.25 14.1895 17.6904 13.6299 17 13.6299C16.3096 13.6299 15.75 14.1895 15.75 14.8799C15.75 15.5703 16.3096 16.1299 17 16.1299Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.5 20.1299C9.5 20.1299 9.25001 17.6299 7 17.6299C4.74999 17.6299 4.75 20.1299 4.75 20.1299"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.5 20.1299C14.5 20.1299 14.25 17.6299 12 17.6299C9.74999 17.6299 9.5 20.1299 9.5 20.1299"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19.25 20.1299C19.25 20.1299 19.25 17.6299 17 17.6299C14.75 17.6299 14.5 20.1299 14.5 20.1299"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Community",
      description:
        "Connect with a community of brands, partners, and fellow merchants who understand Shopify.",
      ctaText: "Discuss",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.25 12.8799C19.25 16.884 16.0041 20.1299 12 20.1299C7.99594 20.1299 4.75 16.884 4.75 12.8799C4.75 8.87582 7.99594 5.62988 12 5.62988C16.0041 5.62988 19.25 8.87582 19.25 12.8799Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.75 10.8799C9.75 10.8799 10 8.62988 12 8.62988C14 8.62988 14.25 9.87988 14.25 10.8799C14.25 11.6312 13.8266 12.3826 12.9798 12.7098C12.4647 12.9088 12 13.3276 12 13.8799V14.1299"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.5 16.8799C12.5 17.156 12.2761 17.3799 12 17.3799C11.7239 17.3799 11.5 17.156 11.5 16.8799C11.5 16.6038 11.7239 16.3799 12 16.3799C12.2761 16.3799 12.5 16.6038 12.5 16.8799Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Help Center",
      description:
        "Find answers with a dedicated helpdesk resource full of articles and videos from our Support team.",
      ctaText: "Get help",
    },
  ];

  return (
    <section className="flex flex-col gap-16 items-center px-0 py-32 bg-black max-md:px-0 max-md:py-16 max-sm:px-0 max-sm:py-8">
      <header className="mb-6 text-center">
        <p className="mb-2 text-base tracking-tight leading-4 text-white uppercase">
          SHOPIFY SUPPORT
        </p>
        <h2 className="text-5xl tracking-tighter text-white leading-[56px] max-sm:text-4xl max-sm:leading-10">
          <span>The help you need,</span>
          <br />
          <span>when you need it</span>
        </h2>
      </header>

      <div className="grid gap-6 px-4 py-0 max-w-6xl grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr] max-md:max-w-[600px]">
        {supportResources.map((resource, index) => (
          <SupportCard
            key={index}
            icon={resource.icon}
            title={resource.title}
            description={resource.description}
            ctaText={resource.ctaText}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopifySupport;
