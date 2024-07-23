"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="w-full md:mx-auto border-b-[1.5px] border-[#DBDBDB] md:mb-6 ">
      <div className="flex justify-between items-center md:h-[68px] md:mx-20">
        <div className="flex items-center md:gap-6 gap-4">
          <Link href='/'><Image src="/Logo_header.png" width={151} height={40} alt="logo" /></Link>
          <Link href='/'>
            <div className="flex gap-2 items-center">
              <Image src="/home.svg" alt="icon_home" width={16} height={16} />
              <ul className="font-dm-sans font-[700] text-[12px] leading-[15.62px]">
                Home
              </ul>
            </div>
          </Link>
          
          <Link href='/Store'>
            <div className="flex gap-2 items-center">
              <Image src="/store01.svg" alt="icon_store" width={16} height={16} />
              <ul className="font-dm-sans font-[700] text-[12px] leading-[15.62px]">
                Store
              </ul>
            </div>
          </Link>
          
        </div>
        <div className="flex items-center md:gap-6 gap-2">
          <div className="flex gap-2 items-center">
            <Image src="/cart02.svg" alt="icon_cart" width={16} height={16} />
            <ul className="font-dm-sans font-[700] text-[12px] leading-[15.62px] hidden md:block">
              My Cart
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/favourite.svg" alt="icon_favourite" width={16} height={16} />
            <ul className="font-dm-sans font-[700] text-[12px] leading-[15.62px] hidden md:block">
              Saved
            </ul>
          </div>
          <Link href='/#openstore' className="hidden md:block">
            <button className="py-[10px] px-[32px] border-[1.5px] border-[#DBDBDB] font-dm-sans font-[800] text-[14px] leading-[18.23px] text-[#141C24] rounded-[8px] flex items-center gap-2">
              Open A Store
              <Image src="/store-03.svg" alt="icon_store" width={16} height={16} />
            </button>
          </Link>
          <button 
            className="py-[8px] px-[5px] rounded-[8px] border-[1.5px] border-[#DBDBDB] flex items-center gap-2" 
            onClick={toggleProfile}
          >
            <Image src="/user.svg" alt="icon_user" width={24} height={24} />
            <Image src="/arrow-down.svg" alt="icon_arrow" width={12} height={6} />
          </button>
          {isProfileOpen && (
            <div className="absolute top-[68px] right-20 bg-white shadow-lg rounded-lg p-4 z-10 w-[306px]">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/store1.png" alt="profile_image" width={40} height={40} />
                <div>
                  <div className="font-dm-sans font-[700] text-[14px] leading-[18.23px]">John Doe</div>
                  <div className="font-dm-sans font-[400] text-[12px] leading-[15.62px] text-[#666]">yveshonore@awesomity.rw</div>
                </div>
              </div>
              <ul className="font-dm-sans font-[700] text-[14px] leading-[18.23px] py-[0px] space-y-4">
                <div className="border-y-[1.5px] py-6 space-y-6 ">
                <li className="flex items-center gap-2 mb-2 font-dm-sans font-[400] text-[14px] leading-[18.23px] cursor-pointer">
                  <Image src="/user-0.svg" alt="icon_account" width={16} height={16} />
                  My Account
                </li>
                <li className="flex items-center gap-2 mb-2 font-dm-sans font-[400] text-[14px] leading-[18.23px] cursor-pointer">
                  <Image src="/shopping-0.svg" alt="icon_shoping" width={16} height={16} />
                  My Orders
                </li>
                <li className="flex items-center gap-2 mb-2 font-dm-sans font-[400] text-[14px] leading-[18.23px] cursor-pointer">
                  <Image src="/customer-08.svg" alt="icon_help" width={16} height={16} />
                  Help
                </li>
                <li className="flex items-center gap-2 mb-2 font-dm-sans font-[400] text-[14px] leading-[18.23px] cursor-pointer">
                  <Image src="/alert-08.svg" alt="icon_about" width={16} height={16} />
                  About
                </li>
                <li className="flex items-center gap-2 mb-2 font-dm-sans font-[400] text-[14px] leading-[18.23px] cursor-pointer">
                  <Image src="/Setting-08.svg" alt="icon_settings" width={16} height={16} />
                  Settings
                </li>
                </div>
                <li className="flex items-center gap-2 mb-2 font-dm-sans font-[400] text-[14px] leading-[18.23px] cursor-pointer">
                  <Image src="/logout-08.svg" alt="icon_logout" width={16} height={16} />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
