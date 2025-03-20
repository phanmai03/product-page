"use client";
import Image from "next/image";
import { Heart, Truck, Gift } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
    imageUrl: string;
    discount?: number;
    freeShipping?: boolean;
    gift?: boolean;
    flashSaleTime?: string;
    name: string;
    price: number;
    sold?: string;
    flashSaleImage?: string; // Ensure flashSaleImage is passed as a prop
}

export default function ProductCard({
    imageUrl,
    discount,
    freeShipping,
    gift,
    flashSaleTime,
    name,
    price,
    sold,
    flashSaleImage,
}: ProductCardProps) {
    const [isWishlisted, setWishlisted] = useState(false);

    return (
        <div className="w-[183px] h-[308px] bg-white rounded-lg overflow-hidden shadow-md border relative">
            {/* Image Section */}
            <div className="relative w-[183px] h-[179px]">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={183}
                    height={179}
                    className="w-full h-full object-cover"
                />

                {/* Discount Label */}
                {discount !== undefined && discount > 0 && (
                    <span className="absolute top-0 left-0 bg-[#F04438] text-white text-[10px] font-bold px-2 py-1 rounded-tl-lg rounded-br-lg">
                        -{discount}%
                    </span>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={() => setWishlisted(!isWishlisted)}
                    className="absolute top-2 right-2 bg-white h-[32px] w-[32px] p-2 rounded-full shadow"
                >
                    <Heart
                        className={`h-[16px] w-[16px] transition-colors ${isWishlisted ? "text-red-500 fill-red-500" : "text-gray-600"
                            }`}
                    />
                </button>

                {/* Free Shipping & Gift Labels */}
                <div className="absolute bottom-0 left-0 flex">
                    {freeShipping && (
                        <div className="w-[46px] h-[20px] flex items-center justify-center bg-[#12B76A] text-white text-[10px] font-bold">
                            <Truck className="h-[12px] w-[12px]" />
                            FREE
                        </div>
                    )}
                    {gift && (
                        <div className="w-[63px] h-[20px] flex items-center gap-[2px] bg-[#FFE2B8] text-[#CC7600] text-[10px] font-medium rounded-tr-lg">
                            <Gift className="h-[12px] w-[12px]" />
                            Quà tặng
                        </div>
                    )}
                </div>
            </div>

            {/* Product Info Section */}
            <div className="w-[183px] h-[129px] p-2 flex flex-col justify-between">
                {/* Flash Sale Label */}
                {flashSaleTime && flashSaleImage && (
                    <div className="w-[168px] h-[16px] bg-pink-100 text-pink-600 text-[10px] font-sans p-1 flex items-center justify-center rounded">
                        <Image src={flashSaleImage} alt="Flash Sale" width={61} height={14} />
                        <span>{flashSaleTime}</span>
                    </div>
                )}


                {/* Product Info */}
                <div>
                    <p className="w-[167px] text-[13px] font-medium text-[#393E40] overflow-hidden line-clamp-2 leading-[18px]">
                        {name}
                    </p>
                    <p className="w-[167px] h-[24px] text-[#F79009] font-bold text-[14px]">
                        <span className="underline">đ</span>
                        {price.toLocaleString("en-US")}
                    </p>

                    {sold && (
                        <p className="w-[167px] h-[21px] text-[#5C6366] text-xs">
                            {sold.replace(/\./g, ",")} Đã bán
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
