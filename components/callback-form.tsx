"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { X } from "lucide-react"

interface CallbackFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function CallbackForm({ isOpen, onClose }: CallbackFormProps) {
  const { toast } = useToast()
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phone) {
      toast({
        title: "Ошибка",
        description: "Номер телефона обязателен",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Запрос отправлен",
      description: "Оператор перезвонит вам в ближайшее время.",
    })

    setPhone("")
    setMessage("")
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

        <h2 className="text-2xl font-bold mb-6 text-center">Мы Вам Перезвоним</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Номер Телефона *
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (XXX) XXX-XX-XX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Сообщение
            </label>
            <Textarea
              id="message"
              placeholder="Особые пожелания или детали..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full"
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "Отправить Запрос"}
          </Button>

          <p className="text-center text-sm text-gray-500 mt-2">Оператор перезвонит вам в ближайшее время.</p>
        </form>
      </motion.div>
    </motion.div>
  )
}
