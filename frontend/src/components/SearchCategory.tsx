"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import clsx from "clsx";
import { useAppSelector } from "@/lib/hooks";
import { useProduct } from "@/lib/features/product/ProductServer";

type ProductType = {
  id: string;
  category: string;
  // другие поля...
};

export default function SearchCategory() {
  const { category } = useAppSelector((state) => state.product);
  const { SearchCategoryProducts, GetSearchCategoryProducts, GetProducts } =
    useProduct();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Текущая категория из URL
  const currentCategory = searchParams.get("category");
const isActive = currentCategory === "all";
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    GetSearchCategoryProducts();
  }, []);

  const handleSearchCategory = (category: string) => {
    if (category == "all") {
      return GetProducts();
    }
    SearchCategoryProducts(category);
  };

  if (!category.length) return null;

  return (
    <div
      className={` w-full  gap-[16px] my-[10px] md:my-[20px] overflow-hidden  container`}
    >
      <ScrollContainer
        vertical={false}
        className="w-full  md:justify-center py-[5px] flex gap-[31px] md:py-[0px]"
      >
                      <button
                onClick={() => handleSearchCategory("all")}
                className={clsx(
                  `
                  font-bold
                  whitespace-nowrap
                  flex justify-center items-center
                  p-0 rounded-[10px] text-black
                  text-[16px] md:text-[20px] transition-all duration-200
                  border border-transparent
                `,
                  {
                    "text-red_first": isActive,
                  },
                )}
              >
                Все
              </button>
        {category.map((cat, i) => {
          const isActive = currentCategory === cat.slug;

          return (
            <>

              <button
                key={cat.id}
                onClick={() => handleSearchCategory(cat.slug)}
                className={clsx(
                  `
                  font-bold
                  whitespace-nowrap
                  flex justify-center items-center
                  p-0 rounded-[10px] text-black
                  text-[16px] md:text-[20px] transition-all duration-200
                  border border-transparent
                `,
                  {
                    "text-red_first": isActive,
                  },
                )}
              >
                {cat.name}
              </button>
            </>
          );
        })}
      </ScrollContainer>
    </div>
  );
}
