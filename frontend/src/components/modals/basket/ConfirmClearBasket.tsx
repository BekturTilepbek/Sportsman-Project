// import { useModal } from '@/context/ModalProvider';
// import React from 'react'
// import CompletedClearBasket from './CompletClearBasket';
// import { useBasket } from '@/lib/features/basket/BasketServer';

// export default function ConfirmClearBasket( ) {
//   const {closeModal,openModal} = useModal()
//   const {AllDeleteBasket} = useBasket()
  
//   return (
//     <>
//     <div className=" w-[646px] rounded-[10px] bg-white py-[80] px-[90] shadow-[0_0_10px_0_#00000014]">
//           <p className="text-[26px] text-center pb-[48px]">
//           Очистить корзину?
//           </p>
//           <div className="flex gap-[48px] h-[60px] justify-between">
//               <button onClick={closeModal}
//               className="w-full rounded-[10px] bg-black border text-white hover:bg-white hover:text-black" >
//                 Отменить
//               </button>

//               <button onClick={AllDeleteBasket} className="w-full rounded-[10px] border-2 hover:bg-red_first hover:text-white">Очистить</button>
//               {/* <button onClick={()=>openModal(<CompletedClearBasket/>)} className="w-full rounded-[10px] border-black border-2 hover:bg-black hover:text-white">Очистить</button> */}

//           </div>
//           </div>
//     </>
//   )
// }

import { useModal } from '@/context/ModalProvider';
import React from 'react'
import CompletedClearBasket from './CompletClearBasket'; // Убедись в правильности импорта
import { useBasket } from '@/lib/features/basket/BasketServer';

const borderGradient =
  "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

export default function ConfirmClearBasket() {
  const { closeModal, openModal } = useModal();
  const { AllDeleteBasket } = useBasket();
  
  return (
    <div className="w-[90%] md:w-[500px] rounded-[20px] p-[1px]" style={{ background: borderGradient }}>
      <div className="bg-gradient_emerald rounded-[19px] py-[50px] px-[40px] shadow-[0_10px_30px_rgba(255,244,145,0.15)] flex flex-col items-center">
        <p className="text-[24px] font-black uppercase text-white text-center pb-[40px]">
          Очистить корзину?
        </p>
        <div className="flex gap-[20px] w-full">
          <button 
            onClick={closeModal}
            className="flex-1 py-[15px] rounded-[10px] bg-[#222] text-white font-bold hover:bg-[#333] transition-colors"
          >
            Отменить
          </button>
          <button 
            onClick={AllDeleteBasket} 
            className="flex-1 py-[15px] rounded-[10px] bg-red_first text-white font-bold hover:bg-red-700 transition-colors"
          >
            Очистить
          </button>
        </div>
      </div>
    </div>
  );
} 