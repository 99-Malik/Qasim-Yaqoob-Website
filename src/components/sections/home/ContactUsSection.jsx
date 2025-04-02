"use client";

import { cn } from "@/lib/utils";
import { LocateIcon, Pointer } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ContactUsSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative flex w-full max-w-7xl flex-col gap-8 px-6 pb-20 pt-10">
        <div className="flex flex-col gap-2">
          <p className="text-center text-lg font-medium text-secondary md:text-xl">
            Contact Us
          </p>
          <h2 className="text-center text-3xl font-medium md:text-4xl lg:text-5xl">
            Get In Touch With Us
          </h2>
        </div>
        <div className="grid gap-5 py-10 md:grid-cols-[4fr_6fr]">
          <div className="flex flex-col gap-8 py-10">
            <div className="flex flex-col gap-3">
              <span className="text-3xl md:text-4xl font-medium text-primary">
                Contact Information
              </span>
              <div className="h-1.5 w-32 rounded-full bg-primary"></div>
            </div>
            <span className="md:text-xl font-medium text-[#222222]/80">
              Any question or remarks? Just write us a message!
            </span>
            <div className="flex w-full flex-col gap-8">
              <div className="flex w-full items-center gap-3">
                <div className="min-w-10">{locationIcon}</div>
                <span className="md:text-xl text-[#222222]">
                  The Bungalow, Lock Street, Dewsbury, England, WF12 9BZ
                </span>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="min-w-10">{phoneIcon}</div>
                <span className="md:text-xl text-[#222222]">+44 7460 693581</span>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="min-w-10">{messageIcon}</div>
                <span className="md:text-xl text-[#222222]">info@Customer Service UAE.net</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-5 rounded-lg px-5 py-6 shadow-[0px_0px_4px_0px_#00000030] md:rounded-2xl md:px-12 md:py-14">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[#222222]/80">Name</span>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-md border border-[#E2E2E280] px-3 py-2.5 shadow-[0px_0.92px_1.84px_0px_#1018280D] outline-primary placeholder:text-[#9F9797]/50"
                placeholder="Enter First Name"
              />
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-[#222222]/80">
                  Phone Number
                </span>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="w-full rounded-md border border-[#E2E2E280] px-3 py-2.5 shadow-[0px_0.92px_1.84px_0px_#1018280D] outline-primary placeholder:text-[#9F9797]/50"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-[#222222]/80">Email</span>
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  className="w-full rounded-md border border-[#E2E2E280] px-3 py-2.5 shadow-[0px_0.92px_1.84px_0px_#1018280D] outline-primary placeholder:text-[#9F9797]/50"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[#222222]/80">Message</span>
              <textarea
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="h-44 w-full rounded-md border border-[#E2E2E280] px-3 py-2.5 shadow-[0px_0.92px_1.84px_0px_#1018280D] outline-primary placeholder:text-[#9F9797]/50"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <button className="w-full rounded-full bg-primary px-5 py-4 text-center font-medium text-white transition-all duration-100 ease-in hover:bg-blue-950">
              Message Us
            </button>
          </div>
        </div>
        <Image
          src="/bg/main-arrow-bg.png"
          quality={100}
          loading="lazy"
          width={450}
          height={450}
          alt="arrow"
          className="absolute -bottom-5 left-0 -z-10 hidden md:bottom-0 md:flex md:size-72"
        />
      </div>
    </div>
  );
};

const locationIcon = (
  <svg
    width="29"
    height="40"
    viewBox="0 0 29 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7501 0.550781C6.96186 0.550781 0.625732 6.88691 0.625732 14.675C0.625732 24.3403 13.2656 38.5295 13.8038 39.1289C14.3092 39.6919 15.1918 39.6909 15.6963 39.1289C16.2345 38.5295 28.8744 24.3403 28.8744 14.675C28.8742 6.88691 22.5382 0.550781 14.7501 0.550781ZM14.7501 21.7813C10.8316 21.7813 7.64383 18.5935 7.64383 14.675C7.64383 10.7566 10.8317 7.5688 14.7501 7.5688C18.6684 7.5688 21.8562 10.7567 21.8562 14.6751C21.8562 18.5935 18.6684 21.7813 14.7501 21.7813Z"
      fill="#0F2C4A"
    />
  </svg>
);

const phoneIcon = (
  <svg
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.14633 13.7332C9.73405 18.7106 13.9031 22.7734 18.9887 25.3236L22.9422 21.4543C23.4274 20.9794 24.1462 20.8211 24.7751 21.0322C26.7878 21.6829 28.9622 22.0347 31.1905 22.0347C32.1789 22.0347 32.9875 22.8261 32.9875 23.7935V29.9316C32.9875 30.899 32.1789 31.6904 31.1905 31.6904C14.3165 31.6904 0.641113 18.306 0.641113 1.79101C0.641113 0.823681 1.44977 0.0322266 2.43814 0.0322266H8.72771C9.71608 0.0322266 10.5247 0.823681 10.5247 1.79101C10.5247 3.9895 10.8841 6.10005 11.549 8.06989C11.7467 8.68546 11.603 9.37139 11.0998 9.86385L7.14633 13.7332Z"
      fill="#0F2C4A"
    />
  </svg>
);

const messageIcon = (
  <svg
    width="33"
    height="26"
    viewBox="0 0 33 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.2207 2.01228C0.641113 3.5565 0.641113 6.04518 0.641113 11.019V14.5366C0.641113 19.5105 0.641113 21.9992 2.2207 23.5434C3.79848 25.0893 6.34127 25.0893 11.4232 25.0893H22.2054C27.2874 25.0893 29.8301 25.0893 31.4079 23.5434C32.9875 21.9992 32.9875 19.5105 32.9875 14.5366V11.019C32.9875 6.04518 32.9875 3.5565 31.4079 2.01228C29.8301 0.466309 27.2874 0.466309 22.2054 0.466309H11.4232C6.34127 0.466309 3.79848 0.466309 2.2207 2.01228ZM7.02953 6.03815C6.633 5.77926 6.14763 5.68515 5.6802 5.77652C5.21277 5.86788 4.80157 6.13724 4.53706 6.52533C4.27255 6.91343 4.17639 7.38847 4.26974 7.84595C4.36309 8.30344 4.6383 8.70589 5.03483 8.96477L14.8214 15.3492C15.4117 15.7341 16.1051 15.9395 16.8143 15.9395C17.5236 15.9395 18.217 15.7341 18.8072 15.3492L28.5938 8.96477C28.9903 8.70589 29.2655 8.30344 29.3589 7.84595C29.4522 7.38847 29.3561 6.91343 29.0916 6.52533C28.8271 6.13724 28.4159 5.86788 27.9484 5.77652C27.481 5.68515 26.9956 5.77926 26.5991 6.03815L16.8143 12.4226L7.02953 6.03815Z"
      fill="#0F2C4A"
    />
  </svg>
);

export default ContactUsSection;
