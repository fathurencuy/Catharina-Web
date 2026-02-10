# Deployment & Maintenance Guide
## Rumah Sakit Catharina 1914 Website

---

## Project Overview
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19 with Function Components
- **Styling**: Tailwind CSS v4
- **Language**: JavaScript (No TypeScript)
- **Package Manager**: npm/yarn
- **Node Version**: 18.x or higher

---

## Installation & Setup

### Prerequisites
```bash
# Node.js 18+
node --version

# npm or yarn
npm --version
```

### Clone & Install
```bash
# Clone repository
git clone <repository-url>
cd catharina-1914

# Install dependencies
npm install

# Or using yarn
yarn install
```

### Environment Variables
Create `.env.local` file (optional for development):
```env
# No environment variables required for MVP version
# Add these if using external services later:
# NEXT_PUBLIC_API_URL=
# SMTP_HOST=
# SMTP_PORT=
```

---

## Development

### Run Development Server
```bash
npm run dev
# Server runs at http://localhost:3000
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Code Quality
```bash
# Format code
npm run format

# Lint code
npm run lint

# Type check (if TypeScript added)
npm run type-check
```

---

## Project Structure

```
catharina-1914/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles & design tokens
│   ├── page.jsx                # Home page
│   ├── tentang-kami/
│   │   └── page.jsx            # About page
│   ├── layanan/
│   │   └── page.jsx            # Services page
│   └── dokter/
│       └── page.jsx            # Doctors page
│
├── components/
│   ├── Header.jsx              # Navigation header
│   ├── Footer.jsx              # Footer component
│   ├── HeroSection.jsx         # Hero section
│   ├── AboutSection.jsx        # About section
│   ├── AdvantagesSection.jsx   # Why choose us
│   ├── ServicesSection.jsx     # Services showcase
│   ├── ContactSection.jsx      # Contact form & info
│   └── DoctorCard.jsx          # Doctor profile card
│
├── public/
│   ├── hero-hospital.jpg       # Hero background image
│   ├── doctor-sample.jpg       # Sample doctor image
│   └── favicon.ico
│
├── DESIGN_SYSTEM.md            # Design documentation
├── QUALITY_ASSURANCE.md        # QA checklist
├── README.md                   # Project overview
└── package.json
```

---

## Key Files Explained

### globals.css
- Defines all CSS variables for colors
- Contains custom animations
- Sets up Tailwind configuration
- Includes utility classes

### layout.tsx
- Root HTML setup
- Font imports (Playfair Display, Lato)
- Metadata for SEO
- Viewport configuration

### Components
Each component is self-contained with:
- Proper imports
- Clean component structure
- Responsive design
- Accessibility features

---

## Customization Guide

### Changing Colors
Edit `/app/globals.css` in `:root` section:
```css
:root {
  --primary: #005ba3;        /* Main brand color */
  --secondary: #0099d8;      /* Accent color */
  --neutral-dark: #2a2f38;   /* Text color */
}
```

### Updating Contact Information
1. **Footer**: `/components/Footer.jsx` - Lines 50-100
2. **Contact Section**: `/components/ContactSection.jsx` - Lines 20-45
3. **Home Page**: `/app/page.jsx`

### Adding New Pages
1. Create directory: `/app/new-page/`
2. Add `page.jsx` file
3. Import Header & Footer
4. Update navigation in Header.jsx

### Modifying Images
1. Replace images in `/public/`
2. Update image sources in components
3. Maintain aspect ratios for hero images

### Adding Team Members
Edit `/app/dokter/page.jsx` - Doctor data array starting at line 4

### Changing Typography
Edit `/app/layout.tsx` to change fonts:
```jsx
import { Playfair_Display, Lato } from 'next/font/google'
```

---

## Deployment Options

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Deploy to Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Deploy to AWS
1. Set up CodePipeline
2. Connect GitHub repository
3. Configure build settings
4. Deploy to EC2 or Lambda

### Deploy to DigitalOcean App Platform
1. Connect GitHub
2. Select Node.js runtime
3. Set build command: `npm run build`
4. Set run command: `npm start`

### Deploy to Heroku
```bash
heroku login
heroku create catharina-1914
git push heroku main
```

---

## Performance Optimization

### Image Optimization
- Images already use Next.js Image component
- Automatic WebP conversion
- Lazy loading enabled

### CSS Optimization
- Tailwind CSS purges unused styles
- Final CSS ~40-50KB gzipped

### JavaScript Optimization
- Server components reduce bundle size
- Code splitting automatic with App Router
- No unused dependencies

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## Monitoring & Maintenance

### Regular Tasks
- Monitor error logs
- Check page load times
- Review user analytics
- Update dependencies monthly
- Backup data weekly

### Update Dependencies
```bash
npm outdated                    # Check for updates
npm update                      # Update to latest minor/patch
npm upgrade                     # Update to latest versions
```

### Security
```bash
npm audit                       # Check for vulnerabilities
npm audit fix                   # Fix vulnerabilities
```

---

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Image Not Loading
- Check file path matches exactly
- Verify image exists in `/public/`
- Clear browser cache

### Styles Not Applying
- Rebuild project: `npm run build`
- Clear Next.js cache: `rm -rf .next`
- Restart dev server

---

## API Routes (For Future Enhancement)

### Contact Form Submission
```
POST /api/contact
Body: { name, email, phone, message }
Response: { success: boolean, message: string }
```

### Doctor Appointment
```
POST /api/appointments
Body: { doctorId, date, time, patientName }
Response: { success: boolean, appointmentId }
```

### Doctor Information
```
GET /api/doctors
Response: { doctors: Array<Doctor> }
```

---

## Backup & Recovery

### Database Backup (If Added)
- Daily automated backups
- 30-day retention
- Geographic redundancy

### Code Backup
- GitHub repository (main source)
- Tag releases for versions
- Document breaking changes

---

## Analytics & Monitoring

### Google Analytics
Add to layout.tsx for tracking:
```jsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Vercel Analytics
Automatically enabled if deployed to Vercel

