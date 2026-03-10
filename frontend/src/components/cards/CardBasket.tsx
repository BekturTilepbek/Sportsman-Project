import { useBasket } from "@/lib/features/basket/BasketServer";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CardBasket({ product }: any) {
  const { DeleteBasketProduct, PlusQuanty, MinusQuanty } = useBasket();

  return (
    <div className="relative w-full  p-[.625rem] md:p-[15px] gap-[1rem] z-0  shadow-[0_0_.625rem_0_#00000014]">
      <div className="w-full  flex gap-[1rem] flex-row">
        <div className="w-[180px] flex items-center justify-center rounded-[.625rem]  ">
          <Image
            src={product.img}
            width={180}
            height={147}
            alt={product.img}
            className=" hidden md:block object-cover h-full md:h-[7.5rem] rounded-[.8125rem] "
          />
          <Image
            src={product.img}
            width={146}
            height={114}
            alt={product.img}
            className=" object-cover h-[7.125rem] md:h-[7.5rem] rounded-[.8125rem] block md:hidden "
          />
        </div>
        <div className="w-full flex flex-col justify-between">
          <div >
            <p className="text-[1rem] md:text-[1.25rem]  font-medium">
              {product.name}
            </p>

          </div>
          <div className="w-full flex justify-between md:items-end  flex-col md:flex-row">
            <div>
            <p className="text-grey_second text-sm pb-[.375rem]  md:pt-0">
              Количество:
            </p>
            <div className="w-full flex gap-[.625rem] items-center">
              <div className="md:w-full  flex justify-between items-center gap-[.625rem] md:gap-[.9688rem]">
                <button
                  type="button"
                  onClick={() => MinusQuanty(product.id)}
                  className="w-[50px] h-[40px] p-0  border rounded-[.625rem] flex items-center justify-center  hover:border-black"
                >
                  <span className=" pb-[.4375rem] font-lighter font-sans text-3xl">-</span>
                </button>
                <div className="w-min flex items-center justify-center  rounded-[.625rem]">
                  <div className="relative w-full">
                    <input
                      type="number"
                      maxLength={2}
                      value={product.quantity}
                      onChange={() => 0}
                      className="w-[50px]  border-none text-center outline-none p-0"
                    />
                    {/* <span className="absolute text-sm right-5  font-medium top-1/2 -translate-y-1/2 ">
                      шт
                    </span> */}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => PlusQuanty(product.id)}
                  className="w-[50px] h-[40px] p-0  border rounded-[.625rem] flex items-center justify-center  hover:border-black"
                >
                  <span className=" pb-[.4375rem] text-lighter font-sans text-3xl">+</span>
                </button>
              </div>
              </div>
            </div>
            <div className="mt-[10px]" >
            <p className=" font-[Montserrat] text-xl md:text-[1.25rem] font-bold">
              {+product.price * +product.quantity} сом
            </p>
            <p className=" font-[Montserrat] text-sm text-grey_second">
              {+product.price } сом за шт
            </p>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => DeleteBasketProduct(product.id)}
        className=" absolute bottom-[15px] md:top-[15px] right-[15px] 
                   flex justify-center items-center bg-grey_first 
                   rounded-md md:w-[5rem] h-[2.8125rem] px-5
                   hover:invert-[100%]"
      >
        <svg
          className="m-auto"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
