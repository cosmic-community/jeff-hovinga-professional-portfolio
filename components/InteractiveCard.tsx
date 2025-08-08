'use client'

import { useState, useRef } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: 'blue' | 'purple' | 'pink' | 'green' | 'cyan'
  intensity?: 'low' | 'medium' | 'high'
}

const glowColors = {
  blue: 'rgba(59, 130, 246, 0.4)',
  purple: 'rgba(147, 51, 234, 0.4)',
  pink: 'rgba(236, 72, 153, 0.4)',
  green: 'rgba(34, 197, 94, 0.4)',
  cyan: 'rgba(6, 182, 212, 0.4)',
}

const intensityLevels = {
  low: 0.3,
  medium: 0.5,
  high: 0.7,
}

export default function InteractiveCard({
  children,
  className = '',
  glowColor = 'blue',
  intensity = 'medium',
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition()

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(10px)
    `
  }

  const handleMouseLeaveReset = () => {
    if (!cardRef.current) return
    
    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(0deg) 
      rotateY(0deg) 
      translateZ(0px)
    `
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className={`
        relative group cursor-pointer transition-all duration-300 ease-bounce-out
        transform-gpu backface-hidden preserve-3d
        ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeaveReset}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow effect that follows mouse */}
      <div
        className={`
          absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 
          transition-all duration-500 blur-xl -z-10
        `}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            ${glowColors[glowColor]} 0%, 
            transparent 70%)`,
          opacity: isHovered ? intensityLevels[intensity] : 0,
        }}
      />

      {/* Main card content */}
      <div className="relative z-10 glass-card rounded-2xl overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
        {/* Inner glow border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div 
            className="absolute inset-0 rounded-2xl border opacity-50"
            style={{
              borderColor: glowColors[glowColor],
              boxShadow: `inset 0 0 20px ${glowColors[glowColor]}`,
            }}
          />
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
        </div>

        {/* Content */}
        <div className="relative z-20">
          {children}
        </div>
      </div>

      {/* Additional floating elements for depth */}
      <div className="absolute -inset-2 opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-20">
        <div 
          className="absolute inset-0 rounded-3xl blur-2xl"
          style={{
            background: `linear-gradient(135deg, ${glowColors[glowColor]}, transparent)`,
          }}
        />
      </div>
    </div>
  )
}