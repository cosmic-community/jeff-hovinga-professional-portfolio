'use client'

import AnimatedSection from './AnimatedSection'

export default function Footer() {
  const COSMIC_BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG || 'myprofile-production'
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-300"></div>
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection className="text-center space-y-8">
          {/* Main Footer Content */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to <span className="gradient-text">Accelerate Growth</span>?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Let's connect and explore how we can work together to drive your business forward 
              with innovative solutions and strategic partnerships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:jeff@cosmicjs.com"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.708a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
              
              <a
                href="https://www.linkedin.com/in/jeffhovinga/"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-button text-white px-8 py-4 rounded-full font-semibold"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-center lg:text-left">
              © {new Date().getFullYear()} Jeff Hovinga. All rights reserved.
            </p>

            {/* Built with Cosmic Button */}
            <a
              href={`https://www.cosmicjs.com?utm_source=bucket_${COSMIC_BUCKET_SLUG}&utm_medium=referral&utm_campaign=app_footer&utm_content=built_with_cosmic`}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button group"
            >
              <img 
                src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg" 
                alt="Cosmic Logo" 
                className="w-5 h-5 group-hover:rotate-12 transition-transform"
              />
              Built with Cosmic
            </a>

            {/* Additional Links */}
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}