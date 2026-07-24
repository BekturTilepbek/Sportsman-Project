
// import Image from "next/image";

// export default function CardOrderingBasket({ product, i }: any) {



//   return (<>
//     <div key={i} className="w-full p-[10px] font-[Montserrat] rounded-md bg-white flex justify-start gap-[10px] md:gap-[30px]">
//       {/* <Link  href={`/carddetails/${encodeURIComponent(product.id)}`}> */}

//         <div className="h-[88px]">
//           {/* <img className="w-[100px]" src={product.img} alt="" /> */}

//           <Image
//             src={product.img}
//             width={88}
//             height={88}
//             className="object-cover rounded-xl w-[88px] h-[88px]"
//             priority={true}
//             alt={product.img}
//           />
//         </div>
//         <div className="">
//           <div>
//             <p className="text-[#1E2128] font-semibold">{product.name}</p>
//             <p className="text-[#1E2128] font-bold text-lg ">{product.price} сом</p>
//           </div>
//           <p className="text-[#50535A] text-sm">
//             Количество:
//             <br />
//             <span className="text-[#1E2128]">
//               {product.quantity} ШТ.
//             </span>
//           </p>
//         </div>

//       {/* </Link> */}
//     </div>
//   </>
//   );
// }

import Image from "next/image";

const borderGradient =
  "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

export default function CardOrderingBasket({ product, i }: any) {
  return (
    <div className="w-full rounded-[12px] p-[1px] mb-2" style={{ background: borderGradient }}>
      <div className="bg-[#1a1a1a] rounded-[11px] p-[10px] flex justify-start gap-[15px] md:gap-[20px] items-center">
        <div className="h-[70px] md:h-[80px] min-w-[70px] bg-gradient_emerald rounded-lg flex items-center justify-center p-1">
          <Image
            src={product.img}
            width={88}
            height={88}
            className="object-cover rounded-lg w-full h-full"
            priority={true}
            alt={product.name}
          />
        </div>
        <div className="flex-1">
          <p className="text-white font-bold text-sm md:text-base leading-tight line-clamp-2">
            {product.name}
          </p>
          <p className="text-red_first font-black mt-1">
            {product.price} сом
          </p>
          <p className="text-gray-500 text-[12px] mt-1">
            Количество: <span className="text-white font-bold">{product.quantity} ШТ.</span>
          </p>
        </div>
      </div>
    </div>
  );
}