"use client"

import { motion } from "framer-motion"
import { Smartphone, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AppDownloadCards() {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <motion.div className="grid md:grid-cols-2 gap-4" variants={container} initial="hidden" animate="show" layout>
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl border border-red-200 transform hover:scale-105"
        variants={item}
        layout
      >
          <div
                className="bg-white rounded-xl shadow-xl overflow-hidden border transition-all hover:shadow-2xl transform hover:scale-105"
                style={{ borderColor: "#f43249" }}
              >
                <div className="h-3" style={{ backgroundColor: "#f43249" }} />
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 p-3 mb-4">
                    <Image
                      src="/google-play.svg"
                      alt="Google Play"
                      width={16}
                      height={16}
                      className="w-full h-full object-cover"
                      style={{ transform: "scale(1.8)" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 mt-2">Google Play</h3>
                  <p className="text-gray-600 mb-4">
                    Удобный заказ такси — в нашем приложении на Google Play
                  </p>
                  <a href="https://play.google.com/store/apps/details?id=ru.taximaster.tmtaxicaller.id1192&hl=ru">
                    <Button
                      className="hover:bg-red-700 text-white flex items-center gap-2 shadow-md"
                      style={{ backgroundColor: "#f43249"}}
                    >
                      Скачать из Google Play
                    </Button>
                  </a>
                  <p className="mt-3 text-xs text-red-800 font-medium">4.2★ рейтинг</p>
                </div>
              </div>

      </motion.div>

      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl border border-yellow-200 transform hover:scale-105"
        variants={item}
        layout
      >
              <div
                className="bg-white rounded-xl shadow-xl overflow-hidden border transition-all hover:shadow-2xl transform hover:scale-105"
                style={{ borderColor: "#2177ee" }}
              >
                <div className="h-3" style={{ backgroundColor: "#2177ee" }} />
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 p-3 mb-4">
                    <Image
                      src="/app-store.svg"
                      alt="App Store"
                      width={18}
                      height={18}
                      className="w-full h-full object-cover"
                      style={{ transform: "scale(1.8)" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 mt-2 text-gray-800">
                    App Store
                  </h3>
                  <p className="text-gray-600 mb-4">Скачайте из App Store и оцените премиальный сервис такси</p>
                  <a href="https://apps.apple.com/ru/app/%D1%82%D0%B0%D0%BA%D1%81%D0%B8-%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5/id6745222609">
                    <Button
                      className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white flex items-center gap-2 shadow-md"
                      style={{ backgroundColor: "#2177ee"}}>
                      Скачать из App Store
                    </Button>
                  </a>
                  <p className="mt-3 text-xs text-yellow-800 font-medium">4.9★ рейтинг</p>
                </div>
              </div>
      </motion.div>
    </motion.div>
  )
}
