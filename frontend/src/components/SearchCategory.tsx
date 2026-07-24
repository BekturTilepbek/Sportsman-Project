// "use client";
// import { useRouter, useSearchParams } from "next/navigation";
// import React, { useEffect, useRef } from "react";
// import ScrollContainer from "react-indiana-drag-scroll";
// import clsx from "clsx";
// import { useProduct } from "@/lib/features/product/ProductServer";
// import { useAppSelector } from "@/lib/hooks";

// export default function SearchCategory() {
//   const { category } = useAppSelector((state) => state.product);
//   const { SearchCategoryProducts, GetSearchCategoryProducts, GetProducts } = useProduct();
//   const searchParams = useSearchParams();
//   const currentCategory = searchParams.get("category");
//   const isActiveAll = currentCategory === "all" || !currentCategory;

//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     GetSearchCategoryProducts();
//   }, []);

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const handleWheel = (e: WheelEvent) => {
//       if (e.deltaY !== 0) {
//         e.preventDefault();
//         container.scrollLeft += e.deltaY;
//       }
//     };

//     container.addEventListener("wheel", handleWheel, { passive: false });
//     return () => container.removeEventListener("wheel", handleWheel);
//   }, [category]);

//   const handleSearchCategory = (categorySlug: string) => {
//     if (categorySlug === "all") {
//       return GetProducts();
//     }
//     SearchCategoryProducts(categorySlug);
//   };

//   if (!category.length) return null;

//   return (
//     <div className="w-full my-[10px] md:my-[20px] overflow-hidden container">
//       <ScrollContainer
//         innerRef={scrollRef}
//         vertical={false}
//         className="w-full flex items-center justify-start gap-[31px] py-[5px] md:py-[0px] overflow-x-auto scrollbar-none"
//       >
//         <button
//           onClick={() => handleSearchCategory("all")}
//           className={clsx(
//             `
//             font-bold whitespace-nowrap flex-shrink-0
//             flex justify-center items-center
//             p-0 rounded-[10px] text-black
//             text-[16px] md:text-[20px] transition-all duration-200
//             border border-transparent
//             `,
//             { "text-red_first": isActiveAll }
//           )}
//         >
//           Все
//         </button>

//         {category.map((cat) => {
//           if (cat.slug === "all") return null;
//           const isActive = currentCategory === cat.slug;

//           return (
//             <button
//               key={cat.id || cat.slug}
//               onClick={() => handleSearchCategory(cat.slug)}
//               className={clsx(
//                 `
//                 font-bold whitespace-nowrap flex-shrink-0
//                 flex justify-center items-center
//                 p-0 rounded-[10px] text-black
//                 text-[16px] md:text-[20px] transition-all duration-200
//                 border border-transparent
//                 `,
//                 { "text-red_first": isActive }
//               )}
//             >
//               {cat.name}
//             </button>
//           );
//         })}
//       </ScrollContainer>
//     </div>
//   );
// }

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, Suspense } from "react";
import clsx from "clsx";
import { useProduct } from "@/lib/features/product/ProductServer";
import { useAppSelector } from "@/lib/hooks";

const borderGradient =
  "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

// 1. Внутренний компонент с useSearchParams
function SearchCategoryContent() {
  const { category } = useAppSelector((state) => state?.product);
  const { SearchCategoryProducts, GetSearchCategoryProducts, GetProducts } = useProduct();

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  useEffect(() => {
    GetSearchCategoryProducts();
  }, []);

  const handleSearchCategory = (categorySlug: string) => {
    router.push(`?category=${categorySlug}`, { scroll: false });

    if (categorySlug === "all") {
      GetProducts();
    } else {
      SearchCategoryProducts(categorySlug);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 pb-4 scrollbar-hide snap-x">
      <button
        onClick={() => handleSearchCategory("all")}
        className="rounded-[12px] p-[1px] cursor-pointer transition-transform hover:-translate-y-1 h-full"
        style={{ background: borderGradient }}
      >
        <div className="whitespace-nowrap px-6 py-3 bg-[#1a1a1a] rounded-[11px] hover:bg-red_first hover:text-white transition-colors font-semibold text-gray-300 h-full flex items-center justify-center">
          Все
        </div>
      </button>

      {category &&
        category.map((cat) => (
          <button
            key={cat.id || cat.slug}
            onClick={() => handleSearchCategory(cat.slug)}
            className="rounded-[12px] p-[1px] cursor-pointer transition-transform hover:-translate-y-1 h-full"
            style={{ background: borderGradient }}
          >
            <div className="whitespace-nowrap px-6 py-3 bg-[#1a1a1a] rounded-[11px] hover:bg-red_first hover:text-white transition-colors font-semibold text-gray-300 h-full flex items-center justify-center">
              {cat.name}
            </div>
          </button>
        ))}
    </div>
  );
}

// 2. Экспортируемый компонент, обёрнутый в Suspense
export default function SearchCategory() {
  return (
    <Suspense fallback={<div className="text-gray-400">Загрузка категорий...</div>}>
      <SearchCategoryContent />
    </Suspense>
  );
}
    // <div className="w-full my-[10px] md:my-[20px] overflow-hidden container">
    //   <ScrollContainer
    //     innerRef={scrollRef}
    //     vertical={false}
    //     className="w-full flex items-center justify-start gap-[31px] py-[5px] md:py-[0px] overflow-x-auto scrollbar-none"
    //   >
    //     <button
    //       onClick={() => handleSearchCategory("all")}
    //       className={clsx(
    //         "font-bold whitespace-nowrap flex-shrink-0 p-0 rounded-[10px] text-white text-[16px] md:text-[20px] transition-all duration-200 border border-transparent",
    //         { "!text-red_first": isActiveAll }
    //       )}
    //     >
    //       Все
    //     </button>

    //     {category.map((cat) => {
    //       const isActive = currentCategory === cat.slug;

    //       return (
    //         <button
    //           key={cat.id || cat.slug}
    //           onClick={() => handleSearchCategory(cat.slug)}
    //           className={clsx(
    //             "font-bold whitespace-nowrap flex-shrink-0 p-0 rounded-[10px] text-white text-[16px] md:text-[20px] transition-all duration-200 border border-transparent",
    //             { "!text-red_first": isActive }
    //           )}
    //         >
    //           {cat.name}
    //         </button>
    //       );
    //     })}
    //   </ScrollContainer>
    // </div>
//   );
// }
