import { Portfolio } from '@/types'

interface HeroProps {
  portfolio: Portfolio
}

export default function Hero({ portfolio }: HeroProps) {
  const { metadata } = portfolio

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 section-padding">
      <div className="container-width">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            {metadata.profile_photo && (
              <div className="relative">
                <img
                  src={`${metadata.profile_photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                  alt={metadata.full_name}
                  width="300"
                  height="300"
                  className="rounded-full shadow-2xl border-8 border-white"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
              </div>
            )}
          </div>

          {/* Profile Information */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              {metadata.full_name}
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-blue-600 font-medium mb-4 animate-fade-in animation-delay-200">
              {metadata.professional_title}
            </h2>
            
            {metadata.location && (
              <p className="text-gray-600 mb-6 flex items-center justify-center lg:justify-start gap-2 animate-fade-in animation-delay-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {metadata.location}
              </p>
            )}

            {/* About/Bio */}
            {metadata.about && (
              <div 
                className="text-gray-700 text-lg leading-relaxed mb-8 animate-fade-in animation-delay-600"
                dangerouslySetInnerHTML={{ __html: metadata.about }}
              />
            )}

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up animation-delay-600">
              {metadata.email && (
                <a
                  href={`mailto:${metadata.email}`}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.708a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              )}

              {metadata.linkedin_url && (
                <a
                  href={metadata.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              )}

              {metadata.phone && (
                <a
                  href={`tel:${metadata.phone}`}
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call
                </a>
              )}

              {metadata.resume && (
                <a
                  href={metadata.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}