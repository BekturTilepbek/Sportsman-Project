// // import { useModal } from "@/context/ModalProvider";
// // import { useBasket } from "@/lib/features/basket/BasketServer";
// // import Image from "next/image";
// // import React, { useEffect, useState } from "react";
// // import DetailCard from "./DetailCard";
// // import { useAppSelector } from "@/lib/hooks";
// // import { ProductType } from "@/lib/features/product/ProductSlice";
// // import Link from "next/link";

// // type CardType = {
// //   products: ProductType;
// // };

// // export default function Card({ products }: CardType) {
// //   const { openModal } = useModal();
// //   const { AddBasketProduct } = useBasket();
// //   const { basket } = useAppSelector((state) => state.basket);
// //   const handleOpenModal = () => {

// //     openModal(<DetailCard product={products} />);
// //   };
// //   const [added, setAdded] = useState(false);

// //   const handleAddToBasket = (e: React.MouseEvent) => {
// //     e.stopPropagation();
// //     e.preventDefault();

// //     AddBasketProduct({
// //       name: products.name,
// //       img: products.image ?? "",
// //       price: products.price,
// //       id: products.id,
// //       quantity: 1,
// //     });
// //   };

// //   useEffect(() => {
// //     const exists =
// //       basket?.products?.some?.((p: any) => p.id === products.id) ?? false;
// //     setAdded(exists);
// //   }, [basket?.products, products.id]);

// //   return (
// //     <div
// //       onClick={handleOpenModal}
// //       className="relative flex gap-[10px] md:gap-0 items-center md:items-start flex-col justify-start 
// //                  w-full md:h-[423px] p-[40px] md:p-[10px] rounded-xl bg-gradient_emerald text-white
// //                  shadow-[0_0_10px_0_#00000014] cursor-pointer"
// //     >
// //       {products.image && (
// //         <div className="w-full md:min-w-[210px] md:w-full flex rounded-xl  justify-start">
// //           <Image
// //             src={products.image}
// //             width={210}
// //             height={170}
// //             className="object-cover w-full h-[35vh] md:h-[182px] rounded-md"
// //             alt={products.name}
// //             priority
// //           />
// //         </div>
// //       )}

// //       <div className="mt-3">
// //         <h2 className="text-[20px] font-medium line-clamp-1">{products?.name}</h2>
// //         <p className="line-clamp-2 p-1 ">
// //           {products?.description}
// //         </p>
// //       </div>
// //       <div className="w-full mt-auto">
// //         <p className="text-[20px] font-[Montserrat] font-bold">
// //           {products?.price} сом
// //         </p>
// //         <button
// //           onClick={(e) => handleAddToBasket(e)}
// //           className="w-full bg-red_first text-white mt-[20px] rounded-md flex justify-center gap-2"
// //         >
// //           <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
// //             <path
// //               d="M1.25 1.25H1.63016C2.30134 1.25 2.63753 1.25 2.91128 1.37109C3.15264 1.47786 3.359 1.64975 3.50781 1.86772C3.67632 2.11453 3.73716 2.4441 3.85861 3.10197L6.91672 19.6667L21.6809 19.6667C22.3229 19.6667 22.6449 19.6667 22.9109 19.5532C23.1458 19.453 23.3484 19.2907 23.4989 19.0843C23.669 18.851 23.7411 18.5386 23.8851 17.9144L26.1093 8.27661C26.3283 7.32772 26.4378 6.85314 26.3175 6.48088C26.212 6.15425 25.99 5.87732 25.6954 5.70105C25.3595 5.5 24.874 5.5 23.9007 5.5H4.79167M22.5 26.75C21.7176 26.75 21.0833 26.1157 21.0833 25.3333C21.0833 24.5509 21.7176 23.9167 22.5 23.9167C23.2824 23.9167 23.9167 24.5509 23.9167 25.3333C23.9167 26.1157 23.2824 26.75 22.5 26.75ZM8.33333 26.75C7.55093 26.75 6.91667 26.1157 6.91667 25.3333C6.91667 24.5509 7.55093 23.9167 8.33333 23.9167C9.11574 23.9167 9.75 24.5509 9.75 25.3333C9.75 26.1157 9.11574 26.75 8.33333 26.75Z"
// //               stroke="white"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //           </svg>
// //           <span>{!added ? "В корзину" : "Добавлено"}</span>
// //         </button>
// //       </div>
// //     </div>
                  
// //   );
// // }


// import { useModal } from "@/context/ModalProvider";
// import { useBasket } from "@/lib/features/basket/BasketServer";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import DetailCard from "./DetailCard";
// import { useAppSelector } from "@/lib/hooks";
// import { ProductType } from "@/lib/features/product/ProductSlice";
// import Link from "next/link";

// type CardType = {
//   products: ProductType;
// };

// export default function Card({ products }: CardType) {
//   const { openModal } = useModal();
//   const { AddBasketProduct } = useBasket();
//   const { basket } = useAppSelector((state) => state.basket);
//   const [added, setAdded] = useState(false);

  
  
//   const handleOpenModal = () => {
//     openModal(<DetailCard product={products} />);
//   };
//   const borderGradient =
//   "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

//   const handleAddToBasket = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     e.preventDefault();

//     AddBasketProduct({
//       name: products.name,
//       img: products.image ?? "",
//       price: products.price,
//       id: products.id,
//       quantity: 1,
//     });
//   };

