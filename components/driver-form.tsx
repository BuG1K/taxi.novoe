"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { X } from "lucide-react"

interface DriverFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function DriverForm({ isOpen, onClose }: DriverFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    experience: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Имя и номер телефона обязательны",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Заявка Отправлена",
      description: "Мы свяжемся с вами в ближайшее время.",
    })

    setFormData({
      name: "",
      phone: "",
      experience: "",
      message: "",
    })
    setIsSubmitting(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Закрыть"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-2 text-center">Присоединяйтесь к Нам</h2>
        <p className="text-center text-gray-600 mb-6">Станьте водителем и начните зарабатывать уже сегодня</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Имя *
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Ваше полное имя"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="driver-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон *
            </label>
            <Input
              id="driver-phone"
              name="phone"
              type="tel"
              placeholder="+7 (XXX) XXX-XX-XX"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Стаж Вождения
            </label>
            <Input
              id="experience"
              name="experience"
              placeholder="Лет опыта вождения"
              value={formData.experience}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="driver-message" className="block text-sm font-medium text-gray-700 mb-1">
              Сообщение
            </label>
            <Textarea
              id="driver-message"
              name="message"
              placeholder="Расскажите о себе..."
              value={formData.message}
              onChange={handleChange}
              className="w-full"
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Подать Заявку"}
          </Button>
        </form>
      </motion.div>
    </motion.div>
  )
}
