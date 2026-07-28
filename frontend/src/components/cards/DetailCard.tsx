// // // "use client";

// // // import { FC, useEffect, useState } from "react";
// // // import { useModal } from "@/context/ModalProvider";
// // // import CardSwiper from "../carddetails/Swiper";
// // // import { useBasket } from "@/lib/features/basket/BasketServer";
// // // import { useAppSelector } from "@/lib/hooks";
// // // import MakingOrdering from "../modals/basket/MakingOrdering";
// // // import { ProductType } from "@/lib/features/product/ProductSlice";
// // // import Image from "next/image";

// // // export type DetailCardProps = {
// // //   product: ProductType;
// // // };

// // // const DetailCard: FC<DetailCardProps> = ({ product }) => {
// // //   const { closeModal, openModal } = useModal();
// // //   const { basket } = useAppSelector((state) => state.basket);
// // //   const { AddBasketProduct } = useBasket();
// // //   const [added, setAdded] = useState(false);

// // //   useEffect(() => {
// // //     const exists =
// // //       basket?.products?.some?.((p: any) => p.id === product.id) ?? false;
// // //     setAdded(exists);
// // //   }, [basket?.products, product.id]);

// // //   const handleAddToBasket = (e: React.MouseEvent) => {
// // //     e.stopPropagation();
// // //     e.preventDefault();

// // //     if (!added) {
// // //       AddBasketProduct({
// // //         name: product.name,
// // //         img: product.image ?? "",
// // //         price: product.price,
// // //         id: product.id,
// // //         quantity: 1,
// // //       });
// // //       setAdded(true);
// // //     }
// // //   };

// // //   const handleBuyNow = (e: React.MouseEvent) => {
// // //     e.stopPropagation();
// // //     e.preventDefault();
// // //     openModal(<MakingOrdering singleProduct={product} />);
// // //   };

// // //   return (
// // //     <>
// // //       {product?.image ? (
// // //         <div className="relative w-[95%] md:w-[80%] h-[80%] rounded-[10px] bg-gradient_emerald p-[30px] shadow-[0_0_10px_0_#00000014]">
// // //           <button
// // //             onClick={closeModal}
// // //             className="absolute p-0 right-[10px] top-[0px] rotate-45 bg-none text-4xl text-white"
// // //           >
// // //             +
// // //           </button>

// // //           <div className="flex flex-col md:flex-row md:justify-between gap-[30px]">
// // //             <div className=" md:w-[50%]">
// // //               <Image
// // //                 src={product?.image}
// // //                 width={346}
// // //                 height={280}
// // //                 alt={product?.name}
// // //                 className="rounded-xl  m-auto object-cover h-[280px] "
// // //                 //  onClick={() => {
// // //                 //    setIsLoading(true);
// // //                 //    setPreview(e);
// // //                 //  }}
// // //               />
// // //             </div>

// // //             <div className="w-full flex flex-col text-white justify-between">
// // //               <div className="flex flex-col gap-[20px]">
// // //                 <h2 className="text-[20px] font-medium ">
// // //                   {product.name}
// // //                 </h2>
// // //                 <p className="text-[20px] font-[Montserrat] font-bold ">
// // //                   {product.price} сом
// // //                 </p>
// // //                 <p className=" ">{product?.description}</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="w-full mt-[15px] flex flex-col gap-[15px]">
// // //             <button
// // //               className="  bg-red_first text-white rounded-[10px] bg-yellow-500 "
// // //               onClick={handleBuyNow}
// // //             >
// // //               Купить
// // //             </button>
// // //             <button
// // //               className={`flex gap-[10px] items-center justify-center bg-grey_first text-black rounded-[10px] ${
// // //                 added ? "!bg-red_first text-white" : " "
// // //               }`}
// // //               onClick={handleAddToBasket}
// // //             >
// // //               {added ? "Добавлено" : "В корзину"}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       ) : null}
// // //     </>
// // //   );
// // // };

