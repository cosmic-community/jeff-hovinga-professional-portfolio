'use client'

import { Portfolio } from '@/types'
import TypewriterEffect from './TypewriterEffect'
import AnimatedSection from './AnimatedSection'
import GradientBackground from './GradientBackground'

interface HeroProps {
  portfolio: Portfolio
}

export default function Hero({ portfolio }: HeroProps) {
  const { metadata } = portfolio

  const roles = [
    'Business Development Expert',
    'Strategic Partnership Builder',
    'Sales Growth Specialist',
    'Client Success Champion'
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Gradient Background */}
      <GradientBackground />

      {/* Floating geometric shapes with enhanced animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/25 to-pink-500/20 rounded-full blur-3xl animate-float animation-delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-blue-500/25 rounded-full blur-3xl animate-float animation-delay-400"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-float animation-delay-600"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-float animation-delay-800"></div>
      </div>

      <div className="section-padding w-full relative z-10">
        <div className="container-width">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Profile Image with Enhanced Effects */}
            <AnimatedSection animation="scaleIn" className="flex-shrink-0">
              {metadata.profile_photo && (
                <div className="relative group">
                  {/* Multiple glow layers for depth */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-1000 animate-pulse-slow"></div>
                  <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-all duration-1000 animation-delay-200"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Main image */}
                  <div className="relative">
                    <img
                      src={`${metadata.profile_photo.imgix_url}?w=500&h=500&fit=crop&auto=format,compress`}
                      alt={metadata.full_name}
                      width="400"
                      height="400"
                      className="relative rounded-full shadow-2xl border-8 border-white/20 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-bounce-out"
                      crossOrigin="anonymous"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Rotating border effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
                  </div>
                </div>
              )}
            </AnimatedSection>

            {/* Profile Information with Enhanced Typography */}
            <div className="flex-1 text-center lg:text-left">
              <AnimatedSection animation="fadeInUp">
                <h1 className="hero-title text-white mb-6 text-shadow-lg relative">
                  <span className="relative z-10">{metadata.full_name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl -z-10"></div>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="text-2xl lg:text-3xl font-medium mb-6 h-16 lg:h-20 relative">
                  <TypewriterEffect 
                    texts={roles}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseTime={2000}
                    className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient text-shadow"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={400}>
                {metadata.location && (
                  <p className="text-gray-200 mb-8 flex items-center justify-center lg:justify-start gap-3 text-lg">
                    <span className="relative">
                      <svg className="w-6 h-6 text-blue-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="absolute inset-0 bg-blue-400/30 blur-lg"></div>
                    </span>
                    <span className="font-medium">{metadata.location}</span>
                  </p>
                )}
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={600}>
                {metadata.about && (
                  <div 
                    className="text-gray-100 text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
                    dangerouslySetInnerHTML={{ __html: metadata.about }}
                  />
                )}
              </AnimatedSection>

              {/* Enhanced Contact Links */}
              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  {metadata.email && (
                    <a
                      href={`mailto:${metadata.email}`}
                      className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 overflow-hidden"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient-shift"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-200 animate-gradient-shift"></div>
                      
                      {/* Content */}
                      <span className="relative z-10 flex items-center gap-3 text-white">
                        <svg className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.708a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Let's Connect
                      </span>
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl transition-opacity duration-500"></div>
                    </a>
                  )}

                  {metadata.linkedin_url && (
                    <a
                      href={metadata.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group glass-button text-white px-8 py-4 rounded-full font-semibold text-lg relative overflow-hidden"
                    >
                      <span className="flex items-center gap-3 relative z-10">
                        <svg className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </span>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                      </div>
                    </a>
                  )}

                  {metadata.resume && (
                    <a
                      href={metadata.resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group glass-button text-white px-8 py-4 rounded-full font-semibold text-lg relative overflow-hidden"
                    >
                      <span className="flex items-center gap-3 relative z-10">
                        <svg className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Resume
                      </span>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                      </div>
                    </a>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}