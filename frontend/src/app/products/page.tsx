
// "use client";

// import ListCard from "@/components/ListCard/ListCard";
// import SearchCategory from "@/components/SearchCategory";
// // import SearchCategory from "@/components/SearchCategory";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function HomePage() {
//   // Тот самый градиент для обводок
//   const borderGradient =
//     "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

//   return (
//     <main className="min-h-screen bg-black text-white pb-20">
//       <div className="container mx-auto px-[20px] lg:px-0">
//         {/* Главный Баннер */}
//         <section
//           className="mb-12 rounded-[20px] p-[1px]"
//           style={{ background: borderGradient }}
//         >
//           <div className="relative h-[400px] md:h-[500px] rounded-[19px] overflow-hidden flex items-center bg-gradient_emerald">
//             <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
//             {/* Раскомментируй и вставь свою картинку фона для баннера */}
//             {/* <Image src="/hero-bg.jpg" alt="Спортивное питание" fill className="object-cover z-0 opacity-50" /> */}
//             <div className="relative z-1 px-6 md:px-12">
//               <span className="text-red_first font-bold tracking-wider uppercase text-sm mb-2 block">
//                 #Твой Рацион
//               </span>
//               <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase max-w-2xl leading-tight text-white">
//                 Спортивное питание <br />
//                 <span className="text-red_first">для результата</span>
//               </h1>
//               <p className="mt-4 text-gray-300 max-w-xl text-sm md:text-lg">
//                 Для роста мышц, снижения веса или восстановления — сывороточный,
//                 изолят, казеин. Сила, взрыв и мощь: больше повторений, больше
//                 результат!
//               </p>
//               <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                 <Link href="/catalog">
//                   <button className="bg-red_first text-white px-8 py-4 rounded-[10px] font-bold uppercase tracking-wide hover:bg-red-700 transition">
//                     Готовые наборы
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <Image
//               src="/logo.svg"
//               className="filter brightness-75 contrast-200 hidden md:block"
//               width={205}
//               height={200}
//               priority
//               alt="лого СпортсМен"
//             />
//           </div>
//         </section>

//         {/* Категории товаров (Горизонтальный скролл) */}
//         <section className="mb-12">
//           <SearchCategory/>
//           {/* <div className="flex flex-wrap gap-3 pb-4 scrollbar-hide snap-x">
//             {categories.map((cat, index) => (
//               <Link
//                 href={`/category/${cat.toLowerCase()}`}
//                 key={index}
//                 className="snap-start"
//               >
//                 <div
//                   className="rounded-[12px] p-[1px] cursor-pointer transition-transform hover:-translate-y-1 h-full"
//                   style={{ background: borderGradient }}
//                 >
//                   <div className="whitespace-nowrap px-6 py-3 bg-[#1a1a1a] rounded-[11px] hover:bg-red_first hover:text-white transition-colors font-semibold text-gray-300 h-full flex items-center justify-center">
//                     {cat}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div> */}
//         </section>

//         {/* Сетка товаров */}
//         <section className="mb-20">
//           <div className="flex justify-between items-end mb-6">
//             <h2 className="text-2xl md:text-4xl font-black uppercase">
//               Хиты <span className="text-red_first">Продаж</span>
//             </h2>
//             {/* <Link href="/catalog">
//               <span className="text-gray-400 hover:text-white transition cursor-pointer text-sm md:text-base font-semibold">
//                 Смотреть все &rarr;
//               </span>
//             </Link> */}
//           </div>

//           {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//             {mockProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="rounded-[15px] p-[1px] transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,244,145,0.15)]"
//                 style={{ background: borderGradient }}
//               >
//                 <div className="bg-[#111111] rounded-[14px] p-4 flex flex-col gap-3 relative h-full">
//                   {product.isNew && (
//                     <span className="absolute top-3 left-3 bg-red_first text-white text-[10px] font-black px-2 py-1 rounded uppercase z-10">
//                       NEW
//                     </span>
//                   )}
//                   <div className="w-full h-[200px] bg-[#1a1a1a] rounded-[10px] flex items-center justify-center p-4 relative">
//                     <div className="text-gray-600 text-sm">
//                       Фото {product.title}
//                     </div>
//                   </div>

