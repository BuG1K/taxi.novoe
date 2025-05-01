import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Такси Новое — Такси в Черемхово",
  description: "Надёжное такси в Черемхово. Онлайн-заказ, вызов по телефону, удобное приложение. Работа с водителями.",
  metadataBase: new URL("https://taxi-novoe.vercel.app"),
  verification: {
    google: "jW1zSv6t4asOArFjefcQ1yF-YYGA9T8D2eWcmjwIm5s",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Такси Новое — Черемхово",
    description: "Круглосуточный заказ такси в Черемхово. Удобное приложение и вызов по номеру.",
    url: "https://taxi-novoe.vercel.app",
    siteName: "Такси Новое",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Такси Новое — Черемхово",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Такси Новое — Черемхово",
    description: "Такси в Черемхово. Заказ через сайт, телефон и приложение.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
