// "use client";

// import React, { useEffect, useState } from "react";
// import { useModal } from "@/context/ModalProvider";
// import CompletOrder from "./CompletOrder";
// import CardOrderingBasket from "@/components/cards/CardOrderingBasket";
// import { useAppSelector } from "@/lib/hooks";
// import { useBasket } from "@/lib/features/basket/BasketServer";
// import Loading from "@/ui/Loading";
// import { api } from "@/shared/api/api";

// type MakingOrderingProps = {
//   singleProduct?: any;
// };

// export default function MakingOrdering({ singleProduct }: MakingOrderingProps) {
//   const { closeModal, openModal } = useModal();
//   const { basket } = useAppSelector((state) => state.basket);
//   const { AllDeleteBasket } = useBasket();

//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [client, setClient] = useState(false);
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     const savedName = localStorage.getItem("clientName");
//     const savedPhone = localStorage.getItem("clientPhone");
//     if (savedName) setName(savedName);
//     if (savedPhone) setPhone(savedPhone);
//     setClient(true);
//   }, []);

//   const ClickAddOrder = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setLoading(true);

//   if (!name || !phone) {
//     alert("Пожалуйста, заполните имя и телефон!");
//     setLoading(false);
//     return;
//   }

//   const productsToSend = singleProduct
//     ? [{ ...singleProduct, quantity: 1 }]
//     : basket.products;

//   if (!productsToSend.length) {
//     alert("Корзина пуста!");
//     setLoading(false);
//     return;
//   }
//   console.log(basket);
  

//   const body = {
//     first_name: name,
//     phone: phone,
//     total_amount: basket.price,
//     items: productsToSend.map((item: any) => ({
//       product_id: item.id,
//       quantity: item.quantity,
//     })),
//   };

//   console.log(basket.products);
//   console.log(body);
  

//   try {
//     const { data } = await api.post("/api/v1/orders/", body);

//     localStorage.setItem("clientName", name);
//     localStorage.setItem("clientPhone", phone);

//     if (!singleProduct) AllDeleteBasket();

//     openModal(<CompletOrder />);
//   } catch (err) {
//     console.error(err);
//     alert("Ошибка при отправке заказа");
//   } finally {
//     setLoading(false);
//   }
// };

//   if (!client) return null;

//   return (
//     <div className="relative w-[100%] rounded-[10px] bg-white container shadow-[0_0_10px_0_#00000014]">
//       <div className="flex justify-end">
//         <button
//           onClick={closeModal}
//           className="absolute bg-transparent right-[20] top-[20] rotate-45 text-grey_second text-4xl"
//         >
//           +
//         </button>
//       </div>

//       <div className="w-full flex">
//         {!singleProduct && (
//           <div className="w-full hidden md:flex flex-col justify-between py-[80px] px-[60px] rounded-[10px] bg-[#F2F2F2]">
//             <div className="h-[400px] scroll_style overflow-y-scroll pr-[5] flex flex-col gap-[20px]">
//               {basket.products.length
//                 ? basket.products.map((e: any, i: number) => (
//                     <CardOrderingBasket key={i} product={e} i={i} />
//                   ))
//                 : <p>Корзина пуста</p>}
//             </div>
//             <div className="w-full text-lg flex gap-[16] flex-col pt-[45]">
//               {/* <div className="w-full flex items-center gap-[8]">
//                 <p className="whitespace-nowrap">Доставка</p>
//                 <p className="text-black overflow-hidden whitespace-nowrap tracking-[5]">................................</p>
//                 <p className="whitespace-nowrap">Бесплатно</p>
//               </div> */}
//               <div className="w-full flex items-center gap-[8]">
//                 <p className="whitespace-nowrap">Итого</p>
//                 <p className="text-black overflow-hidden whitespace-nowrap tracking-[5]">.................................</p>
//                 <p className="text-[18px] whitespace-nowrap">{basket.price} сом</p>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="w-full px-[20px] md:px-[80px] py-[90px] rounded-[10px] shadow-[0_0_10px_0_#00000014]">
//           <p className="mb-[60px] text-center text-3xl font-extrabold">Оформление заказа</p>
//           <form onSubmit={ClickAddOrder}>
//             <div className="w-full flex flex-col gap-[20px]">
//               <input
//                 className="w-full rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black"
//                 placeholder="Ваше имя"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 type="text"
//               />
//               <input
//                 className="w-full rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black"
//                 placeholder="+996 500 500 500"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 type="tel"
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-[60px] rounded-[10px] border border-black py-[22px] w-full"
//             >
//               {!loading ? "Оформить" : <Loading />}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { useModal } from "@/context/ModalProvider";
import CompletOrder from "./CompletOrder"; // Проверь правильность импорта
import CardOrderingBasket from "@/components/cards/CardOrderingBasket"; // Проверь правильность импорта
import { useAppSelector } from "@/lib/hooks";
import { useBasket } from "@/lib/features/basket/BasketServer";
import Loading from "@/ui/Loading";
import { api } from "@/shared/api/api";

