import { Phone, Mail } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-6">
              <Logo width={60} height={60} />
              <span className="ml-2 text-xl font-bold">
                Такси <span className="bg-yellow-400 text-black px-1 py-0.5 rounded">НОВОЕ</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">Быстрое, удобное и надежное такси, доступное 24/7.</p>
            <p className="text-gray-400 text-sm">ИНН 382005354944, ОГРНИП 320385000086810</p>
            <p className="text-gray-400 text-sm mt-2">
              665402, Россия, Иркутская обл., г. Черемхово, ул. Белинского, 23
            </p>
            <div className="mt-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6">Свяжитесь с Нами</h3>
            <div className="space-y-3">
              <a href="tel:656711" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-red-500" />
                <span>65-67-11</span>
              </a>
              <a
                href="tel:83952656711"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 text-red-500" />
                <span>С МегаФона: 8 (3952) 65-67-11</span>
              </a>
              <a
                href="mailto:novoetaxi711@mail.ru"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 text-red-500" />
                <span>novoetaxi711@mail.ru</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              По вопросам участия и партнерства обращайтесь на novoetaxi711@mail.ru
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Такси НОВОЕ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
