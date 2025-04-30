"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Phone } from "lucide-react"
import CallbackForm from "./callback-form"

export default function FloatingActionButtons() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsCallbackOpen(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 hover:shadow-xl transition-all transform hover:scale-105"
          aria-label="Обратный звонок"
        >
          <Phone className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {isCallbackOpen && <CallbackForm isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
