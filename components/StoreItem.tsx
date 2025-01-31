'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Store } from "@/types";
function StoreItem() {
  const [stores, setStores] = useState<Store[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");



  const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const token = getAccessToken();
        const response = await axios.get<{ data: { stores: Store[] } }>(
          `https://api.mark8.awesomity.rw/store`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (Array.isArray(response.data.data.stores)) {
          setStores(response.data.data.stores);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);
  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="md:w-full md:py-10">
      {filteredStores.map((store, index) => (
        <div key={index} className="md:mx-20 border-[1.5px] border-accent rounded-[16px] mb-10">
          <div className="md:flex grid md:justify-between justify-between items-center border-b-[1.5px] border-accent p-4">
            <div className="flex items-center gap-2">
              <Image src={store.image} width={60} height={60} className="rounded-[16px]" alt={store.storeName} />
              <div className="md:grid">
                <h1 className="subtitle">{store.name}</h1>
                <p className="body">{stores.length} Products</p>
              </div>
            </div>
            <div className="flex gap-2 md:mt-0 mt-4">
              <button className="py-[8px] px-[32px] md:h-[48px] font-dm-sans font-[800] text-[14px] leading-[18.23px] rounded-[8px] flex items-center gap-2 bg-primary text-black">
                <Image src="/user-2.svg" alt="icon_home" width={16} height={16} />
                View Profile
              </button>
              <button className="md:h-[48px] h-[30px] md:w-[48px] w-[30px] border-[1.5px] border-accent rounded-[8px] md:p-[8px] flex justify-center items-center">
                <Image src="/call.svg" alt="icon_home" width={16} height={16} />
              </button>
              <button className="md:h-[48px] h-[30px] md:w-[48px] w-[30px] border-[1.5px] border-accent rounded-[8px] md:p-[8px] flex justify-center items-center">
                <Image src="/favourite.svg" alt="icon_home" width={16} height={16} />
              </button>
            </div>
          </div>
          <div className="md:flex md:p-10 p-8">
            <div className="md:space-y-6 space-y-4 md:w-2/4">
              <h1 className="title">About</h1>
              <p className="body">
                {store.description}
              </p>
              <h1 className="title">Categories</h1>
              <div className="flex gap-4">
                <button className="border-[#79878F] text-[#79878F] hover:border-black hover:text-black text-[10px] font-[500] leading-[13.02px] border-[1px] rounded-[40px] md:px-[30px] px-[20px] md:py-[10px] py-[4px]">
                  Vectors
                </button>
                <button className="border-[#79878F] text-[#79878F] hover:border-black hover:text-black text-[10px] font-[500] leading-[13.02px] border-[1px] rounded-[40px] md:px-[30px] px-[20px] md:py-[10px] py-[4px]">
                  Backgrounds
                </button>
              </div>
              <h1 className="title">Reviews</h1>
              <div className="flex ">
                <h1 className="md:flex flex title items-center">
                  <Image src="/star.svg" alt="icon_home" width={16} height={16} />
                  4.9{" "}
                  <span className="font-[300] text-[14px] leading-[24px] text-[#495D69] md:ml-4 ml-2">
                    (14 Reviews)
                  </span>
                </h1>
              </div>
              <button className="border-[1.5px]   border-accent md:py-[8px] py-[10px] px-[32px] md:h-[48px] font-dm-sans font-[800] text-[14px] leading-[18.23px] rounded-[8px] flex items-center gap-2 text-black ">
                <Image
                  src="/delivery-box-01.svg"
                  alt="icon_delivery"
                  width={16}
                  height={16}
                />
                Explore Products
              </button>
            </div>
            <div className="md:w-3/4 md:pt-0 pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {filteredStores.slice(0, 3).map((store, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-accent rounded-[16px] cursor-pointer md:h-[364px]"
                  >
                    <Image
                      src={store.image}
                      className="w-full rounded-t-[16px] object-cover lg:w[300px] lg:h-[250px]"
                      height={250}
                      width={250}
                      alt={store.name}
                    />
                    <div className="flex justify-between p-[20px] items-center">
                      <div className="space-y-2">
                        <h1 className="subtitle max-w-[150px] truncate whitespace-nowrap">
                          {store.name}
                        </h1>
                        {/* <h2 className="title text-primary">
                          {store.address}
                        </h2> */}
                        {store.price?.currency}
                      </div>
                      <div className="flex gap-2">
                        <button className="md:h-[48px] md:w-[48px] border-[1.5px] border-accent p-[8px] rounded-[8px] flex items-center justify-center">
                          <Image
                            src="/like.svg"
                            alt="icon-filter"
                            width={16}
                            height={16}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoreItem;
