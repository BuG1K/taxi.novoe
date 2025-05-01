"use client"

import { motion } from "framer-motion"
import { ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import AppDownloadCards from "@/components/app-download-cards"
import MovingLines from "@/components/moving-lines"
import Logo from "@/components/logo"

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden">
      <MovingLines />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Logo width={60} height={60} />
              <h1 className="text-4xl md:text-6xl font-extrabold ml-4 text-gray-900">
                Такси <span className="bg-yellow-400 text-black px-2 py-1 rounded">НОВОЕ</span>
              </h1>
            </div>

            <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700">Такси, которое всегда рядом</h2>

            <p className="text-gray-600 mb-6 text-lg">
              Городское такси с фиксированными тарифами и быстрой подачей автомобиля. Работаем 24/7 по всему городу
              Черемхово и области.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Заказать Такси
              </Button>

              <Button
                variant="outline"
                className="border-yellow-400 text-gray-800 hover:bg-yellow-50 font-bold py-3 px-8 rounded-full text-lg"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Узнать Больше
              </Button>
            </div>

            <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-6">
              <div className="flex flex-col space-y-5">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start"
                    }}
                  >
                    <p className="font-medium text-gray-500 mb-1 flex">
                      <Phone className="text-red-600" width={18} />
                      <span className="ml-1">Основной номер:</span>
                    </p>
                    <a
                      href="tel:656711"
                      className="text-3xl font-bold hover:underline"
                      style={{ color: "#f43249" }}
                    >
                      65-67-11
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <svg className="mb-2" style={{ width: "100px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 623 112"><path fill="#00B956" d="M608.292 31.117V51.95h-27.978V31.117h-13.769v55.067h13.769V63.951h27.978v22.233h13.842V31.117z"></path><path fill="#00B956" fillRule="evenodd" d="M367.31 29.865c4.417 0 9.056 2.43 11.338 7.436l22.53 48.883h-14.652l-4.933-11.632h-28.567l-4.933 11.632h-14.652l22.53-48.883c2.282-5.007 6.921-7.436 11.339-7.436m-1.105 13.693-8.467 19.951h19.143l-8.467-19.95c-.221-.663-.736-.81-1.104-.81s-.81.22-1.105.81Z" clipRule="evenodd"></path><path fill="#00B956" d="M214.533 21.178c-6.48 0-10.603 3.46-13.622 10.38l-17.965 41.374-17.965-41.374c-3.018-6.92-7.142-10.38-13.621-10.38-6.037 0-12.296 4.343-12.296 13.693v51.313h13.769v-49.84l18.112 41.08c2.43 5.742 6.332 9.349 12.001 9.349 5.67 0 9.572-3.607 12.002-9.35l18.112-41.08v49.841h13.768v-51.24c0-9.423-6.258-13.766-12.295-13.766m36.445 53.227a1.163 1.163 0 0 1-1.178-1.178v-9.644h34.384V52.319H249.8v-8.393c0-.662.515-1.178 1.178-1.178h34.016V31.117h-40.79c-4.785 0-8.172 3.975-8.172 8.171v38.577c0 4.196 3.46 8.172 8.172 8.172h40.79V74.405zm57.429 11.779V44c0-.663.516-1.178 1.179-1.178h34.015V31.19h-40.789c-4.786 0-8.173 3.976-8.173 8.172v46.822z"></path><path fill="#00B956" fillRule="evenodd" d="M528.259 30.307c20.837 0 29.157 8.981 29.157 28.27 0 18.994-8.468 28.122-29.304 28.122h-4.565c-20.837 0-29.304-9.128-29.304-28.122 0-19.289 8.246-28.27 29.157-28.27zm-4.638 44.981h4.417c11.412 0 15.977-5.153 15.977-16.711v-.074c0-11.19-4.27-16.712-15.977-16.712h-4.417c-12.075 0-15.978 5.522-15.978 16.712v.074c0 11.558 4.492 16.711 15.978 16.711m-95.127-52.785h27.316c20.321 0 28.493 10.307 28.567 28.27 0 2.797-.221 5.374-.589 7.804-2.135 12.736-9.645 20.54-28.715 20.54h-5.963v7.067h-13.769v-7.067h-6.037c-19.07 0-26.58-7.804-28.715-20.54-.442-2.43-.589-5.006-.589-7.804 0-17.963 8.099-28.27 28.494-28.27m6.774 44.982h-6.332c-9.351 0-12.664-3.46-14.726-8.908-.81-2.135-.81-4.786-.81-7.804 0-11.706 5.449-16.712 13.4-16.712h8.468zm34.825-8.908c-2.061 5.448-5.448 8.908-14.725 8.908h-6.332V34.06h8.467c7.952 0 13.4 4.933 13.4 16.712 0 3.018 0 5.669-.81 7.804ZM62.86 58.135V1.227c27.242 3.313 48.373 26.577 48.447 54.7 0 30.478-24.74 55.214-55.22 55.214a58 58 0 0 1-5.081-.221V63.215a.58.58 0 0 1 .589-.59h6.774c2.43 0 4.49-1.987 4.49-4.49ZM61.682 86.11a6.913 6.913 0 0 1-6.921-6.92 6.913 6.913 0 0 1 6.92-6.92 6.913 6.913 0 0 1 6.922 6.92 6.913 6.913 0 0 1-6.921 6.92m9.277-6.92a6.913 6.913 0 0 0 6.92 6.92 6.913 6.913 0 0 0 6.922-6.92 6.913 6.913 0 0 0-6.921-6.92 6.913 6.913 0 0 0-6.921 6.92m16.198 0a6.913 6.913 0 0 0 6.92 6.92A6.913 6.913 0 0 0 101 79.19a6.913 6.913 0 0 0-6.921-6.92 6.913 6.913 0 0 0-6.921 6.92Z" clipRule="evenodd"></path><path fill="#00B956" fillRule="evenodd" d="M.792 56C.792 25.521 25.531.785 56.012.785h.148v54.626a.58.58 0 0 1-.59.589h-6.92c-2.356.074-4.27 2.061-4.344 4.417v49.546C19.42 104.589.792 82.503.792 56m37.697-16.638a6.913 6.913 0 0 0 6.921 6.92 6.913 6.913 0 0 0 6.921-6.92 6.913 6.913 0 0 0-6.92-6.92 6.913 6.913 0 0 0-6.922 6.92" clipRule="evenodd"></path></svg>
                    <a
                      href="tel:83952656711"
                      className="text-2xl font-bold text-blue-600 hover:underline"
                      style={{ color: "#2177ee" }}
                    >
                      8 (3952) 65-67-11
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AppDownloadCards />

            <div className="text-center mt-6">
              <Button
                variant="link"
                className="text-gray-500 flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Все способы установки
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </motion.div>
    </section>
  )
}
