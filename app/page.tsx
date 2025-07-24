import { Suspense } from 'react'
import { getPortfolio, getWorkExperience, getEducation, getCertifications, getRecommendations } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import WorkExperienceSection from '@/components/WorkExperienceSection'
import EducationSection from '@/components/EducationSection'
import CertificationsSection from '@/components/CertificationsSection'
import RecommendationsSection from '@/components/RecommendationsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/LoadingSpinner'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingElements from '@/components/FloatingElements'

export default async function Home() {
  // Fetch all data in parallel
  const [portfolio, workExperience, education, certifications, recommendations] = await Promise.all([
    getPortfolio(),
    getWorkExperience(),
    getEducation(),
    getCertifications(),
    getRecommendations()
  ])

  return (
    <>
      <ScrollProgress />
      <FloatingElements />
      
      <main className="min-h-screen relative">
        <Suspense fallback={<LoadingSpinner />}>
          {/* Hero Section */}
          {portfolio && (
            <Hero portfolio={portfolio} />
          )}

          {/* Work Experience Section */}
          {workExperience.length > 0 && (
            <WorkExperienceSection experiences={workExperience} />
          )}

          {/* Education Section */}
          {education.length > 0 && (
            <EducationSection education={education} />
          )}

          {/* Certifications Section */}
          {certifications.length > 0 && (
            <CertificationsSection certifications={certifications} />
          )}

          {/* Recommendations Section */}
          {recommendations.length > 0 && (
            <RecommendationsSection recommendations={recommendations} />
          )}

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />
        </Suspense>
      </main>
    </>
  )
}