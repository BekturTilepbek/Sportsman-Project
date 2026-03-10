import { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import ModalProvider from "@/context/ModalProvider";
import StoreProvider from "./StoreProvider";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Настройка Viewport для мобильных устройств
export const viewport: Viewport = {
  themeColor: "#58361e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "SPORTSMAN.312 — Спортивное питание и экипировка в Бишкеке",
    template: "%s | SPORTSMAN.312",
  },
  description:
    "Магазин оригинального спортивного питания, БАДов и экипировки для ММА, бокса и борьбы в Бишкеке. Доставка по всему Кыргызстану. Протеины, креатин, витамины от мировых брендов.",
  keywords: [
    "спортивное питание Бишкек",
    "купить протеин Кыргызстан",
    "экипировка для ММА",
    "боксерские перчатки Бишкек",
    "гейнер для набора массы",
    "креатин",
    "БАДы",
    "SPORTSMAN.312",
  ],
  authors: [{ name: "SPORTSMAN.312" }],
  openGraph: {
    title: "SPORTSMAN.312 — Магазин спортивного питания и экипировки",
    description: "Оригинальная продукция, помощь в подборе и доставка по всему Кыргызстану. Закажите через WhatsApp!",
    url: "https://sportsman312.kg", // Укажите ваш реальный домен
    siteName: "SPORTSMAN.312",
    locale: "ru_KG",
    type: "website",
  },
  alternates: {
    canonical: "/",
    languages: {
      "ru-KG": "/ru",
      "ky-KG": "/ky",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsStore",
    "name": "SPORTSMAN.312",
    "image": "https://sportsman312.kg/logo.png", 
    "@id": "",
    "url": "https://sportsman312.kg",
    "telephone": "+996502999923", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Курманжан Датка, 298",
      "addressLocality": "Бишкек",
      "postalCode": "720000",
      "addressCountry": "KG"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "22:00"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="ru">
      <head>
        {/* Добавляем структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <StoreProvider>
          <ModalProvider>
            <NavBar />
            <main>{children}</main>
            <SpeedInsights />
            <Footer />
          </ModalProvider>
        </StoreProvider>
      </body>
    </html>
  );
}