### Error Tracking
Consider adding:
- Sentry (error tracking)
- LogRocket (session replay)
- Datadog (monitoring)

---

## SEO Maintenance

### Update Meta Tags
Edit `/app/layout.tsx`:
```jsx
export const metadata: Metadata = {
  title: 'Updated Title',
  description: 'Updated description',
};
```

### Sitemap
Generate sitemap for search engines:
```
/sitemap.xml
/robots.txt
```

### Structured Data
Add schema.org markup for:
- Organization
- LocalBusiness
- MedicalBusiness
- Doctor/Person

---

## Scaling Considerations

### For 10K+ Daily Visitors
- Enable CDN caching
- Implement Redis for sessions
- Add database for dynamic content
- Set up load balancing

### Database Addition
- Consider PostgreSQL or MongoDB
- Implement ORM (Prisma, TypeORM)
- Add migrations system
- Implement caching layer

### API Development
- RESTful or GraphQL API
- Rate limiting
- API documentation (Swagger)
- API versioning

---

## Support & Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- React: https://react.dev
- Lucide Icons: https://lucide.dev

### Getting Help
- GitHub Issues
- Stack Overflow
- Next.js Discord
- Community Forums

---

## License & Attribution
- Design System: © 2026 Rumah Sakit Catharina 1914
- Fonts: Google Fonts (Playfair Display, Lato)
- Icons: Lucide React
- Framework: Next.js (Vercel)

---

## Version History

### v1.0.0 - January 2026
- Initial release
- 4 main pages
- Complete design system
- Responsive mobile/tablet/desktop
- SEO optimized
- Production ready

---

**Last Updated**: January 26, 2026
**Maintained By**: Development Team
**Next Review**: Quarterly
