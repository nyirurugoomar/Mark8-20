import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


function NewsLetter() {
  return (
    <div id="openstore" className="md:w-full md:mx-auto">
      <div className=" md:h-[128px] bg-image-bg bg-cover md:p-[40px] p-[20px] md:mx-20 mx-6 md:mt-10 mt-10 rounded-[16px]">
        <div className="md:justify-between  md:flex  items-center">
          <div className="md:mb-0 mb-2">
            <h1 className="title">
              <span className="text-primary">Open</span> your Store
            </h1>
          </div>
          <div className="flex md:gap-2 gap-2">
            <form action="">
              <div className="relative md:w-[600px] md:h-[48px]">
                <Image
                  src="/mail-01.svg"
                  width={16}
                  height={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  alt="search-icon"
                />
                <input
                  type="text"
                  className="w-full h-[48px] bg-[#0C0C0D0A] pl-10 pr-10 text-black rounded-[8px]"
                  placeholder="Enter your Email"
                />
                
              </div>
            </form>
            <button className="bg-primary rounded-[8px] px-[32px] py-[8px] text-black body font-[800] flex items-center">
              Submit
              <FaArrowRightLong className="ml-2 text-black"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
