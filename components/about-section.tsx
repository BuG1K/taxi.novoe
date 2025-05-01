"use client"

import { motion } from "framer-motion"
import { Shield, Clock, UserCheck } from "lucide-react"

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О нас</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-lg text-gray-700 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            «Такси Новое» — это надёжный городской сервис, которому доверяют. Мы работаем уже много лет и отлично знаем,
            что нужно нашим пассажирам: пунктуальность, вежливые водители и комфорт в каждой поездке.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Наши водители — ответственные и опытные специалисты, прошедшие проверку и хорошо знающие город. Мы следим за
            качеством сервиса, потому что ценим ваше время и безопасность.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" style={{ position: "relative" }} variants={item}>
              <div
                className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Пунктуальность</h3>
              <p className="text-gray-600">Мы ценим ваше время и всегда приезжаем вовремя</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" style={{ position: "relative" }} variants={item}>
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="text-gray-600">Ваша безопасность — наш главный приоритет</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" style={{ position: "relative" }} variants={item}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Профессионализм</h3>
              <p className="text-gray-600">Опытные водители с отличным знанием города</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
