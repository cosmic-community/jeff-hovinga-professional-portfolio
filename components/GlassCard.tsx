'use client'

import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'hover' | 'glow'
  blur?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function GlassCard({ 
  children, 
  className = '', 
  variant = 'default',
  blur = 'md'
}: GlassCardProps) {
  const blurMap = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  }

  const variantStyles = {
    default: 'bg-white/10 border-white/20',
    hover: 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-500',
    glow: 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-glow hover:shadow-blue-500/25 hover:scale-105 transition-all duration-500'
  }

  return (
    <div className={`
      ${blurMap[blur]} 
      ${variantStyles[variant]}
      border rounded-2xl
      shadow-glass
      relative overflow-hidden
      ${className}
    `}>
      {/* Inner highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated border glow for glow variant */}
      {variant === 'glow' && (
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm animate-gradient-shift" />
        </div>
      )}
    </div>
  )
}