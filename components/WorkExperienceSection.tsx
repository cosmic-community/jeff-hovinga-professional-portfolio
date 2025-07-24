import { WorkExperience } from '@/types'
import WorkExperienceCard from '@/components/WorkExperienceCard'
import AnimatedSection from './AnimatedSection'

interface WorkExperienceSectionProps {
  experiences: WorkExperience[]
}

export default function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
  // Sort experiences by start date (most recent first)
  const sortedExperiences = experiences.sort((a, b) => {
    const dateA = new Date(a.metadata.start_date)
    const dateB = new Date(b.metadata.start_date)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <section className="py-20 section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A proven track record in sales development, business partnerships, and client relationship 
            management across various industries, consistently delivering exceptional results.
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          {sortedExperiences.map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              animation="fadeInUp"
              delay={index * 200}
            >
              <WorkExperienceCard 
                experience={experience}
                index={index} 
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}