// // // export default DetailCard;

// // "use client";

// // import { FC, useEffect, useState } from "react";
// // import { useModal } from "@/context/ModalProvider";
// // import { useBasket } from "@/lib/features/basket/BasketServer";
// // import { useAppSelector } from "@/lib/hooks";
// // import MakingOrdering from "../modals/basket/MakingOrdering";
// // import { ProductType } from "@/lib/features/product/ProductSlice";
// // import Image from "next/image";

// // export type DetailCardProps = {
// //   product: ProductType;
// // };

// // const borderGradient =
// //   "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

// // const DetailCard: FC<DetailCardProps> = ({ product }) => {
// //   const { closeModal, openModal } = useModal();
// //   const { basket } = useAppSelector((state) => state.basket);
// //   const { AddBasketProduct } = useBasket();
// //   const [added, setAdded] = useState(false);

// //   useEffect(() => {
// //     const exists =
// //       basket?.products?.some?.((p: any) => p.id === product.id) ?? false;
// //     setAdded(exists);
// //   }, [basket?.products, product.id]);

// //   const handleAddToBasket = (e: React.MouseEvent) => {
// //     e.stopPropagation();
// //     e.preventDefault();

// //     if (!added) {
// //       AddBasketProduct({
// //         name: product.name,
// //         img: product.image ?? "",
// //         price: product.price,
// //         id: product.id,
// //         quantity: 1,
// //       });
// //       setAdded(true);
// //     }
// //   };

// //   const handleBuyNow = (e: React.MouseEvent) => {
// //     e.stopPropagation();
// //     e.preventDefault();
// //     openModal(<MakingOrdering singleProduct={product} />);
// //   };

// //   return (
// //     <>
// //       {product?.image ? (
// //         <div
// //           className="relative w-[95%] md:w-[80%] rounded-[20px] p-[1px] shadow-[0_10px_30px_rgba(255,244,145,0.15)]"
// //           style={{ background: borderGradient }}
// //         >
// //           <div className="bg-gradient_emerald rounded-[19px] p-[30px] w-full h-full relative">
// //             <button
// //               onClick={closeModal}
// //               className="absolute right-[20px] top-[15px] rotate-45 bg-transparent text-4xl text-gray-500 hover:text-white transition-colors z-10"
// //             >
// //               +
// //             </button>

// //             <div className="flex flex-col md:flex-row gap-[30px]">
// //               <div className="w-full md:w-[50%] flex justify-center bg-[#1a1a1a] rounded-[15px] p-4">
// //                 <Image
// //                   src={product?.image}
// //                   width={346}
// //                   height={280}
// //                   alt={product?.name}
// //                   className="rounded-xl object-contain h-[280px]"
// //                 />
// //               </div>

// //               <div className="w-full md:w-[50%] flex flex-col text-white justify-between">
// //                 <div className="flex flex-col gap-[20px]">
// //                   <h2 className="text-[24px] font-black uppercase text-white">
// //                     {product.name}
// //                   </h2>
// //                   <p className="text-[28px] font-bold text-red_first">
// //                     {product.price} сом
// //                   </p>
// //                   <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //                     {product?.description}
// //                   </p>
// //                 </div>

// //                 <div className="w-full mt-[30px] flex flex-col gap-[15px]">
// //                   <button
// //                     className="bg-red_first text-white font-bold uppercase tracking-wide rounded-[10px] py-4 hover:bg-red-700 transition"
// //                     onClick={handleBuyNow}
// //                   >
// //                     Купить
// //                   </button>
// //                   <button
// //                     className={`flex gap-[10px] font-bold uppercase tracking-wide py-4 items-center justify-center rounded-[10px] transition-colors ${
// //                       added
// //                         ? "bg-green-600 text-white"
// //                         : "bg-[#222] text-white hover:bg-[#333]"
// //                     }`}
// //                     onClick={handleAddToBasket}
// //                   >
// //                     {added ? "Добавлено ✓" : "В корзину"}
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ) : null}
// //     </>
// //   );
// // };

