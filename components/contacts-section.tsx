"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactsSection() {
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
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          style={{ position: "relative" }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Адрес</h3>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-6 w-6 text-red-600 mt-1" />
                <p className="text-gray-700">665402, Россия, Иркутская обл., г. Черемхово, ул. Белинского, 23</p>
              </div>

              <h3 className="text-2xl font-bold mb-6">Вызов такси</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-medium">Основной номер для вызова такси:</p>
                    <a href="tel:656711" className="text-lg text-red-600 hover:underline">
                      65-67-11
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-medium">С МегаФона:</p>
                    <a href="tel:656711" className="text-lg text-red-600 hover:underline">
                      8 (3952) 65-67-11
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Прием водителей</h3>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-red-600" />
                <a href="mailto:novoetaxi711@mail.ru" className="text-lg text-red-600 hover:underline">
                  novoetaxi711@mail.ru
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">Карта</h3>
              <div className="aspect-square w-full bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500"></p>
              </div>
              <p className="mt-4 text-gray-600 text-center">
                Мы находимся в центре города, что позволяет нам быстро добраться до любой точки.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
