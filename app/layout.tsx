import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Такси Новое — Такси в Черемхово | Вызов онлайн и по телефону",
  description:
    "Такси Новое — надёжное такси в Черемхово. Заказ онлайн, по телефону или через приложение. Работа с водителями. Круглосуточно.",
  metadataBase: new URL("https://taxi-novoe.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Такси Новое",
    description: "Заказ такси в Черемхово. Онлайн и по телефону.",
    url: "https://taxi-novoe.vercel.app",
    siteName: "Такси Новое",
    locale: "ru_RU",
    type: "website",
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
