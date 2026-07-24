// "use client";
// import CardBasket from "@/components/cards/CardBasket";
// import ConfirmClearBasket from "@/components/modals/basket/ConfirmClearBasket";
// import MakingOrdering from "@/components/modals/basket/MakingOrdering";
// import { useModal } from "@/context/ModalProvider";
// import { useBasket } from "@/lib/features/basket/BasketServer";
// import { useAppSelector } from "@/lib/hooks";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Basket() {
//   const [client, setClient] = useState(false);
//   const { openModal } = useModal();
//   const { AllPriceProducts } = useBasket();
//   const { basket } = useAppSelector((state) => state.basket);
//   let totalPrice: any = 0;

//   if (basket.total_quantity) {
//     const productsPrice = basket.products.map(
//       (e: any) => +e.quantity * +e.price,
//     );
//     totalPrice = productsPrice.reduce((acc: any, number: any) => acc + number);
//   }
//   useEffect(() => {
//     AllPriceProducts(totalPrice);
//   }, [totalPrice]);

//   useEffect(() => {
//     setClient(true);
//   }, []);

//   if (!client) {
//     return null;
//   }

//   return (
//     <>
//       {basket.total_quantity ? (
//         <div className="min-h-[300px] relative flex gap-[50px] justify-between">
//           <div className=" absolute right-0 top-0 flex justify-end">
//             <button
//               onClick={() => openModal(<ConfirmClearBasket />)}
//               className="w-full px-5  h-[36px] rounded-[5px] flex justify-center items-center gap-[10px] bg-white rounded-[.625rem] shadow-[0_0_4px_0_#00000029] "
//             >
//               <svg
//                 width="18"
//                 height="18"
//                 viewBox="0 0 18 18"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4"
//                   stroke="black"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               Очистить корзину
//             </button>
//           </div>
//           <div className="flex w-full  mt-[40px] mb-[45px] flex-col gap-[15px] md:gap-[54px] ">
//             {basket.products.map((e: any) => (
//               <div key={e.extraId}>
//                 <CardBasket key={e.extraId} product={e} />
//               </div>
//             ))}
//           </div>

//           <div className="bg-white rounded-[.625rem]  min-w-[340px] p-[20px] sticky top-[350px] h-fit hidden md:flex flex-col gap-[20px] items-center shadow-[0_0_.625rem_0_#00000014]">
//             <p className="text-center font-bold text-[28px]">
//               Выбранные товары
//             </p>
//             <div className=" w-full flex justify-between  items-center gap-[8px]">
//               <p className="whitespace-nowrap">Количество товаров:</p>

//               <p className=" whitespace-nowrap">{basket.total_quantity}шт.</p>
//             </div>
//             <div className=" w-full flex justify-between font-semibold  text-2xl items-center gap-[8px]">
//               <p className="whitespace-nowrap ">Итого:</p>
//               <p className="whitespace-nowrap text-red_first">
//                 {basket.price} сом
//               </p>
//             </div>

//             <button
//               onClick={() => openModal(<MakingOrdering />)}
//               className="w-full rounded-[10px] bg-green_first border-none text-white "
//             >
//               Продолжить
//             </button>
//           </div>

//           <div className="md:hidden fixed right-0 left-0 bottom-0 w-full flex gap-4 bg-white p-5 shadow-[0_0_.625rem_0_#00000014]">
//             <div>
//               <div className=" w-full flex  items-center gap-[8px]">
//                 <p className="whitespace-nowrap">Количество:</p>
//                 <p className=" whitespace-nowrap">{basket.total_quantity}шт</p>
//               </div>

//               <div className=" w-full flex justify-between font-semibold  text-2xl items-center gap-[8px]">
//                 <p className="whitespace-nowrap ">Итого:</p>
//                 <p className="whitespace-nowrap text-red_first">
//                   {basket.price} сом
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={() => openModal(<MakingOrdering />)}
//               className=" w-full rounded-[10px] bg-green_first border-none text-white "
//             >
//               Продолжить
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className="h-[50vh] flex flex-col justify-center items-center ">
//             <svg
//               width="83"
//               height="83"
//               viewBox="0 0 54 54"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M36 36C36 36 32.625 31.5 27 31.5C21.375 31.5 18 36 18 36M33.75 20.25H33.7725M20.25 20.25H20.2725M49.5 27C49.5 39.4264 39.4264 49.5 27 49.5C14.5736 49.5 4.5 39.4264 4.5 27C4.5 14.5736 14.5736 4.5 27 4.5C39.4264 4.5 49.5 14.5736 49.5 27ZM34.875 20.25C34.875 20.8713 34.3713 21.375 33.75 21.375C33.1287 21.375 32.625 20.8713 32.625 20.25C32.625 19.6287 33.1287 19.125 33.75 19.125C34.3713 19.125 34.875 19.6287 34.875 20.25ZM21.375 20.25C21.375 20.8713 20.8713 21.375 20.25 21.375C19.6287 21.375 19.125 20.8713 19.125 20.25C19.125 19.6287 19.6287 19.125 20.25 19.125C20.8713 19.125 21.375 19.6287 21.375 20.25Z"
//                 stroke="#1E2128"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             <p className="text-[32px]">Корзина пуста</p>
//             <Link href="/">
//               <button className=" mt-5 rounded-[10px] h-[61px]  ">
//                 Продолжить покупки
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";

import CardBasket from "@/components/cards/CardBasket";
import ConfirmClearBasket from "@/components/modals/basket/ConfirmClearBasket";
import MakingOrdering from "@/components/modals/basket/MakingOrdering";
import { useModal } from "@/context/ModalProvider";
import { useBasket } from "@/lib/features/basket/BasketServer";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";