//   useEffect(() => {
//     const exists =
//       basket?.products?.some?.((p: any) => p.id === products.id) ?? false;
//     setAdded(exists);
//   }, [basket?.products, products.id]);


  
//   return (
//     <div
//       className="rounded-[15px] p-[1px] transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,244,145,0.15)] cursor-pointer"
//       style={{ background: borderGradient }}
//     >
//       <div className="bg-[#111111] rounded-[14px] p-4 flex flex-col gap-3 relative h-full">
//         {(products as any)?.isNew && (
//           <span className="absolute top-3 left-3 bg-red_first text-white text-[10px] font-black px-2 py-1 rounded uppercase z-10">
//             NEW
//           </span>
//         )}

//         <div className="w-full h-[200px] bg-[#1a1a1a] rounded-[10px] flex items-center justify-center relative overflow-hidden">
//           {products.image ? (
//             <Image
//               src={products.image}
//               alt={products.name}
//               fill
//               className="object-cover rounded-[10px]"
//               priority
//             />
//           ) : (
//             <div className="text-gray-600 text-sm">
//               Фото {products.name}
//             </div>
//           )}
//         </div>

//         <div className="flex-1 flex flex-col mt-2">
//           <h3 className="text-lg font-bold text-white uppercase leading-tight line-clamp-2">
//             {products?.name}
//           </h3>

//           <div className="text-[13px] text-gray-400 mt-3 space-y-1 flex-1">
//             <p className="line-clamp-2 p-1">
//               {products?.description}
//             </p>
//           </div>
//         </div>

//         <div className="text-xl md:text-2xl font-black text-white my-2">
//           {products?.price} сом
//         </div>

//         <div className="flex gap-2 w-full mt-auto">
//           <button
//             onClick={handleAddToBasket}
//             className="flex-[2] bg-red_first text-white text-sm font-bold py-3 rounded-[8px] hover:bg-red-700 transition flex justify-center items-center gap-2"
//           >

//             <span>{!added ? "В корзину" : "Добавлено"}</span>
//           </button>
//           <div
//             className="flex-[1] flex"
//           >
//             <button onClick={handleOpenModal} className="w-full  bg-[#222] text-white text-sm font-bold py-3 rounded-[8px] hover:bg-[#333] transition">
//               ℹ
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// }

import { useModal } from "@/context/ModalProvider";
import { useBasket } from "@/lib/features/basket/BasketServer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DetailCard from "./DetailCard";
import { useAppSelector } from "@/lib/hooks";
import { ProductType } from "@/lib/features/product/ProductSlice";
import Link from "next/link";

type CardType = {
  products: ProductType;
};

export default function Card({ products }: CardType) {
  const { openModal } = useModal();
  const { AddBasketProduct } = useBasket();
  const { basket } = useAppSelector((state) => state.basket);
  const [added, setAdded] = useState(false);

  const handleOpenModal = () => {
    openModal(<DetailCard product={products} />);
  };

  const borderGradient =
    "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

  // Проверка активности скидки
  const hasDiscount = Boolean(
    products?.is_discount_active || (products?.discount_percent && products?.discount_percent > 0)
  );

  const handleAddToBasket = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    AddBasketProduct({
      name: products.name,
      img: products.image ?? "",
      price: hasDiscount ? products.final_price : products.price,
      id: products.id,
      quantity: 1,
    });
  };

  useEffect(() => {
    const exists =
      basket?.products?.some?.((p: any) => p.id === products.id) ?? false;
    setAdded(exists);
  }, [basket?.products, products.id]);

  return (
    <div
      className="rounded-[15px] p-[1px] transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,244,145,0.15)] cursor-pointer"
      style={{ background: borderGradient }}
    >
      <div className="bg-gradient_emerald rounded-[14px] p-4 flex flex-col gap-3 relative h-full">
        
        {/* Блок верхних бейджей (NEW и Оригинал) */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
          {(products as any)?.isNew && (
            <span className="bg-red_first text-white text-[10px] font-black px-2 py-1 rounded uppercase">
              NEW
            </span>
          )}
          {products?.is_original && (
            <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-1 rounded uppercase shadow-md">
              Оригинал
            </span>
          )}
        </div>

        <div className="w-full h-[200px] bg-[#1a1a1a] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Бейдж скидки в правом верхнем углу */}
          {hasDiscount && (
            <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
              -{products.discount_percent}%
            </span>
          )}

          {products.image ? (
            <Image
              src={products.image}
              alt={products.name}
              fill
              className="object-cover rounded-[10px]"
              priority
            />
          ) : (
            <div className="text-gray-600 text-sm">
              Фото {products.name}
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col mt-2">
          <h3 className="text-lg font-bold text-white uppercase leading-tight line-clamp-2">
            {products?.name}
          </h3>

          <div className="text-[13px] text-gray-400 mt-3 space-y-1 flex-1">
            <p className="line-clamp-2 p-1">
              {products?.description}
            </p>
          </div>
        </div>

        {/* Блок цены */}
        <div className="my-2 flex items-baseline gap-2">
          {hasDiscount ? (
            <>
              <span className="text-xl md:text-2xl font-black text-red-500">
                {products?.final_price} сом
              </span>
              <span className="text-sm md:text-base font-normal text-gray-400 line-through">
                {products?.price} сом
              </span>
            </>
          ) : (
            <span className="text-xl md:text-2xl font-black text-white">
              {products?.price} сом
            </span>
          )}
        </div>

        <div className="flex gap-2 w-full mt-auto">
          <button
            onClick={handleAddToBasket}
            className="flex-[2] bg-red_first text-white text-sm font-bold py-3 rounded-[8px] hover:bg-red-700 transition flex justify-center items-center gap-2"
          >
            <span>{!added ? "В корзину" : "Добавлено"}</span>
          </button>
          <div className="flex-[1] flex">
            <button
              onClick={handleOpenModal}
              className="w-full bg-[#222] text-white text-sm font-bold py-3 rounded-[8px] hover:bg-[#333] transition"
            >
              ℹ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}