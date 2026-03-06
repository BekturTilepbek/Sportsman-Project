"use client";

import { Suspense, useEffect, useState } from "react";
import ListCard from "../components/ListCard/ListCard";
import CardLoad from "@/components/cards/CardLoad";
import { useAppSelector } from "@/lib/hooks";
import { useProduct } from "@/lib/features/product/ProductServer";
import { ProductType } from "@/lib/features/product/ProductSlice";

const HomePage = () => {


  // if (loading)
  //   return (
  //     <div className="mt-[250px]">
  //       <div className="container w-full  grid gap-5 md:gap-[20px] md:px-[20px] xl:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
  //         {[1, 1, 1, 1].map((e, i) => (
  //           <CardLoad key={i} />
  //         ))}
  //       </div>
  //     </div>
  //   );

  return (
    <div className="container px-[10px] md:px-0 flex flex-col gap-[20px]">
      <ListCard />
    </div>
  );
};



export default HomePage;
