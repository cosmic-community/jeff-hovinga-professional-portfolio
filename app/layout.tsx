import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jeff Hovinga - Professional Portfolio',
  description: 'Senior Account Executive at Cosmic specializing in sales development, business partnerships, and client relationship management.',
  keywords: 'Jeff Hovinga, Sales, Business Development, Account Executive, Cosmic CMS, Professional Portfolio',
  authors: [{ name: 'Jeff Hovinga' }],
  openGraph: {
    title: 'Jeff Hovinga - Professional Portfolio',
    description: 'Senior Account Executive at Cosmic specializing in sales development and business partnerships.',
    type: 'website',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/92477350-6894-11f0-a051-23c10f41277a-photo-1507003211169-0a1dd7228f2d-1753364776480.jpg?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
        alt: 'Jeff Hovinga Professional Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeff Hovinga - Professional Portfolio',
    description: 'Senior Account Executive at Cosmic specializing in sales development and business partnerships.',
    images: ['https://imgix.cosmicjs.com/92477350-6894-11f0-a051-23c10f41277a-photo-1507003211169-0a1dd7228f2d-1753364776480.jpg?w=1200&h=630&fit=crop&auto=format,compress']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}