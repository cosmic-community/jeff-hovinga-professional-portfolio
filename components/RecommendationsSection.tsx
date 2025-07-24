import { Recommendation } from '@/types'
import AnimatedSection from './AnimatedSection'

interface RecommendationsSectionProps {
  recommendations: Recommendation[]
}

export default function RecommendationsSection({ recommendations }: RecommendationsSectionProps) {
  return (
    <section className="py-20 section-padding bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse-slow animation-delay-500"></div>
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear what colleagues, clients, and supervisors have to say about working with Jeff 
            and the exceptional results he delivers.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          {recommendations.map((recommendation, index) => (
            <AnimatedSection
              key={recommendation.id}
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={index * 300}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>

                {/* Star rating decoration */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Recommendation Text */}
                <div 
                  className="text-gray-700 leading-relaxed mb-8 text-lg relative z-10 prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: recommendation.metadata.recommendation }}
                />

                {/* Recommender Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200 relative z-10">
                  {/* Recommender Photo */}
                  {recommendation.metadata.recommender_photo && (
                    <div className="relative">
                      <img
                        src={`${recommendation.metadata.recommender_photo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                        alt={recommendation.metadata.recommender_name}
                        width="70"
                        height="70"
                        className="rounded-full shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                      {recommendation.metadata.recommender_name}
                    </h4>
                    
                    {recommendation.metadata.recommender_title && (
                      <p className="text-blue-600 font-semibold mb-1">
                        {recommendation.metadata.recommender_title}
                      </p>
                    )}
                    
                    {recommendation.metadata.relationship && (
                      <p className="text-gray-600 text-sm">
                        {recommendation.metadata.relationship}
                      </p>
                    )}
                  </div>

                  {/* LinkedIn icon if this was from LinkedIn */}
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
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