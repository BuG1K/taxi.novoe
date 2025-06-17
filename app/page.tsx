"use client";

import { useEffect } from 'react';
// import { Suspense } from "react"
// import LoadingScreen from "@/components/loading-screen"
// import Header from "@/components/header"
// import HeroSection from "@/components/hero-section"
// import AboutSection from "@/components/about-section"
// import AppDownloadSection from "@/components/app-download-section"
// import BecomeDriverSection from "@/components/become-driver-section"
// import ContactsSection from "@/components/contacts-section"
// import Footer from "@/components/footer"
// import FloatingActionButtons from "@/components/floating-action-buttons"
// import MovingBackground from "@/components/moving-background"
// import { redirect } from 'next/navigation';

export default function Home() {
  // redirect('https://taxi-novoe.tvoe.taxi/');
  useEffect(() => {
    window.location.href = 'https://taxi-novoe.tvoe.taxi';
  }, []);

  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=https://taxi-novoe.ru" />
        <title>Перенаправление...</title>
      </head>
      <body>
        <p>Перенаправляем...</p>
      </body>
    </html>
  );

  // return (
  //   <>
  //     <main className="min-h-screen bg-white relative">
  //       <Header />
  //       <HeroSection />
  //       <AboutSection />
  //       <AppDownloadSection />
  //       <BecomeDriverSection />
  //       <ContactsSection />
  //       <Footer />
  //       <FloatingActionButtons />
  //     </main>
  //   </>
  // )
}
