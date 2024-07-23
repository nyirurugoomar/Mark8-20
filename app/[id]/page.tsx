"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import { photo } from "@/constants";
import { CiHeart } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { NewsLetter } from "@/components";
import axios from 'axios';
import { Product } from "@/types";

function Page() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://api.mark8.awesomity.rw/products/${id}`)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product: {error.message}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div className="md:w-full md:mx-auto">
      <div className="md:ml-20">
        <code className="flex items-center">
          <FaArrowLeftLong className="text-primary mr-4" width={24} height={24} />
          Home / Product / Vector / <span className="text-primary md:ml-2">{product.name}</span>
        </code>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:mx-20 md:mt-10">
        <div className="border-[1px] border-accent md:w-[632px] rounded-[8px] ">
          <Image
            src={product.thumbnail[1]}
            width={782}
            height={574}
            alt={product.name}
            className="opacity"
          />
          <div className="flex gap-4 md:mt-4 p-2">
            {photo.map((item, index) => (
              <Image
                key={index}
                className="rounded-[8px]"
                src={item.photo}
                width={60}
                height={60}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="border-[1px] border-accent rounded-[8px] p-4">
          <div className="flex justify-between md:p-6 border-b-[1px] items-center">
            <div className="flex gap-4 items-center">
              <h1 className="title">Product Details</h1>
              <p className="bg-[#F4F5F6] text-[#1C2834] text-[10px] font-[800] leading-[13.02px] p-[10px] rounded-[8px]">
                IN STOCK
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex justify-center items-center border-[1.5px] px-[32px] py-[8px] rounded-[8px] title text-[#141C24]">
                <CiHeart className="mr-2 text-primary" />
                Save
              </button>
              <IoMdMore size={16} />
            </div>
          </div>
          <div className="space-y-2 p-6">
            <h1 className="title max-w-[150px] truncate whitespace-nowrap">
              {product.name}
            </h1>
            <h2 className="text-[16px] font-[700] leading-[20.83px] font-dm-sans text-primary flex gap-2">
              {product.unitPrice} {product.createdBy?.currency}
              <span className="text-accent line-through "> {product.createdBy?.currency}</span>
            </h2>
            <h1 className="text-[16px] font-dm-sans font-[700] leading-[20.83px]">
              Description
            </h1>
            <p className="body">
              {product.description}
            </p>
            <h1 className="text-[16px] font-dm-sans font-[700] leading-[20.83px]">
              Reviews
            </h1>
            <div className="flex items-center">
              <Image src="/star.svg" alt="icon_home" width={16} height={16} />
              4.9{" "}
              <span className="font-[300] text-[14px] leading-[24px] text-[#495D69] md:ml-4 ml-2">
                (14 Reviews)
              </span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center  rounded-md">
                <button
                  className="px-4 py-2 text-lg border rounded-[8px]"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="px-[30px]  py-[8px] mx-2 bg-[#0C0C0D0A] rounded-[8px]">
                  {quantity}
                </span>
                <button
                  className="px-4 py-2 text-lg border rounded-[8px]"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <button className=" flex gap-2 bg-primary text-[#1C2834] font-[800] text-[14px] leading-[18.23px] py-2 px-4 rounded-md">
                <Image
                  src="/shopping-cart.svg"
                  alt="icon-filter"
                  width={16}
                  height={16}
                />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="border-t-[1px]  border-accent p-4 mt-10">
            <div className="flex justify-between items-center">
              <h1 className="text-[16px] font-dm-sans font-[700] leading-[20.83px] gap-2 flex items-center">
                Store Info
                <Image
                  src="/store1.png"
                  className="rounded-[16px]"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="subtitle">Awesome Shop 1</span>
              </h1>
              <button className=" flex gap-2 bg-primary text-[#1C2834] font-[800] text-[14px] leading-[18.23px] py-2 px-4 rounded-md">
                <Image
                  src="/shopping-cart.svg"
                  alt="icon-filter"
                  width={16}
                  height={16}
                />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-20 md:mt-10">
        <h1 className="text-[24px] text-[#1C2834] font-dm-sans font-[900] leading-[31.25px]">
          You might also like
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 md:mt-10">
           {photo.map((photos,index) =>(
            <div key={index} className="border-[1px] border-accent rounded-[16px] md:w-full md:h-[324px] cursor-pointer">
            <Image
              src={photos.photo}
              className="w-full rounded-t-[16px] object-cover"
              height={256}
              width={370}
              alt="Product Image"
            />
            <div className="justify-between flex p-[20px] items-center">
              <div className="space-y-2">
                <h1 className="title max-w-[150px] truncate whitespace-nowrap">
                  Product1
                </h1>
                <h2 className="title text-primary">
                  9,000 Rwf{" "}
                  <span className="text-accent line-through ">12,000 Rwf</span>
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
           ))}
        </div>
      </div>
      <NewsLetter/>
    </div>
  );
}

export default Page;
