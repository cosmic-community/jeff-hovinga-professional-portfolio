export default function Footer() {
  const COSMIC_BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG || 'myprofile-production'
  
  return (
    <footer className="bg-gray-900 text-white py-12 section-padding">
      <div className="container-width">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Copyright */}
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Jeff Hovinga. All rights reserved.
          </p>

          {/* Built with Cosmic Button */}
          <a
            href={`https://www.cosmicjs.com?utm_source=bucket_${COSMIC_BUCKET_SLUG}&utm_medium=referral&utm_campaign=app_footer&utm_content=built_with_cosmic`}
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button"
          >
            <img 
              src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg" 
              alt="Cosmic Logo" 
              style={{
                width: '20px',
                height: '20px',
              }}
            />
            Built with Cosmic
          </a>

          {/* Additional Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}