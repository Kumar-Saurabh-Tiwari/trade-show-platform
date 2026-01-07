# leadRecall - Professional Trade Show Networking Platform

A modern, mobile-optimized landing page for a trade show platform that connects exhibitors and attendees through seamless networking features.

## 🚀 Features

### For Exhibitors
- **Booth Profile Management**: Create and customize exhibitor profiles
- **QR Code Generation**: Unique QR codes for instant contact sharing
- **Lead Capture**: Scan attendee QR codes to collect contact information
- **Contact Management**: Organize and manage connections with notes and tags
- **Analytics Dashboard**: Track booth visits and engagement metrics

### For Attendees
- **Personal Profile**: Create attendee profiles with professional information
- **QR Code Access**: Get a unique QR code for quick information exchange
- **Exhibitor Discovery**: Browse and connect with exhibitors
- **Contact Collection**: Save exhibitor information and materials
- **Event Calendar**: Manage events and schedule meetings

### Core Capabilities
- ✅ QR Code Scanning - Instant contact exchange
- ✅ Business Card Scanner - AI-powered digitization
- ✅ Manual Contact Creation - Intuitive interface with custom fields
- ✅ Event Management - Calendar integration and reminders
- ✅ Mobile Optimized - Responsive design for all devices
- ✅ Smooth Animations - Professional animations with Framer Motion
- ✅ Light Theme - Clean, professional design

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## 📦 Installation

```bash
# Navigate to the project directory
cd trade-show-platform

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
trade-show-platform/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Main landing page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navbar.tsx      # Navigation bar with mobile menu
│       ├── Hero.tsx        # Hero section with animated background
│       ├── Features.tsx    # Feature showcase section
│       ├── HowItWorks.tsx  # Exhibitor & Attendee workflows
│       ├── Benefits.tsx    # Platform benefits section
│       ├── CallToAction.tsx # CTA section
│       └── Footer.tsx      # Footer with links and contact info
├── public/                 # Static assets
├── package.json
└── README.md
```

## 🎨 Design Features

- **Smooth Animations**: Framer Motion for professional transitions
- **Gradient Backgrounds**: Modern gradient designs throughout
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Interactive Elements**: Hover effects and smooth scrolling
- **Professional Typography**: Clean, readable fonts
- **Custom Scrollbar**: Branded scrollbar design
- **Accessibility**: Semantic HTML and proper ARIA labels

## 📱 Mobile Optimization

- Responsive navigation with hamburger menu
- Touch-optimized interactions
- Optimized images and animations for mobile devices
- Fast loading times with Next.js optimization

## 🚀 Deployment

### Deploy on Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📝 Customization

### Update Branding
- Edit company name in `Navbar.tsx` and `Footer.tsx`
- Customize colors in `tailwind.config.ts`
- Update metadata in `app/layout.tsx`

### Modify Content
- Hero section: `components/Hero.tsx`
- Features: `components/Features.tsx`
- Workflows: `components/HowItWorks.tsx`

### Add New Sections
Create new components in `src/components/` and import them into `app/page.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, please contact:
- Email: info@leadRecall.com
- Phone: +1 (234) 567-890
- Address: 123 Business Ave, New York, NY 10001

---

Built with ❤️ using Next.js and TypeScript