type MakingOrderingProps = {
  singleProduct?: any;
};

const borderGradient =
  "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

export default function MakingOrdering({ singleProduct }: MakingOrderingProps) {
  const { closeModal, openModal } = useModal();
  const { basket } = useAppSelector((state) => state.basket);
  const { AllDeleteBasket } = useBasket();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [client, setClient] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("clientName");
    const savedPhone = localStorage.getItem("clientPhone");
    if (savedName) setName(savedName);
    if (savedPhone) setPhone(savedPhone);
    setClient(true);
  }, []);

  const ClickAddOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !phone) {
      alert("Пожалуйста, заполните имя и телефон!");
      setLoading(false);
      return;
    }

    const productsToSend = singleProduct
      ? [{ ...singleProduct, quantity: 1 }]
      : basket.products;

    if (!productsToSend.length) {
      alert("Корзина пуста!");
      setLoading(false);
      return;
    }

    const body = {
      first_name: name,
      phone: phone,
      total_amount: basket.price,
      items: productsToSend.map((item: any) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const { data } = await api.post("/api/v1/orders/", body);
      localStorage.setItem("clientName", name);
      localStorage.setItem("clientPhone", phone);
      if (!singleProduct) AllDeleteBasket();
      openModal(<CompletOrder />);
    } catch (err) {
      console.error(err);
      alert("Ошибка при отправке заказа");
    } finally {
      setLoading(false);
    }
  };

  if (!client) return null;

  return (
    <div
      className="relative w-[100%] max-w-[1000px] rounded-[20px] p-[1px] shadow-[0_10px_30px_rgba(255,244,145,0.15)]"
      style={{ background: borderGradient }}
    >
      <div className="bg-gradient_emerald rounded-[19px] w-full flex flex-col md:flex-row overflow-hidden relative text-white">
        
        <button
          onClick={closeModal}
          className="absolute right-[20px] top-[15px] rotate-45 text-white  transition-colors text-4xl z-20 bg-transparent border-none"
        >
          +
        </button>

        {!singleProduct && (
          <div className="w-full md:w-1/2 hidden md:flex flex-col justify-between py-[60px] px-[40px] bg-gradient_emerald border-r border-white/5">
            <div className="h-[400px] overflow-y-auto pr-2 flex flex-col gap-4 scrollbar-hide">
              {basket.products.length ? (
                basket.products.map((e: any, i: number) => (
                  <CardOrderingBasket key={i} product={e} i={i} />
                ))
              ) : (
                <p className="text-gray-500">Корзина пуста</p>
              )}
            </div>
            <div className="w-full text-lg flex gap-4 flex-col pt-8 border-t border-white/10 mt-6">
              <div className="w-full flex items-center justify-between gap-2">
                <p className="whitespace-nowrap font-bold">Итого:</p>
                <div className="flex-1 border-b border-dashed border-gray-600 mx-2"></div>
                <p className="text-[20px] font-black text-red_first whitespace-nowrap">
                  {basket.price} сом
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="w-full bg-gradient_bronze  md:w-1/2 px-[20px] md:px-[60px] py-[60px] md:py-[80px]">
          <p className="mb-[40px] text-center text-3xl font-black uppercase tracking-wide">
            Оформление заказа
          </p>
          <form onSubmit={ClickAddOrder}>
            <div className="w-full flex flex-col gap-[20px]">
              <input
                className="w-full rounded-[10px] bg-[#1a1a1a] border border-white/10 px-[20px] py-[20px] text-white placeholder:text-gray-500 focus:outline-none focus:border-red_first transition-colors"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <input
                className="w-full rounded-[10px] bg-[#1a1a1a] border border-white/10 px-[20px] py-[20px] text-white placeholder:text-gray-500 focus:outline-none focus:border-red_first transition-colors"
                placeholder="+996 500 500 500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
              />
            </div>

            <button
              type="submit"
              className="mt-[40px] bg-red_first hover:bg-red-700 text-white font-bold uppercase tracking-wide rounded-[10px] py-[20px] w-full transition-colors flex justify-center items-center"
            >
              {!loading ? "Оформить заказ" : <Loading />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}