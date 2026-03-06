"use client";

import { FC, useEffect } from "react";
import CardLoad from "../cards/CardLoad";
import Card from "../cards/Card";
import { ProductType } from "@/lib/features/product/ProductSlice";
import { useAppSelector } from "@/lib/hooks";
import { useProduct } from "@/lib/features/product/ProductServer";

const ListCard: FC = () => {
  const { GetProducts } = useProduct();
  const { products, loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div className="mt-[40px]">
      <div className="w-full mt-[20px] grid gap-5 md:gap-[20px] md:px-[20px] xl:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => <CardLoad key={index} />)
        ) : products.length > 0 ? (
          products.map((product: ProductType) => (
            <Card key={product.id} products={product} />
          ))
        ) : (
          <p>Нет товаров</p>
        )}
      </div>
    </div>
  );
};

export default ListCard;