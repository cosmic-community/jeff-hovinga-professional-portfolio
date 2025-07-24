'use client'

import { Portfolio } from '@/types'
import TypewriterEffect from './TypewriterEffect'
import AnimatedSection from './AnimatedSection'

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
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-pulse-slow"></div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float animation-delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>

      <div className="section-padding w-full relative z-10">
        <div className="container-width">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Profile Image */}
            <AnimatedSection animation="scaleIn" className="flex-shrink-0">
              {metadata.profile_photo && (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                  <img
                    src={`${metadata.profile_photo.imgix_url}?w=500&h=500&fit=crop&auto=format,compress`}
                    alt={metadata.full_name}
                    width="400"
                    height="400"
                    className="relative rounded-full shadow-2xl border-8 border-white/20 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </AnimatedSection>

            {/* Profile Information */}
            <div className="flex-1 text-center lg:text-left">
              <AnimatedSection animation="fadeInUp">
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg">
                  {metadata.full_name}
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="text-2xl lg:text-3xl text-blue-300 font-medium mb-4 h-16 lg:h-20">
                  <TypewriterEffect 
                    texts={roles}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseTime={2000}
                    className="gradient-text text-shadow"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={400}>
                {metadata.location && (
                  <p className="text-gray-300 mb-8 flex items-center justify-center lg:justify-start gap-2 text-lg">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {metadata.location}
                  </p>
                )}
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={600}>
                {metadata.about && (
                  <div 
                    className="text-gray-200 text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl"
                    dangerouslySetInnerHTML={{ __html: metadata.about }}
                  />
                )}
              </AnimatedSection>

              {/* Contact Links */}
              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  {metadata.email && (
                    <a
                      href={`mailto:${metadata.email}`}
                      className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
                    >
                      <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.708a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Let's Connect
                    </a>
                  )}

                  {metadata.linkedin_url && (
                    <a
                      href={metadata.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group glass-button text-white px-8 py-4 rounded-full font-semibold text-lg"
                    >
                      <span className="flex items-center gap-3">
                        <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </span>
                    </a>
                  )}

                  {metadata.resume && (
                    <a
                      href={metadata.resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group glass-button text-white px-8 py-4 rounded-full font-semibold text-lg"
                    >
                      <span className="flex items-center gap-3">
                        <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Resume
                      </span>
                    </a>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <AnimatedSection 
        animation="fadeInUp" 
        delay={1200}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </AnimatedSection>
    </section>
  )
}