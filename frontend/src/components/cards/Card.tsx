
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
//     "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

//   // Проверка активности скидки
//   const hasDiscount = Boolean(
//     products?.is_discount_active || (products?.discount_percent && products?.discount_percent > 0)
//   );

//   const handleAddToBasket = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     e.preventDefault();

//     AddBasketProduct({
//       name: products.name,
//       img: products.image ?? "",
//       price: hasDiscount ? products.final_price : products.price,
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
//       <div className="bg-gradient_emerald rounded-[14px] p-4 flex flex-col gap-3 relative h-full">
        
//         {/* Блок верхних бейджей (NEW и Оригинал) */}
//         <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
//           {(products as any)?.isNew && (
//             <span className="bg-red_first text-white text-[10px] font-black px-2 py-1 rounded uppercase">
//               NEW
//             </span>
//           )}
//           {products?.is_original && (
//             <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-1 rounded uppercase shadow-md">
//               Оригинал
//             </span>
//           )}
//         </div>

//         <div className="w-full h-[200px] bg-[#1a1a1a] rounded-[10px] flex items-center justify-center relative overflow-hidden">
//           {/* Бейдж скидки в правом верхнем углу */}
//           {hasDiscount && (
//             <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
//               -{products.discount_percent}%
//             </span>
//           )}

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

//         {/* Блок цены */}
//         <div className="my-2 flex items-baseline gap-2">
//           {hasDiscount ? (
//             <>
//               <span className="text-xl md:text-2xl font-black text-red-500">
//                 {products?.final_price} сом
//               </span>
//               <span className="text-sm md:text-base font-normal text-gray-400 line-through">
//                 {products?.price} сом
//               </span>
//             </>
//           ) : (
//             <span className="text-xl md:text-2xl font-black text-white">
//               {products?.price} сом
//             </span>
//           )}
//         </div>

//         <div className="flex gap-2 w-full mt-auto">
//           <button
//             onClick={handleAddToBasket}
//             className="flex-[2] bg-red_first text-white text-sm font-bold py-3 rounded-[8px] hover:bg-red-700 transition flex justify-center items-center gap-2"
//           >
//             <span>{!added ? "В корзину" : "Добавлено"}</span>
//           </button>
//           <div className="flex-[1] flex">
//             <button
//               onClick={handleOpenModal}
//               className="w-full bg-[#222] text-white text-sm font-bold py-3 rounded-[8px] hover:bg-[#333] transition"
//             >
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
import React, { useMemo, useCallback } from "react";
import DetailCard from "./DetailCard";
import { useAppSelector } from "@/lib/hooks";
import { ProductType } from "@/lib/features/product/ProductSlice";

type CardType = {
  products: ProductType;
  priority?: boolean; // Добавили пропс для оптимизации Image
};

// Обернули в React.memo, чтобы карточка не перерендеривалась, если ее данные не менялись
const Card = React.memo(({ products, priority = false }: CardType) => {
  const { openModal } = useModal();
  const { AddBasketProduct } = useBasket();
  const { basket } = useAppSelector((state) => state.basket);

  // ОПТИМИЗАЦИЯ: Избавились от useState и useEffect.
  // Вычисляем наличие в корзине на лету. Это гораздо быстрее и безопаснее.
  const added = useMemo(
    () => basket?.products?.some((p: any) => p.id === products.id) ?? false,
    [basket?.products, products.id]
  );

  const handleOpenModal = useCallback(() => {
    openModal(<DetailCard product={products} />);
  }, [openModal, products]);

  const hasDiscount = Boolean(
    products?.is_discount_active || (products?.discount_percent && products?.discount_percent > 0)
  );

  const handleAddToBasket = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    AddBasketProduct({
      name: products.name,
      img: products.image ?? "",
      price: hasDiscount ? products.final_price : products.price,
      id: products.id,
      quantity: 1,
    });
  }, [AddBasketProduct, products, hasDiscount]);

  const borderGradient =
    "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

  return (
    <div
      // ИСПРАВЛЕНИЕ БАГА НА МОБИЛЬНЫХ: Добавили flex flex-col h-full во внешний враппер
      className="rounded-[15px] p-[1px] flex flex-col h-full transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,244,145,0.15)] cursor-pointer"
      style={{ background: borderGradient }}
    >
      {/* ИСПРАВЛЕНИЕ БАГА: Добавили flex-1, чтобы внутренний блок растягивался на 100% высоты */}
      <div className="bg-gradient_emerald flex-1 rounded-[14px] p-4 flex flex-col gap-3 relative">
        
        {/* Блок верхних бейджей */}
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

        <div className="w-full h-[200px] bg-[#1a1a1a] rounded-[10px] flex items-center justify-center relative overflow-hidden shrink-0">
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" // Оптимизация размеров для Next Image
              priority={priority} // Приоритет только если передали true
            />
          ) : (
            <div className="text-gray-600 text-sm">Фото {products.name}</div>
          )}
        </div>

        <div className="flex-1 flex flex-col mt-2">
          <h3 className="text-lg font-bold text-white uppercase leading-tight line-clamp-2">
            {products?.name}
          </h3>

          <div className="text-[13px] text-gray-400 mt-3 space-y-1 flex-1">
            <p className="line-clamp-2 p-1">{products?.description}</p>
          </div>
        </div>

        {/* Блок цены */}
        <div className="my-2 flex items-baseline gap-2 shrink-0">
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

        <div className="flex gap-2 w-full mt-auto shrink-0">
          <button
            onClick={handleAddToBasket}
            className={`flex-[2] text-white text-sm font-bold py-3 rounded-[8px] transition flex justify-center items-center gap-2 ${
              added ? "bg-green-600 hover:bg-green-700" : "bg-red_first hover:bg-red-700"
            }`}
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
});

Card.displayName = "Card";
export default Card;
