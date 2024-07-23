"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import axios from 'axios';
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { NewsLetter } from "@/components";
import { Product } from "@/types";
import { FaSpinner } from 'react-icons/fa';

// Define a mock for related products
const relatedProducts = [
  { photo: '/image1.jpg' },
  { photo: '/image2.jpg' },
  // Add more images as needed
];

function Page() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for the selected image
  const [imageLoading, setImageLoading] = useState(true); // State for image loading

  const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const token = getAccessToken();
          const response = await axios.get(`https://api.mark8.awesomity.rw/products/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProduct(response.data.data);
          setSelectedImage(response.data.data.thumbnail[0]); // Set initial selected image
          setLoading(false);
        } catch (error) {
          setError(error as Error);
          setLoading(false);
        }
      };

      fetchProduct();
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

  const handleThumbnailClick = (image: string) => {
    setImageLoading(true); // Set image loading state to true
    setSelectedImage(image); // Update the selected image
  };

  const handleImageLoad = () => {
    setImageLoading(false); // Set image loading state to false when image is loaded
  };

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <FaSpinner className="animate-spin text-4xl text-primary" />
    </div>
  );

  if (error) return <div>Error loading product: {error.message}</div>;
  if (!product) return <div>No product found</div>;

  const thumbnails = Array.isArray(product.thumbnail) ? product.thumbnail : [];

  return (
    <div className="md:w-full md:mx-auto">
      <div className="md:ml-20 hidden md:block">
        <code className="flex items-center">
          <FaArrowLeftLong className="text-primary mr-4" width={24} height={24} />
          Home / Product / Vector / <span className="text-primary md:ml-2">{product.name}</span>
        </code>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:mx-20 md:mt-10 mt-10">
        <div className="border-[1px] border-accent md:w-[632px] rounded-[16px]">
          {selectedImage ? (
            <div className="relative">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <FaSpinner className="animate-spin text-4xl text-primary" />
                </div>
              )}
              <Image
                src={selectedImage}
                width={782}
                height={574}
                alt={product.name}
                style={{ width: '782px', height: '574px', objectFit: 'cover' }}
                className="opacity rounded-[16px]"
                onLoad={handleImageLoad} // Set image load handler
                onError={() => setImageLoading(false)} // Hide spinner if image fails to load
              />
            </div>
          ) : (
            <div className="w-full h-[574px] bg-gray-200 flex items-center justify-center">
              <span>No Image Available</span>
            </div>
          )}
          <div className="flex gap-4 md:mt-4 p-2">
            {thumbnails.map((item, index) => (
              <Image
                key={index}
                className="rounded-[8px] cursor-pointer"
                src={item}
                width={60}
                height={60}
                alt={`Image ${index + 1}`}
                onClick={() => handleThumbnailClick(item)} // Set selected image on click
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
            <h1 className="title max-w-[180px]">
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
              <div className="flex items-center rounded-md">
                <button
                  className="px-4 py-2 text-lg border rounded-[8px]"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="px-[30px] py-[8px] mx-2 bg-[#0C0C0D0A] rounded-[8px]">
                  {quantity}
                </span>
                <button
                  className="px-4 py-2 text-lg border rounded-[8px]"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <button className="flex gap-2 bg-primary text-[#1C2834] font-[800] text-[14px] leading-[18.23px] py-2 px-4 rounded-md">
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
          <div className="border-t-[1px] border-accent p-4 mt-10">
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
                <span className="subtitle">{product.createdBy?.shippingAddress}{" "}/ Tel: {product.createdBy?.phoneNumber} </span>
              </h1>
              <button className="flex gap-2 bg-primary text-[#1C2834] font-[800] text-[14px] leading-[18.23px] py-2 px-4 rounded-md">
                <Image
                  src="/shopping-cart.svg"
                  alt="icon-filter"
                  width={16}
                  height={16}
                />
                View Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mx-20 mt-10">
        <h1 className="text-[#141C24] text-[24px] font-dm-sans font-[800] leading-[29px] mb-6">
          Related Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 md:mt-10">
          {relatedProducts.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border-[1px] border-[#EAECF0] cursor-pointer"
            >
              <Image
                src={item.photo}
                width={285}
                height={194}
                alt={`Related Product ${index + 1}`}
                className="opacity"
              />
              <div className="p-4">
                <h1 className="text-[#141C24] font-dm-sans font-[700] leading-[24px] text-[20px]">
                  Classic Black Swimsuit
                </h1>
                <p className="font-dm-sans font-[700] text-[14px] leading-[18.23px] text-primary">
                  16,000 Rwf
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <NewsLetter />
      </div>
    </div>
  );
}

export default Page;