// // export default DetailCard;

// "use client";

// import { FC, useEffect, useState } from "react";
// import { useModal } from "@/context/ModalProvider";
// import { useBasket } from "@/lib/features/basket/BasketServer";
// import { useAppSelector } from "@/lib/hooks";
// import MakingOrdering from "../modals/basket/MakingOrdering";
// import { ProductType } from "@/lib/features/product/ProductSlice";
// import Image from "next/image";

// export type DetailCardProps = {
//   product: ProductType;
// };

// const borderGradient =
//   "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

// const DetailCard: FC<DetailCardProps> = ({ product }) => {
//   const { closeModal, openModal } = useModal();
//   const { basket } = useAppSelector((state) => state.basket);
//   const { AddBasketProduct } = useBasket();
//   const [added, setAdded] = useState(false);

//   useEffect(() => {
//     const exists =
//       basket?.products?.some?.((p: any) => p.id === product.id) ?? false;
//     setAdded(exists);
//   }, [basket?.products, product.id]);

//   // Проверка скидки
//   const hasDiscount = Boolean(
//     product?.is_discount_active || (product?.discount_percent && product?.discount_percent > 0)
//   );

//   const handleAddToBasket = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     e.preventDefault();

//     if (!added) {
//       AddBasketProduct({
//         name: product.name,
//         img: product.image ?? "",
//         price: hasDiscount ? product.final_price : product.price,
//         id: product.id,
//         quantity: 1,
//       });
//       setAdded(true);
//     }
//   };

//   const handleBuyNow = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     e.preventDefault();
//     openModal(<MakingOrdering singleProduct={product} />);
//   };

//   return (
//     <>
//       {product?.image ? (
//         <div
//           className="relative w-[95%] md:w-[80%] rounded-[20px] p-[1px] shadow-[0_10px_30px_rgba(255,244,145,0.15)]"
//           style={{ background: borderGradient }}
//         >
//           <div className="bg-gradient_emerald rounded-[19px] p-[30px] w-full h-full relative">
//             <button
//               onClick={closeModal}
//               className="absolute right-[5px] top-[5px] md:right-[20px] md:top-[15px] rotate-45 bg-transparent text-4xl text-white transition-colors z-10"
//             >
//               +
//             </button>

//             <div className="flex flex-col md:flex-row gap-[30px]">
//               {/* Левый блок с фото и бейджами */}
//               <div className="w-full md:w-[50%] flex justify-center bg-[#1a1a1a] rounded-[15px] p-4 relative">
                
//                 {/* Бейдж оригинала и NEW */}
//                 <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
//                   {(product as any)?.isNew && (
//                     <span className="bg-red_first text-white text-[10px] font-black px-2 py-1 rounded uppercase">
//                       NEW
//                     </span>
//                   )}
//                   {product?.is_original && (
//                     <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-1 rounded uppercase">
//                       Оригинал
//                     </span>
//                   )}
//                 </div>

//                 {/* Бейдж скидки */}
//                 {hasDiscount && (
//                   <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md z-10">
//                     -{product.discount_percent}%
//                   </span>
//                 )}

//                 <Image
//                   src={product?.image}
//                   width={346}
//                   height={280}
//                   alt={product?.name}
//                   className="rounded-xl object-contain h-[280px]"
//                 />
//               </div>

//               {/* Правый блок с описанием и ценой */}
//               <div className="w-full md:w-[50%] flex flex-col text-white justify-between">
//                 <div className="flex flex-col gap-[20px]">
//                   <h2 className="text-[24px] font-black uppercase text-white">
//                     {product.name}
//                   </h2>

