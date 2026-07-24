// import Link from 'next/link'
// import React from 'react'

// export default function layout({children}:{children:React.ReactNode}) {
//   return (
//     <div className='container'>
//       {/* <div className=' gap-[10px] mb-[30px] items-center hidden md:flex'>
//           <Link href="/">Главная</Link>
//           <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>

//           <p>Корзина</p>
//         </div> */}

//       <div className='w-full  rounded-[10px] bg-gradient_emerald px-5 md:px-[40px] pt-[40px] pb-[60px]  shadow-none md:shadow-[0_0_10px_0_#00000014] '>
//         {children}
//       </div>
//     </div>
//   )
// }

import Link from 'next/link'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto px-[20px] lg:px-0 text-white pt-6'>
      
      {/* Хлебные крошки (переделаны под темную тему: серый текст, белый акцент) */}
      {/* <div className='gap-[10px] mb-[30px] items-center hidden md:flex text-sm text-gray-400 font-semibold uppercase tracking-wider'>
          <Link href="/" className="hover:text-red_first transition-colors">
            Главная
          </Link>
          
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <p className="text-white font-bold">Корзина</p>
        </div> */}

      {/* Обертка для контента: убрали зелёный градиент и лишние тени */}
      <div className='w-full pb-[60px]'>
        {children}
      </div>
      
    </div>
  )
}