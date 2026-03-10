import { useModal } from '@/context/ModalProvider';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { useAppSelector } from '@/lib/hooks';
import { useProduct } from '@/lib/features/product/ProductServer';





export default function SearchInput() {
  const router = useRouter();
  const {SearchProducts} = useProduct()

  const [search, setSearch] = useState<string>('')



  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    if (search.trim() === "") return; // не ищем пустую строку
    SearchProducts(search.trim());
  };


  return (
    <div className={clsx(`relative w-full md:w-[55%] block`)}>
      <div className='w-full h-[2.9375rem] flex items-center  '>
        <input className='relative w-[100%] h-[100%] pl-[1rem] border border-red_first rounded-[.375rem] focus:z-24 '
          placeholder='Поиск'
          type="search"
          value={search}
          onChange={handleSearchChange}
        />
        <button
          onClick={handleSearchClick}
          className="absolute bg-slate-600 right-[1.25rem] flex items-center justify-center"
        >
        <svg className='absolute  right-[1.25rem] ' width="15" height="15" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.6667 17.6667L26 26M10.7222 20.4444C5.35279 20.4444 1 16.0917 1 10.7222C1 5.35279 5.35279 1 10.7222 1C16.0917 1 20.4444 5.35279 20.4444 10.7222C20.4444 16.0917 16.0917 20.4444 10.7222 20.4444Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </button>
      </div>
    </div>
  )
}
