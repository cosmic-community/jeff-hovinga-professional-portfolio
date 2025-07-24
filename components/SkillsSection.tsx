'use client'

import AnimatedSection from './AnimatedSection'
import { useInView } from '@/hooks/useInView'
import { useEffect, useState } from 'react'

interface StatProps {
  number: string
  label: string
  icon: React.ReactNode
}

function AnimatedStat({ number, label, icon }: StatProps) {
  const { ref, inView: isInView } = useInView({ threshold: 0.3 })
  const [displayNumber, setDisplayNumber] = useState('0')

  useEffect(() => {
    if (isInView) {
      // Simple animation to show the final number
      setTimeout(() => setDisplayNumber(number), 200)
    }
  }, [isInView, number])

  return (
    <div ref={ref} className="text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">
        {isInView ? displayNumber : '0'}
      </div>
      <div className="text-gray-300 text-lg">{label}</div>
    </div>
  )
}

export default function SkillsSection() {
  const skills = [
    { name: 'Business Development', level: 95 },
    { name: 'Strategic Planning', level: 90 },
    { name: 'Client Relationship Management', level: 98 },
    { name: 'Sales Leadership', level: 92 },
    { name: 'Market Analysis', level: 88 },
    { name: 'Team Management', level: 94 },
    { name: 'Negotiation', level: 96 },
    { name: 'Partnership Development', level: 91 }
  ]

  const stats = [
    {
      number: '100+',
      label: 'Enterprise Clients',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: '15+',
      label: 'Years Experience',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '$50M+',
      label: 'Revenue Generated',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="section-title gradient-text">Skills & Expertise</h2>
          <p className="section-subtitle">
            Driving business growth through strategic partnerships and exceptional client relationships
          </p>
        </AnimatedSection>

        {/* Statistics */}
        <AnimatedSection animation="fadeInUp" delay={200} className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-6 group"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-blue-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}