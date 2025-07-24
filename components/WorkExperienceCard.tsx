import { WorkExperience } from '@/types'

interface WorkExperienceCardProps {
  experience: WorkExperience
  index: number
}

export default function WorkExperienceCard({ experience, index }: WorkExperienceCardProps) {
  const { metadata } = experience

  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }

  const startDate = formatDate(metadata.start_date)
  const endDate = metadata.end_date ? formatDate(metadata.end_date) : 'Present'

  return (
    <div className={`bg-white rounded-xl p-8 card-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-up`} 
         style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Company Logo */}
        {metadata.company_logo && (
          <div className="flex-shrink-0">
            <img
              src={`${metadata.company_logo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={`${metadata.company} logo`}
              width="80"
              height="80"
              className="rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Experience Details */}
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {metadata.job_title}
              </h3>
              <h4 className="text-xl text-blue-600 font-semibold mb-2">
                {metadata.company}
              </h4>
              {metadata.location && (
                <p className="text-gray-600 mb-2 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {metadata.location}
                </p>
              )}
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
              </svg>
              <span className="font-medium">
                {startDate} - {endDate}
              </span>
              {metadata.current_position && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  Current
                </span>
              )}
            </div>
          </div>

          {/* Job Description */}
          {metadata.description && (
            <div 
              className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: metadata.description }}
            />
          )}
        </div>
      </div>
    </div>
  )
}