// import { useBasket } from "@/lib/features/basket/BasketServer";
// import { useAppSelector } from "@/lib/hooks";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// export default function CardBasket({ product }: any) {
//   const { DeleteBasketProduct, PlusQuanty, MinusQuanty } = useBasket();

//   return (
//     <div className="relative w-full  p-[.625rem] md:p-[15px] gap-[1rem] z-0  bg-white rounded-[.625rem] shadow-[0_0_.625rem_0_#00000014]">
//       <div className="w-full  flex gap-[1rem] flex-row">
//         <div className="w-[180px] flex items-center justify-center rounded-[.625rem]  ">
//           <Image
//             src={product.img}
//             width={180}
//             height={147}
//             alt={product.img}
//             className=" hidden md:block object-cover h-full md:h-[7.5rem] rounded-[.8125rem] "
//           />
//           <Image
//             src={product.img}
//             width={146}
//             height={114}
//             alt={product.img}
//             className=" object-cover h-[7.125rem] md:h-[7.5rem] rounded-[.8125rem] block md:hidden "
//           />
//         </div>
//         <div className="w-full flex flex-col justify-between">
//           <div >
//             <p className="text-[1rem] md:text-[1.25rem]  font-medium">
//               {product.name}
//             </p>

//           </div>
//           <div className="w-full flex justify-between md:items-end  flex-col md:flex-row">
//             <div>
//             <p className="text-grey_second text-sm pb-[.375rem]  md:pt-0">
//               Количество:
//             </p>
//             <div className="w-full flex gap-[.625rem] items-center">
//               <div className="md:w-full  flex justify-between items-center gap-[.625rem] md:gap-[.9688rem]">
//                 <button
//                   type="button"
//                   onClick={() => MinusQuanty(product.id)}
//                   className="w-[50px] h-[40px] p-0  border rounded-[.625rem] flex items-center justify-center  hover:border-black"
//                 >
//                   <span className=" pb-[.4375rem] font-lighter font-sans text-3xl">-</span>
//                 </button>
//                 <div className="w-min flex items-center justify-center  rounded-[.625rem]">
//                   <div className="relative w-full">
//                     <input
//                       type="number"
//                       maxLength={2}
//                       value={product.quantity}
//                       onChange={() => 0}
//                       className="w-[50px]  border-none text-center outline-none p-0"
//                     />
//                     {/* <span className="absolute text-sm right-5  font-medium top-1/2 -translate-y-1/2 ">
//                       шт
//                     </span> */}
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => PlusQuanty(product.id)}
//                   className="w-[50px] h-[40px] p-0  border rounded-[.625rem] flex items-center justify-center  hover:border-black"
//                 >
//                   <span className=" pb-[.4375rem] text-lighter font-sans text-3xl">+</span>
//                 </button>
//               </div>
//               </div>
//             </div>
//             <div className="mt-[10px]" >
//             <p className=" font-[Montserrat] text-xl md:text-[1.25rem] font-bold">
//               {+product.price * +product.quantity} сом
//             </p>
//             <p className=" font-[Montserrat] text-sm text-grey_second">
//               {+product.price } сом за шт
//             </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         type="button"
//         onClick={() => DeleteBasketProduct(product.id)}
//         className=" absolute bottom-[15px] md:top-[15px] right-[15px] 
//                    flex justify-center items-center bg-grey_first 
//                    rounded-md md:w-[5rem] h-[2.8125rem] px-5
//                    hover:invert-[100%]"
//       >
//         <svg
//           className="m-auto"
//           width="18"
//           height="18"
//           viewBox="0 0 18 18"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4"
//             stroke="black"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }


import { useBasket } from "@/lib/features/basket/BasketServer";
import Image from "next/image";
import React from "react";

const borderGradient =
  "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

export default function CardBasket({ product }: any) {
  const { DeleteBasketProduct, PlusQuanty, MinusQuanty } = useBasket();

  return (
    <div className="relative w-full rounded-[15px] p-[1px] mb-4 shadow-[0_5px_20px_rgba(255,244,145,0.05)]" style={{ background: borderGradient }}>
      <div className="bg-gradient_emerald rounded-[14px] p-[15px] flex flex-col md:flex-row gap-[20px] w-full relative">
        
        {/* Изображение */}
        <div className="w-[120px] md:w-[180px] bg-[#1a1a1a] flex items-center justify-center rounded-[10px] shrink-0 mx-auto md:mx-0 p-2">
          <Image
            src={product.img}
            width={180}
            height={147}
            alt={product.name}
            className="object-contain w-full h-[100px] md:h-[120px]"
          />
        </div>

        {/* Контент */}
        <div className="w-full flex flex-col justify-between">
          <div className="pr-[40px]">
            <p className="text-[18px] md:text-[22px] font-bold text-white uppercase leading-tight">
              {product.name}
            </p>
          </div>

          <div className="w-full flex justify-between items-end mt-4">
            
            {/* Счетчик */}
            <div>
              <p className="text-gray-500 text-[12px] uppercase mb-2 font-bold tracking-wider">
                Количество:
              </p>
              <div className="flex items-center gap-1 bg-[#1a1a1a] rounded-[10px] p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => MinusQuanty(product.id)}
                  className="w-[40px] h-[35px] flex items-center justify-center bg-[#222] rounded-lg text-white hover:bg-red_first transition-colors font-bold text-xl"
                >
                  -
                </button>
                <div className="w-[40px] flex justify-center">
                  <input
                    type="number"
                    readOnly
                    value={product.quantity}
                    className="w-full bg-transparent border-none text-center outline-none text-white font-bold"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => PlusQuanty(product.id)}
                  className="w-[40px] h-[35px] flex items-center justify-center bg-[#222] rounded-lg text-white hover:bg-green-600 transition-colors font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Цены */}
            <div className="text-right">
              <p className="text-[20px] md:text-[26px] font-black text-red_first uppercase">
                {+product.price * +product.quantity} сом
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {+product.price} сом / шт
              </p>
            </div>
          </div>
        </div>

        {/* Кнопка удаления */}
        <button
          type="button"
          onClick={() => DeleteBasketProduct(product.id)}
          className="absolute flex items-center justify-center top-[15px] right-[15px] md:bottom-auto w-[40px] h-[40px]  text-white bg-[#222] rounded-[10px] "
          
        >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" min-w-5"
                >
                  <path
                    d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
        </button>
        
      </div>
    </div>
  );
}