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
    <div className="group relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30 lg:block hidden"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg lg:block hidden group-hover:scale-125 transition-transform duration-300"></div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 lg:ml-16 shadow-xl border border-gray-100/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Company Logo */}
          {metadata.company_logo && (
            <div className="flex-shrink-0">
              <div className="relative group-hover:scale-110 transition-transform duration-300">
                <img
                  src={`${metadata.company_logo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                  alt={`${metadata.company} logo`}
                  width="100"
                  height="100"
                  className="rounded-xl shadow-lg"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          )}

          {/* Experience Details */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {metadata.job_title}
                </h3>
                <h4 className="text-xl lg:text-2xl text-blue-600 font-semibold mb-3">
                  {metadata.company}
                </h4>
                {metadata.location && (
                  <p className="text-gray-600 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {metadata.location}
                  </p>
                )}
              </div>
              
              <div className="flex items-center gap-3 mt-4 lg:mt-0">
                <div className="flex items-center gap-2 text-gray-600 bg-gray-100 rounded-full px-4 py-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                  </svg>
                  <span className="font-semibold text-sm">
                    {startDate} - {endDate}
                  </span>
                </div>
                
                {metadata.current_position && (
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    Current
                  </span>
                )}
              </div>
            </div>

            {/* Job Description */}
            {metadata.description && (
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-50"></div>
                <div 
                  className="prose prose-lg prose-gray max-w-none text-gray-700 leading-relaxed pl-6"
                  dangerouslySetInnerHTML={{ __html: metadata.description }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}