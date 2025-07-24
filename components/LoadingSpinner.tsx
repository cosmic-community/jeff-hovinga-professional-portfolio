export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center">
      <div className="text-center">
        {/* Main spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-blue-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>

        {/* Loading text */}
        <div className="text-white text-xl font-semibold mb-4">
          Loading Portfolio
        </div>
        
        {/* Loading dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  )
}