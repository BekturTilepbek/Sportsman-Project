"use client";

import { FC, useEffect, useState } from "react";
import { useModal } from "@/context/ModalProvider";
import CardSwiper from "../carddetails/Swiper";
import { useBasket } from "@/lib/features/basket/BasketServer";
import { useAppSelector } from "@/lib/hooks";
import MakingOrdering from "../modals/basket/MakingOrdering";
import { ProductType } from "@/lib/features/product/ProductSlice";
import Image from "next/image";

export type DetailCardProps = {
  product: ProductType;
};

const DetailCard: FC<DetailCardProps> = ({ product }) => {
  const { closeModal, openModal } = useModal();
  const { basket } = useAppSelector((state) => state.basket);
  const { AddBasketProduct } = useBasket();
  const [added, setAdded] = useState(false);

useEffect(() => {
  const exists = basket?.products?.some?.((p: any) => p.id === product.id) ?? false;
  setAdded(exists);
}, [basket?.products, product.id]);

  

  const handleAddToBasket = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!added) {
      AddBasketProduct({
        name: product.name,
        img: product.image ?? "",
        price: product.price,
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
        <div className="relative w-[95%] md:w-[80%] h-[80%] rounded-[10px] bg-white p-[30px] shadow-[0_0_10px_0_#00000014]">
          <button
            onClick={closeModal}
            className="absolute p-0 right-[10px] top-[0px] rotate-45 text-grey_second text-4xl bg-white"
          >
            +
          </button>

          <div className="flex flex-col md:flex-row md:justify-between gap-[30px]">
            <div className=" md:w-[50%]">
            <Image
                             src={product?.image }
                             width={346}
                             height={280}
                             alt={product?.name }
                             className="rounded-xl  m-auto object-cover h-[280px] cursor-pointer"
                            //  onClick={() => {
                            //    setIsLoading(true);
                            //    setPreview(e);
                            //  }}
                           />
                           </div>

            <div className="w-full flex flex-col justify-between">
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[20px] font-medium text-black">
                  {product.name}
                </h2>
                <p className="text-[20px] font-[Montserrat] font-bold text-black">
                  {product.price} сом
                </p>
                <p className="text-gray-500 ">Mutant Creakong-креатиновый комплекс содержит три высоко эффективные формы креатина. 8ми летный иследование дали доказание высокий качества</p>
              </div>

            </div>
          </div>
              <div className="w-full mt-[15px] flex flex-col gap-[15px]">
                <button
                  className="  bg-grey_first text-black rounded-[10px] bg-yellow-500 "
                  onClick={handleBuyNow}
                >
                  Купить 
                </button>
                <button
                  className={`flex gap-[10px] items-center justify-center bg-grey_first text-black rounded-[10px] ${
                    added ? "!bg-red_first text-white" : " "
                  }`}
                  onClick={handleAddToBasket}
                >
                  {added ? "Добавлено" : "В корзину"}
                </button>

              </div>
        </div>
      ) : null}
    </>
  );
};

export default DetailCard;
