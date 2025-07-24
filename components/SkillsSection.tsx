'use client'

import { useInView } from '@/hooks/useInView'
import AnimatedSection from './AnimatedSection'

const skills = [
  { name: 'Sales Development', level: 95, color: 'from-blue-500 to-blue-600' },
  { name: 'Business Partnerships', level: 90, color: 'from-purple-500 to-purple-600' },
  { name: 'Client Relationship Management', level: 92, color: 'from-green-500 to-green-600' },
  { name: 'Strategic Planning', level: 88, color: 'from-orange-500 to-orange-600' },
  { name: 'Technology Solutions', level: 85, color: 'from-pink-500 to-pink-600' },
  { name: 'Team Leadership', level: 87, color: 'from-indigo-500 to-indigo-600' },
]

const achievements = [
  { number: '50+', label: 'Enterprise Clients', icon: '🏢' },
  { number: '25%', label: 'Sales Cycle Reduction', icon: '⚡' },
  { number: '3+', label: 'Years Experience', icon: '📈' },
  { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
]

export default function SkillsSection() {
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.3 })

  return (
    <section className="py-20 section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-200/30 to-red-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Core <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proven expertise in driving business growth through strategic partnerships, 
            innovative sales approaches, and technology-driven solutions.
          </p>
        </AnimatedSection>

        {/* Achievement Stats */}
        <AnimatedSection className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 group-hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              Professional Skills
            </h3>
            
            <div ref={skillsRef as React.RefObject<HTMLDivElement>} className="space-y-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm font-bold text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{
                          width: skillsInView ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}