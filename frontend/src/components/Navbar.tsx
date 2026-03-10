"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useModal } from "@/context/ModalProvider";
import { useAppSelector } from "@/lib/hooks";
import { usePathname } from "next/navigation";
import SearchCategory from "./SearchCategory";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { openModal, closeModal } = useModal();
  const { basket } = useAppSelector((state) => state.basket);
  const [client, setClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null;

  return (
    <header className="mb-[100px] md:mb-[200px]">
      <nav className="flex flex-col fixed inset-x-0 top-0 z-20 backdrop-blur-[20px]  px-[20px] lg:px-0 shadow-md">
        <div className="flex flex-col">
          <div className="my-[10px] md:my-[20px] flex gap-[24px] md:gap-[20px] md:justify-between items-center container">
            <Link href="/">
              <div onClick={closeModal} className="flex flex-col items-start lg:flex-row">
                <Image
                  src="/logo.svg"
                  className="filter brightness-75 contrast-200 hidden md:block"
                  width={105}
                  height={100}
                  priority
                  alt="лого СпортсМен" 
                />
                <Image
                  src="/logo.svg"
                  className="filter brightness-75 contrast-200 block md:hidden"
                  width={120}
                  height={40}
                  priority
                  alt="лого СпортсМен" 
                />
              </div>
            </Link>
            {/* <SearchInput/> */}
{pathname === "/" && <SearchCategory />}
            <div className="gap-[24px] md:gap-[30px] flex items-center">
              <Link onClick={closeModal} href="/basket">
                <button className="relative text-[15px] border-none md:text-[20px] flex  items-center rounded-[10px]  gap-[10px] px-[13px] md:px-[20px]">
                  {basket.total_quantity ? (
                    <div className="absolute flex items-center justify-center w-[20px] h-[20px] bg-red_first right-[0px] top-[0px] rounded-[100px] bg-black">
                      <span className=" text-[15px] text-white">{basket.products.length}</span>
                    </div>
                  ) : null}
                  <svg
                    width="20.5"
                    height="20.5"
                    viewBox="0 0 28 28"
                    className="mt-[-2px]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 1.25H1.63016C2.30134 1.25 2.63753 1.25 2.91128 1.37109C3.15264 1.47786 3.359 1.64975 3.50781 1.86772C3.67632 2.11453 3.73716 2.4441 3.85861 3.10197L6.91672 19.6667L21.6809 19.6667C22.3229 19.6667 22.6449 19.6667 22.9109 19.5532C23.1458 19.453 23.3484 19.2907 23.4989 19.0843C23.669 18.851 23.7411 18.5386 23.8851 17.9144L23.8862 17.9099L26.1093 8.27661L26.1098 8.27459C26.3283 7.32772 26.4378 6.85314 26.3175 6.48088C26.212 6.15425 25.99 5.87732 25.6954 5.70105C25.3595 5.5 24.874 5.5 23.9007 5.5H4.79167M22.5 26.75C21.7176 26.75 21.0833 26.1157 21.0833 25.3333C21.0833 24.5509 21.7176 23.9167 22.5 23.9167C23.2824 23.9167 23.9167 24.5509 23.9167 25.3333C23.9167 26.1157 23.2824 26.75 22.5 26.75ZM8.33333 26.75C7.55093 26.75 6.91667 26.1157 6.91667 25.3333C6.91667 24.5509 7.55093 23.9167 8.33333 23.9167C9.11574 23.9167 9.75 24.5509 9.75 25.3333C9.75 26.1157 9.11574 26.75 8.33333 26.75Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>

            </div>
            
          </div>

          
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
