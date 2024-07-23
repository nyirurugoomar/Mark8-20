import { NewsLetter, StoreItem } from "@/components"
import Image from "next/image"

function page() {
  return (
    <div className="md:w-full md:mx-auto">
      <div className="bg-image-bg bg-cover  opacity-[8px] md:p-[40px] p-[20px] md:rounded-[16px] md:mx-20 md:space-y-6">
        <div className="text-center">
          <h1 className="font-dm-sans font-[900] text-[24px] leading-[31.25px] text-primary ">
          Mark8 <span className="text-secondary">Stores</span>
          </h1>
          <p className="text-[#495D69] text-[14px]">54 Stores</p>
        </div>
        <form action="" className="text-center justify-center items-center flex md:mt-0 mt-6">
          <div className="relative md:w-[600px] md:h-[48px]">
            <Image src='/search-vector2.svg' width={16} height={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"  alt="search-icon"/>
            <input
              type="text"
              className="md:w-full w-[300px] h-[48px] bg-[#0C0C0D0A] pl-10 pr-10 text-black rounded-[8px] focus:outline-none focus:border-none"
              placeholder="Search Store"
            />
            <Image src='/filter-07.svg' width={16} height={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" alt="filter-icon"/>
          </div>
        </form>
        <div className="md:gap-[8px] gap-2 md:flex flex justify-center  items-center md:mt-0 mt-6">
            <button className="border-[#79878F] text-[#79878F] hover:border-black hover:text-black text-[10px] font-[500] leading-[13.02px] border-[1px] rounded-[40px] md:px-[30px] px-[20px] md:py-[10px] py-[4px]  ">All</button>
            <button className="border-[#79878F] text-[#79878F] hover:border-black hover:text-black text-[10px] font-[500] leading-[13.02px] border-[1px] rounded-[40px] md:px-[30px] px-[20px] md:py-[10px] py-[4px]  ">Vector</button>
            <button className="border-[#79878F] text-[#79878F] hover:border-black hover:text-black text-[10px] font-[500] leading-[13.02px] border-[1px] rounded-[40px] md:px-[30px] px-[20px] md:py-[10px] py-[4px]  ">Icons</button>
            <button className="border-[#79878F] text-[#79878F] hover:border-black hover:text-black text-[10px] font-[500] leading-[13.02px] border-[1px] rounded-[40px] md:px-[30px] px-[20px] md:py-[10px] py-[4px]  ">Backgrounds</button>
        </div>
      </div>
      <StoreItem/>
      <NewsLetter/>
    </div>
  )
}

export default page