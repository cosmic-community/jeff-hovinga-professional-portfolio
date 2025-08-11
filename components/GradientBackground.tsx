'use client'

export default function GradientBackground() {
  return (
    <>
      {/* Main animated gradient background with softer forest green theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-green-800 to-teal-800">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-green-500/20 to-teal-500/20 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/15 via-emerald-500/15 to-green-500/15 animate-pulse-slow animation-delay-400"></div>
      </div>

      {/* Mesh gradient overlay with softer green tones */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-25 mix-blend-overlay"></div>

      {/* Animated geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating gradients with softer forest green theme */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-emerald-400 via-green-400 to-teal-400 opacity-15 animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-teal-400 via-green-400 to-emerald-400 opacity-10 animate-spin-slow animation-delay-600"></div>
        
        {/* Floating orbs with different sizes and animations - softer colors */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-emerald-300/20 to-transparent rounded-full animate-float blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-radial from-green-300/18 to-transparent rounded-full animate-float animation-delay-200 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-radial from-teal-300/15 to-transparent rounded-full animate-float animation-delay-400 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-radial from-green-300/22 to-transparent rounded-full animate-float animation-delay-600 blur-xl"></div>
        
        {/* Smaller accent orbs - softer colors */}
        <div className="absolute top-1/6 right-1/6 w-32 h-32 bg-gradient-radial from-emerald-300/25 to-transparent rounded-full animate-float animation-delay-800 blur-lg"></div>
        <div className="absolute bottom-1/6 left-1/6 w-24 h-24 bg-gradient-radial from-teal-300/20 to-transparent rounded-full animate-float animation-delay-1000 blur-md"></div>
      </div>

      {/* Subtle grid overlay for texture */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Top and bottom gradient fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </>
  )
}