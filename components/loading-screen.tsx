"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 2
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return newProgress
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 160
    canvas.height = 160

    const drawLogo = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw the logo from the image
      const img = new Image()
      img.src = "/logo.png"
      img.crossOrigin = "anonymous"
      img.onload = () => {
        // Draw the full logo
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        // Create a clipping mask for the water fill effect
        ctx.save()
        ctx.beginPath()
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.clip()

        // Fill with semi-transparent white to create "empty" look
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Calculate fill height based on progress (filling from bottom to top)
        const fillHeight = canvas.height - (canvas.height * progress) / 100

        // Create water mask
        ctx.beginPath()
        ctx.rect(0, fillHeight, canvas.width, canvas.height - fillHeight)
        ctx.clip()

        // Draw the logo again in the clipped area to show the "filled" part
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        // Add wave effect
        const time = new Date().getTime() * 0.002
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"

        ctx.beginPath()
        for (let x = 0; x < canvas.width; x++) {
          // Wave effect formula
          const y = Math.sin(x * 0.05 + time) * 5
          ctx.lineTo(x, fillHeight + y)
        }
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fill()

        ctx.restore()
      }
    }

    // Animation loop
    const animate = () => {
      drawLogo()

      if (loading) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      // Cleanup if needed
    }
  }, [progress, loading])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="w-40 h-40 relative mb-8">
        <canvas ref={canvasRef} className="w-40 h-40" />
      </div>

      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-red-600"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>

      <motion.p
        className="mt-4 text-gray-700 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Загрузка... {progress}%
      </motion.p>
    </div>
  )
}
