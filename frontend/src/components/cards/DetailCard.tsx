// // "use client";

// // import { FC, useEffect, useState } from "react";
// // import { useModal } from "@/context/ModalProvider";
// // import CardSwiper from "../carddetails/Swiper";
// // import { useBasket } from "@/lib/features/basket/BasketServer";
// // import { useAppSelector } from "@/lib/hooks";
// // import MakingOrdering from "../modals/basket/MakingOrdering";
// // import { ProductType } from "@/lib/features/product/ProductSlice";
// // import Image from "next/image";

// // export type DetailCardProps = {
// //   product: ProductType;
// // };

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
// //         <div className="relative w-[95%] md:w-[80%] h-[80%] rounded-[10px] bg-gradient_emerald p-[30px] shadow-[0_0_10px_0_#00000014]">
// //           <button
// //             onClick={closeModal}
// //             className="absolute p-0 right-[10px] top-[0px] rotate-45 bg-none text-4xl text-white"
// //           >
// //             +
// //           </button>

// //           <div className="flex flex-col md:flex-row md:justify-between gap-[30px]">
// //             <div className=" md:w-[50%]">
// //               <Image
// //                 src={product?.image}
// //                 width={346}
// //                 height={280}
// //                 alt={product?.name}
// //                 className="rounded-xl  m-auto object-cover h-[280px] "
// //                 //  onClick={() => {
// //                 //    setIsLoading(true);
// //                 //    setPreview(e);
// //                 //  }}
// //               />
// //             </div>

// //             <div className="w-full flex flex-col text-white justify-between">
// //               <div className="flex flex-col gap-[20px]">
// //                 <h2 className="text-[20px] font-medium ">
// //                   {product.name}
// //                 </h2>
// //                 <p className="text-[20px] font-[Montserrat] font-bold ">
// //                   {product.price} сом
// //                 </p>
// //                 <p className=" ">{product?.description}</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="w-full mt-[15px] flex flex-col gap-[15px]">
// //             <button
// //               className="  bg-red_first text-white rounded-[10px] bg-yellow-500 "
// //               onClick={handleBuyNow}
// //             >
// //               Купить
// //             </button>
// //             <button
// //               className={`flex gap-[10px] items-center justify-center bg-grey_first text-black rounded-[10px] ${
// //                 added ? "!bg-red_first text-white" : " "
// //               }`}
// //               onClick={handleAddToBasket}
// //             >
// //               {added ? "Добавлено" : "В корзину"}
// //             </button>
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

//   const handleAddToBasket = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     e.preventDefault();

//     if (!added) {
//       AddBasketProduct({
//         name: product.name,
//         img: product.image ?? "",
//         price: product.price,
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
//               className="absolute right-[20px] top-[15px] rotate-45 bg-transparent text-4xl text-gray-500 hover:text-white transition-colors z-10"
//             >
//               +
//             </button>

//             <div className="flex flex-col md:flex-row gap-[30px]">
//               <div className="w-full md:w-[50%] flex justify-center bg-[#1a1a1a] rounded-[15px] p-4">
//                 <Image
//                   src={product?.image}
//                   width={346}
//                   height={280}
//                   alt={product?.name}
//                   className="rounded-xl object-contain h-[280px]"
//                 />
//               </div>

//               <div className="w-full md:w-[50%] flex flex-col text-white justify-between">
//                 <div className="flex flex-col gap-[20px]">
//                   <h2 className="text-[24px] font-black uppercase text-white">
//                     {product.name}
//                   </h2>
//                   <p className="text-[28px] font-bold text-red_first">
//                     {product.price} сом
//                   </p>
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

import { FC, useEffect, useState } from "react";
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

  useEffect(() => {
    const exists =
      basket?.products?.some?.((p: any) => p.id === product.id) ?? false;
    setAdded(exists);
  }, [basket?.products, product.id]);

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
          <div className="bg-gradient_emerald rounded-[19px] p-[30px] w-full h-full relative">
            <button
              onClick={closeModal}
              className="absolute right-[5px] top-[5px] md:right-[20px] md:top-[15px] rotate-45 bg-transparent text-4xl text-white transition-colors z-10"
            >
              +
            </button>

            <div className="flex flex-col md:flex-row gap-[30px]">
              {/* Левый блок с фото и бейджами */}
              <div className="w-full md:w-[50%] flex justify-center bg-[#1a1a1a] rounded-[15px] p-4 relative">
                
                {/* Бейдж оригинала и NEW */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
                  {(product as any)?.isNew && (
                    <span className="bg-red_first text-white text-[10px] font-black px-2 py-1 rounded uppercase">
                      NEW
                    </span>
                  )}
                  {product?.is_original && (
                    <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-1 rounded uppercase">
                      Оригинал
                    </span>
                  )}
                </div>

                {/* Бейдж скидки */}
                {hasDiscount && (
                  <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md z-10">
                    -{product.discount_percent}%
                  </span>
                )}

                <Image
                  src={product?.image}
                  width={346}
                  height={280}
                  alt={product?.name}
                  className="rounded-xl object-contain h-[280px]"
                />
              </div>

              {/* Правый блок с описанием и ценой */}
              <div className="w-full md:w-[50%] flex flex-col text-white justify-between">
                <div className="flex flex-col gap-[20px]">
                  <h2 className="text-[24px] font-black uppercase text-white">
                    {product.name}
                  </h2>

                  {/* Цены со скидкой / без */}
                  <div className="flex items-baseline gap-3">
                    {hasDiscount ? (
                      <>
                        <span className="text-[28px] font-bold text-red-500">
                          {product.final_price} сом
                        </span>
                        <span className="text-lg font-normal text-gray-400 line-through">
                          {product.price} сом
                        </span>
                      </>
                    ) : (
                      <span className="text-[28px] font-bold text-white">
                        {product.price} сом
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {product?.description}
                  </p>
                </div>

                <div className="w-full mt-[30px] flex flex-col gap-[15px]">
                  <button
                    className="bg-red_first text-white font-bold uppercase tracking-wide rounded-[10px] py-4 hover:bg-red-700 transition"
                    onClick={handleBuyNow}
                  >
                    Купить
                  </button>
                  <button
                    className={`flex gap-[10px] font-bold uppercase tracking-wide py-4 items-center justify-center rounded-[10px] transition-colors ${
                      added
                        ? "bg-green-600 text-white"
                        : "bg-[#222] text-white hover:bg-[#333]"
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
    </>
  );
};

export default DetailCard;