//                   {/* Цены со скидкой / без */}
//                   <div className="flex items-baseline gap-3">
//                     {hasDiscount ? (
//                       <>
//                         <span className="text-[28px] font-bold text-red-500">
//                           {product.final_price} сом
//                         </span>
//                         <span className="text-lg font-normal text-gray-400 line-through">
//                           {product.price} сом
//                         </span>
//                       </>
//                     ) : (
//                       <span className="text-[28px] font-bold text-white">
//                         {product.price} сом
//                       </span>
//                     )}
//                   </div>

//                   <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//                     {product?.description}
//                   </p>
//                 </div>

//                 <div className="w-full mt-[30px] flex flex-col gap-[15px]">
//                   <button
//                     className="bg-red_first text-white font-bold uppercase tracking-wide rounded-[10px] py-4 hover:bg-red-700 transition"
//                     onClick={handleBuyNow}
//                   >
//                     Купить
//                   </button>
//                   <button
//                     className={`flex gap-[10px] font-bold uppercase tracking-wide py-4 items-center justify-center rounded-[10px] transition-colors ${
//                       added
//                         ? "bg-green-600 text-white"
//                         : "bg-[#222] text-white hover:bg-[#333]"
//                     }`}
//                     onClick={handleAddToBasket}
//                   >
//                     {added ? "Добавлено ✓" : "В корзину"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default DetailCard;

"use client";

import { FC, useEffect, useState, useCallback } from "react";
import { useModal } from "@/context/ModalProvider";
import { useBasket } from "@/lib/features/basket/BasketServer";
import { useAppSelector } from "@/lib/hooks";
import MakingOrdering from "../modals/basket/MakingOrdering";
import { ProductType } from "@/lib/features/product/ProductSlice";
import Image from "next/image";

export type DetailCardProps = {
  product: ProductType;
};

const borderGradient =
  "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

