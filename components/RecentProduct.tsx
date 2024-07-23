"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { NewsLetter, TopStores } from ".";
import { AiOutlineDown } from "react-icons/ai";
import { Product } from "@/types";
import Link from "next/link";

function RecentProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = getAccessToken();
        const response = await axios.get<{ data: { products: Product[] } }>(
          `https://api.mark8.awesomity.rw/products`,
          {
            params: {
              pageNumber,
              recordsPerPage: 6,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data.data.products);

        if (Array.isArray(response.data.data.products)) {
          setProducts((prevProducts) => [
            ...prevProducts,
            ...response.data.data.products,
          ]);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [pageNumber]);

  const handleLoadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <div className="md:w-full">
      <div className="justify-between md:flex flex items-center md:mx-20 mx-4 md:mt-10 md:my-4 my-4">
        <div className="md:flex flex md:gap-4 gap-2 items-center">
          <Image
            src="/delivery-box-01.svg"
            alt="delivery-icon"
            width={24}
            height={24}
          />
          <h1 className="title">Recent Products ({products.length})</h1>
        </div>
        <div className="flex md:gap-2 gap-2">
          <button className="md:h-[48px] md:w-[48px] border-[1.5px] border-accent p-[8px] rounded-[8px] flex items-center justify-center ">
            <Image
              src="/filter2.svg"
              alt="icon-filter"
              width={16}
              height={16}
            />
          </button>
          <button className="md:h-[48px] md:w-[48px] border-[1.5px] border-accent p-[8px] rounded-[8px] flex items-center justify-center">
            <Image
              src="/arrange-letters.svg"
              alt="icon-filter"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
      {/* items */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:mx-20 mx-6 md:mt-10 gap-4">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <Link key={product.id} href={`/${product.id}`}>
                <div className="border-[1px] border-accent rounded-[16px] md:w-full md:h-[324px] cursor-pointer">
                  <Image
                    src={product.thumbnail[1]}
                    className="w-full h-[236px] rounded-t-[16px] object-cover"
                    height={256}
                    width={370}
                    alt="Product Image"
                  />
                  <div className="justify-between flex p-[20px] items-center">
                    <div className="space-y-2">
                      <h1 className="title max-w-[150px] truncate whitespace-nowrap">
                        {product.name}
                      </h1>
                      <h2 className="title text-primary uppercase ">
                        {product.unitPrice}{" "}
                        {product.createdBy?.currency}
                        <span className="text-accent line-through "></span>
                      </h2>
                    </div>
                    <div className="flex gap-2">
                      <button className="md:h-[48px] h-[40px] w-[40px] md:w-[48px] border-[1.5px] border-accent p-[8px] rounded-[8px] flex items-center justify-center">
                        <Image
                          src="/shopping-cart.svg"
                          alt="icon-filter"
                          width={16}
                          height={16}
                        />
                      </button>
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
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center md:mt-6 mt-6">
            <button
              onClick={handleLoadMore}
              className="flex justify-center items-center border-[1.5px] px-[32px] py-[8px] rounded-[8px] title text-[#141C24]"
            >
              <AiOutlineDown className="mr-2 text-primary" />
              Load More
            </button>
          </div>
        </div>

        <TopStores />
      </div>
      <NewsLetter />
    </div>
  );
}

export default RecentProduct;
