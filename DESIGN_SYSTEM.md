# Rumah Sakit Catharina 1914 - Design System

## Overview
Professional healthcare website design system featuring a cohesive color palette, typography hierarchy, and component library built with Next.js, React, and Tailwind CSS.

---

## Color Palette

### Primary Colors (Healthcare & Trust)
- **Primary Dark**: `#003d7a` - Deep professional blue, used for footer and primary backgrounds
- **Primary**: `#005ba3` - Main brand blue, used for primary CTAs and focus states
- **Primary Light**: `#0077c8` - Lighter primary for hover states
- **Primary Darker**: `#002a52` - Darkest shade for emphasis

### Secondary Colors (Friendly & Modern)
- **Secondary**: `#0099d8` - Light blue accent, used for icons and interactive elements
- **Secondary Dark**: `#0077a8` - Darker secondary for hover states
- **Secondary Light**: `#e8f4fb` - Very light blue for backgrounds
- **Secondary Lighter**: `#f0f9fd` - Lightest shade for subtle backgrounds

### Accent Colors
- **Accent Red**: `#d84040` - Emergency/urgent actions (IGD services)
- **Accent Green**: `#10b981` - Success states and positive actions
- **Accent Orange**: `#f97316` - Highlights and callouts

### Neutral Colors
- **Neutral White**: `#ffffff` - Primary background
- **Neutral Light**: `#f5f7fa` - Section backgrounds
- **Neutral Lighter**: `#f9fafb` - Subtle backgrounds
- **Neutral Gray**: `#8a8f99` - Body text and secondary text
- **Neutral Gray Light**: `#a0a6b0` - Tertiary text
- **Neutral Dark**: `#2a2f38` - Primary text
- **Neutral Darker**: `#1a1f2e` - High contrast text

---

## Typography

### Font Families
- **Headings**: Playfair Display (serif) - Elegant, professional, historical feel
- **Body**: Lato (sans-serif) - Modern, readable, friendly

### Font Sizes & Weights
- **H1**: 5xl-7xl (80-96px) | font-bold (700) | font-serif
- **H2**: 4xl-6xl (48-72px) | font-bold (700) | font-serif
- **H3**: 2xl-3xl (24-36px) | font-bold (700) | font-serif
- **Body**: 1rem (16px) | font-light-regular (300-400)
- **Small**: 0.875rem (14px) | font-light (300)
- **XSmall**: 0.75rem (12px) | font-semibold (600)

### Line Heights
- Headings: leading-tight (1.2)
- Body: leading-relaxed (1.6)

---

## Component Styling

### Buttons
- **Primary Button**: `btn-primary` - Gradient from primary to primary-dark
- **Secondary Button**: `btn-secondary` - Solid secondary color
- **Padding**: px-8 py-3 | py-4 for larger variants
- **Border Radius**: rounded-lg | rounded-xl for larger components
- **Hover States**: shadow-lg, scale-105 transform
- **Font**: font-bold | text-sm or text-base

### Cards
- **Background**: bg-white
- **Border**: border border-border | hover:border-secondary/50
- **Border Radius**: rounded-2xl | rounded-3xl for larger cards
- **Shadow**: shadow-sm | hover:shadow-2xl | hover:shadow-xl
- **Padding**: p-6 | p-8 | p-12 depending on size
- **Transitions**: transition-all duration-300

### Badges & Tags
- **Background**: bg-secondary/10
- **Text Color**: text-secondary
- **Padding**: px-4 py-2
- **Border Radius**: rounded-full
- **Font**: font-bold text-sm
- **Optional Border**: border border-secondary/30

### Icons
- **Size**: 16px, 20px, 24px, 28px, 32px (standard sizes)
- **Color**: Inherits from text color or text-secondary
- **Hover**: Transition to text-primary

---

## Layout Patterns

### Section Structure
```
<section className="py-20 sm:py-32 bg-gradient-to-b from-[color1] to-[color2]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Grid Layouts
- **2 Columns**: `grid-cols-1 lg:grid-cols-2`
- **3 Columns**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **4 Columns**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- **5 Columns**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-5`

### Spacing System (Tailwind Scale)
- Base unit: 4px (0.25rem)
- Common gaps: gap-4, gap-6, gap-8, gap-12
- Common padding: p-4, p-6, p-8, p-12
- Common margins: mb-4, mb-6, mb-8, mb-12

---

## Hero Sections
- **Min Height**: min-h-screen or min-h-[500px]
- **Background**: Gradient overlay with decorative elements
- **Overlay**: bg-gradient-to-r from-primary/95 via-primary/80 to-primary-dark/90
- **Decorative Blurs**: w-96 h-96 bg-secondary/5-10 rounded-full blur-3xl

---

## Hover Effects & Animations
- **Scale Transform**: hover:scale-105 transform
- **Color Transition**: transition-colors duration-300
- **Full Transition**: transition-all duration-300
- **Fade Animation**: animate-fade-in-up (600ms)
- **Shadow Enhancement**: hover:shadow-2xl hover:shadow-xl
- **Border Highlight**: hover:border-secondary/50

---

## Responsive Design
- **Mobile First**: Base styles for mobile, then enhance
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
- **Hidden Elements**: hidden md:flex, hidden lg:block, etc.

---

## Color Usage Guide

### Where to Use Each Color
| Color | Primary Use |
|-------|------------|
| Primary Dark | Footer background, main headings |
| Primary | CTAs, buttons, links, focus states |
| Primary Light | Hover states, lighter backgrounds |
| Secondary | Icons, accents, highlights, badges |
| Secondary Light | Light backgrounds, secondary sections |
| Neutral Dark | Body text, primary foreground |
| Neutral Gray | Secondary text, descriptions |
| Neutral Light | Section backgrounds, subtle dividers |
| Accent Red | Emergency services, urgent CTAs |

---

## Accessibility
- **Contrast Ratios**: All text meets WCAG AA standards
- **Color Not Alone**: Icons and text labels for meaning
- **Focus States**: Visible focus rings on interactive elements
- **Semantic HTML**: Proper heading hierarchy, ARIA labels
- **Touch Targets**: Minimum 44x44px for interactive elements

---

## Performance
- **Images**: Optimized, lazy-loaded where appropriate
- **CSS**: Tailwind utilities, no unused styles
- **Animations**: GPU-accelerated transforms only
- **Font Loading**: Google Fonts with font-display: swap
- **Smooth Scrolling**: scroll-behavior: smooth

---

## Component Examples

### Service Card
```jsx
<div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all border border-border hover:border-secondary/50">
  <div className="mb-6 inline-flex p-4 bg-secondary/10 rounded-xl">
    <Icon size={32} className="text-secondary" />
  </div>
  <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
  <p className="text-foreground/70">{description}</p>
</div>
```

### Contact Badge
```jsx
<div className="inline-block mb-4 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold border border-secondary/30">
  Badge Text
</div>
```

### Hero Feature Card
```jsx
<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-secondary/50 group">
  <div className="bg-secondary/20 rounded-xl p-3 w-fit mb-4">
    <Icon className="text-secondary" size={28} />
  </div>
  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
  <p className="text-white/70 text-sm">{description}</p>
</div>
```

---

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Enhancements
- Dark mode support
- Additional accent colors for specialty services
- Animation library expansion
- Enhanced mobile interactions
- A/B testing variants
