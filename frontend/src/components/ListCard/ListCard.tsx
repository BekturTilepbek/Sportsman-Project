// "use client";

// import { FC, useEffect } from "react";
// import CardLoad from "../cards/CardLoad";
// import Card from "../cards/Card";
// import { ProductType } from "@/lib/features/product/ProductSlice";
// import { useAppSelector } from "@/lib/hooks";
// import { useProduct } from "@/lib/features/product/ProductServer";

// const ListCard: FC = () => {
//   const { GetProducts } = useProduct();
//   // const { products, loading } = useAppSelector((state) => state.product);
// const productState = useAppSelector((state) => state?.product);
// const products = productState?.products || [];
// const loading = productState?.loading || false;
//   useEffect(() => {
//     GetProducts();
//   }, []);


//   return (
//     <div className="mt-[40px]">
//       <div className="w-full mt-[20px] grid gap-5 md:gap-[20px] md:px-[20px] xl:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
//         {loading ? (
//           Array.from({ length: 8 }).map((_, index) => <CardLoad key={index} />)
//         ) : products.length > 0 ? (
//           products.map((product: ProductType) => (
//             <Card key={product.id} products={product} />
//           ))
//         ) : (
//           <p>Нет товаров</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ListCard;


"use client";

import { FC, useEffect, useState, useMemo } from "react";
import CardLoad from "../cards/CardLoad";
import Card from "../cards/Card";
import { ProductType } from "@/lib/features/product/ProductSlice";
import { useAppSelector } from "@/lib/hooks";
import { useProduct } from "@/lib/features/product/ProductServer";

const ITEMS_PER_PAGE = 8; // Количество карточек на одной странице

const ListCard: FC = () => {
  const { GetProducts } = useProduct();
  const productState = useAppSelector((state) => state?.product);
  
  const products = productState?.products || [];
  const loading = productState?.loading || false;
  
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    GetProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Вычисляем продукты для текущей страницы (оптимизация через useMemo)
  const currentProducts = useMemo(() => {
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    return products.slice(indexOfFirstItem, indexOfLastItem);
  }, [products, currentPage]);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Опционально: скролл наверх при переключении страницы
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-[40px] flex flex-col items-center">
      <div className="w-full mt-[20px] grid gap-5 md:gap-[20px] md:px-[20px] xl:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {loading ? (
          Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <CardLoad key={index} />
          ))
        ) : currentProducts.length > 0 ? (
          currentProducts.map((product: ProductType, index: number) => (
            <Card 
              key={product.id} 
              products={product} 
              priority={index < 4} // Загружаем приоритетно только первые 4 картинки
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">Нет товаров</p>
        )}
      </div>

      {/* Блок пагинации */}
      {!loading && totalPages > 1 && (
        <div className="mt-10 flex gap-2 justify-center items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#222] text-white rounded-lg disabled:opacity-50 hover:bg-[#333] transition"
          >
            Назад
          </button>
          
          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
                  currentPage === idx + 1
                    ? "bg-red_first text-white font-bold"
                    : "bg-[#222] text-white hover:bg-[#333]"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#222] text-white rounded-lg disabled:opacity-50 hover:bg-[#333] transition"
          >
            Вперед
          </button>
        </div>
      )}
    </div>
  );
};

export default ListCard;
