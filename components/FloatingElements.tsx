export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float animation-delay-0"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full animate-float animation-delay-200"></div>
      <div className="absolute top-60 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full animate-float animation-delay-400"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float animation-delay-600"></div>
      <div className="absolute bottom-20 left-1/3 w-14 h-14 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-float animation-delay-800"></div>
      
      {/* Floating squares */}
      <div className="absolute top-80 right-1/4 w-8 h-8 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rotate-45 animate-bounce-slow animation-delay-300"></div>
      <div className="absolute bottom-60 left-20 w-10 h-10 bg-gradient-to-r from-green-500/15 to-teal-500/15 rotate-12 animate-bounce-slow animation-delay-500"></div>
      
      {/* Larger background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-pink-300/10 to-red-300/10 rounded-full animate-pulse-slow animation-delay-400"></div>
    </div>
  )
}