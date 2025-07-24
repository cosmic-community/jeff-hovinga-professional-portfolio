# Jeff Hovinga Professional Portfolio

![Professional Portfolio Preview](https://imgix.cosmicjs.com/92477350-6894-11f0-a051-23c10f41277a-photo-1507003211169-0a1dd7228f2d-1753364776480.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A sophisticated professional portfolio website showcasing Jeff Hovinga's extensive career in sales and business development. Built with Next.js 15 and powered by Cosmic CMS, this single-page application presents a comprehensive view of professional experience, education, certifications, and recommendations.

## ✨ Features

- **Professional Profile Section** - Complete personal branding with photo, title, and bio
- **Work Experience Timeline** - Detailed career history with company logos and descriptions
- **Educational Background** - Academic credentials and achievements
- **Professional Certifications** - Industry certifications with verification links
- **Recommendations** - Testimonials from colleagues and supervisors
- **Contact Information** - Direct links to LinkedIn, email, and phone
- **Responsive Design** - Optimized for all screen sizes
- **Resume Download** - Direct access to downloadable resume/CV
- **Professional Styling** - Clean, modern design focused on readability

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=6882380bdaa031c60ed1129d&clone_repository=68823abadaa031c60ed112b1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want to turn my LinkedIn Profile into a stand alone single page to showcase my experience"

### Code Generation Prompt

> Build me a website based on my LinkedIn profile. Here is all of my experience [followed by detailed LinkedIn experience data and profile information]

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Content Management**: Cosmic CMS
- **Language**: TypeScript
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
```bash
git clone <repository-url>
cd jeff-hovinga-portfolio
```

2. Install dependencies
```bash
bun install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

Update `.env.local` with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=myprofile-production
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Cosmic SDK Examples

### Fetching Portfolio Data
```typescript
import { cosmic } from '@/lib/cosmic'

// Get portfolio information
const portfolio = await cosmic.objects.findOne({
  type: 'portfolio'
}).props(['id', 'title', 'metadata']).depth(1)

// Get work experience
const workExperience = await cosmic.objects.find({
  type: 'work-experience'
}).props(['id', 'title', 'metadata']).depth(1).limit(20)
```

### Fetching Recommendations
```typescript
// Get professional recommendations
const recommendations = await cosmic.objects.find({
  type: 'recommendations'
}).props(['id', 'title', 'metadata']).depth(1)
```

## 🔧 Cosmic CMS Integration

This portfolio integrates with five main content types in Cosmic:

### Content Types
- **Portfolio** - Personal information, contact details, bio
- **Work Experience** - Career history with company details
- **Education** - Academic background and achievements
- **Certifications** - Professional certifications and credentials
- **Recommendations** - Professional testimonials

### Key Features
- **Singleton Portfolio** - Single source of truth for personal information
- **Dynamic Content** - All content can be updated through Cosmic dashboard
- **Image Optimization** - Automatic image optimization via Imgix
- **Type Safety** - Full TypeScript integration with Cosmic objects

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Environment Variables for Production
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

## 📝 Content Management

Update your portfolio content easily through the Cosmic dashboard:
1. **Personal Info** - Update contact details, bio, and profile photo
2. **Experience** - Add new positions or update current roles
3. **Education** - Add degrees, certifications, or courses
4. **Recommendations** - Add testimonials from colleagues
5. **Media** - Upload new photos, documents, or company logos

For more information about managing content, visit the [Cosmic docs](https://www.cosmicjs.com/docs).

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- [Live Demo](#) 
- [Cosmic CMS](https://www.cosmicjs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)

<!-- README_END -->