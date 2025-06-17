// import type { Metadata } from 'next'
// import './globals.css'
// import { Analytics } from '@vercel/analytics/next';
// import Script from 'next/script';

// export const metadata: Metadata = {
//   title: "Такси Новое — Такси в Черемхово",
//   description: "Удобный заказ такси в Черемхово через Telegram-бот, мобильное приложение и по телефону..",
//   metadataBase: new URL("https://taxi-novoe.vercel.app"),
//   verification: {
//     google: "jW1zSv6t4asOArFjefcQ1yF-YYGA9T8D2eWcmjwIm5s",
//   },
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     title: "Такси Новое — Такси в Черемхово",
//     description: "Удобный заказ такси в Черемхово через Telegram-бот, мобильное приложение и по телефону.",
//     url: "https://taxi-novoe.vercel.app",
//     siteName: "Такси Новое",
//     images: [
//       {
//         url: "/preview.png",
//         width: 1200,
//         height: 630,
//         alt: "Такси Новое — Черемхово",
//       },
//     ],
//     locale: "ru_RU",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Такси Новое — Такси в Черемхово",
//     description: "Удобный заказ такси в Черемхово через Telegram-бот, мобильное приложение и по телефону.",
//     images: ["/preview.png"],
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
      {/* <Script
          type="application/ld+json"
          id="jsonld"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Такси Новое",
              "url": "https://taxi-novoe.vercel.app",
              "logo": "https://taxi-novoe.vercel.app/logo.png"
            }),
          }}
        /> */}
      </head>
      <body>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