//                   <div className="flex-1 flex flex-col mt-2">
//                     <h3 className="text-lg font-bold text-white uppercase leading-tight line-clamp-2">
//                       {product.title}
//                     </h3>

//                     <div className="text-[13px] text-gray-400 mt-3 space-y-1 flex-1">
//                       <p>
//                         <span className="text-gray-500">Салмагы:</span>{" "}
//                         {product.weight}
//                       </p>
//                       <p>
//                         <span className="text-gray-500">Порция саны:</span>{" "}
//                         {product.servings}
//                       </p>
//                       <p>
//                         <span className="text-gray-500">Даамы:</span>{" "}
//                         {product.flavor}
//                       </p>
//                       <p>
//                         <span className="text-gray-500">Формасы:</span>{" "}
//                         {product.form}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="text-xl md:text-2xl font-black text-white my-2">
//                     {product.price}
//                   </div>

//                   <div className="flex gap-2 w-full mt-auto">
//                     <button className="flex-[2] bg-red_first text-white text-sm font-bold py-3 rounded-[8px] hover:bg-red-700 transition flex justify-center items-center gap-2">
//                       В корзину
//                     </button>
//                     <Link
//                       href={`/product/${product.id}`}
//                       className="flex-[1] flex"
//                     >
//                       <button className="w-full bg-[#222] text-white text-sm font-bold py-3 rounded-[8px] hover:bg-[#333] transition">
//                         ℹ
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div> */}
//           <ListCard/>
//         </section>

//         {/* Блок Трансформации */}
//         <section className="mb-20">
//           <div
//             className="rounded-[20px] p-[1px] mb-6"
//             style={{ background: borderGradient }}
//           >
//             <div className="bg-gradient_emerald rounded-[19px] p-6 md:p-12 relative overflow-hidden h-full w-full">
//               <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
//                 <div className="max-w-2xl">
//                   <span className="text-red_first font-bold tracking-wider uppercase text-sm mb-2 block">
//                     #ЭРКТҮҮ БОЛ!
//                   </span>
//                   <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-4 leading-tight">
//                     21 күндө <br className="hidden md:block" />
//                     <span className="text-red_first">денеңди өзгөрт!</span>
//                   </h2>
//                   <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
//                     Туура тамактануу, колдоочу машыгуулар жана медициналык
//                     көзөмөл – баары бир жерде! 21 күндүн ичинде өзүңдү жаңыча
//                     сезип башта! Ар кимге ылайыкташкан арыктоо топтому:
//                     диетолог, тренер, спорт азыктары жана мотивация бир
//                     программада.
//                   </p>
//                   <button className="bg-red_first text-white px-8 py-4 rounded-[10px] font-bold uppercase tracking-wide hover:bg-red-700 transition">
//                     Акысыз консультация алуу
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6">
//             <div
//               className="rounded-[15px] p-[1px] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,244,145,0.1)]"
//               style={{ background: borderGradient }}
//             >
//               <div className="bg-gradient_emerald rounded-[14px] p-6 md:p-8 h-full">
//                 <h3 className="text-lg font-black text-white mb-4 uppercase">
//                   Жеке машыктыруучулар
//                 </h3>
//                 <ul className="text-gray-400 space-y-2 text-[14px] list-disc list-inside">
//                   <li>Жүгүрүү жана сууга сүзүү</li>
//                   <li>Фитнес жана күч машыгуулары</li>
//                   <li>Йога жана ийкемдүүлүк</li>
//                   <li>Бокс жана функционалдык машыгуулар</li>
//                 </ul>
//                 <p className="mt-6 text-red_first font-bold text-sm bg-red_first/10 p-3 rounded-lg inline-block">
//                   📌 Биринчи машыгуу бекер!
//                 </p>
//               </div>
//             </div>

