import { Suspense } from "react"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AppDownloadSection from "@/components/app-download-section"
import BecomeDriverSection from "@/components/become-driver-section"
import ContactsSection from "@/components/contacts-section"
import Footer from "@/components/footer"
import FloatingActionButtons from "@/components/floating-action-buttons"
import MovingBackground from "@/components/moving-background"

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white relative">
        <Header />
        <HeroSection />
        <AboutSection />
        <AppDownloadSection />
        <BecomeDriverSection />
        <ContactsSection />
        <Footer />
        <FloatingActionButtons />
      </main>
    </>
  )
}