const borderGradient =
  "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

export default function Basket() {
  const [client, setClient] = useState(false);
  const { openModal } = useModal();
  const { AllPriceProducts } = useBasket();
  const { basket } = useAppSelector((state) => state.basket);
  let totalPrice: any = 0;

  if (basket.total_quantity) {
    const productsPrice = basket.products.map(
      (e: any) => +e.quantity * +e.price,
    );
    totalPrice = productsPrice.reduce((acc: any, number: any) => acc + number);
  }

  useEffect(() => {
    AllPriceProducts(totalPrice);
  }, [totalPrice]);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null;
  }

  return (
    <div className="container  mx-auto px-[20px] lg:px-0 text-white pb-20">
      {basket.total_quantity ? (
        <div className="min-h-[300px] rounded-2xl relative flex flex-col md:flex-row gap-[30px] lg:gap-[50px] justify-between">
          
          {/* Левая часть: Список товаров */}
          <div className="flex-1 flex flex-col w-full">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl md:text-4xl font-black uppercase tracking-wide">
                Корзина
              </h1>
              <button
                onClick={() => openModal(<ConfirmClearBasket />)}
                className="px-5 py-2 rounded-[10px] flex items-center gap-[10px] bg-[#1a1a1a] border border-white/10 text-gray-400 hover:text-white hover:bg-red-700 transition-colors text-sm font-semibold shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Очистить
              </button>
            </div>

            <div className="flex w-full flex-col gap-[15px]">
              {basket.products.map((e: any) => (
                <div key={e.extraId}>
                  <CardBasket product={e} />
                </div>
              ))}
            </div>
          </div>

          {/* Правая часть: Десктопная панель итогов с градиентной обводкой */}
          <div className="w-full md:w-[340px] hidden md:block shrink-0">
            <div className="sticky top-[120px] rounded-[15px] p-[1px] shadow-[0_10px_30px_rgba(255,244,145,0.15)]" style={{ background: borderGradient }}>
              <div className="bg-gradient_emerald rounded-[14px] p-[25px] flex flex-col gap-[20px]">
                <p className="text-center font-black text-[24px] uppercase border-b border-white/10 pb-4">
                  Ваш заказ
                </p>
                <div className="w-full flex justify-between items-center text-gray-400">
                  <p>Количество товаров:</p>
                  <p className="text-white font-bold">{basket.total_quantity} шт.</p>
                </div>
                <div className="w-full flex justify-between font-black text-2xl items-center pt-2">
                  <p>Итого:</p>
                  <p className="text-red_first">{basket.price} сом</p>
                </div>

                <button
                  onClick={() => openModal(<MakingOrdering />)}
                  className="w-full mt-4 rounded-[10px] bg-red_first py-4 text-white font-bold uppercase tracking-wide hover:bg-red-700 transition-colors"
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>

          {/* Мобильный бар (показывается только на мобилках) */}
          <div className="md:hidden fixed right-0 left-0 bottom-0 w-full flex gap-4 bg-gradient_emerald border-t border-white/10 p-5 z-[50] shadow-[0_-10px_30px_rgba(0,0,0,0.8)] pb-8">
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-full flex items-center gap-[8px] text-gray-400 text-sm">
                <p>Количество:</p>
                <p className="text-white font-bold">{basket.total_quantity} шт.</p>
              </div>

              <div className="w-full flex items-center gap-[8px] font-black text-xl">
                <p>Итого:</p>
                <p className="text-red_first">{basket.price} сом</p>
              </div>
            </div>
            <button
              onClick={() => openModal(<MakingOrdering />)}
              className="flex-1 rounded-[10px] bg-red_first py-3 text-white font-bold uppercase text-sm hover:bg-red-700 transition-colors"
            >
              Оформить
            </button>
          </div>
        </div>
      ) : (
        /* Пустая корзина */
        <div className="h-[60vh] bg-gradient_emerald rounded-3xl flex flex-col justify-center items-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-6 opacity-80"
          >
            <path
              d="M36 36C36 36 32.625 31.5 27 31.5C21.375 31.5 18 36 18 36M33.75 20.25H33.7725M20.25 20.25H20.2725M49.5 27C49.5 39.4264 39.4264 49.5 27 49.5C14.5736 49.5 4.5 39.4264 4.5 27C4.5 14.5736 14.5736 4.5 27 4.5C39.4264 4.5 49.5 14.5736 49.5 27ZM34.875 20.25C34.875 20.8713 34.3713 21.375 33.75 21.375C33.1287 21.375 32.625 20.8713 32.625 20.25C32.625 19.6287 33.1287 19.125 33.75 19.125C34.3713 19.125 34.875 19.6287 34.875 20.25ZM21.375 20.25C21.375 20.8713 20.8713 21.375 20.25 21.375C19.6287 21.375 19.125 20.8713 19.125 20.25C19.125 19.6287 19.6287 19.125 20.25 19.125C20.8713 19.125 21.375 19.6287 21.375 20.25Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[28px] md:text-[36px] font-black uppercase tracking-wide text-white">
            Корзина пуста
          </p>
          <p className="text-gray-400 mt-2 mb-8 text-center max-w-sm">
            Ваша корзина пуста. Перейдите в каталог, чтобы выбрать нужные товары.
          </p>
          <Link href="/">
            <button className="rounded-[10px] w-[80%] md:w-full bg-red_first text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-red-700 transition-colors shadow-[0_5px_20px_rgba(255,0,0,0.2)]">
              Перейти на главную страницу
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}