//             <div
//               className="rounded-[15px] p-[1px] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,244,145,0.1)]"
//               style={{ background: borderGradient }}
//             >
//               <div className="bg-gradient_emerald rounded-[14px] p-6 md:p-8 h-full">
//                 <h3 className="text-lg font-black text-white mb-4 uppercase">
//                   Медициналык текшерүү
//                 </h3>
//                 <ul className="text-gray-400 space-y-2 text-[14px] list-disc list-inside">
//                   <li>Кан жалпы анализи</li>
//                   <li>Гормондор, витаминдер</li>
//                   <li>Дарыгер менен консультация</li>
//                   <li>Ден соолук жана жүктөмдөр боюнча кеңештер</li>
//                 </ul>
//                 <p className="mt-6 text-gray-500 italic text-[13px]">
//                   Коопсуз. Ыкчам. Кесипкөй адистердин көзөмөлүндө.
//                 </p>
//               </div>
//             </div>

//             <div
//               className="rounded-[15px] p-[1px] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,244,145,0.1)]"
//               style={{ background: borderGradient }}
//             >
//               <div className="bg-gradient_emerald rounded-[14px] p-6 md:p-8 h-full">
//                 <h3 className="text-lg font-black text-white mb-4 uppercase">
//                   Диетолог
//                 </h3>
//                 <ul className="text-gray-400 space-y-2 text-[14px] list-disc list-inside">
//                   <li>Салмакты төмөндөтүү</li>
//                   <li>Мышца массасын көбөйтүү</li>
//                   <li>Спорттук тамактануу</li>
//                   <li>Витаминдер менен азыктык заттардын балансы</li>
//                 </ul>
//                 <p className="mt-6 text-gray-500 italic text-[13px]">
//                   Бардыгы сенин анализдериңди жана жашоо образын эске алуу
//                   менен.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
"use client";

import ListCard from "@/components/ListCard/ListCard";
import SearchCategory from "@/components/SearchCategory";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";

// Настройки анимаций для Framer Motion
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Задержка между появлениями элементов
    },
  },
};

