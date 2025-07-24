'use client'

import { useInView } from '@/hooks/useInView'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn'
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0 
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const animationClasses = {
    fadeInUp: 'animate-[fadeInUp_0.6s_ease-out_forwards]',
    fadeInLeft: 'animate-[fadeInLeft_0.6s_ease-out_forwards]',
    fadeInRight: 'animate-[fadeInRight_0.6s_ease-out_forwards]',
    scaleIn: 'animate-[scaleIn_0.5s_ease-out_forwards]'
  }

  return (
    <div
      ref={ref}
      className={`${className} ${
        inView ? animationClasses[animation] : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}