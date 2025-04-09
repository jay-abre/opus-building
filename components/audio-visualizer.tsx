"use client"

import { useEffect, useRef } from "react"

export default function AudioVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Colors from the theme
    const colors = ["#8B7E66", "#E5DCC3", "#3A3A3A", "#FFFCF5"]

    // Create audio context and analyzer
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const analyzer = audioContext.createAnalyser()
    analyzer.fftSize = 256

    // Create oscillator for demo sound
    const oscillator = audioContext.createOscillator()
    oscillator.type = "sine"
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime)

    // Create gain node to control volume
    const gainNode = audioContext.createGain()
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)

    // Connect nodes
    oscillator.connect(gainNode)
    gainNode.connect(analyzer)
    analyzer.connect(audioContext.destination)

    // Start oscillator
    oscillator.start()

    // Create data array for frequency data
    const bufferLength = analyzer.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate)

      // Get frequency data
      analyzer.getByteFrequencyData(dataArray)

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw visualizer
      const barWidth = (canvas.width / bufferLength) * 2.5
      let x = 0

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 2

        // Use colors from theme
        const colorIndex = Math.floor((i / bufferLength) * colors.length)
        ctx.fillStyle = colors[colorIndex]

        // Draw bar
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

        x += barWidth + 1
      }
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      oscillator.stop()
      audioContext.close()
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="mt-6 rounded-lg overflow-hidden bg-[#3A3A3A] p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-medium">Acoustic Visualization</h3>
        <span className="text-xs text-[#E5DCC3]">Experience sound in space</span>
      </div>
      <canvas ref={canvasRef} className="w-full h-32 rounded" />
    </div>
  )
}