const DetailCard: FC<DetailCardProps> = ({ product }) => {
  const { closeModal, openModal } = useModal();
  const { basket } = useAppSelector((state) => state.basket);
  const { AddBasketProduct } = useBasket();
  const [added, setAdded] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    const exists =
      basket?.products?.some?.((p: any) => p.id === product.id) ?? false;
    setAdded(exists);
  }, [basket?.products, product.id]);

  // Закрытие полноэкранного фото по клавише Esc
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsImageOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isImageOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageOpen, handleKeyDown]);

  // Проверка скидки
  const hasDiscount = Boolean(
    product?.is_discount_active || (product?.discount_percent && product?.discount_percent > 0)
  );

  const handleAddToBasket = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!added) {
      AddBasketProduct({
        name: product.name,
        img: product.image ?? "",
        price: hasDiscount ? product.final_price : product.price,
        id: product.id,
        quantity: 1,
      });
      setAdded(true);
    }
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    openModal(<MakingOrdering singleProduct={product} />);
  };

  return (
    <>
      {product?.image ? (
        <div
          className="relative w-[95%] md:w-[80%] rounded-[20px] p-[1px] shadow-[0_10px_30px_rgba(255,244,145,0.15)]"
          style={{ background: borderGradient }}
        >
          <div className="bg-gradient_emerald rounded-[19px] p-[20px] md:p-[30px] w-full h-full relative">
            <button
              onClick={closeModal}
              className="absolute right-[15px] top-[15px] md:right-[20px] md:top-[15px] rotate-45 bg-transparent text-4xl text-white hover:text-red_first transition-colors z-10"
            >
              +
            </button>

            <div className="flex flex-col md:flex-row gap-[30px]">
              {/* Левый блок с фото и бейджами */}
              <div
                onClick={() => setIsImageOpen(true)}
                className="w-full md:w-[50%] flex justify-center items-center bg-[#1a1a1a] rounded-[15px] p-4 relative group cursor-pointer overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-300 shadow-inner"
              >
                {/* Бейдж оригинала и NEW */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
                  {(product as any)?.isNew && (
                    <span className="bg-red_first text-white text-[10px] font-black px-2 py-1 rounded uppercase shadow-md">
                      NEW
                    </span>
                  )}
                  {product?.is_original && (
                    <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-1 rounded uppercase shadow-md">
                      Оригинал
                    </span>
                  )}
                </div>

                {/* Бейдж скидки */}
                {hasDiscount && (
                  <span className="absolute top-12 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md z-10 shadow-md">
                    -{product.discount_percent}%
                  </span>
                )}

                {/* Подсказка при наведении (Иконка увеличения) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-12 rounded-[15px]">
                  <div className="bg-black/70 text-amber-400 p-3 rounded-full border border-amber-400/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-[0_0_15px_rgba(255,244,145,0.3)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  </div>
                </div>

                <Image
                  src={product?.image}
                  width={346}
                  height={280}
                  alt={product?.name}
                  className="rounded-xl object-contain h-[240px] md:h-[280px] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Правый блок с описанием и ценой */}
              <div className="w-full md:w-[50%] flex flex-col text-white justify-between">
                <div className="flex flex-col gap-[15px] md:gap-[20px]">
                  <h2 className="text-[20px] md:text-[24px] font-black uppercase text-white pr-6">
                    {product.name}
                  </h2>

                  {/* Цены со скидкой / без */}
                  <div className="flex items-baseline gap-3">
                    {hasDiscount ? (
                      <>
                        <span className="text-[24px] md:text-[28px] font-bold text-red-500">
                          {product.final_price} сом
                        </span>
                        <span className="text-base md:text-lg font-normal text-gray-400 line-through">
                          {product.price} сом
                        </span>
                      </>
                    ) : (
                      <span className="text-[24px] md:text-[28px] font-bold text-white">
                        {product.price} сом
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-h-[150px] overflow-y-auto pr-2">
                    {product?.description}
                  </p>
                </div>

                <div className="w-full mt-[25px] md:mt-[30px] flex flex-col gap-[15px]">
                  <button
                    className="bg-red_first text-white font-bold uppercase tracking-wide rounded-[10px] py-3.5 md:py-4 hover:bg-red-700 transition shadow-lg shadow-red-900/20 active:scale-[0.99]"
                    onClick={handleBuyNow}
                  >
                    Купить
                  </button>
                  <button
                    className={`flex gap-[10px] font-bold uppercase tracking-wide py-3.5 md:py-4 items-center justify-center rounded-[10px] transition-all duration-300 active:scale-[0.99] ${
                      added
                        ? "bg-green-600 text-white shadow-lg shadow-green-900/20"
                        : "bg-[#222] text-white hover:bg-[#333] border border-white/10"
                    }`}
                    onClick={handleAddToBasket}
                  >
                    {added ? "Добавлено ✓" : "В корзину"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Полноэкранное модальное окно для изображения (Desktop & Mobile) */}
      {isImageOpen && (
        <div
          onClick={() => setIsImageOpen(false)}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-10 animate-fadeIn"
        >
          {/* Кнопка закрытия */}
          <button
            onClick={() => setIsImageOpen(false)}
            className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/20 text-white text-3xl hover:bg-red_first hover:border-red_first transition-all duration-300 z-50"
            aria-label="Закрыть изображение"
          >
            ✕
          </button>

          {/* Контейнер с фотографией в золотой рамке */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[95vw] max-h-[85vh] md:max-w-[80vw] md:max-h-[90vh] rounded-[20px] p-[1px] shadow-[0_0_50px_rgba(255,244,145,0.25)] flex items-center justify-center bg-black overflow-hidden animate-scaleUp"
            style={{ background: borderGradient }}
          >
            <div className="bg-[#111] rounded-[19px] p-2 md:p-6 flex items-center justify-center w-full h-full max-h-[85vh] md:max-h-[88vh]">
              <Image
                src={product.image}
                width={1200}
                height={1200}
                alt={product.name}
                className="object-contain w-auto h-auto max-w-full max-h-[78vh] md:max-h-[82vh] rounded-lg select-none"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailCard;