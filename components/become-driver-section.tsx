"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { UserPlus, Car, CreditCard, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import DriverForm from "./driver-form"
import Image from "next/image"

export default function BecomeDriverSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="become-driver" className="py-20 bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          style={{ position: "relative" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Стать водителем</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Присоединяйтесь к нашей команде профессиональных водителей и начните зарабатывать уже сегодня. Мы предлагаем
            гибкий график работы и достойный заработок.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          style={{ position: "relative" }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="rounded-lg overflow-hidden shadow-lg" variants={item}>
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <Image src="/driver.webp" alt="Такси" width={600} height={400} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Начните зарабатывать с нами</h3>
              </div>
            </div>
            <div className="p-6 bg-white space-y-4">
              <div className="flex gap-3 items-center">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <CreditCard className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium">Стабильный доход</h4>
                  <p className="text-sm text-gray-600">Гарантированный заработок и еженедельные выплаты</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium">Гибкий график</h4>
                  <p className="text-sm text-gray-600">
                    Работайте когда вам удобно, от нескольких часов до полного дня
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Car className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium">Своя машина или наша</h4>
                  <p className="text-sm text-gray-600">Возможность работать на своем авто или арендовать у нас</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center" variants={item}>
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Присоединяйтесь к команде</h3>
              <p className="text-gray-600 mb-6">
                Заполните анкету, и наш менеджер свяжется с вами для обсуждения деталей сотрудничества
              </p>
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 w-full text-lg py-6 font-medium"
                onClick={() => setIsFormOpen(true)}
              >
                Стать водителем
              </Button>
              <p className="mt-4 text-sm text-gray-500">Требования: стаж вождения от 3 лет, чистый послужной список</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <DriverForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}
