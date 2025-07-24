'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    description: 'Drop me a line anytime',
    value: 'jeff@cosmicjs.com',
    action: 'mailto:jeff@cosmicjs.com',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    description: 'Let\'s connect professionally',
    value: 'in/jeffhovinga',
    action: 'https://www.linkedin.com/in/jeffhovinga/',
    gradient: 'from-blue-600 to-blue-700'
  },
  {
    icon: '📱',
    title: 'Phone',
    description: 'Call for immediate response',
    value: '+1 (616) 780-9226',
    action: 'tel:+16167809226',
    gradient: 'from-green-500 to-green-600'
  },
]

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to accelerate your business growth? I'm here to help you achieve your goals 
            through strategic partnerships and innovative solutions.
          </p>
        </AnimatedSection>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <AnimatedSection
              key={method.title}
              animation="scaleIn"
              delay={index * 200}
              className="group"
            >
              <a
                href={method.action}
                target={method.title === 'LinkedIn' ? '_blank' : undefined}
                rel={method.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="block"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`glass-card rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 ${
                  hoveredCard === index ? 'shadow-2xl shadow-blue-500/25' : ''
                }`}>
                  <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {method.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {method.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${method.gradient} rounded-full text-white font-medium text-sm transition-all duration-300 group-hover:shadow-lg`}>
                    {method.value}
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection className="text-center" delay={600}>
          <div className="glass-card rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Whether you're looking to expand your business, explore new partnerships, 
              or leverage cutting-edge technology solutions, I'm here to help make it happen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jeff@cosmicjs.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.708a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
              
              <a
                href="https://www.linkedin.com/in/jeffhovinga/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}