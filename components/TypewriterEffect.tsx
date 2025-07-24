'use client'

import { useState, useEffect } from 'react'

interface TypewriterEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  className?: string
}

export default function TypewriterEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = ''
}: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetText = texts[currentTextIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}