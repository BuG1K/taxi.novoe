"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone } from "lucide-react"
import Logo from "@/components/logo"
import CallbackForm from "@/components/callback-form"

// Fix the navigation menu and make phone numbers visible on mobile
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showCallbackForm, setShowCallbackForm] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">

          <div className="flex items-center justify-between" style={{ position: "relative" }}>
            <AnimatePresence>
              {!isScrolled ? (
                  <motion.div className="w-10 opacity-0" key="placeholder" exit={{ opacity: 0 }} />
              ) : (
                <motion.div
                  className="flex items-center"
                  key="logo"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Logo width={40} height={40} />
                  <div className="ml-3">
                    <h1 className="text-xl font-bold">
                      Такси <span className="bg-yellow-400 px-1 py-0.5 rounded">НОВОЕ</span>
                    </h1>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div 
              className="hidden md:flex items-center space-x-6"
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
              <a
                href="#about"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                О нас
              </a>
              <a
                href="#app"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Приложение
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Контакты
              </a>
            </div>

            <div className="flex items-center">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-red-600" />
                  <a href="tel:656711" className="text-gray-700 font-medium hover:text-red-600 transition-colors">
                    65-67-11
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="h-3 w-3 text-red-600" />
                  <a href="tel:83952656711" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    8 (3952) 65-67-11
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <CallbackForm isOpen={showCallbackForm} onClose={() => setShowCallbackForm(false)} />
    </>
  )
}
