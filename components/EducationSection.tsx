import { Education } from '@/types'
import AnimatedSection from './AnimatedSection'

interface EducationSectionProps {
  education: Education[]
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="py-20 section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Educational <span className="gradient-text">Foundation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Academic excellence that provides the theoretical foundation for professional success 
            and continuous learning in an ever-evolving business landscape.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <AnimatedSection
              key={edu.id}
              animation="scaleIn"
              delay={index * 200}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 floating-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {edu.metadata.degree}
                    </h3>
                    {edu.metadata.year_completed && (
                      <p className="text-sm text-gray-500 font-medium">
                        Class of {edu.metadata.year_completed}
                      </p>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                  {edu.metadata.institution}
                </h4>

                {edu.metadata.description && (
                  <p className="text-gray-700 leading-relaxed">
                    {edu.metadata.description}
                  </p>
                )}

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}