"use client"

import { useEffect, useRef } from "react"

export default function MovingLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Color palettes for lines - more vibrant colors
    const colorPalettes = [
      ["#ff6666", "#ffcccc"], // Red
      ["#ffcc00", "#fff0b3"], // Yellow
      ["#3399ff", "#cce6ff"], // Blue
      ["#66cc66", "#d6f5d6"], // Green
    ]

    // Create lines
    const lines = []
    for (let i = 0; i < 20; i++) {
      const palette = colorPalettes[i % colorPalettes.length]

      // Random position but ensure lines are diagonal
      const startX = Math.random() * canvas.width
      const startY = Math.random() * canvas.height

      // Straight lines with random angle (but mostly diagonal)
      const angle = (Math.random() * Math.PI) / 4 + (Math.PI / 4) * (i % 4)

      const length = 150 + Math.random() * 250
      const width = 4 + Math.random() * 6 // Thicker lines
      const speed = 0.5 + Math.random() * 1.5
      const opacity = 0.4 + Math.random() * 0.5 // More opaque

      lines.push({
        startX,
        startY,
        length,
        angle,
        speed,
        width,
        colors: palette,
        opacity,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line) => {
        // Calculate end point for straight line
        const endX = line.startX + Math.cos(line.angle) * line.length
        const endY = line.startY + Math.sin(line.angle) * line.length

        // Create gradient
        const gradient = ctx.createLinearGradient(line.startX, line.startY, endX, endY)
        gradient.addColorStop(
          0,
          line.colors[0] +
            Math.floor(line.opacity * 255)
              .toString(16)
              .padStart(2, "0"),
        )
        gradient.addColorStop(
          1,
          line.colors[1] +
            Math.floor(line.opacity * 255)
              .toString(16)
              .padStart(2, "0"),
        )

        // Draw straight line
        ctx.beginPath()
        ctx.moveTo(line.startX, line.startY)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = gradient
        ctx.lineWidth = line.width
        ctx.stroke()

        // Move line
        line.startX += Math.cos(line.angle - Math.PI) * line.speed
        line.startY += Math.sin(line.angle - Math.PI) * line.speed

        // Reset line when it goes off screen
        if (
          line.startX < -line.length ||
          line.startX > canvas.width + line.length ||
          line.startY < -line.length ||
          line.startY > canvas.height + line.length
        ) {
          line.startX = Math.random() * canvas.width
          line.startY = Math.random() * canvas.height
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-40" />
}
