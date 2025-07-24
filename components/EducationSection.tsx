import { Education } from '@/types'

interface EducationSectionProps {
  education: Education[]
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="py-20 section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic foundation that supports professional excellence and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`bg-white rounded-xl p-6 card-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {edu.metadata.degree}
                  </h3>
                  {edu.metadata.year_completed && (
                    <p className="text-sm text-gray-500">
                      {edu.metadata.year_completed}
                    </p>
                  )}
                </div>
              </div>

              <h4 className="text-lg font-semibold text-blue-600 mb-3">
                {edu.metadata.institution}
              </h4>

              {edu.metadata.description && (
                <p className="text-gray-700 leading-relaxed">
                  {edu.metadata.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}