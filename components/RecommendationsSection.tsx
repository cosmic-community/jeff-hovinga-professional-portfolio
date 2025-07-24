import { Recommendation } from '@/types'

interface RecommendationsSectionProps {
  recommendations: Recommendation[]
}

export default function RecommendationsSection({ recommendations }: RecommendationsSectionProps) {
  return (
    <section className="py-20 section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What colleagues and supervisors say about working with Jeff.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {recommendations.map((recommendation, index) => (
            <div
              key={recommendation.id}
              className={`bg-white rounded-xl p-8 card-shadow border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-blue-600 opacity-60" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Recommendation Text */}
              <div 
                className="text-gray-700 leading-relaxed mb-6 prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: recommendation.metadata.recommendation }}
              />

              {/* Recommender Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {/* Recommender Photo */}
                {recommendation.metadata.recommender_photo && (
                  <img
                    src={`${recommendation.metadata.recommender_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={recommendation.metadata.recommender_name}
                    width="60"
                    height="60"
                    className="rounded-full"
                  />
                )}

                <div>
                  <h4 className="font-bold text-gray-900">
                    {recommendation.metadata.recommender_name}
                  </h4>
                  
                  {recommendation.metadata.recommender_title && (
                    <p className="text-blue-600 font-medium">
                      {recommendation.metadata.recommender_title}
                    </p>
                  )}
                  
                  {recommendation.metadata.relationship && (
                    <p className="text-gray-600 text-sm">
                      {recommendation.metadata.relationship}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}