export default function HomePage() {
  // Тот самый градиент для обводок
  const borderGradient =
    "linear-gradient(90deg, rgba(70, 45, 10, 1) 0%, rgba(123, 83, 24, 1) 25%, rgba(255, 244, 145, 1) 50%, rgba(190, 164, 59, 1) 75%, rgba(70, 45, 10, 1) 100%)";

  return (
    <main className="min-h-screen  text-white pb-20 overflow-hidden "
    >
      <div className="container mx-auto px-[20px] lg:px-0">
        
        {/* Главный Баннер */}
        <motion.section
          // initial={{ opacity: 0, scale: 0.95 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 rounded-[20px] p-[1px] relative"
          style={{ 
            background: borderGradient, 
            backgroundSize: "200% 200%" 
          }}
          // Анимация переливания градиента на фоне
          // animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          // transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative h-[400px] md:h-[500px] rounded-[19px] overflow-hidden flex items-center bg-gradient_emerald">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
            {/* Раскомментируй и вставь свою картинку фона для баннера */}
            {/* <Image src="/hero-bg.jpg" alt="Спортивное питание" fill className="object-cover z-0 opacity-50" /> */}
            
            <motion.div 
              className="relative z-10 px-6 md:px-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={fadeInUp} className="text-red_first font-bold tracking-wider uppercase text-sm mb-2 block">
                #Твой Рацион
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-black uppercase max-w-2xl leading-tight text-white">
                Спортивное питание <br />
                <span className="text-red_first">для результата</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-4 text-gray-300 max-w-xl text-sm md:text-lg">
                Для роста мышц, снижения веса или восстановления — сывороточный,
                изолят, казеин. Сила, взрыв и мощь: больше повторений, больше
                результат!
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/catalog">
                  <button className="bg-red_first text-white px-8 py-4 rounded-[10px] font-bold uppercase tracking-wide hover:bg-red-700 transition hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                    Готовые наборы
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="absolute right-12 z-0 hidden md:block"
            >
              <Image
                src="/logo.svg"
                className="filter brightness-75 contrast-200"
                width={205}
                height={200}
                priority
                alt="лого СпортсМен"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Категории товаров */}
        <motion.section 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <SearchCategory />
        </motion.section>

        {/* Сетка товаров */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex justify-between items-end mb-6">
            <h2 className="text-2xl md:text-4xl font-black uppercase">
              Хиты <span className="text-red_first">Продаж</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ListCard />
          </motion.div>
        </motion.section>

        {/* Блок Трансформации */}
        <section className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="rounded-[20px] p-[1px] mb-6"
            style={{ background: borderGradient, backgroundSize: "200% 200%" }}
            // Переливающийся градиент
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <div className="bg-gradient_emerald rounded-[19px] p-6 md:p-12 relative overflow-hidden h-full w-full">
              <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                <div className="max-w-2xl">
                  <span className="text-red_first font-bold tracking-wider uppercase text-sm mb-2 block">
                    #ЭРКТҮҮ БОЛ!
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-4 leading-tight">
                    21 күндө <br className="hidden md:block" />
                    <span className="text-red_first">денеңди өзгөрт!</span>
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    Туура тамактануу, колдоочу машыгуулар жана медициналык
                    көзөмөл – баары бир жерде! 21 күндүн ичинде өзүңдү жаңыча
                    сезип башта! Ар кимге ылайыкташкан арыктоо топтому:
                    диетолог, тренер, спорт азыктары жана мотивация бир
                    программада.
                  </p>
                  <button className="bg-red_first text-white px-8 py-4 rounded-[10px] font-bold uppercase tracking-wide hover:bg-red-700 transition hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                    Акысыз консультация алуу
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Карточки под трансформацией (Появляются по очереди) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Жеке машыктыруучулар",
                items: ["Жүгүрүү жана сууга сүзүү", "Фитнес жана күч машыгуулары", "Йога жана ийкемдүүлүк", "Бокс жана функционалдык машыгуулар"],
                note: "📌 Биринчи машыгуу бекер!",
                isBadge: true
              },
              {
                title: "Медициналык текшерүү",
                items: ["Кан жалпы анализи", "Гормондор, витаминдер", "Дарыгер менен консультация", "Ден соолук жана жүктөмдөр боюнча кеңештер"],
                note: "Коопсуз. Ыкчам. Кесипкөй адистердин көзөмөлүндө.",
                isBadge: false
              },
              {
                title: "Диетолог",
                items: ["Салмакты төмөндөтүү", "Мышца массасын көбөйтүү", "Спорттук тамактануу", "Витаминдер менен азыктык заттардын балансы"],
                note: "Бардыгы сенин анализдериңди жана жашоо образын эске алуу менен.",
                isBadge: false
              }
            ].map((block, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-[15px] p-[1px] shadow-lg cursor-pointer"
                style={{ background: borderGradient }}
              >
                <div className="bg-gradient_emerald rounded-[14px] p-6 md:p-8 h-full flex flex-col">
                  <h3 className="text-lg font-black text-white mb-4 uppercase">
                    {block.title}
                  </h3>
                  <ul className="text-gray-400 space-y-2 text-[14px] list-disc list-inside flex-1">
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  {block.isBadge ? (
                    <p className="mt-6 text-red_first font-bold text-sm bg-red_first/10 p-3 rounded-lg inline-block w-max">
                      {block.note}
                    </p>
                  ) : (
                    <p className="mt-6 text-gray-500 italic text-[13px]">
                      {block.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}