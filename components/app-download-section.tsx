"use client"

import { motion } from "framer-motion"
import { Smartphone, Apple, MessageCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AppDownloadSection() {
  return (
    <section id="app" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Установить приложение</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Вы можете пользоваться приложением «Такси Новое» на любой платформе! Оно доступно для скачивания как на
            Android, так и на iOS, что позволяет каждому клиенту воспользоваться удобным способом заказа такси.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
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
                      style={{ backgroundColor: "#2177ee"}}
                    >
                      Скачать из App Store
                    </Button>
                  </a>
                  <p className="mt-3 text-xs text-yellow-800 font-medium">4.9★ рейтинг</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div
                className="bg-white rounded-xl shadow-xl overflow-hidden border transition-all hover:shadow-2xl transform hover:scale-105"
                style={{ borderColor: "#ef454a" }}
              >
                <div className="h-3" style={{ backgroundColor: "#ef454a" }} />
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 p-3 mb-4">
                    <Image
                      src="/appgallery.svg"
                      alt="Такси"
                      width={16}
                      height={16}
                      className="w-full h-full object-cover"
                      style={{ transform: "scale(1.8)" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">AppGallery</h3>
                  <p className="text-gray-600 mb-4">Скачайте из Huawei AppGallery для устройств Huawei</p>
                  <a href="https://appgallery.huawei.com/#/app/C114080025">
                    <Button
                      className="hover:bg-purple-700 text-white flex items-center gap-2 shadow-md"
                      style={{ backgroundColor: "#ef454a" }}
                    >
                      <Download className="h-5 w-5" />
                      Скачать из AppGallery
                    </Button>
                  </a>
                </div>
              </div>

              <div
                className="bg-white rounded-xl shadow-xl overflow-hidden border transition-all hover:shadow-2xl transform hover:scale-105"
                style={{ borderColor: "#40b3df" }}
              >
                <div className="h-3 bg-blue-500" style={{ backgroundColor: "#40b3df" }} />
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 p-3 mb-4">
                    <Image
                      src="/telegram.svg"
                      alt="Такси"
                      width={16}
                      height={16}
                      className="w-full h-full object-cover"
                      style={{ transform: "scale(1.8)" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Telegram</h3>
                  <p className="text-gray-600 mb-4">
                    Не выходя из Telegram — вызывайте такси с нашим ботом
                  </p>
                  <a href="https://t.me/Taxi_novoe_bot">
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 shadow-md"
                    style={{ backgroundColor: "#40b3df" }}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Открыть в Telegram
                  </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="mt-6">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-green-200 transition-all hover:shadow-2xl transform hover:scale-105">
                <div className="h-3 bg-green-600" />
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-50 p-3 rounded-full shadow-sm mb-4 flex items-center justify-center">
                    <Download className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">APK файл</h3>
                  <p className="text-gray-600 mb-4">Скачайте APK файл напрямую с нашего сервера</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 shadow-md">
                    <Download className="h-5 w-5" />
                    Скачать APK файл
                  </Button>
                  <p className="mt-3 text-xs text-green-800 font-medium">Версия 2.5.3</p>
                </div>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[700px] w-full max-w-[350px] flex">
              <Image
                src="/phone.webp"
                alt="Скриншот приложения такси"
                width={350}
                height={700}
                className="rounded-[20px] object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
