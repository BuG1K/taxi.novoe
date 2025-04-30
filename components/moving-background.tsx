"use client"

import { useEffect, useRef } from "react"

export default function MovingBackground() {
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

    // Create gradient lines
    const lines = []

    // Color palettes for each line
    const colorPalettes = [
      ["#ff0000", "#ff6b6b", "#ffb8b8"], // Red palette
      ["#fed703", "#ffea80", "#fff6d6"], // Yellow palette
      ["#00008B", "#0000CD", "#4169E1"], // Dark blue palette
      ["#ff0000", "#fed703", "#00008B"], // Mix of all three colors
    ]

    for (let i = 0; i < 15; i++) {
      // Increase number of lines
      const palette = colorPalettes[i % colorPalettes.length]

      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 150 + Math.random() * 250,
        width: 2 + Math.random() * 5, // Wider lines
        speed: 0.5 + Math.random() * 1.5, // Slower speed for smoother animation
        angle: Math.PI / 2 + (Math.random() * 0.4 - 0.2), // Mostly upward with slight variation
        colors: palette,
        opacity: 0.15 + Math.random() * 0.35, // Slightly more opaque
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line) => {
        // Create gradient for this line
        const gradient = ctx.createLinearGradient(
          line.x,
          line.y,
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length,
        )

        // Add color stops
        gradient.addColorStop(
          0,
          line.colors[0] +
            Math.floor(line.opacity * 255)
              .toString(16)
              .padStart(2, "0"),
        )
        gradient.addColorStop(
          0.5,
          line.colors[1] +
            Math.floor(line.opacity * 255)
              .toString(16)
              .padStart(2, "0"),
        )
        gradient.addColorStop(
          1,
          line.colors[2] +
            Math.floor(line.opacity * 255)
              .toString(16)
              .padStart(2, "0"),
        )

        // Draw line with gradient
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x + Math.cos(line.angle) * line.length, line.y + Math.sin(line.angle) * line.length)
        ctx.strokeStyle = gradient
        ctx.lineWidth = line.width
        ctx.stroke()

        // Move line
        line.y -= line.speed

        // Reset line when it goes off screen
        if (line.y + line.length * Math.sin(line.angle) < 0) {
          line.y = canvas.height + 10
          line.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-30" />
}
