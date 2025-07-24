import { WorkExperience } from '@/types'
import WorkExperienceCard from '@/components/WorkExperienceCard'

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
    <section className="py-20 section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven track record in sales development, business partnerships, and client relationship management across various industries.
          </p>
        </div>

        <div className="space-y-8">
          {sortedExperiences.map((experience, index) => (
            <WorkExperienceCard 
              key={experience.id} 
              experience={experience}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}