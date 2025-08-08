'use client'

export default function GradientBackground() {
  return (
    <>
      {/* Main animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse-slow animation-delay-400"></div>
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 mix-blend-overlay"></div>

      {/* Animated geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating gradients */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-pink-500 via-red-500 to-orange-500 opacity-15 animate-spin-slow animation-delay-600"></div>
        
        {/* Floating orbs with different sizes and animations */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-blue-400/30 to-transparent rounded-full animate-float blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-radial from-purple-400/25 to-transparent rounded-full animate-float animation-delay-200 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-radial from-pink-400/20 to-transparent rounded-full animate-float animation-delay-400 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-radial from-cyan-400/30 to-transparent rounded-full animate-float animation-delay-600 blur-xl"></div>
        
        {/* Smaller accent orbs */}
        <div className="absolute top-1/6 right-1/6 w-32 h-32 bg-gradient-radial from-indigo-400/40 to-transparent rounded-full animate-float animation-delay-800 blur-lg"></div>
        <div className="absolute bottom-1/6 left-1/6 w-24 h-24 bg-gradient-radial from-teal-400/35 to-transparent rounded-full animate-float animation-delay-1000 blur-md"></div>
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