import { Certification } from '@/types'
import AnimatedSection from './AnimatedSection'

interface CertificationsSectionProps {
  certifications: Certification[]
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }

  return (
    <section className="py-20 section-padding bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="certPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#certPattern)" />
          </svg>
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-green-300/20 to-blue-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-float animation-delay-300"></div>
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications that validate expertise and demonstrate commitment 
            to staying current with the latest trends and best practices.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <AnimatedSection
              key={cert.id}
              animation="fadeInUp"
              delay={index * 200}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 floating-card">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {cert.metadata.certification_name}
                    </h3>
                    
                    <h4 className="text-lg text-blue-600 font-semibold mb-4 group-hover:text-purple-600 transition-colors">
                      {cert.metadata.issuing_organization}
                    </h4>

                    <div className="space-y-3 text-sm text-gray-600 mb-6">
                      {cert.metadata.issue_date && (
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Issued</p>
                            <p className="text-blue-600">{formatDate(cert.metadata.issue_date)}</p>
                          </div>
                        </div>
                      )}

                      {cert.metadata.credential_id && (
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Credential ID</p>
                            <p className="text-green-600 font-mono text-xs">{cert.metadata.credential_id}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {cert.metadata.credential_url && (
                      <a
                        href={cert.metadata.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Credential
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}